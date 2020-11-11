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


## Meeetting overlapped with ShEx CG meeting

Invited people: Kat Torhnton, Nishad Thalhath, Tom Baker, Anastasiia



[![hackmd-github-sync-badge](https://hackmd.io/5nKOyk8qQTO5DSCa_M5p3g/badge)](https://hackmd.io/5nKOyk8qQTO5DSCa_M5p3g)
