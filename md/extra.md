# Extra informatie

## Good Practices

Naast de wetgevende Implementing Rules (IRs) en de richting gevende Technical Guidelines (TGs) zijn er door verschillende werkgroepen goede implementatievoorbeelden ontwikkeld en gepubliceerd: de zogenaamde Good Practices. Deze kunnen dataproviders helpen bij de implementatie van INSPIRE.
Op de <a href="https://inspire.ec.europa.eu/portfolio/good-practice-library" target="_blank">Good Practice Library</a> staan de Good Practices beschreven. Hier worden twee typen onderscheiden: de endorsed en de candidate practices.

Momenteel zijn vijf endorsed practises beschikbaar om te implementeren:
- GeoDCAT-AP
- SDMX for Human Health and Population Distribution
- OGC API – Features as an INSPIRE download service
- OGC SensorThings API as an INSPIRE download service
- OGC compliant INSPIRE Coverage data and service implementation


Op de <a href="https://inspire.ec.europa.eu/portfolio/good-practice-library" target="_blank">Good Practice Library</a> is ook de template te vinden voor het beschrijven van een good practice en procedure om hem in te dienen en de status "endorsed" te krijgen.


## ISO- en OGC-standaarden


**ISO-standaarden**

Hieronder vind je een overzicht van ISO-standaarden die binnen INSPIRE (en dus in de handreiking) een rol spelen. Over het algemeen kan je stellen dat het INSPIRE-framework is ontwikkeld vanuit het bestaande kader van ISO-standaarden. Sommige verordeningen zijn zelfs direct terug te brengen op bepaalde ISO’s (bijvoorbeeld Implementing Rule Metadata). De reden dat er vaak toch wordt afgeweken van een bestaande standaard (of eigenlijk: dat een bestaande standaard wordt aangevuld met extra vereisten), is dat de INSPIRE wetgeving hierom vraagt.

ISO/TC211 is de *technical committee* van de ISO-organisatie die toezicht houdt over de standaarden van geografische informatie. ISO/TC211 heeft een eigen <a href="https://committee.iso.org/home/tc211" target="_blank">website</a> met factsheets met een korte uitleg van elke GI-standaard.


| ISO CODE | Beschrijving |
| -------- | ------------ |
| ISO 19101 | Geographic Information: Reference model |
| ISO 19103 | UML |
| ISO 19105 | Geographic Information: Conformance and testing |
| ISO 19107 | Geographic Information: Spatial schema |
| ISO 19108 | Geographic Information: Temporal schema |
| ISO 19109 | Geographic Information: Rules for Application Schema |
| ISO 19110 | Geographic Information: Feature cataloguing methodology |
| ISO 19111 | Geographic Information: Spatial referencing by coordinates |
| ISO 19111 | Geographic Information: Spatial referencing by identifier |
| ISO 19113 | Geographic Information: Quality principles |
| ISO 19114 | Geographic Information: Quality evaluation procedures |
| ISO 19115 | Geographic Information: Metadata |
| ISO 19117 | Geographic Information: Portrayal |
| ISO 19123 | Geographic Information: Coverage schema |
| ISO 19128 | Geographic Information: Web Map Service |
| ISO 19131 | Geographic Information: Data product specification |
| ISO 19136 | Geographic Information: Geography Markup Language |

Let op. ISO/TC211 bestaat uit meer ISO's dan in bovenstaande tabel genoemd worden.



**OGC-standaarden**

Het OGC (Open Geospatial Consortium) is een wereldwijd consortium van ruim 370 bedrijven, overheidsorganisaties, onderzoeksinstellingen en universiteiten. Leden van het consortium ontwikkelen vrij verkrijgbare, open geo-standaarden. Op basis van deze standaarden kunnen ICT-ontwikkelaars geo-informatie en -services toegankelijk maken in iedere toepassing die het gebruik van geografische informatie vereist. De meest gebruikte <a href="https://www.ogc.org/docs/is" target="_blank">OGC-standaarden</a> zijn momenteel WMS, WMTS en WFS. Momenteel wordt gewerkt aan de nieuwe <a href="https://ogcapi.ogc.org/" target="_blank">OGC API standaarden</a>, die ook binnen INSPIRE als [good practises](#good-practices) kunnen worden gebruikt.

De documenten die het OGC publiceert (bv. abstract specifications, implementation specifications, encoding standards) worden vaak onder de ISO/TC211 geschoven. Zo komen de OGC-specificaties ook als ISO beschikbaar.



## UML-notatie

Voor het beschrijven van de verschillende INSPIRE datamodellen wordt gebruik gemaakt van de grafische modelleertaal UML 2.0 (Unified Modelling Language). In de onderstaande afbeelding zijn de belangrijkste begrippen en notaties die gebruikt worden in een UML klassediagram, weergegeven. De UML diagrammen voor de verschillende INSPIRE thema's vind je <a href="https://inspire-mif.github.io/uml-models/approved/html/" target="_blank">hier</a> op de Europese INSPIRE website.

![UML](media/Uml_cheatsheet.png "Notatie van een UML-klassediagram.")

Handige bronnen voor UML zijn:
- <a href="https://www.uml.org/" target="_blank">Officiele UML website</a> met links met de specificatie, aanvullende documentatie, tools;


en voor introductie in UML:
- <a href="https://holub.com/uml" target="_blank">UML Quick Reference</a>;
- <a href="http://agilemodeling.com/artifacts/classDiagram.htm" target="_blank">UML 2 Class Diagrams: An Agile Introduction</a>;
- <a href="https://www.tutorialspoint.com/uml/" target="_blank">UML Tutorial</a>.


**Multipliciteit**

*Multiplicity* oftewel cardinaliteit beschrijft de veelvuldigheid van een attribuut; hoe vaak het moet/mag voorkomen.

| Notatie | Betekenis |
| ------- | --------- |
| 0..1 | Geen of één keer |
| 1,5 | Exact 1 of 5 maal (= eigenlijk geen reeks) |
| 0..* | nul of meer |
| * | nul of meer |
| 1..* | een of meer |
