# Extra informatie

## Terminologie

Om interpretatieverschillen te voorkomen worden de termen die in verband met INSPIRE gebruikt worden geformaliseerd en gestandaardiseerd. Een volledig overzicht van deze termen vind je in het [INSPIRE Register](https://inspire.ec.europa.eu/registry). Hierin staat ook de [INSPIRE Feature Concept Dictionary (FCD)](https://inspire.ec.europa.eu/featureconcept) met termen die van belang zijn bij de voor de INSPIR- dataspecificaties en -harmonisatie en de [INSPIRE Glossary](https://inspire.ec.europa.eu/glossary/) met hierin algemene terminologie. De laatste is van belang voor alle INSPIRE-documenten.

Hieronder staat de korte uitleg van de in deze wiki gebruikte afkortingen en termen:
- [**SDIC (Spatial Data Interest Communities)**](https://inspire.ec.europa.eu/sdics) - Een community rondom een interessegebied, zoals thematisch of technisch. Enkele Nederlandse voorbeelden: TU Delft, Kadaster, Dienst der Hydrografie (Ministerie van Defensie) en Grontmij.
- [**LMO (Legally Mandated Organisation)**](https://inspire.ec.europa.eu/lmos) - Overheidsorganisaties die een mandaat hebben om rondom de bouw van het SDI een bepaalde rol te vervullen. In NL zijn zes LMO’s: Geonovum, Kadaster, KNMI, Min V&W (RWS), TNO Bouw en Ondergrond en TNO NITG.
- **Consultation** - Consultatie, raadpleging. Voordat een (draft) Implenting Rule of een standaard (ISO/OGC/Nederlands Profiel etc) aangenomen wordt, wordt ze uitvoering aan alle belanghebbenden voorgelegd. Op deze manier kan er rekening gehouden worden met de belangen van 'het werkveld' en draagvlak gecreeerd worden.
- **IOC** – Initial Operating Capability Task Force (IOC)  - Een Task Force opgezet om de systeem-interoperabiliteit (onderling en met het EU GeoPortaal) van INSPIRE, Verantwoordelijk voor de Netswork Serivices Architectuur.
- **DT** – Drafting Team. Expert-team uit verschillende lidstaten; stellen de draft Implementing Rules (invoerregels) op en adviseren het Consolidation Team. Zijn ook rondom een INSPIRE -thema gebaseerde teams.
- **CT (1)** – Consolidation Team. Coordineert het IR review-proces en zorgt voor consistentie tussen de verschillende Implenting Rules.
- **CT (2)** – European Commission INSPIRE Team. De stafleden van de Europese Commissie, samengesteld uit DG Environment, Eurostat, en het JRC (joint research center). Zij coordineren het ontwikkelen van Implementing Rules.
- **IC** – Inspire Committee. Commissie van vertegenwoordigers van de lidstaten. Heeft de rol om de Commission met advies (stem) over de voorgestelde Implementing Rules bij te staan. Zie ook comitology.
- **TWG** – Thematic Working Group. Specifieke teams die zich op de data-specificaties richten. Per INSPIRE thema stelt een TWG een specificatie op.
- **IR** – Implementing Rules. Invoeringsregel; verordening.
- **Comitology** / Comitology Procedure - Benaming van de procedure die wordt doorlopen voordat een draft IR wordt aangenomen, waarbij een commissie van vertegenwoordigers van de lidstaten de Europese Commissie 'adviseert' bij het aannemen van wetsvoorstellen. 
- **D2.8.m.n** – Notatie gebruikt voor Data Specificaties, waarbij met m het Annex-nummer wordt aangegeven en met n het volgnummer van het thema in de bijlage van de Directive is. D2.8.I.5 staat voor thema Addresses.
- **NGR** – Nationaal Georegister. Het Nederands portaal dat dienst zal gaan doen als ontsluitingsportaal om de data en diensten van de Nederandse dataoproviders voor andere Europese lidstaten toegankelijk te maken.
- **Bronhouder** - Een bronhouder is een organisatie die verantwoordelijk is voor de registratie, het beheer en de kwaliteit van de geregistreerde gegevens. De term ‘bronhouder’ kent in Nederland geen juridische borging. Bij INSPIRE wordt de term niet gebruikt; INSPIRE spreekt van dataprovider; een nauwere betekenis die alleen aangeeft welke organisatie verantwoordelijk is voor het leveren van INSPIRE convorme data, die een INSPIRE thema (deels, of helemaal) vullen. De nadruk ligt bij INSPIRE meer op de distributie en het toegankelijk maken van bestaande gegevens. 

## Normatief kader TC 211

Onder vind je een overzicht van ISO-standaarden die binnen INSPIRE (en dus in de wiki) een rol spelen. Over het algemeen kan je stellen dat het INSPIRE-framework is ontwikkeld vanuit het bestaande kader van ISO-standaarden. Sommige verordeningen zijn zelfs direct terug te brengen op bepaalde ISO’s (bv Implementing Rule Metadata). De reden dat er vaak toch wordt afgeweken van een bestaande standaard (of eigenlijk: dat een bestaande standaard wordt aangevuld met extra vereisten), is dat de INSPIRE wetgeving hierom vraagt.

TC 211 is de *technical committee* van de ISO-organisatie die toezicht houdt over de standaarden van geografische informatie. TC 211 heeft ook een eigen website en factsheet met een korte uitleg en van elke GI-standaard.

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

Let op. TC211 bestaat uit meer ISO's dan in bovenstaande tabel genoemd worden.

Het OGC (Open Geospatial Consortium) is een gelieerde organistatie die nauw met het ISO samenwerkt. De documenten die het OGC publiceert (bv. abstract specifications, implementation specifications, encoding standards) worden vaak onder de TC 211 geschoven. Zo komen de specificaties voor WMS, WFS WCS zoals boven te zien zijn, ook als ISO beschikbaar.

## UML-notatie

Voor het beschrijven van de verschillende INSPIRE datamodellen wordt gebruik gemaakt van de grafische modelleertaal UML 2.0 (Unified Modelling Language). In de onderstaande afbeelding zijn de belangrijkste begrippen en notaties die gebruikt worden in een UML klassediagram, weergegeven. De UML diagrammen voor de verschillende INSPIRE thema's vind je op de [INSPIRE website van JRC](https://inspire.ec.europa.eu/data-model/approved/r4618-ir/html/).

![UML](media/Uml_cheatsheet.png "Notatie van een UML-klassediagram.")

Overige UML-bronnen:
- UML (2.0) Resource Page – www.uml.org; officiele UML site met links met de specificatie, aanvullende documentatie, tools
- [UML Quick Reference](https://holub.com/uml) - introductie in UML
- [Introduction to UML](http://www.agilemodeling.com/artifacts/classDiagram.htm#Classes) - introductie in UML
- [UML Tutorial](https://www.tutorialspoint.com/uml/)

### Multipliciteit

Ook cardinaliteit of *multiplicity* genoemd. Beschrijft veelvuldigheid van een attribuut, hoe vaak het moet/mag voorkomen.

| Notatie | Betekenis |
| ------- | --------- |
| 0..1 | Geen of één keer |
| 1,5 | Exact 1 of 5 maal (= eigenlijk geen reeks) |
| 0..* | nul of meer |
| * | nul of meer |
| 1..* | een of meer |