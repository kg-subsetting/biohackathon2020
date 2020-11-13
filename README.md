## Contents

- [Use cases](https://hackmd.io/5nKOyk8qQTO5DSCa_M5p3g#Use-cases)
- [Technical approach](https://hackmd.io/5nKOyk8qQTO5DSCa_M5p3g#Use-cases)
- []()
- [Future plans](https://hackmd.io/5nKOyk8qQTO5DSCa_M5p3g#Future-plans)

# Participants

## Short version (only name/email/affiliation)

I tried to order the list alphabetically by last name...but in some cases I was not sure

| Name | email | Affiliation | Twitter (optional) |
| -------- | -------- | -------- |---|
|Ammar Ammar |ammar257ammar@gmail.com / a.ammar@maastrichtuniversity.nl  | Maastricht University | [@ammarECR](https://twitter.com/ammarecr) |
|Guillermo Benjaminsen |guiben@google.com / guille.benj@gmail.com | Google (intern), Universidad de Buenos Aires| [@guillebenj](https://twitter.com/guillebenj) |
| Dan Brickley | danbri@google.com | Google, London UK. | [@danbri](https://twitter.com/danbri) |
|Alejandro González Hevia| alejandrgh11@gmail.com  | University of Oviedo, Spain| |
| Jose Emilio Labra Gayo     | labra@uniovi.es     | University of Oviedo, Spain | [@jelabra](https://twitter.com/jelabra) |
|Eric Prud'hommaux | eric@w3.org | Janeiro Digital, W3C/MIT | what's a Twitter? |
|Denise  Slenter | denise.slenter@maastrichtuniversity.nl|Maastricht University |[@SMaLLCaT4Sci](https://twitter.com/smallcat4sci) |
|Harold Solbrig | solbrig@jhu.edu | Johns Hopkins University | |
|Seyed Amir Hosseini Beghaeiraveri  |sh200@hw.ac.uk | Heriot-Watt University, UK.| |
|Benno Fünkfstük | benno.fuenfstueck@mailbox.tu-dresden.de | TU Dresden | |
|Andra Waagmeester | andra@micel.io |Micelio / Gene Wiki | @andrawaag |
|Liza?  | | | |




## Jose Emilio Labra Gayo

Contacts: [Twitter: @jelabra](https://twitter.com/jelabra), [Github: labra](https://github.com/labra)

### Skills I bring to the table
* Shape Expressions, Wikidata, Wikibase
* SPARQL

## Andra Waagmeester
Contacts: [Twitter: @andrawaag](https://twitter.com/andrawaag), [Github: Andrawaag](https://github.com/andrawaag) 
### What I expect from this hackathon
Wikidata is growing by the day, leading to more and more timeouts on relatively simple queries (e.g. Give me all Wikidata items with a DOI.) With the support of ShEx in Wikidata in its EntitySchema extension it is possible to draw the bounderies between a subset of Wikidata of interest. During the biohackathon I would like to work on enabling a workflow, to based on a Shape Expression, generate this subset. Two main use-cases that comes to mind are: 1. Creating a subset to enable more complex queries by loading that subset in a local RDFStore. 2. Create backup subsets for future/persistent reference. 

### Skills I bring to the table
* Shape Expressions, Wikidata, Wikibase
* Wikidata Integrator
* Python
* SPARQL



## Alejandro González Hevia
Contacts: [Github: alejgh](https://github.com/alejgh)
### What I expect from this hackathon
Continue development of Wikidata to Wikibase subsetting prototype (wbs_core in WikidataIntegrator). Can also help with adding import to PyShEx.

### Skills I bring
* Python
* PyShEx
* Wikidata Integrator
* Wikidata and SPARQL

## Ammar Ammar
Contacts: [Github: ammar257ammar](https://github.com/ammar257ammar)

### What I expect from this hackathon
I want to create a subset of Wikidata containing the data topics supported by Scholia

### Skills I bring
* ShEx
* RDF ETL
* Scholia
* Wikidata and SPARQL

## Denise Slenter
Contacts: [Github: denisesl22](https://github.com/denisesl22)

### What I expect from this hackathon
Want to use knowledge learned here to implement ShEx for WIkiPathways RDF after BioHackathon.

### Skills I bring
* RDF Wikidata + WikiPathways
* SPARQL
* Python, R

---


# 9-November-2020

## Use cases

Collect some examples of ShEx schemas as a running example

## Technical approach

* Use slurp from ShEx validators to populate another Wikibase


# Notes

- Decisions taken:
    - Keep "Slurper" name
    -
- Why ShEx?
    - Leverage community-developed schemas for subject matter
    - Can implement context-specific queries that would be daunting or near impossible in pure SPARQL
    - Theoretically - self documenting...

- Why NOT ShEx for *execution*?
    - Will it fix the performance issues?
    - Some (e.g. python) ShEx implementations have their own performance issues

- Approaches
    - Slurp: cache in an triple store results of every query executed during validation.
    - Results: extract the triples involved in validation
    - Compiled Query: walk the schema and compile to SPARQL queries
        - complex queries would extract exact set which map to Slurp results
        - simpler queries would extract a superset

- Using an intermediate representation of Wikidata?
    - Plain RDF vs JSON...
    - 

# Suggestions for tasks
- Design patterns for ShEx
- "Hello World" of ShEx slurping - meaningful example of 
    - Human gene: https://www.wikidata.org/wiki/EntitySchema:E37 

# Tiny ericP's (tiny) Demo
https://tinyurl.com/y43nscg2

## Related work/repos

- [WikidataSubsetting](https://github.com/ingmrb/WikidataSubsetting)
- Yashe editor - http://www.weso.es/YASHE/
- 


## Tasks for tomorrow

- Jose Labra - Create a ShEx based on [the Gene Wiki paper](https://elifesciences.org/articles/52614). Done, see [shex file](https://github.com/kg-subsetting/biohackathon2020/blob/main/use_cases/biomedical/biomedical.shex)
- Ammar Ammar - Create a ShEx for one use case from Scolia and apply it using ShEx-JS/YASHE
- EricP - Command line slurper
- Alejandro - Look to pyshex to see if it's possible to add imports
- Andra - Compare the wdt (truthy) shape expressions from Jose and create the p equivalent. 
- Danbri - Figure out how to host demos on public Google cloud projects (boring but it blocked me since biohackathon 2019!)


# 10-November-2020 

[Progress report](https://docs.google.com/presentation/d/1uCni6bJdgfoLEow5ELegB9g66-YJKu5-_w6JYNZV3jk/edit?usp=sharing)



## Running example 1 (Biomedical ShEx)

[GeneWiki ShEx](https://github.com/kg-subsetting/biohackathon2020/blob/main/use_cases/biomedical/biomedical.shex)

## Running example 2 (Scholia ShEx)
[organization.shex](https://github.com/kg-subsetting/biohackathon2020/blob/main/use_cases/scholia/organization.shex)

## Slurper demo with Jupyter Notebooks (PyShEx)
We developed a simple demo in a Jupyter Notebook where we used PyShEx to print a subset in ttl from the biomedical ShEx file: [see notebook here](https://github.com/hsolbrig/PyShEx/blob/master/notebooks/WikiSlurper.ipynb).

## Info for the report (10/Nov/2020)

Harold: https://github.com/hsolbrig/PyShEx/blob/master/notebooks/WikiSlurper.ipynb


Guillermo: provided some sparql queries based on Andra's life science subset graph, trying to help in replicating the graph


## Tasks for tomorrow (11/Nov/2020)

- Jose Labra: Prepare tutorial on ShEx/Wikidata.
      Implement slurp generation from ShEx-s
- Alejandro: Create command line script to generate subsets with PyShEx, work in implementing import functionality in PyShEx.
- Ammar: writing more Scholia ShEx templates and run the slurper from PyShEx against Wikidata (check performance and effeciency)
- Seyed: Installing/reviewing [WDumper](https://wdumps.toolforge.org/)
- Denise: Locate ShEx which are relevant for Wikidata Chemistry(/Metabolite) related entities, create list of missing ShEx.


# 11/Nov/2020

Tasks done:

- Jose Labra: Prepared ShEx/entity schemas intro 
- Alejandro: 
- Harold: 
- Eric: 

Dan's discussion about domain specific language to describe wikidata subsettings, which could generate ShEx schemas/SPARQL queries.

Separate language for wikidata:

```
 { "anatomical_structure":
     { "on-type": "wd:Q4936952",
      "wdt:P361": "anatomical_structure", 
      "wdt:P527": "anatomical_structure" },
       "wikidata-specific-magic-extras": "GOODTRIPLES WITHREFS FOOBAR"
    {  // etc.
    }
}
```

Use case about automatic fact-checking using wikidata


## Meeting overlapped with ShEx CG meeting

Invited people: Kat Thornton, Nishad Thalhath, Tom Baker, Anastasiia

Discussion about WDump/Wikidata subsetting language
Authorship of Entity schemas at Wikidata

Tasks for tomorrow: 
- Dan, connect to the WDump tool's author
    - Connect with entity schemas/wdumper
- Eric, continue with slurper
- Guillermo, look at wdumper
- Kat, look for interesting entity schemas
    - Finn's entity schemas
- Denise, chemistry oriented entity schemas
    - Prototype of a schema around Chemistry
- Alejandro, finish implementation of subsetting script using PyShEx.
- Seyed: Continue working with Wdump
- 

# 12/Nov/2020

We start the day noticing that there is a issue with Wikidata's RDF representation that returns blank nodes.

### Reproducing the problem:

- ShEx template used: [https://raw.githubusercontent.com/kg-subsetting/biohackathon2020/main/use_cases/scholia/organization.shex](https://raw.githubusercontent.com/kg-subsetting/biohackathon2020/main/use_cases/scholia/organization.shex)

- The query used to get the items:


```SPARQL
PREFIX wdt: <http://www.wikidata.org/prop/direct/>
PREFIX wd: <http://www.wikidata.org/entity/>
 
SELECT DISTINCT ?item WHERE {?work wdt:P50 / (wdt:P108 | wdt:P463 | (wdt:P1416/wdt:P361*)) wd:Q27177633. ?item wdt:P2860 ?work.} LIMIT 100
```

- The query that contains the blank node where the exception in PyShEx is raised:

```SPARQL
SELECT ?s ?p ?o (isBlank(?o) as ?isBlank) {<http://www.wikidata.org/entity/Q313093> <http://www.wikidata.org/prop/direct/P184> ?o}
```

### Issue raised to Wikidata's Phabricator


### Several appearances of blank nodes:

```turtle
s:Q42-bf7e1294-4f0f-3511-ab5f-81f47f5c98cb a wikibase:Statement ;
	pq:P3680 _:4249d9c21f8b973644e0eab84cdaaf17 ;
    ...
```

```turtle
wdno:P31 a owl:Class ;
	owl:complementOf _:0b8bd71b926a65ca3fa72e5d9103e4d6 .

_:0b8bd71b926a65ca3fa72e5d9103e4d6 a owl:Restriction ;
	owl:onProperty wdt:P31 ;
	owl:someValuesFrom owl:Thing .
```
---

During the biohackathon 2020 where we are working on subsetting wikidata, we ran into the issue of blank notes being used in the RDF of Wikidata to express unknown and no values. Unfortunately this isn't consistent because blank notes are also used to express other things such as owl:complementOf (e.g. Q42).

These blank nodes are also problematic for anything that traverses wikidata node-by-node such as faceted browsers or ShEx validators.

It is not explicitly incorrect to have blank nodes in RDF data, but it is:
1. inconsistent with the approach that Wikidata has taken (which is to avoid blank nodes)
2. ambiguous because in RDF, blank nodes do not imply unknown values, they are simply *unidentified* nodes in the graph.

Steps to Reproduce:
* GET http://www.wikidata.org/entity/Q313093.ttl
* look for "_:" (currently _:2d22892344b969be376b57170b5e495f)
* try a SPARQL query for all properties of that node
``` SELECT ?P ?o { _:2d22892344b969be376b57170b5e495f ?p ?o }```
* Because of the semantics of SPARQL, this will try to get every triple in the database.

Remedy:

Invent a system-wide identifier for unknown values and use that Q identifier for all references to unknow value, e.g. change:
```
wd:Q313093 wdt:P184 _:2d22892344b969be376b57170b5e495f
```
to:
```
wd:Q313093 wdt:P184 wd:Q98765
```

-----

When 
* ShEx template used: https://raw.githubusercontent.com/kg-subsetting/biohackathon2020/main/use_cases/scholia/organization.shex

The query used to get the items:

PREFIX wdt: <http://www.wikidata.org/prop/direct/>
PREFIX wd: <http://www.wikidata.org/entity/>
 
SELECT DISTINCT ?item WHERE {?work wdt:P50 / (wdt:P108 | wdt:P463 | (wdt:P1416/wdt:P361*)) wd:Q27177633. ?item wdt:P2860 ?work.} LIMIT 100
The query that contains the balnk node where the exception in PyShEx is raised:
SELECT ?s ?p ?o (isBlank(?o) as ?isBlank) {<http://www.wikidata.org/entity/Q313093>



## Approaches for subsetting/slurping

- Matched graph
    - Exact triples that have been used when validating
- Slurp graph
    - The neighbourhood of the items that are part of the validation
- Mapping/transformig while slurping

## Limitations of Wikidata

Ammar's raised the issue of confronting "too many requests" when validating real wikidata

# Actions already done 
- Ammar attempted to generate slurps...several problems detected meanwhile:
    - Wikidata's limitations
        - Blank nodes
        - Too many requests
- Dan exchanged info with WDump's author who is planning to join us 
    - [WDump country dump](https://zenodo.org/record/4044634#.X60MXMj0lPY)
- Guillermo: problems installing [WDumper](https://wdumps.toolforge.org/) gradle
- Labra: Slide 7 [Map of approaches](https://docs.google.com/presentation/d/106cjMJReNXkV-dOwOHXAl7P982nZjwtUnagUV0HqwdM/edit?usp=sharing)
- Alejandro: Creation of a [command line script](https://github.com/kg-subsetting/biohackathon2020/tree/main/pyshex_subsetting) that generates a subset to a ttl file. 
- Andra talked about KGTK: https://kgtk.readthedocs.io/en/latest/


## Things to do:
- Eric: Transform the GeneWiki ShEx to the Json format needed by WDumper
- Guillermo: Convert the GeneWiki/Json to SPARQL queries


## Joint meeting with Bioschemas
- 15:30h Participants: Liza Ovchinnikova, Alasdair Gray, Ivan Micetic, Dan Brickley, Eric Prud'hommeaux, Guillermo B., Andra Waagmeester, Petro Papadopoulos, Denise
    - Creating subsets and converting them to other useful schemas
    - ShEx patterns for markup
    - Vocab mappings

Similar use cases:
[Underlay](https://www.underlay.org/)

[Taxon](https://bioschemas.org/profiles/Taxon) --- schema from bioschemas?
- Type inspired by DarwinCore and reuses similar properties
- Separates the Taxa from the name associated with it
  - Name modelled as a [TaxonName](https://bioschemas.org/profiles/TaxonName) 


Talk with Benno Fünfstück, author of WDumper about the tool. 
- User's feedback about what kind of dumps they create?
- The dump is compressed
- Talk about the JSON configuration file
- It works on a local dump of wikidata
- It is based on [Wikidata Toolkit](https://www.mediawiki.org/wiki/Wikidata_Toolkit). [API](https://wikidata.github.io/Wikidata-Toolkit/)
- No useful for graph-level queries
- We can obtain a subset of Wikidata if we know the Properties...but not a cyclic data model where we go from severl items
- 



### from ShEx

```turtle
:gene EXTRA wdt:P31 {
  wdt:P703  @:taxon * ;
  wdt:P684  @:gene * ; 
  wdt:P682  @:biological_process ;
  wdt:P688  @:protein * ;
  wdt:P527  @:biological_pathway *;
  wdt:P1057 @:chromosome ;
}
```

### to wdump config (discussion)

```json
{ "entities": [ // OR'd
    { "type": "item", "properties": [ // AND'd
        { "type": "entityid",
          "value": "Q7187", // "gene"
          "property": "P31" } ] },
    { "type": "item", "properties": [ // AND'd
        { "type": "entityid",
          "value": "Q7187b", // "gene subclass 1"
          "property": "P31" } ] }
  ],
  "labels": true, "aliases": true,
  "sitelinks": true, "truthy": false, "meta": true, "descriptions": true,
  "statements": [
    { "qualifiers": false, "full": false,
      "references": false, "simple": true
    },
    { "properties": [
         "P703", // taxon
         "P684", // ortholog_gene
         "P682", // biological_process
         "P688", // protein_encoded_by_gene
         "P527", // has_part
         "P1057" // chromosome
      ],
      "full": true, "simple": false, "references": false,
      "qualifiers": false, "rank": "non-deprecated"
    }
  ]
}
```

### current output

ericP: I scripted a dump for getting all the triples from the entities of interest by following this template:

      {
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

The only inputs there are the `__name` which was just for readers' orientation (would wdumper safely ignore that property?), the value on the only entity property, and three places where I saw ids in the output.

I collected all of the dump configs into an array below. (Would wdumper accept such a packaging of multiple dump configs?)

How would I upload configs (vs. using the UI) to start a job?

```json=
./cli.js -x ../../use_cases/genewiki/genewiki.shex
skipping http://example.org/biological_process: TypeError: Cannot read property 'expressions' of undefined
skipping http://example.org/chromosome: TypeError: Cannot read property 'filter' of undefined
skipping http://example.org/mechanism_of_action: TypeError: Cannot read property 'filter' of undefined
skipping http://example.org/molecular_function: TypeError: Cannot read property 'expressions' of undefined
skipping http://example.org/symptom: TypeError: Cannot read property 'filter' of undefined
skipping http://example.org/taxon: TypeError: Cannot read property 'filter' of undefined
[
  {
    "version": 1,
    "__name": "active_site",
    "entities": [
      {
        "id": 0,
        "type": "item",
        "properties": [
          {
            "id": 1,
            "type": "entityid",
            "rank": "all",
            "value": "Q423026",
            "property": ""
          }
        ]
      }
    ],
    "meta": true,
    "aliases": true,
    "sitelinks": true,
    "descriptions": true,
    "labels": true,
    "statements": [
      {
        "id": 2,
        "qualifiers": false,
        "simple": true,
        "rank": "all",
        "full": false,
        "references": false
      }
    ]
  },
  {
    "version": 1,
    "__name": "anatomical_structure",
    "entities": [
      {
        "id": 3,
        "type": "item",
        "properties": [
          {
            "id": 4,
            "type": "entityid",
            "rank": "all",
            "value": "Q4936952",
            "property": ""
          }
        ]
      }
    ],
    "meta": true,
    "aliases": true,
    "sitelinks": true,
    "descriptions": true,
    "labels": true,
    "statements": [
      {
        "id": 5,
        "qualifiers": false,
        "simple": true,
        "rank": "all",
        "full": false,
        "references": false
      }
    ]
  },
  {
    "version": 1,
    "__name": "binding_site",
    "entities": [
      {
        "id": 6,
        "type": "item",
        "properties": [
          {
            "id": 7,
            "type": "entityid",
            "rank": "all",
            "value": "Q616005",
            "property": ""
          }
        ]
      }
    ],
    "meta": true,
    "aliases": true,
    "sitelinks": true,
    "descriptions": true,
    "labels": true,
    "statements": [
      {
        "id": 8,
        "qualifiers": false,
        "simple": true,
        "rank": "all",
        "full": false,
        "references": false
      }
    ]
  },
  {
    "version": 1,
    "__name": "biological_pathway",
    "entities": [
      {
        "id": 9,
        "type": "item",
        "properties": [
          {
            "id": 10,
            "type": "entityid",
            "rank": "all",
            "value": "Q4915012",
            "property": ""
          }
        ]
      }
    ],
    "meta": true,
    "aliases": true,
    "sitelinks": true,
    "descriptions": true,
    "labels": true,
    "statements": [
      {
        "id": 11,
        "qualifiers": false,
        "simple": true,
        "rank": "all",
        "full": false,
        "references": false
      }
    ]
  },
  [],
  {
    "version": 1,
    "__name": "chemical_compound",
    "entities": [
      {
        "id": 12,
        "type": "item",
        "properties": [
          {
            "id": 13,
            "type": "entityid",
            "rank": "all",
            "value": "Q11173",
            "property": ""
          }
        ]
      }
    ],
    "meta": true,
    "aliases": true,
    "sitelinks": true,
    "descriptions": true,
    "labels": true,
    "statements": [
      {
        "id": 14,
        "qualifiers": false,
        "simple": true,
        "rank": "all",
        "full": false,
        "references": false
      }
    ]
  },
  [],
  {
    "version": 1,
    "__name": "disease",
    "entities": [
      {
        "id": 15,
        "type": "item",
        "properties": [
          {
            "id": 16,
            "type": "entityid",
            "rank": "all",
            "value": "Q12136",
            "property": ""
          }
        ]
      }
    ],
    "meta": true,
    "aliases": true,
    "sitelinks": true,
    "descriptions": true,
    "labels": true,
    "statements": [
      {
        "id": 17,
        "qualifiers": false,
        "simple": true,
        "rank": "all",
        "full": false,
        "references": false
      }
    ]
  },
  {
    "version": 1,
    "__name": "gene",
    "entities": [
      {
        "id": 18,
        "type": "item",
        "properties": [
          {
            "id": 19,
            "type": "entityid",
            "rank": "all",
            "value": "Q7187",
            "property": ""
          }
        ]
      }
    ],
    "meta": true,
    "aliases": true,
    "sitelinks": true,
    "descriptions": true,
    "labels": true,
    "statements": [
      {
        "id": 20,
        "qualifiers": false,
        "simple": true,
        "rank": "all",
        "full": false,
        "references": false
      }
    ]
  },
  [],
  {
    "version": 1,
    "__name": "medication",
    "entities": [
      {
        "id": 21,
        "type": "item",
        "properties": [
          {
            "id": 22,
            "type": "entityid",
            "rank": "all",
            "value": "Q12140",
            "property": ""
          }
        ]
      }
    ],
    "meta": true,
    "aliases": true,
    "sitelinks": true,
    "descriptions": true,
    "labels": true,
    "statements": [
      {
        "id": 23,
        "qualifiers": false,
        "simple": true,
        "rank": "all",
        "full": false,
        "references": false
      }
    ]
  },
  [],
  {
    "version": 1,
    "__name": "pharmaceutical_product",
    "entities": [
      {
        "id": 24,
        "type": "item",
        "properties": [
          {
            "id": 25,
            "type": "entityid",
            "rank": "all",
            "value": "Q28885102",
            "property": ""
          }
        ]
      }
    ],
    "meta": true,
    "aliases": true,
    "sitelinks": true,
    "descriptions": true,
    "labels": true,
    "statements": [
      {
        "id": 26,
        "qualifiers": false,
        "simple": true,
        "rank": "all",
        "full": false,
        "references": false
      }
    ]
  },
  {
    "version": 1,
    "__name": "pharmacologic_action",
    "entities": [
      {
        "id": 27,
        "type": "item",
        "properties": [
          {
            "id": 28,
            "type": "entityid",
            "rank": "all",
            "value": "Q50377224",
            "property": ""
          }
        ]
      }
    ],
    "meta": true,
    "aliases": true,
    "sitelinks": true,
    "descriptions": true,
    "labels": true,
    "statements": [
      {
        "id": 29,
        "qualifiers": false,
        "simple": true,
        "rank": "all",
        "full": false,
        "references": false
      }
    ]
  },
  {
    "version": 1,
    "__name": "protein_domain",
    "entities": [
      {
        "id": 30,
        "type": "item",
        "properties": [
          {
            "id": 31,
            "type": "entityid",
            "rank": "all",
            "value": "Q898273",
            "property": ""
          }
        ]
      }
    ],
    "meta": true,
    "aliases": true,
    "sitelinks": true,
    "descriptions": true,
    "labels": true,
    "statements": [
      {
        "id": 32,
        "qualifiers": false,
        "simple": true,
        "rank": "all",
        "full": false,
        "references": false
      }
    ]
  },
  {
    "version": 1,
    "__name": "protein_family",
    "entities": [
      {
        "id": 33,
        "type": "item",
        "properties": [
          {
            "id": 34,
            "type": "entityid",
            "rank": "all",
            "value": "Q417841",
            "property": ""
          }
        ]
      }
    ],
    "meta": true,
    "aliases": true,
    "sitelinks": true,
    "descriptions": true,
    "labels": true,
    "statements": [
      {
        "id": 35,
        "qualifiers": false,
        "simple": true,
        "rank": "all",
        "full": false,
        "references": false
      }
    ]
  },
  {
    "version": 1,
    "__name": "protein",
    "entities": [
      {
        "id": 36,
        "type": "item",
        "properties": [
          {
            "id": 37,
            "type": "entityid",
            "rank": "all",
            "value": "Q8054",
            "property": ""
          }
        ]
      }
    ],
    "meta": true,
    "aliases": true,
    "sitelinks": true,
    "descriptions": true,
    "labels": true,
    "statements": [
      {
        "id": 38,
        "qualifiers": false,
        "simple": true,
        "rank": "all",
        "full": false,
        "references": false
      }
    ]
  },
  {
    "version": 1,
    "__name": "ribosomal_RNA",
    "entities": [
      {
        "id": 39,
        "type": "item",
        "properties": [
          {
            "id": 40,
            "type": "entityid",
            "rank": "all",
            "value": "Q28885102",
            "property": ""
          }
        ]
      }
    ],
    "meta": true,
    "aliases": true,
    "sitelinks": true,
    "descriptions": true,
    "labels": true,
    "statements": [
      {
        "id": 41,
        "qualifiers": false,
        "simple": true,
        "rank": "all",
        "full": false,
        "references": false
      }
    ]
  },
  {
    "version": 1,
    "__name": "sequence_variant",
    "entities": [
      {
        "id": 42,
        "type": "item",
        "properties": [
          {
            "id": 43,
            "type": "entityid",
            "rank": "all",
            "value": "Q15304597",
            "property": ""
          }
        ]
      }
    ],
    "meta": true,
    "aliases": true,
    "sitelinks": true,
    "descriptions": true,
    "labels": true,
    "statements": [
      {
        "id": 44,
        "qualifiers": false,
        "simple": true,
        "rank": "all",
        "full": false,
        "references": false
      }
    ]
  },
  {
    "version": 1,
    "__name": "supersecondary_structure",
    "entities": [
      {
        "id": 45,
        "type": "item",
        "properties": [
          {
            "id": 46,
            "type": "entityid",
            "rank": "all",
            "value": "Q7644128",
            "property": ""
          }
        ]
      }
    ],
    "meta": true,
    "aliases": true,
    "sitelinks": true,
    "descriptions": true,
    "labels": true,
    "statements": [
      {
        "id": 47,
        "qualifiers": false,
        "simple": true,
        "rank": "all",
        "full": false,
        "references": false
      }
    ]
  },
  [],
  [],
  {
    "version": 1,
    "__name": "therapeutic_use",
    "entities": [
      {
        "id": 48,
        "type": "item",
        "properties": [
          {
            "id": 49,
            "type": "entityid",
            "rank": "all",
            "value": "Q50379781",
            "property": ""
          }
        ]
      }
    ],
    "meta": true,
    "aliases": true,
    "sitelinks": true,
    "descriptions": true,
    "labels": true,
    "statements": [
      {
        "id": 50,
        "qualifiers": false,
        "simple": true,
        "rank": "all",
        "full": false,
        "references": false
      }
    ]
  }
]
```

# 13/Nov/2020

This is the final day. We started looking at the slides/report

Andra said he has been creating a Wikibase instance to allocate the subset and raises the concern that uploading the RDF dump through Wikibase API can be slow. It would be more efficient to directly upload it through Blazegraph or GraphDB.

THis is the current target wikibase running on gcloud: http://35.205.156.230:8181/

and the incomplete on wbstack: https://bh20subset1.wiki.opencura.com/wiki/Main_Page

Ammar also tried ShapeDesigner (ShEx java implementation) and it hanged on the same place (same entity) that have a blank node and the query was actually having the blank node as subject and it was trying to fetch everything from Wikidata.

So basically until this moment: all available implementations of ShEx slurpers (JavaScript "shex.js" /Python "PyShEx" / Java "ShapeDesigner") do not have a workaround for this, so maybe it should be dealt with in the future to make it feasible for Wikidata ShEx slurping.


# Future plans

- Meeting to finish the Chemistry Entity schema, Denise, Seyed joining ShEx CG 
- Join next virtual SWAT4HCLS hackathon to continue working on this
- Continue working on handling slurper with blank nodes and solve issue with ShEx working on SPARQL endpoints
- Eric: Experimental "slurper" which, instead of querying the SPARQL endpoint, gets data from the .ttl files for the queried entity. 

- WDumper??
    - Add feature about graph traversing?
    - Review and run the JSON config files that were generated (Seyed/Eric)
    - Local installation of WDumper (Seyed)
        - requires an entire dump of Wididata JSON (~17G zipped)
- Wikidata Subsetting Language?? (JSON)
    - Seyed
- ShEx hackathon/hands-on event every 2 weeks (alternating with CG meeting)

# Chemistry entity schema draft



```turtle
PREFIX rdf:  <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX wd:   <http://www.wikidata.org/entity/>
PREFIX wdt:  <http://www.wikidata.org/prop/direct/>
prefix :     <http://example.org/>
import ....


:chemicalsOrSubClassOf {
    wdt:P31 
}

# wdt:P279 = rdfs:subClassOf
# wdt:P31 = rdf:type
# wdt:P527 = has part
# wd:Q11173 = Chemical Compound

/* ShEx language ideas:

Discriminator { wdt:P31/wdt:P279* [wd:Q11173] } 
... 

IF { wdt:P31/wdt:P279* [wd:Q11173]} THEN {
  ...
}

NOT { } OR { ....}

*/

:chemical {
  # discriminator 
  #  wdt:P31/wdt:P279* [ wd:Q11173 ]

  ^wdt:P527 @:biological_process * ; # only get checmicals part of a biological_prrocess
  ^wdt:P527 . * ; # get all
  
  wdt:P3771 . * ; # activator_of 
  wdt:P129  . * ; # physically interacts with 
  wdt:P2868 . * ; # subject has role 
  wdt:P361  . * ; # part of 
  wdt:P703  . * ; # found in taxon 
  
  wdt:P231  . ? ; # CAS registry number
  wdt:P661  . ? ; # ChemSpider ID 
  # ...
  wdt:P6889 . * ; # MassBank accession number
  # ...
  
   
#    p:P31 { ps:P31 [ wd:Q11173 ] }
}


:biological_process EXTRA wdt:P527 {
  wdt:P527  @:chemical OR .      * ; 
  ^wdt:P527 @:biological_pathway *  
}

:biological_pathway {
  wdt:P527 @:biological_process  
}


:medication {
  
}



[![hackmd-github-sync-badge](https://hackmd.io/5nKOyk8qQTO5DSCa_M5p3g/badge)](https://hackmd.io/5nKOyk8qQTO5DSCa_M5p3g)
