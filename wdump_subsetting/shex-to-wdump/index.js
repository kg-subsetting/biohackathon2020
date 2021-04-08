const Fs = require('fs')
const Path = require('path')
const ShExParser = require('@shexjs/parser')
const Cli = require('command-line-args')
const Argv1 = Path.relative('', process.argv[1])
const ShExNode = require('@shexjs/node')();

const NS_wdt = 'http://www.wikidata.org/prop/direct/'
const NS_ent = 'http://www.wikidata.org/entity/'
const NS_ex = 'http://example.org/'

const CommandLineOptions = [
  { name: 'shex', alias: 'x', type: String, typeLabel: 'file|URL',  multiple:  true, defaultValue:        [], description: 'ShExC schema' },
  { name: 'json', alias: 'j', type: String, typeLabel: 'file|URL',  multiple:  true, defaultValue:        [], description: 'ShExJ schema' },
  { name: 'help', alias: 'h', type: Boolean , description: 'print usage information and quit' },
]

async function main (argv) {
  const cmds = Cli(CommandLineOptions)
  if (cmds.help)
    abort(null, 0);
  if (cmds.shex.length === 0)
    abort('no input ShEx', 3)
  const loaded = await ShExNode.load(cmds.shex, cmds.json, [], [])
  const schema = loaded.schema
  let id = 0
  const wdumpConfig = schema.shapes.map(sh => {
    try {
      const type = sh.expression.expressions.filter(tc => tc.predicate === NS_wdt + 'P31')[0].valueExpr.values[0].substr(NS_ent.length) // .valueExpr.values[0]
      return {
        version: 1,
        __name: sh.id.substr(NS_ex.length),
        entities: [
          {
            id: id++,
            type: "item",
            properties: [
              {
                id: id++,
                type: "entityid",
                rank: "all",
                value: type,
                property: ""
              }
            ]
          }
        ],
        meta: true,
        aliases: true,
        sitelinks: true,
        descriptions: true,
        labels: true,
        statements: [
          {
            id: id++,
            qualifiers: false,
            simple: true,
            rank: "all",
            full: false,
            references: false
          }
        ]
      }
    } catch (e) {
      console.warn(`skipping ${sh.id}: ${e}`)
      return []
    }
  })
  console.warn(JSON.stringify(wdumpConfig, null, 2))
  return 0
}

function abort (msg = null, code = 1) {
  if (msg !== null) console.error(msg)
  console.error(require('command-line-usage')([
    {
      header: 'shex-to-wdump',
      content: 'Infer wdump configurations from ShEx schemas.'
    },
    {
      header: 'Synopsis',
      content: [
        'shex-to-wdump (-x <ShExC> | -j <ShExJ>)',
      ]
    },
    {
      header: 'Options',
      optionList: CommandLineOptions
    },
    {
      header: 'Examples',
      content: [
        {l: 'convert local schema',
         r: `shex-to-wdump -x ${Path.relative('', Path.resolve(__dirname, '../../use_cases/genewiki/genewiki.shex'))}`}
      ]
    },
    {
      content: 'Project home: ' + require('chalk').underline('https://github.com/kg-subsetting/biohackathon2020')
    }
  ]))
  process.exit(code)
}

module.exports = {
  main
}
