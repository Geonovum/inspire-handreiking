# Dataharmonisatie
De dataharmonisatie INSPIRE beoogt het ontsluiten van de aangemerkte datasets conform de INSPIRE-dataspecificaties. Letterlijk betekent harmoniseren “op elkaar afstemmen”. Dataharmonisatie wordt in de context van INSPIRE gedefinieerd als het vertalen (mappen) van de data zoals ze opgeslagen zijn bij de dataprovider (‘as-is’) naar een INSPIRE-conforme structuur. Sommige partijen definiëren dataharmonisatie ruimer. In dat geval heeft dataharmonisatie ook een beleidskundige dimensie. Dit is bijvoorbeeld het geval bij de provincies. Zij bieden de gegevens over het Natuurnetwerk Nederland niet twaalf keer afzonderlijk aan, maar slechts één keer landsdekkend. Voordat de data "gemapt" kon worden, bleek interne beleidskundige harmonisatie nodig.

Op deze wiki gaat het over dataharmonisatie in technisch-inhoudelijke zin; het beleidskundige perspectief blijft buiten beschouwing.

## Documentatie dataharmonisatie
Voor ieder INSPIRE-thema is door de EU een dataspecificatie vastgelegd die beschrijft welke gegevens en op welke manier deze gegevens moeten worden geleverd. Dit is vastgelegd in een Dataspecificatie. Deze dataspecificaties worden gepubliceerd op het [officiële INSPIRE-portaal](https://inspire.ec.europa.eu/). Op dit portaal vind je de meest actuele dataspecificaties van INSPIRE: [data-specifications](https://inspire.ec.europa.eu/data-specifications/2892).

Met ingang van 10 December 2013 zijn er van alle thema's stabiele versies van de dataspecificaties beschikbaar. Deze zijn te vinden via onderstaande links.

|Titel | Versie | Datum | Opmerking |
|-----------------|-------------|-------------|-------------|
| [Dataspecificaties](https://inspire.ec.europa.eu/data-specifications/2892)  | 4.0  | 2017-04-01   | Data specificaties voor alle themas in UML,GML,Feature Catalogue en Code list dictionaries voor voor Annex I, II en III  |
| [Definition of Annex Themes and Scope](https://inspire.ec.europa.eu/reports/ImplementingRules/DataSpecifications/D2.3_Definition_of_Annex_Themes_and_scope_v3.0.pdf) (D2.3)  | 3.0  | 2008-10-03   | -   |
| [INSPIRE Generic Conceptual Model](https://inspire.ec.europa.eu/documents/inspire-generic-conceptual-model) (D2.5)  | 3.4   | 2014-04-08   |Basismodel met hierin de voor alle dataspecificaties relevante ‘basis typen’.   |
| [Methodology for the development of data specifications: baseline version](https://inspire.ec.europa.eu/reports/ImplementingRules/DataSpecifications/D2.6_v3.0.pdf) (D2.6)  | 3.0   | 2008-06-20	   | -   |
| [Guidelines for the Encoding of Spatial Data](https://inspire.ec.europa.eu/file/1412/download?token=lHYwKEk5) (D2.7)  | 	3.3   | 2014-04-08   | -   |
| [Datamodellen (UML)](https://inspire.ec.europa.eu/data-model/approved/r4618-ir/html/index.htm?) | 	r 4618   | 	2011-02-06  |De modellen die hier genoemd worden in IR's zijn definitief (*approved*). Dit geldt niet voor de *extended* delen (die zijn geen onderdeel van de IR's, maar wel van dataspecificaties) (*draft*)   |
|[handleiding voor het gebruik van "Observations & Measurements and Sensor Web Enablement-related standards in INSPIRE"](https://inspire.ec.europa.eu/id/document/tg/d2.9-o%26m-swe)|3.0|2016-12-16|-|
|[INSPIRE Data Specifications – Base Models – Generic Network Model](https://inspire.ec.europa.eu/documents/inspire-data-specifications-%E2%80%93-base-models-%E2%80%93-generic-network-model)|1.0rc3|2013-04-05|Algemeen basismodel voor netwerken zoals bijvoorbeeld vervoersnetwerken|
|[Good Practices](https://inspire.ec.europa.eu/portfolio/good-practice-library)|||Hier worden voorbeelden uit de praktijk genoemd|

### Generic Conceptual Model
Om data consistent te kunnen uitwisselen beschrijft INSPIRE voor elk thema een datamodel van de gegevens die uitgewisseld moeten worden. Daarnaast beschrijft het ook een bestandsformaat waarin de gegevens moeten worden uitgewisseld. Algemene specificaties (die voor alle thema's hetzelfde zijn) worden beschreven in het [Generic Conceptual Model](https://inspire.ec.europa.eu/documents/inspire-generic-conceptual-model) (GCM). Een dataspecificatie moet dus altijd gelezen worden in de context van dit generieke model.

### Overzicht dataspecificaties
Op [deze locatie](https://inspire.ec.europa.eu/Themes/Data%20Specifications/2892) zijn de data specificaties per thema te vinden. Globaal bevatten de dataspecificaties per thema een overzicht van de technische richtlijnen om een INSPIRE-dataset te maken. Op [deze locatie](https://inspire-regadmin.jrc.ec.europa.eu/dataspecification/ScopeTheme.action) kun je interactief door de data specificaties bladeren.

Hieronder volgt een opsomming van thema-specifieke dataspecificaties per annex.

**Annex I data specifications**
- D2.8.I.1 Data Specification on Coordinate Reference Systems – Technical Guidelines
- D2.8.I.2 Data Specification on Geographical Grid Systems – Technical Guidelines
- D2.8.I.3 Data Specification on Geographical Names – Technical Guidelines
- D2.8.I.4 Data Specification on Administrative Units – Technical Guidelines
- D2.8.I.5 Data Specification on Addresses – Technical Guidelines
- D2.8.I.6 Data Specification on Cadastral Parcels – Technical Guidelines
- D2.8.I.7 Data Specification on Transport Networks – Technical Guidelines
- D2.8.I.8 Data Specification on Hydrography – Technical Guidelines
- D2.8.I.9 Data Specifications on Protected Sites - Technical Guidelines

**Annex II data specifications**
- D2.8.II.1 Data Specification on Elevation – Technical Guidelines
- D2.8.II.2 Data Specification on Land Cover – Technical Guidelines
- D2.8.II.3 Data Specification on Orthoimagery – Technical Guidelines
- D2.8.II.4 Data Specification on Geology – Technical Guidelines

**Annex III data specifications**
- D2.8.III.1 Data Specification on Statistical Units – Technical Guidelines
- D2.8.III.2 Data Specification on Buildings – Technical Guidelines
- D2.8.III.3 Data Specification on Soil – Technical Guidelines
- D2.8.III.4 Data Specification on Land Use – Technical Guidelines
- D2.8.III.5 Data Specification on Human Health and Safety – Technical Guidelines
- D2.8.III.6 Data Specification on Utility and Government Services – Technical Guidelines
- D2.8.II/III.7 Data Specification on Environmental Monitoring Facilities – Technical Guidelines
- D2.8.III.8 Data Specification on Production and Industrial Facilities – Technical Guidelines
- D2.8.III.9 Data Specification on Agricultural and Aquaculture Facilities – Technical Guidelines
- D2.8.III.10 Data Specification on Population Distribution – Technical Guidelines
- D2.8.III.11 Data Specification on Area Management/Restriction/Regulation Zones and Reporting Units – Technical Guidelines
- D2.8.III.12 Data Specification on Natural Risk Zones – Technical Guidelines
- D2.8.III.13-14 Data Specification on Atmospheric Conditions and Meteorological Geographical Features – Technical Guidelines
- D2.8.III.15 Data Specification on Oceanographic geographical features – Technical Guidelines
- D2.8.III.16 Data Specification on Sea Regions – Technical Guidelines
- D2.8.III.17 Data Specification on Bio-geographical Regions – Technical Guidelines
- D2.8.III.18 Data Specification on Habitats and Biotopes – Technical Guidelines
- D2.8.III.19 Data Specification on Species Distribution – Technical Guidelines
- D2.8.III.20 Data Specification on Energy Resources – Technical Guidelines
- D2.8.III.21 Data Specification on Mineral Resources – Technical Guidelines

Wanneer je niet zeker bent onder welk INSPIRE-thema een bepaalde dataset valt, is de tool [find your scope](https://inspire-regadmin.jrc.ec.europa.eu/dataspecification/FindYourScope.action) erg nuttig. Naast de mogelijkheid om het juiste INSPIRE-thema te vinden, biedt deze tool ook een overzicht van alle objecten die binnen INSPIRE zijn gedefinieerd.

![INSPIRElandschap](media/inspire_wereld_gegevens.png "INSPIRE-landschap")

## Principes dataharmonisatie
Een van de voorwaarden voor het kunnen uitwisselen van ruimtelijke data is dat alle datasets bepaalde kenmerken delen. Zo moeten de opbouw van ruimtelijke objecten, definities van objecten en verplichte attributen over alle lidstaten uniform zijn om via services uitgewisseld te kunnen worden en onderling vergeleken te kunnen worden. Dit wordt ‘interoperabiliteit’ genoemd en de handelingen die ondernomen worden om interoperabiliteit te bereiken ‘dataharmonisatie’. INSPIRE zorgt voor een hoge mate van interoperabiliteit door per thema een standaard dataspecificatie te beschrijven die door alle lidstaten geïmplementeerd moet worden. Dit betekent dat een dataprovider zijn gegevens moet vertalen naar de INSPIRE-dataspecificatie. Het harmoniseren is grotendeels afhankelijk van de structuur van de brondata, zoals deze door de dataprovider beheerd wordt. Wordt deze file-based beheerd, of in een ruimtelijke database? Hoe ziet de structuur van de data eruit? Deze vragen kunnen alleen door de dataprovider zelf beantwoord worden.

## Fasen
Het harmoniseren naar INSPIRE-dataspecificaties, kent grofweg twee fasen:
1. **Semantisch harmoniseren**: hoe vallen de begrippen en concepten in het informatiemodel van de dataprovider te vertalen naar de klasses en definities zoals beschreven in de INSPIRE-dataspecificatie.
2. **Technisch harmoniseren**:  het converteren van het bestaande dataformaat, naar het uitwisselformaat GML.

Dit is vooral een schematische indeling. In het werkproces zullen (1) en (2) bij veel dataproviders in één slag plaatsvinden. Onder het harmoniseren vallen ook aspecten als het zorg dragen voor valide geometrieën en *cross-boundary harmonisation*. Meer informatie over deze aspecten vind je op [deze wikipagina](#geometrie).

### Semantisch harmoniseren
Het semantisch harmoniseren is vooral een kwestie van het vertalen van definities van de dataprovider naar de definities van INSPIRE. Dit is typisch werk voor een domeinexpert van de dataprovider die de definities in de betreffende dataspecificaties interpreteert en bedenkt hoe de eigen gegevens in dit model in te passen zijn. In veel gevallen zal het lastig zijn voor een domeinexpert om de technische INSPIRE-documentatie te doorgronden.

### Technisch harmoniseren
Voor het technisch harmoniseren zijn er verschillende mogelijkheden:
1. Harmonisatie op niveau van ruimtelijke databases.
2. Ruimtelijke ETL-processen met behulp van specifieke ETL-software (die met ruimtelijke data overweg kan).
3. ‘On the fly’ harmoniseren en converteren.

#### Ruimtelijke database
Eén manier om data te harmoniseren is om op database-niveau scripts te ontwikkelen, die de datastructuur van de voor INSPIRE opgevoerde data, converteren naar de vorm en inhoud die conform het INSPIRE-applicatieschema is. Dit kan met behulp van SQL, en de procedurele taal die de database hanteert. De procedurele taal is afhankelijk van de database; elke fabrikant kent zijn eigen variant. Hiervoor is specialistische kennis van een database-specialist nodig, die (a) met ruimtelijke databases overweg kan, en (b) *Data Definition Language* (DDL)-scripts kan ontwikkelen.

#### Spatial ETL
Ruimtelijke ETL-processen met behulp van specifieke ETL-software, ook vaak *Spatial ETL* of *spatial data exchange* genoemd. ETL staat voor Extract, Transform en Load. Hiermee worden technieken bedoeld die ruimtelijke data kunnen converteren.
- **Extract** inlezen van het bronformaat.
- **Transform** het aanpassen van de datastructuur.
- **Load** het wegschrijven (wellicht naar een ander formaat).

Bij het harmoniseren van de data in het kader van INSPIRE is het vooral de ‘T’ (Transform) die van belang is. In dit proces vinden wijzigingen plaats in de data-structuur: het wijzigen van attribuutnamen, weghalen van attributen, wijzigen van datatypen, gebruik van domeinwaarden (codelijsten), geometrie-validaties, etc.

Het is ook nuttig te wijzen op de markt die de INSPIRE-richtlijn indirect creëert. Er zijn verschillende bedrijven die software bouwen die specifiek gericht is op dataproviders die data leveren voor INSPIRE-thema’s. Op deze manier voldoen zij aan een groeiende behoefte die ontstaat uit nieuwe wetgeving en standaarden. Een aantal populaire ETL software tools zijn:
- [FME](https://www.safe.com/);
- [HALE](https://www.wetransform.to/products/halestudio/); Een beknopte handleiding, gemaakt door RVO, is [hier te vinden](https://github.com/Geonovum/inspire-wiki/blob/main/docs/Handleiding_Gebruik_HALE_voor_INSPIRE_dataharmonisatie_120618.pdf).
- [Talend](https://www.talend.com/resources/what-is-etl/);
- [MapForce](https://www.altova.com/mapforce);
- [GO Publisher](https://snowflakesoftware.com/geospatial-products/);
- [ArcGIS Pro](https://desktop.arcgis.com/en/arcmap/latest/extensions/data-interoperability/spatial-etl-tools.htm);

![etlplaatje](media/Etl.gif "ETL-stappen te nemen voor INSPIRE")

#### On the fly converteren
Bovenstaande principes zijn gericht op het klaarzetten van data alvorens ze te ontsluiten (ook wel *pre-defined*). Dat hoeft niet in alle gevallen. Het is ook mogelijk om data *on the fly* te converteren. Let er echter op dat dit voor grote datasets geen bruikbare toepassing is omdat de performance van de service teveel te wensen over zal laten. Waar deze grens ligt en bij welke dataset-grootte het breekpunt tussen ‘on the fly’ en ‘pre-defined’ ligt, is alleen op basis van testresultaten vast te stellen. Houd hierbij rekening met de gestelde eisen aan de [kwaliteit van de performance](#quality-of-services).

### Welke optie toepassen?
Dit hangt van een aantal organisatie-gebonden factoren af:

- Aanwezige kennis
- Aanwezige software
- Beschikbare tijd

De belangrijkste factor is de kennis die binnen een organisatie aanwezig is. Zijn er binnen de organisatie database-specialisten aanwezig, die verstand hebben van ruimtelijke databases? Zijn er GIS-operators die al vaker met ETL tools werken? Dit betekent dus ook dat er wellicht gekozen moet worden voor uitbesteding.

De ‘spin-off’ is een zijdelingse overweging die bij de keuze van harmonisatie-principe van belang kan zijn. Voor INSPIRE-gerichte harmonisaties is veel kennis nodig. Deze kennis kan voor andere GEO-ICT projecten ook van praktisch belang zijn, bijvoorbeeld omdat het de kennis van een tool verhoogt. Dit kan een overweging zijn om een kennis-domein te versterken en hierin te investeren.

## As-is versus geharmoniseerd
Deze vraag is voorgelegd aan de EU commissie:

*What is the position of INSPIRE regarding the status of the view and download services serving the INSPIRE data ‘as is’ at the moment the harmonized data shall to be served? Are the data providers in the member states allowed to ‘pull out the plug’ after the view and download service offer harmonized data. Or are the view and download services serving the INSPIRE data ‘as is’ considered as SDSs? Or both? The data providers can decide themselves how to deal with this? Keep the service up or pull out the plug. Are you able to give us the reference to the Directive with respect to this issue?*

Het antwoord luidde als volgt:

*There is no specific reference in the INSPIRE Directive mandating one or the other scenarios.*

*Even so, the Directive and the NS regulation requires Member States to establish and operate view and download services for the spatial data sets for which metadata have been created in accordance with the INSPIRE Directive, and the Directive and Interoperability regulation requires spatial data sets to be made available in conformity at a specific date.*

*In the spirit of the legislator, the view and download services specified in article 11 (b) and (c) have to be put in place for data in whatever format - “as it is”. The transformation Service (article 11 (d)) is then meant to help ‘achieving’ interoperability in the long run.*

*Article 11.3 is therefore important, as it makes clear that all Network Services must operate in conformity with the implementing rules provided for in Article 7(1).*

*Yet, again, as was pointed out on several occasions, the data “models”, specified in the annexes of the interoperability regulation, cannot be used to redefine the scope of the directive (e.g. narrowing the definition of spatial data) – and as such limiting access only to the data specified by the regulated data “models”.*

*However, Once the spatial data sets have been harmonised and if there are no relevant user requirements (Article 11, last paragraph) anymore for the download services acting on ‘non-interoperable’ data, then there is no reason to keep the “original” spatial data sets on-line.
Also, If all data are harmonised/compliant, then of course, the non-interoperable versions shouldn’t be kept on-line.*

Er doen zich nu een drietal scenario’s voor, waarbij de volgende assumptie geldt: de datasets ‘as is’ zijn rijker gevuld dan de INSPIRE-datamodellen (meer feature types, meer attributen en associaties). Andersom, indien het INSPIRE-datamodel ‘rijker gevuld is’ dan de dataset ‘as is’, dan betekent dat dat de gevraagde data niet in de dataset aanwezig is en dus niet geleverd hoeft te worden.
1. Het “ARM”-scenario van de “arme geharmoniseerde dataset”. In dit scenario volgt de dataprovider zeer strict de harmonisatie-eisen van INSPIRE. De rijkere dataset ‘as is’ wordt niet (meer) aangeboden, want er zijn geen relevante gebruikerswensen en use cases.
2. Het “RIJK en ARM”-scenario van de “arme geharmoniseerde dataset”. In dit scenario volgt de dataprovider de harmonisatie-eisen van INSPIRE en wordt de rijkere dataset tevens ‘as is’ ook aangeboden conform de INSPIRE-eisen voor netwerkdiensten, omdat relevante gebruikerswensen en use cases dit vereisen. Kort gezegd komt het erop neer dat wanneer de as-is dataset meer attributen heeft dan de INSPIRE-dataset, de as-is dataset nog steeds wordt aangeboden als view- en downloadservice met het vinkje 'INSPIRE' aangevinkt in het NGR. Het is dan weliswaar geen INSPIRE-geharmoniseerde dataset maar biedt nog wel steeds meerwaarde voor de INSPIRE-community. Meer info is te vinden in [het in december 2013 in de Klankbordgroep besproken stuk](https://wiki.geonovum.nl/images/Bijlage_4.1_Memo_INSPIRE_Datasets_%27as_is%27_4DEC2013_v2.pdf).
3. In het “RIJK”-scenario is de data set ‘as is’ volledig geharmoniseerd beschikbaar. Dit kan bereikt worden door een [extensie](#extensies) te maken van het door INSPIRE voorgedragen geharmoniseerde model. De rijke gegevens worden dan toegevoegd aan het INSPIRE-model zodanig dat nog steeds wordt voldaan aan het INSPIRE-model. In dit geval zal de dataprovider slechts 1 geharmoniseerde, rijke dataset beschikbaar stellen, omdat relevante gebruikerswensen en use cases dit vereisen.

In onderstaande figuur zijn de 3 scenario’s bezien in het licht van de INSPIRE-richtlijn en de keuze mogelijkheden voor de dataproviders.

![rijkarmplaatje](media/rijk_arm_scenario.png "De verschillende mogelijkheden voor het aanbieden van as-is data ná harmonisatie en voor het aanbieden van geharmoniseerde data")

### Extensies
De INSPIRE-dataspecificaties zijn zo ontworpen dat ze eenvoudig [uitbreidbaar](https://inspire.ec.europa.eu/portfolio/inspire-extensions) zijn. Dit uitbreiden van modellen en specificiaties wordt 'extending' genoemd en de uitbreidingen zijn 'extensions'.

In opdracht van (en in samenwerking met) Geonovum heeft het bedrijf WeTransform onderzoek verricht naar INSPIRE-extensies. De resultaten hiervan zijn op [een website](https://inspire-extensions.wetransform.to/) verzameld waarop veel informatie te vinden is over het uitbreiden van INSPIRE-dataspecificiaties.

Op deze site vindt u onder meer:

- De resultaten van een onderzoek naar bestaande INSPIRE-extensies en een [overzicht van bestaande extensies](https://inspire-extensions.wetransform.to/models/index.html).
- Een overzicht van [*extension patterns*](https://inspire-extensions.wetransform.to/patterns/index.html), waarin bepaalde ontwikkelpatronen beschreven worden.
- Een [tutorial](https://inspire-extensions.wetransform.to/tutorial/tutorial.html) waarin stapsgewijs wordt beschreven hoe een extension ontwikkeld kan worden.

Ook door het uitbreiden van [codelijsten](#codelijsten) kan het model rijker gemaakt worden.

## Prioritaire datasets (e-reporting)
Sinds 2016 geeft de Europese Commissie prioriteit aan datasets die relevant zijn in het kader van de verplichte Europese rapporteringen m.b.t. het milieu, de zogenoemde “Priority list of datasets for e-Reporting”. Dit is een dynamische lijst. Naast de ontsluiting en het opmaken van metadata, hebben deze datasets ook wat betreft de dataharmonisatie prioriteit in harmonisatie. Uiteraard is dit binnen het INSPIRE-tijdschema voor de desbetreffende annex en voor as-is versus nieuwe datasets. Meer info is te vinden op de website van [JRC](https://ies-svn.jrc.ec.europa.eu/projects/2016-5/wiki).

## INSPIRE-ID
Volgens de richtlijnen van INSPIRE moet elk object (feature) voorzien worden van een unieke identificatie: het InspireId. Zo kunnen derden ondubbelzinnig aan het object refereren. Dataproviders dienen dus – buiten eventuele eigen ID’s die de organisatie gebruikt – de ruimtelijke objecten van een unieke INSPIRE identificatie te voorzien. Belangrijk hierbij is, dat de identifier **uniek** en **persistent** moet zijn. Persistent betekent dat de identifier gedurende de levensduur van het object ongewijzigd moet blijven. Een InspireId bestaat uit de volgende onderdelen:
- Namespace (verplicht)
- LocalId (verplicht)
- VersionId (optioneel)

### Namespaces
Een namespace heeft als belangrijkste doel dat het de ruimte definieert waarbinnen de localId uniek is. Om te voorkomen dat verschillende dataproviders dezelfde namespace gebruiken, en om consistentie te verkrijgen, is er in Nederland (en Europa) een zogenaamd Namespaceregister opgezet. Namespaces in Nederland moeten worden geregistreerd in het [nationale namespaceregister](http://inspirelab.geonovum.nl/namespaces/). Let op: omdat dit nog een http i.p.v. een https adres is, kan het zijn dat deze link niet werkt in elke browser. In Chrome helpt het om de geschiedenis te verwijderen.

Het namespaceregister bevat een lijst van reeds geregistreerde namespaces door Nederlandse INSPIRE dataproviders.

Voor het registreren van namespaces is een account nodig. Geonovum verstrekt deze accounts. Voor registratie, neem contact op met Geonovum via INSPIRE@geonovum.nl.

Na het [inloggen](http://inspirelab.geonovum.nl/namespaces/login.php) kunt u voor uw gegevensbron een nieuwe namespace registreren.

Kijk hier voor een overzicht van de [huidige geregistreerde namespaces](http://inspirelab.geonovum.nl/namespaces/listnamespaces.php).

De namespace wordt per **dataset** ingericht. De namespace is onderdeel van het INSPIRE ID en moet derhalve ook in de data voorkomen.

#### Richtlijnen voor namespaces
De volgende lexicografische spelregels (restricties) gelden voor de INSPIRE namespace:
<aside class="note">
	
- Gebruik alleen de volgende karakters in de namespace code: {"a"-"z","0"-"9", "-"}.
- Gebruik alleen lowercase letters in de namespace code.
- Gebruik geen diacrieten in de namespace code, dus geen umlaut bijvoorbeeld.
- Begin namespace code met een letter.
- Gebruik minimaal 3 karakters. Lange namespace codes zijn niet wenselijk.
</aside>

### LocalId
De LocalId is de unieke identifier voor een object (binnen een namespace). De dataprovider is verantwoordelijk voor het uitdelen van unieke identifiers (de localId). In hoofdstuk 14 ('Identifier management') van het [Generic Conceptual Model](https://inspire.ec.europa.eu/documents/inspire-generic-conceptual-model) wordt algemene uitleg gegeven over het gebruik van unieke identifiers. Per thema kunnen er nog specifieke uitbreidingen staan in de dataspecificatie van dat thema.

#### Uniform Resource Identifiers
Uniform Resource Identifiers (URI's) zijn de gestandaardiseerde manier om op het internet objecten (bv. pagina's met informatie, datasets of afbeeldingen) uniek te identificeren. Dit kan door middel van een Uniform Resource Name (URN) of met een Uniform Resource Locator (URL). Bij een URN krijgt een object een unieke naam toebedeeld. Bij een URL krijgt een object een adres waarmee het op internet kan worden gevonden (de ons welbekende website-adressen). Door URI's te gebruiken, kun je op een unieke manier naar een object verwijzen en ze daardoor uniek onderscheiden. Het advies met de huidige stand van zaken is om stabiele HTTPS URI’s te gebruiken voor geo-objecten en datasets. Binnen INSPIRE en NEN3610 is afgesproken om elk object op basis van de bestaande interne identifier een URI te geven, waarmee binnen de INSPIRE en NEN3610 context het object uniek te identificeren én op te vragen is. [Lees hier ook de aanzet tot een nationale URI-strategie](https://www.geonovum.nl/themas/uri-strategie).

### VersionId
Een InspireId kan ook een (optioneel) versionId hebben. Dit versienummer kan gebruikt worden als er van hetzelfde object op verschillende tijdstippen verschillende versies in omloop zijn die van elkaar onderscheiden moeten worden.

## Codelijsten
INSPIRE-data wordt mede aan de hand van codelijsten en opsommingen (*enumerations*) geharmoniseerd. Beide worden gebruik om een lijstje toegestane waarden voor een attribuut te bepalen. In het geval van een enumeration zijn de toegestane waarden bekend vanaf het moment dat het model gemaakt is; de waarden maken deel uit van het model. Meestal gaat het om kleine lijstjes waar geen discussie over mogelijk is. Bij codelijsten zijn de toegestane waarden nog niet (allemaal) bekend op het moment dat het model gemaakt wordt; de toegestane waarden worden op een andere manier bepaald. Er zijn een verschillende regimes waarmee de waarden van een codelijst beheerd kunnen worden. Een uitgebreide beschrijving hiervaan staat in paragraaf 9.5.2.2 (*The code list classifiers*) van het [Generic Conceptual Model](https://inspire.ec.europa.eu/documents/inspire-generic-conceptual-model). Codelijsten voor specifieke thema's staan in Annex C van de betreffende dataspecificatie. Voor sommige thema's is het verplicht om gebruik te maken van deze codelijsten. De codelijsten staan ook in het Europese of Nederlandse [codelijstregister](#Codelijstregister).

### Uitbreidbaarheid van codelijsten
Iedere INSPIRE-codelijst valt onder een van de volgende uitbreidingsregimes:
- **none**: deze codelijsten zijn niet uitbreidbaar. Alleen waarden zoals beschreven in de Implementing Rule kunnen worden gebruikt.
- **narrower**: bij deze codelijsten mogen de data providers zelf nieuwe waarden toevoegen, zolang de nieuwe waarden maar meer specifiek zijn dan de waarden die in de IR worden gegeven.
- **open**: een dataprovider mag waarden uit de centrale codelist gebruiken, maar mag zelf ook eigen waarden bedenken.
- **any**: in dit geval zijn geen waarden bekend in de centrale codelijst en moet de data provider zijn eigen codelijst publiceren.

### Codelijstregister
Er is een centraal Europees codelijstregister waarin de waarden van de door de EU beheerde codelijsten gepubliceerd worden. Bij een codelijst is altijd een verwijzing opgenomen naar dit [*codelist register*](http://inspire.ec.europa.eu/codelist/). Wanneer een dataprovider zijn eigen uitbreiding op een codelist definieert, moeten deze in een lokaal codelist register beheerd worden.
Daarnaast is er een [Nederlands codelijstregister](http://inspireregister.nl/codelijst).
Voor het registreren van codelijsten op het nederlandse codelijstregister is een account nodig. Geonovum verstrekt deze accounts. Voor registratie, neem contact op met Geonovum via INSPIRE@geonovum.nl.
Na het [inloggen](http://inspireregister.nl:8080/re3gistry2/login) met dit account kunt u voor uw gegevensbron een nieuwe codelijst registreren en vullen.
De handleiding voor dit register is [hier](https://github.com/ec-jrc/re3gistry/blob/master/documentation/user-manual.md) te vinden.

## Portrayal
Het *portrayal*-hoofdstuk van een dataspecificatie (meestal in hoofdstuk 11) betreft voornamelijk de grafische weergave van de data in een viewservice, maar kan ook in GIS-applicaties gebruikt worden. Deze weergave is gedefinieerd op  basis van de dataspecificatie en kan dus pas ingesteld worden conform de dataspecificatie nadat er geharmoniseerd is.

De layer definition bestaat uit de volgende onderdelen:

- **Layer types**: De INSPIRE *view services* kennen een specifieke, thema-afhankelijke opbouw. Soms wordt een thema in één layer getoond, maar dat is niet altijd het geval. De paragraaf layer types geeft de definitie van de layeropbouw voor de viewservice van het betreffende thema. In deze paragraaf wordt hetvolgende van de viewservice bepaald:
	- Layer name
	- Layer title
	- Spatial Object Type
	- Keywords
- **Layer Styles**: presentatie van de view layers. Kleuren, lijndikte, symbolen, presentatie-regels m.b.t. tot bepaalde groepen objecten, etc. De dataspecificaties van INSPIRE leveren voor default styles ook met SLD-code. Dat geldt ook voor de Other styles, maar deze worden niet bij elk thema geimplementeerd.
- **Layer organisation**: layer aggregation binnen een thema door groepering van layers (layergroups)
- **Symbols**: Beschrijving van de te gebuiken symbolen.

De INSPIRE-richtlijn zelf dicteert niets over de presentatie van de ruimtelijke data. Om toch consistentie in de datasets te brengen en ze over de verschillende lidstaten ‘leesbaar’ te houden in de viewservice, worden er basale regels in de dataspecificaties gegeven. De portrayal-richtlijnen gaan uit van een enkel thema tegelijk; het gaat dus niet om het maken van ‘mooie kaarten’ maar om het leesbaar houden van de data.

De standaarden voor de presentatie van data:
- [standaard] - [namespace prefix]
- OGC Styled-Layer Descriptor - sld="http://www.opengis.net/sld" (WMS/SLD 1.1)
- OGC Symbology Standards - se="http://www.opengis.net/se" (SE 1.1)
- OGC Filter Encoding Standards - ogc="http://www.opengis.net/ogc" (FE 1.1)

Indien de dataspecificatie geen default style aanbiedt, definieert het Generic Conceptual Model de style:
- Punt: grey square, 6 px;
- Lijn/Arc: zwarte solid lijn, 1 px;
- Vlak: zwarte solid lijn, 1px, grijs gevuld.

## Data capture
Met *data capture rules* worden INSPIRE-afspraken/regels omtrent de toepassingsschaal bedoeld. Voor sommige datasets is het nodig om resoluties te specificeren, met  gevolgen voor het detailniveau van de digitale kaart. Een dataset van een schaal van 1:1000.000 kent andere details dan dezelfde dataset met een schaal van 1:10.000. De capturing rules worden per thema gedefinieerd. Sommige thema’s hebben geen specifieke regels, terwijl anderen zeer specifiek zijn. Voor de specifieke afspraken wordt naar de data specificatie van het betreffende thema verwezen (meestal hoofdstuk 10).

## Geometrie
In het [Generic Conceptual Model](#generic-conceptual-model) en de dataspecificaties wordt aangegeven welke geometrietypen zijn toegestaan. In de meeste dataspecificaties wordt verwezen naar de *simple feature* specificatie van OGC, waarin exact beschreven staat hoe een valide geometrie eruit moet zien. In een aantal dataspecificaties worden ook geometrieën beschreven die buiten de simple features vallen (zoals 3D-objecten).

Geometrische objecten moeten voldoen aan de regels zoals deze door het OGC worden gesteld. De [Europese INSPIRE-validatieservice](#validatie) kan helpen bij het detecteren van invalide geometrieën. Via deze validatiedienst kan, vergelijkbaar met de metadata-validatiediensten, een dataset van een dataprovider getest worden op haar ‘INSPIRE-conformiteit’. Deze validatie test niet alleen de geometrie, maar ook op het applicatieschema (.xsd) van het betreffende thema.

Wanneer je alleen de geometrie wilt valideren, zijn er verschillende opties die conform de OGC-regels testen: zowel open-source (bv. JavaTopologySuite ([JTS](https://github.com/locationtech/jts))) als closed-source tools zijn hiervoor geschikt.

Naast de geometrische benadering van 'valide objecten' zijn er ook specifieke regels voor bepaalde thema's zoals in de volgende subparagraven benoemd.

### Aansluitende netwerken
Binnen de thema's **hydrografie** en **vervoersnetwerken** zijn er aanvullende eisen gedefinieerd over het op elkaar aansluiten van deze netwerken (voorbeeld: wegen op waterwegen op spoor). Hiervoor is een mechanisme uitgewerkt waarin aangegeven moet worden welke knooppunten op elkaar horen aan te sluiten. Hiermee is het mogelijk de verschillende netwerken te koppelen zonder dat deze fysiek al op elkaar liggen. Dit moet op datasetniveau worden opgepakt.

De onderliggende documentatie hiervoor staat in de dataspecificaties voor [vervoersnetwerken](https://inspire.ec.europa.eu/id/document/tg/tn) in paragraaf 7.1.6 Logical Consistency – Topological consistency en [hydrografie](https://inspire.ec.europa.eu/id/document/tg/hy) in paragraaf 7.1.5.

### Cross-boundary harmonisatie
Bij het gebruik van geodata over lands-, regio- en administratieve grenzen heen kunnen verschillende typen fouten optreden, o.a. door
- Het hanteren van verschillende classificaties aan beide kanten van de grens;
- Het gebruik van een verschillend Level of Detail (LoD) bij dezelfde thematiek;
- Verschillende interpretatie van de grens;
- Overlappende objecten en geometrische verschuivingen.

Het onderstaande figuur geeft dit grafisch weer.

![grensproblemen](media/grensproblemen.png "Gebruik van geodata over grenzen heen kan leiden tot verschillende soorten fouten")

Het verbeteren van grensoverstijgende onregelmatigheden kan alleen op basis van wederzijdse afstemming en goedkeuring plaatsvinden. Het is de verantwoordelijkheid van de aangemerkte organisaties om dit af te stemmen met de buurlanden. INSPIRE geeft op verschillende plaatsen aan welke zogenaamde *edge matching*-technieken er gebruikt kunnen worden om met deze situaties om te gaan.
- Annex B van D2.6 [Methodology for the development of data specifications](https://inspire.ec.europa.eu/reports/ImplementingRules/DataSpecifications/D2.6_v3.0.pdf) kent een uitvoerige uitleg over verschillende situaties en welke oplossingen INSPIRE adviseert.
- De dataspecificatie van **Hydrografie** (paragraaf 10.2.7) kent ook specifieke aandacht voor grensoverschrijdende dataharmonisatiesituaties. 
- De dataspecificaties van de andere thema's kennen geen specifieke aandacht voor dit onderwerp. Dat wil overigens niet zeggen dat de problematiek van cross-boundary harmonisation daar niet zal voorkomen.
- Ook bij het thema Vervoersnetwerken speelt het probleem van de edge-matching.

## Datavalidatie
Datavalidatie is een mechanisme om te controleren of een bepaalde dataset aan de INSPIRE specificaties voldoet en is een onmisbaar hulpmiddel om tot een correcte implementatie te komen. Het is daarmee een onmisbare toets op de vraag of de dataharmonisatie goed is uitgevoerd.
Lees meer over dit onderwerp in het hoofdstuk [Validatie](#conformance-classes-datavalidatie).

## Checklist dataharmonisatie
Bij dataharmonisatie is het van belang op de volgende punten te letten:

1. Onwerp je [transformatie](#fasen) van As-is naar de INSPIRE dataspecificaties.
2. Beslis of er een [extensie](#extensies) gemaakt moet worden.
3. Registreer de namespaces via het [namespaceregister](http://inspirelab.geonovum.nl/namespaces/).
4. Registreer [codelijsten](#codelijsten) als er codes gebruikt worden naast die al in bestaande INSPIRE codelijsten voorkomen.
5. Valideer de datasets tussentijds met de INSPIRE-validator, zodat vroegtijdig eventuele fouten opgelost kunnen worden. Informatie over datasetvalidatie is [hier](#conformance-classes-datavalidatie) te vinden.
6. Publiceer datasetmetadata van de geharmoniseerde dataset. Voor geharmoniseerde data zijn er drie extra metadata-elementen die ingevuld dienen te worden; zie de [invulinstructies voor de metadata](#invulinstructie-voor-datasets). [Valideer daarna de datasetmetadata](#metadata-validatie). Contoleer in het NGR of de categorie `inspire` is geactiveerd.
7. Zorg dat de view service van de geharmoniseerde dataset voldoet aan de eisen die INSPIRE stelt voor geharmoniseerde data. Zie in de betreffende dataspecificatie het hoofdstuk [Portrayal](#portrayal). 
8. Valideer de [services](#valideren-services) van de geharmoniseerde dataset. Let er daarbij op dat de output van de downloadservices ook conform de dataspecificaties is net als dat met de input is gedaan in stap 4.
9. Valideer ook de metadata van de services,[zie hier](#valideren-metadata-services). Contoleer in het NGR of de categorie `inspire` is geactiveerd, anders verschijnt de metadata niet in de INSPIRE Discovery Service.
11. Voer de verwijzing naar de metadata (de UUID) van de geharmoniseerde dataset op in [het INSPIRE aanmerkingsregister](https://inspireaanmerking.nl/), zodat bekend is voor welke aangemerkte dataset daadwerkelijk data gepubliceerd is conform de eisen van INSPIRE.
12. Check of er in de metadata van de data en services goed naar elkaar is verwezen middels de juiste [links](https://inspire-geoportal.ec.europa.eu/linkagechecker.html).
13. Check in het [INSPIRE Geoportal](https://inspire-geoportal.ec.europa.eu/tv_home.html) of de data daadwerkelijk te bekijken en te downloaden is en onder het correcte thema te vinden is.
