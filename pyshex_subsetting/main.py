import argparse
import pdb

from pyshex.shex_evaluator import evaluate_cli as shexeval
from pyshex import shex_evaluator
from sparqlslurper import SlurpyGraph
from pyshex.user_agent import SlurpyGraphWithAgent
    
permagraph = None
OUTPUT_FORMATS = ["ttl", "rdf/xml", "rdf", "n3", "nquads"]

def setup_persistent_slurper():
    def persistent_slurper(rdf: str, *args, **kwargs) -> SlurpyGraph:
        global permagraph
        permagraph = SlurpyGraphWithAgent(rdf, *args, **kwargs)
        return permagraph
    shex_evaluator.SlurpyGraphWithAgent = persistent_slurper

def main(args):
    setup_persistent_slurper()

    sparql_query = args.sparql_file.read()
    rdf = args.shex_input

    options = ["-ss",
               "-sq", sparql_query,
               "http://query.wikidata.org/sparql",
               rdf,
               "--stopafter", "0",
               "-ps"]
    shexeval(options)
    serialization = permagraph.serialize(format=args.output_format).decode()
    if args.output_file:
        print("Writting output to file...")
        args.output_file.write(serialization)
    else:
        print()
        print("RESULT Graph:")
        print(serialization)


def parseargs():
    parser = argparse.ArgumentParser(description='')
    parser.add_argument("--sparql_file", "-s", dest="sparql_file",required=True,
        type=argparse.FileType('r', encoding='utf-8'), help="", default=None)
    parser.add_argument("--shex_input", "-i", dest="shex_input",required=True,
        type=str, help="", default=None)
    parser.add_argument("--output_file", "-o", dest="output_file",required=False,
        type=argparse.FileType('w', encoding='utf-8'), help="", default=None)
    parser.add_argument("--output_format", "-f", dest="output_format", choices=OUTPUT_FORMATS, help="Output format of the results. " +
        "If no output format is specified, results are returned in JSON by default.",
        nargs='?', default='ttl')
    return parser.parse_args()


if __name__ == '__main__':
    args = parseargs()
    exit(main(args))
