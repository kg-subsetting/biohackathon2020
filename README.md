## Contents

- [Use cases](https://hackmd.io/5nKOyk8qQTO5DSCa_M5p3g#Use-cases)
- [Technical approach](https://hackmd.io/5nKOyk8qQTO5DSCa_M5p3g#Use-cases)

# Participants

## Andra Waagmeester
Contacts: [Twitter: @andrawaag](https://twitter.com/andrawaag), [Github: Andrawaag](https://github.com/andrawaag) 
### What I expect from this hackathon
Wikidata is growing by the day, leading to more and more timeouts on relatively simple queries (e.g. Give me all Wikidata items with a DOI.) With the support of ShEx in Wikidata in its EntitySchema extension it is possible to draw the bounderies between a subset of Wikidata of interest. During the biohackathon I would like to work on enabling a workflow, to based on a Shape Expression, generate this subset. Two main use-cases that comes to mind are: 1. Creating a subset to enable more complex queries by loading that subset in a local RDFStore. 2. Create backup subsets for future/persistent reference. 

### Skills I bring to the table
* Shape Expressions, Wikidata, Wikibase
* Wikidata Integrator
* Python
* SPARQL

## Jose Emilio Labra Gayo

Contacts: [Twitter: @jelabra](https://twitter.com/jelabra), [Github: labra](https://github.com/labra)

### Skills I bring to the table
* Shape Expressions, Wikidata, Wikibase
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



# Use cases

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

- Jose Labra - Create a ShEx based on [the Gene Wiki paper](https://elifesciences.org/articles/52614)
- Ammar Ammar - Create a ShEx for one use case from Scolia and apply it using ShEx-JS/YASHE
- EricP - Command line slurper
- Alejandro - Look to pyshex to see if it's possible to add imports
- Andra - Compare the wdt (truthy) shape expressions from Jose and create the p equivalent. 
- Danbri - Figure out how to host demos on public Google cloud projects (boring but it blocked me since biohackathon 2019!)


[![hackmd-github-sync-badge](https://hackmd.io/5nKOyk8qQTO5DSCa_M5p3g/badge)](https://hackmd.io/5nKOyk8qQTO5DSCa_M5p3g)
