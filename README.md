## Contents

- [Use cases](https://hackmd.io/5nKOyk8qQTO5DSCa_M5p3g#Use-cases)
- [Technical approach](https://hackmd.io/5nKOyk8qQTO5DSCa_M5p3g#Use-cases)


# Participants

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

[![hackmd-github-sync-badge](https://hackmd.io/5nKOyk8qQTO5DSCa_M5p3g/badge)](https://hackmd.io/5nKOyk8qQTO5DSCa_M5p3g)
