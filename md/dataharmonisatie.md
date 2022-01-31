# Data

## Soorten INSPIRE data: as-is en/of geharmoniseerd en wel of niet prioritair 
De aangemerkte INSPIRE datasets worden conform de INSPIRE uitvoeringsbepalingen ontsloten. Datasets en -services die onder één van de 34 INSPIRE-thema's vallen, moeten te vinden, raadplegen en downloaden zijn. De datasets komen vaak in twee varianten voor, namelijk:
- de niet-geharmoniseerde dataset, de zogenaamde as-is dataset, zoals die in de lidstaat aanwezig is;
- en/of de geharmoniseerde dataset, de dataset conform de INSPIRE-datamodellen in de INSPIRE-dataspecificaties.

Naast dit onderscheid geeft de Europese Commissie ook prioriteit aan bepaalde datasets, de zogenaamde prioritaire datasets. Deze prioritaire datasets komen ook zowel niet-harmoniseerd als geharmoniseerd voor.

In dit hoofdstuk wordt allereerst ingegaan op het onderscheid as-is versus geharmoniseerd. Vervolgens komen de prioritaire datasets aan de orde. En tot slot komt de dataharmonisatie en alle processtappen die daarbij horen aan bod.

### As-is versus geharmoniseerde data
Aan de EU commissie is de onderstaande vraag m.b.t. as-is versus geharmoniseerd voorgelegd:

*What is the position of INSPIRE regarding the status of the view and download services serving the INSPIRE data ‘as is’ at the moment the harmonized data shall to be served? Are the data providers in the member states allowed to ‘pull out the plug’ after the view and download service offer harmonized data. Or are the view and download services serving the INSPIRE data ‘as is’ considered as SDSs? Or both? The data providers can decide themselves how to deal with this? Keep the service up or pull out the plug. Are you able to give us the reference to the Directive with respect to this issue?*

Het antwoord luidde als volgt:

*There is no specific reference in the INSPIRE Directive mandating one or the other scenarios.*

*Even so, the Directive and the NS regulation requires Member States to establish and operate view and download services for the spatial data sets for which metadata have been created in accordance with the INSPIRE Directive, and the Directive and Interoperability regulation requires spatial data sets to be made available in conformity at a specific date.*

*In the spirit of the legislator, the view and download services specified in article 11 (b) and (c) have to be put in place for data in whatever format - “as it is”. The transformation Service (article 11 (d)) is then meant to help ‘achieving’ interoperability in the long run.*

*Article 11.3 is therefore important, as it makes clear that all Network Services must operate in conformity with the implementing rules provided for in Article 7(1).*

*Yet, again, as was pointed out on several occasions, the data “models”, specified in the annexes of the interoperability regulation, cannot be used to redefine the scope of the directive (e.g. narrowing the definition of spatial data) – and as such limiting access only to the data specified by the regulated data “models”.*

*However, Once the spatial data sets have been harmonised and if there are no relevant user requirements (Article 11, last paragraph) anymore for the download services acting on ‘non-interoperable’ data, then there is no reason to keep the “original” spatial data sets on-line.
Also, If all data are harmonised/compliant, then of course, the non-interoperable versions shouldn’t be kept on-line.*

Er doen zich nu een drietal scenario’s voor, waarbij de volgende assumptie geldt: de ‘as-is’ datasets zijn rijker gevuld dan de INSPIRE-datamodellen (meer feature types, meer attributen en associaties). Andersom, indien het INSPIRE-datamodel ‘rijker gevuld is’ dan de ‘as-is’ dataset, dan betekent dat dat de gevraagde data niet in de dataset aanwezig is en dus niet geleverd hoeft te worden.
1. Het “ARM”-scenario van de “arme geharmoniseerde dataset”. In dit scenario volgt de dataprovider zeer strict de harmonisatie-eisen van INSPIRE. De rijkere ‘as-is’ dataset wordt niet (meer) aangeboden, want er zijn geen relevante gebruikerswensen en use cases.
2. Het “RIJK en ARM”-scenario van de “arme geharmoniseerde dataset”. In dit scenario volgt de dataprovider de harmonisatie-eisen van INSPIRE en wordt de rijkere dataset tevens ‘as-is’ ook aangeboden conform de INSPIRE-eisen voor netwerkdiensten, omdat relevante gebruikerswensen en use cases dit vereisen. Kort gezegd komt het erop neer dat wanneer de as-is dataset meer attributen heeft dan de INSPIRE-dataset, de as-is dataset nog steeds wordt aangeboden als view- en downloadservice met het vinkje 'INSPIRE' aangevinkt in het NGR. Het is dan weliswaar geen INSPIRE-geharmoniseerde dataset maar biedt nog wel steeds meerwaarde voor de INSPIRE-community. Meer info is te vinden in <a href="docs/Bijlage_4.1_Memo_INSPIRE_Datasets_%27as_is%27_4DEC2013_v2.pdf" target="_blank">het in december 2013 in de Klankbordgroep besproken stuk</a>.
5. In het “RIJK”-scenario is de ‘as-is’ data set volledig geharmoniseerd beschikbaar. Dit kan bereikt worden door een [extensie](#extensies) te maken van het door INSPIRE voorgedragen geharmoniseerde model. De rijke gegevens worden dan toegevoegd aan het INSPIRE-model zodanig dat nog steeds wordt voldaan aan het INSPIRE-model. In dit geval zal de dataprovider slechts 1 geharmoniseerde, rijke dataset beschikbaar stellen, omdat relevante gebruikerswensen en use cases dit vereisen.

In onderstaande figuur zijn de 3 scenario’s bezien in het licht van de INSPIRE-richtlijn en de keuze mogelijkheden voor de dataproviders.

![rijkarmplaatje](media/rijk_arm_scenario.png "De verschillende mogelijkheden voor het aanbieden van as-is data ná harmonisatie en voor het aanbieden van geharmoniseerde data")

#### Extensies
Het gebruik van extensies wordt gezien als de meest efficiënte scenario voor harmonisatie, wanneer de 'as-is' dataset rijker is dan de dataspecifiactie van het INSPIRE thema.
De INSPIRE-dataspecificaties zijn zo ontworpen dat ze eenvoudig <a href="https://inspire.ec.europa.eu/portfolio/inspire-extensions" target="_blank">uitbreidbaar</a>. Dit uitbreiden van modellen en specificiaties wordt 'extending' genoemd en de uitbreidingen zijn 'extensions'.

In opdracht van (en in samenwerking met) Geonovum heeft het bedrijf WeTransform onderzoek verricht naar INSPIRE-extensies. De resultaten hiervan zijn op <a href="https://inspire-extensions.wetransform.to/" target="_blank">een website</a> verzameld waarop veel informatie te vinden is over het uitbreiden van INSPIRE-dataspecificiaties.

Op deze site vindt je onder meer:

- De resultaten van een onderzoek naar bestaande INSPIRE-extensies en een <a href="https://inspire-extensions.wetransform.to/models/index.html" target="_blank">overzicht van bestaande extensies</a>.
- Een overzicht van <a href="https://inspire-extensions.wetransform.to/patterns/index.html" target="_blank">*extension patterns*</a>, waarin bepaalde ontwikkelpatronen beschreven worden.
- Een <a href="https://inspire-extensions.wetransform.to/tutorial/tutorial.html" target="_blank">tutorial</a> waarin stapsgewijs wordt beschreven hoe een extension ontwikkeld kan worden.

Ook door het uitbreiden van [codelijsten](#codelijsten) kan een model rijker gemaakt worden.

### Prioritaire datasets

#### Prioritaire datasets voor e-reporting
In 2017 heeft de Europese Commissie een fitness check afgerond over Environmental Monitoring en Reporting. Daarbij is de INSPIRE richtlijn aangewezen als instrument met een groot potentieel om het rapportageproces over milieurichtlijnen te stroomlijnen. Vanuit INSPIRE is vervolgens aan de lidstaten gevraagd om ervoor te zorgen dat voor e-reporting relevante datasets via INSPIRE beschikbaar komen. Samen met het European Environmental Agency (EEA) is per milieurichtlijn een lijst opgesteld van te leveren datasets, de zogenoemde <a href="https://github.com/INSPIRE-MIF/need-driven-data-prioritisation/tree/main/documents#rolling-priority-list-of-data-sets" target="_blank">“Priority list of datasets for e-Reporting”</a>. Dit is een dynamische lijst.

**Hoe zijn de prioritaire datasets te vinden?**

Alle Nederlandse prioritaire datasets voor e-reporting zijn vermeld in het <a href="https://inspireaanmerking.nl/" target="_blank">INSPIRE aanmerkingsregister</a>. In het Europese Geoportal zijn de datasets te vinden via de <a href="https://inspire-geoportal.ec.europa.eu/pdv_home.html" target="_blank">*Priority Data Sets Viewer*</a>. De dataproviders moeten hiervoor een extra trefwoord(en) opnemen in de [metadata van de dataset](#prioritaire-datasets-0) van de prioritaire datasets. Via de viewer kun je per lidstaat, milieudomein of via de verschillende milieurichtlijnen de datasets vinden.

#### Uitbreiding prioritaire datasets
In het <a href="https://wikis.ec.europa.eu/display/InspireMIG/INSPIRE+work+programme+2021-24" target="_blank">Europese INSPIRE werkprogramma 2021-2024</a> worden de INSPIRE prioritaire datasets verder uitgebreid. Action 2.1 '*Need-driven data prioritisation*' is gedefinieerd met als doel de verdere implementatie (beschikbaarheid van gegevens en diensten, toegankelijkheid en interoperabiliteit) van de richtlijn te stimuleren door een reële vraag en tastbare use-cases. De methode voor het prioriteren van gegevens zou bestaan uit het selecteren van die datasets die voldoen aan de concrete behoeften van de stakeholders (lokale, regionale, nationale en Europese overheden) en waarvoor interoperabiliteit moet worden nagestreefd. 
Er zijn momenteel verschillende lopende initiatieven en projecten die de mogelijkheid onderzoeken om de INSPIRE-infrastructuur rechtstreeks te gebruiken voor het creëren van pan-Europese datasets en toepassingen (bijv. Eurostat-projecten, Copernicus in-situ-activiteiten, IACS-gegevensuitwisseling). Bovendien moet bij het prioriteren van de datasets ook rekening worden gehouden met de <a href="https://geonovum.github.io/eu_regelingen_datastrategie/" target="_blank">nieuwe politieke agenda en opkomende wettelijke kaders</a>, zoals de Europese dataspaces met de Green Deal dataspace en de *High value datasets* onder de Open Data Richtlijn.

De prioritaire datasetlijsten voor deze nieuwe ontwikkelingen zijn op dit moment nog niet definitief beschikbaar. Wel zijn de volgende prioriteiten benoemd:
- Referentie datasets (met name de INSPIRE thema's uit Annex I).
- <a href="https://geonovum.github.io/eu_regelingen_datastrategie/#high-value-data-lijst" target="_blank"> High value datasets</a> van de Open Data Richtlijn;
- IACS datasets (van DG AGRI). De technische specificatie voor het ontsluiten van deze datasets via de INSPIRE infrastructuur, is <a href="https://marswiki.jrc.ec.europa.eu/wikicap/images/f/f8/DS-CDP-2019-04_REV2_TechnicalGuideline_IacsSpatialDataSharing_Part1_Final.pdf" target="_blank"> hier</a> beschikbaar.

Meer informatie over Action 2.1 is te vinden op de <a href="https://github.com/INSPIRE-MIF/need-driven-data-prioritisation" target="_blank">Github Repository for INSPIRE MIWP Action 2.1 'Need-driven data prioritisation'</a>.


## Dataharmonisatie
De dataharmonisatie INSPIRE beoogt het ontsluiten van de aangemerkte datasets conform de INSPIRE-dataspecificaties. Letterlijk betekent harmoniseren “op elkaar afstemmen”. Dataharmonisatie wordt in de context van INSPIRE gedefinieerd als het vertalen (mappen) van de data zoals ze opgeslagen zijn bij de dataprovider (‘as-is’) naar een INSPIRE-conforme structuur. Sommige partijen definiëren dataharmonisatie ruimer. In dat geval heeft dataharmonisatie ook een beleidskundige dimensie. Dit is bijvoorbeeld het geval bij de provincies. Zij bieden de gegevens over het Natuurnetwerk Nederland niet twaalf keer afzonderlijk aan, maar slechts één keer landsdekkend. Voordat de data "gemapt" kon worden, bleek interne beleidskundige harmonisatie nodig.

Op deze handreiking gaat het over dataharmonisatie in technisch-inhoudelijke zin; het beleidskundige perspectief blijft buiten beschouwing.

### Documentatie dataharmonisatie
In de onderstaande tabel staan de belangrijkste INSPIRE-documenten voor de dataharmonisatie:

|Titel | Versie | Datum | Opmerking |
|-----------------|-------------|-------------|-------------|
| <a href="https://inspire.ec.europa.eu/data-specifications/2892" target="_blank">Dataspecificaties</a> | 4.0  | 2017-04-01   | Dataspecificaties voor alle themas in UML, GML, Feature Catalogue en Code list dictionaries voor voor Annex I, II en III  |
| <a href="https://inspire.ec.europa.eu/schemas/" target="_blank">GML Application schemas</a> | 4.0  |    | GML applicatie schema's voor alle themas   |
| <a href="https://inspire.ec.europa.eu/codelist" target="_blank">Codelijstregister</a>  |  |    | Bevat de codelijsten en hun waarden  |
| <a href="https://inspire.ec.europa.eu/documents/inspire-generic-conceptual-model" target="_blank">INSPIRE Generic Conceptual Model (GCM; D2.5)</a> | 3.4   | 2014-04-08   |Basismodel met hierin de voor alle dataspecificaties relevante ‘basis typen’.   |

Daarnaast zijn de onderstaande documenten ook handig bij dataharmonisatie:

|Titel | Versie | Datum | Opmerking |
|-----------------|-------------|-------------|-------------|
| <a href="https://inspire.ec.europa.eu/data-model/approved/r4618-ir/html/index.htm?" target="_blank">INSPIRE datamodellen (UML)</a> | r 4618  | 2011-02-06  |Hier staan alle datamodellen uit de INSPIRE dataspecificaties overzichtelijk bij elkaar. De modellen die hier genoemd worden in IR's zijn definitief (*approved*). Dit geldt niet voor de *extended* delen (die zijn geen onderdeel van de IR's, maar wel van dataspecificaties) (*draft*)   |
|<a href="https://inspire.ec.europa.eu/documents/inspire-data-specifications-%E2%80%93-base-models-%E2%80%93-generic-network-model" target="_blank">INSPIRE Base model - Generic Network Model (GNM)</a> |1.0rc3|2013-04-05|Algemeen basismodel voor netwerken zoals bijvoorbeeld vervoersnetwerken|
|<a href="https://inspire.ec.europa.eu/documents/guidelines-encoding-spatial-data" target="_blank">Guidelines for the Encoding of Spatial Data (D2.7)</a>  | 3.3  | 2014-04-08   | Het document beschrijft de algemene encoding richtlijnen voor INSPIRE  |
<a href="https://inspire.ec.europa.eu/id/document/tg/d2.9-o%26m-swe" target="_blank">Guidelines for the use of Observations & Measurements and Sensor Web Enablement-related standards in INSPIRE</a>| 3.0|2016-12-16|Richtlijnen voor het gebruik van "Observations & Measurements and Sensor Web Enablement-related standards in INSPIRE"|
| <a href="https://inspire.ec.europa.eu/theme" target="_blank">Definition of Annex Themes and Scope</a>  |   |    | In het INSPIRE thema register staan per INSPIRE thema de definitie (in Nederlands) en een uitgebreidere beschrijving  |
|<a href="https://inspire.ec.europa.eu/portfolio/good-practice-library" target="_blank">Good Practice Library</a>|||Hier worden good practises beschreven m.b.t. de implementatie van INSPIRE, m.b.t. tools en technieken die nuttig zijn voor de implementatie van INSPIRE of m.b.t. technologieën die voortbouwen op INSPIRE|

### Generic Conceptual Model
Om data consistent te kunnen uitwisselen beschrijft INSPIRE in de INSPIRE dataspecificaties voor elk thema een datamodel van de gegevens die uitgewisseld moeten worden. Daarnaast beschrijft het ook een bestandsformaat waarin de gegevens moeten worden uitgewisseld. Algemene specificaties (die voor alle thema's hetzelfde zijn) worden beschreven in het <a href="https://inspire.ec.europa.eu/documents/inspire-generic-conceptual-model" target="_blank">Generic Conceptual Model (GCM)</a>. Een INSPIRE dataspecificatie moet dus altijd gelezen worden in de context van dit generieke conceptuele model.

### INSPIRE dataspecificaties
Voor alle 34 INSPIRE-thema's is door de EU een INSPIRE dataspecificatie vastgelegd die beschrijft welke gegevens en op welke manier deze gegevens moeten worden geleverd. Zoals in de tabel met belangrijke documenten is aangegeven, zijn de INSPIRE dataspecificaties <a href="https://inspire.ec.europa.eu/data-specifications/2892" target="_blank">hier</a> te vinden. 

De INSPIRE dataspecificaties zijn per annex gegroepeerd:

|INSPIRE thema's per annex| |
| ----------- | ----------- |
|**Annex I** ||
|Coordinate Reference Systems | Geographical Grid Systems|
| Geographical Names | Administrative Units |
|Addresses| Cadastral Parcels|
|Transport Networks|Hydrography|
|Protected Sites||
|**Annex II**| |
|Elevation|Land Cover|
|Orthoimagery|Geology|
|**Annex III**| |
|Statistical Units|Buildings|
|Soil|Land Use|
|Human Health and Safety|Utility and Government Services|
|Environmental Monitoring Facilities|Production and Industrial Facilities|
|Agricultural and Aquaculture Facilities|Population Distribution|
|Area Management/Restriction/Regulation Zones and Reporting Units|Natural Risk Zones|
|Atmospheric Conditions|Meteorological Geographical Features|
|Oceanographic geographical features|Sea Regions|
|Bio-geographical Regions|Habitats and Biotopes|
|Species Distribution|Energy Resources |
|Mineral Resources||


In de figuur hieronder staan alle 34 thema's in het INSPIRE landschap beschreven. 

![INSPIRElandschap](media/inspire_wereld_gegevens.png "INSPIRE-landschap")

Wanneer je niet zeker bent onder welk INSPIRE-thema een bepaalde dataset valt, is de tool <a href="https://inspire-regadmin.jrc.ec.europa.eu/dataspecification/FindYourScope.action" target="_blank">Find your scope</a> erg nuttig. Naast de mogelijkheid om het juiste INSPIRE-thema te vinden, biedt deze tool ook een overzicht van alle objecten die binnen INSPIRE zijn gedefinieerd.


## Principes dataharmonisatie
Een van de voorwaarden voor het kunnen uitwisselen van ruimtelijke data is dat alle datasets bepaalde kenmerken delen. Zo moeten de opbouw van ruimtelijke objecten, definities van objecten en verplichte attributen over alle lidstaten uniform zijn om via services uitgewisseld te kunnen worden en onderling vergeleken te kunnen worden. Dit wordt ‘interoperabiliteit’ genoemd en de handelingen die ondernomen worden om interoperabiliteit te bereiken ‘dataharmonisatie’. INSPIRE zorgt voor een hoge mate van interoperabiliteit door per thema een standaard dataspecificatie te beschrijven die door alle lidstaten geïmplementeerd moet worden. Dit betekent dat een dataprovider zijn gegevens moet vertalen naar de INSPIRE dataspecificatie. Het harmoniseren is grotendeels afhankelijk van de structuur van de brondata, zoals deze door de dataprovider beheerd wordt. Wordt deze file-based beheerd, of in een ruimtelijke database? Hoe ziet de structuur van de data eruit? Deze vragen kunnen alleen door de dataprovider zelf beantwoord worden.

## Fasen
Het harmoniseren naar INSPIRE dataspecificaties, kent grofweg twee fasen:
1. **Semantisch harmoniseren**: hoe vallen de begrippen en concepten in het informatiemodel van de dataprovider te vertalen naar de klasses en definities zoals beschreven in de INSPIRE dataspecificatie.
2. **Technisch harmoniseren**: het converteren van het bestaande dataformaat naar het uitwisselformaat GML.

Dit is vooral een schematische indeling. In het werkproces zullen (1) en (2) bij veel dataproviders in één slag plaatsvinden. Onder het harmoniseren vallen ook aspecten als het zorg dragen voor valide geometrieën en *cross-boundary harmonisation*. Meer informatie over deze aspecten staat beschreven bij het onderdeel [geometrie](#geometrie).

### Semantisch harmoniseren
Het semantisch harmoniseren is vooral een kwestie van het vertalen van definities van de dataprovider naar de definities van INSPIRE. Dit is typisch werk voor een domeinexpert van de dataprovider die de definities in de betreffende dataspecificaties interpreteert en bedenkt hoe de eigen gegevens in dit model in te passen zijn. In veel gevallen zal het lastig zijn voor een domeinexpert om de technische INSPIRE-documentatie te doorgronden.

### Technisch harmoniseren
Voor het technisch harmoniseren zijn er verschillende mogelijkheden:
1. Harmonisatie op niveau van ruimtelijke databases.
2. Ruimtelijke ETL-processen (*Spatial ETL*) met behulp van specifieke ETL-software (die met ruimtelijke data overweg kan).
3. ‘On the fly’ harmoniseren en converteren.

#### Ruimtelijke database
Eén manier om data te harmoniseren is om op database-niveau scripts te ontwikkelen, die de datastructuur van de voor INSPIRE aangemerkte data, converteren naar de vorm en inhoud die conform het INSPIRE-applicatieschema is. Dit kan met behulp van SQL en de procedurele taal die de database hanteert. De procedurele taal is afhankelijk van de database; elke fabrikant kent zijn eigen variant. Hiervoor is specialistische kennis van een database-specialist nodig, die (a) met ruimtelijke databases overweg kan, en (b) *Data Definition Language* (DDL)-scripts kan ontwikkelen.

#### Ruimtelijke ETL-processen
Ruimtelijke ETL-processen met behulp van specifieke ETL-software wordt ook vaak *Spatial ETL* of *spatial data exchange* genoemd. ETL staat voor Extract, Transform en Load. Hiermee worden technieken bedoeld, die ruimtelijke data kunnen converteren.
- **Extract**: inlezen van het bronformaat;
- **Transform**: het aanpassen van de datastructuur;
- **Load**: het wegschrijven (en wellicht naar een ander formaat).

Bij het harmoniseren van de data in het kader van INSPIRE is het vooral de ‘T’ (van Transform) die van belang is. In dit proces vinden wijzigingen plaats in de data-structuur zoals het wijzigen van attribuutnamen, weghalen van attributen, wijzigen van datatypen, gebruik van domeinwaarden (codelijsten) of geometrie-validaties.


![etlplaatje](media/Etl.gif "ETL-stappen te nemen voor INSPIRE")

Er zijn verschillende bedrijven die ETL software bouwen die specifiek gericht is op de INSPIRE dataproviders. Een aantal populaire ETL software tools zijn:
- <a href="https://www.safe.com/" target="_blank">FME</a>;
- <a href="https://www.wetransform.to/products/halestudio/" target="_blank">HALE</a>; RVO heeft voor het gebruik van HALE een beknopte <a href="https://github.com/Geonovum/inspire-wiki/blob/main/docs/Handleiding_Gebruik_HALE_voor_INSPIRE_dataharmonisatie_120618.pdf" target="_blank">handleiding</a> geschreven;
- <a href="https://www.talend.com/resources/what-is-etl/" target="_blank">Talend</a>;
- <a href="https://www.altova.com/mapforce" target="_blank">MapForce</a>;
- <a href="https://snowflakesoftware.com/geospatial-products/" target="_blank">GO Publisher</a>;
- <a href="https://desktop.arcgis.com/en/arcmap/latest/extensions/data-interoperability/spatial-etl-tools.htm" target="_blank">ArcGIS Pro</a>.


#### On the fly harmoniseren en converteren
Bovenstaande principes zijn gericht op het klaarzetten van data alvorens ze te ontsluiten (ook wel *pre-defined*). Dat hoeft niet in alle gevallen. Het is ook mogelijk om data *on the fly* te harmoniseren en converteren. Voor grote datasets is dit echter geen bruikbare toepassing, omdat de performance van de service niet geheel zal voldoen. Waar deze grens ligt en bij welke dataset-grootte het breekpunt tussen ‘on the fly’ en ‘pre-defined’ ligt, is alleen op basis van testresultaten vast te stellen. Houd bij het maken van deze keuze ook rekening met de gestelde eisen aan de kwaliteit van de performance, de zogenaamde [*quality of service*](#quality-of-services).

### Welke optie toepassen?
Dit hangt van een aantal organisatie-gebonden factoren af:

- Aanwezige kennis
- Aanwezige software
- Beschikbare tijd

De belangrijkste factor is de kennis die binnen een organisatie aanwezig is. Zijn er binnen de organisatie database-specialisten aanwezig, die verstand hebben van ruimtelijke databases? Of zijn er GIS-expers die al vaker met ETL software tools hebben gewerkt? Dit kan ook betekenen dat er wellicht gekozen moet worden voor uitbesteding. De ‘spin-off’ van het zelf opdoen van kennis is een zijdelingse overweging die bij de keuze van harmonisatie-principe van belang kan zijn. Voor INSPIRE-gerichte harmonisaties is veel kennis nodig. Deze kennis kan voor andere GEO-ICT projecten ook van praktisch belang zijn, bijvoorbeeld omdat het de kennis van een tool verhoogt. Dit kan een overweging zijn om een kennis-domein te versterken en hierin te investeren.


## Het InspireId
Volgens de richtlijnen van INSPIRE moet elk object (*feature*) voorzien worden van een unieke identificatie: het InspireId. Zo kunnen derden ondubbelzinnig aan het object refereren. Dataproviders dienen dus – buiten eventuele eigen Id’s (die in de eigen organisatie wordt gebruikt) – de ruimtelijke objecten van een unieke INSPIRE identificatie te voorzien. 

De unieke INSPIRE identifier heet het InspireId. Belangrijk is, dat de identifier **uniek** en **persistent** moet zijn. Persistent betekent dat de identifier gedurende de levensduur van het object ongewijzigd moet blijven. 

Een InspireId bestaat uit de volgende drie onderdelen:
- Namespace (verplicht);
- LocalId (verplicht);
- VersionId (optioneel).

### Namespace
Een namespace heeft als belangrijkste doel dat het de ruimte definieert waarbinnen de [localId](#LocalId) uniek is. Om te voorkomen dat verschillende dataproviders dezelfde namespace gebruiken, en om consistentie te verkrijgen, is er in Nederland (en Europa) een zogenaamd Namespaceregister opgezet. De namespace wordt per **dataset** ingericht. De namespace is onderdeel van het InspireId en moet derhalve ook in de data voorkomen.

De Nederlandse namespaces worden geregistreerd in het Nederlandse INSPIRE Namespaceregister. 

#### INSPIRE Namespaceregister
Het INSPIRE Namespaceregister is <a href="http://inspirelab.geonovum.nl/namespaces/" target="_blank">hier</a> te vinden. 

Let op! Het betreft een http-adres (i.p.v. een https-adres). Soms kan het zo zijn dat de browser niet goed het http-adres verwerkt en het register daardoor niet opent. Het kan soms helpen om de browsegegevens te wissen.

Het INSPIRE Namespaceregister bevat het <a href="http://inspirelab.geonovum.nl/namespaces/listnamespaces.php" target="_blank">overzicht</a> van reeds geregistreerde namespaces door Nederlandse INSPIRE dataproviders. 

Voor het registreren van namespaces is een account nodig. Deze accounts zijn aan te vragen via de [INSPIRE Helpdesk](#inspire-helpdesk) door een e-mail te sturen naar inspire@geonovum.nl. Na <a href="http://inspirelab.geonovum.nl/namespaces/login.php" target="_blank">inloggen</a> kunt je voor uw gegevensbron een nieuwe namespace registreren.


#### Richtlijnen voor namespaces
voor de INSPIRE namespaces gelden de volgende lexicografische spelregels (restricties):
- Gebruik alleen de volgende karakters in de namespace code: {"a"-"z","0"-"9", "-"};
- Gebruik alleen lowercase letters in de namespace code;
- Gebruik geen diacrieten in de namespace code, dus geen umlaut bijvoorbeeld;
- Begin namespace code met een letter;
- Gebruik minimaal 3 karakters. Lange namespace codes zijn niet wenselijk.


### LocalId
De LocalId is de unieke identifier voor een object (binnen een namespace). De dataprovider is verantwoordelijk voor het uitdelen van deze unieke identifiers (de localId). In het [Generic Conceptual Model](#generic-conceptual-model) staat in hoofdstuk 14 'Identifier management'een algemene uitleg beschreven over het gebruik van unieke identifiers. Per INSPIRE thema kunnen er nog specifieke uitbreidingen staan in de [INSPIRE dataspecificatie](#inspire-dataspecificaties) van het betreffende thema.

#### Uniform Resource Identifiers (URI's)
Uniform Resource Identifiers (URI's) zijn de gestandaardiseerde manier om op het internet objecten (bv. pagina's met informatie, datasets of afbeeldingen) uniek te identificeren. Dit kan door middel van een *Uniform Resource Name* (URN) of met een *Uniform Resource Locator* (URL). Bij een *Uniform Resource Name* (URN) krijgt een object een unieke naam toebedeeld. Bij een *Uniform Resource Locator* (URL) krijgt een object een adres waarmee het op internet kan worden gevonden (de ons welbekende website-adressen). 

Door URI's te gebruiken, kun je op een unieke manier naar een object verwijzen en ze daardoor uniek onderscheiden. Het advies met de huidige stand van zaken is om stabiele versleutelde HTTPS URI’s te gebruiken voor geo-objecten en datasets. Binnen INSPIRE en <a href="https://www.geonovum.nl/geo-standaarden/nen-3610-basismodel-voor-informatiemodellen" target="_blank">NEN3610 (Basismodel Geo-informatie)</a> is afgesproken om elk object op basis van de bestaande interne identifier een URI te geven, waarmee binnen de INSPIRE en NEN3610 context het object uniek te identificeren én op te vragen is. Lees voor meer informatie hierover de <a href="https://www.geonovum.nl/themas/uri-strategie" target="_blank">nationale URI-strategie</a>.

### VersionId
Een InspireId kan ook een (optioneel) versionId hebben. Dit versienummer kan gebruikt worden als er van hetzelfde object op verschillende tijdstippen verschillende versies in omloop zijn die van elkaar onderscheiden moeten worden.

## Codelijsten
INSPIRE-data wordt mede aan de hand van codelijsten en opsommingen (*enumerations*) geharmoniseerd. Beide worden gebruik om een lijstje toegestane waarden voor een attribuut te bepalen. In het geval van een enumeration zijn de toegestane waarden bekend vanaf het moment dat het model gemaakt is; de waarden maken deel uit van het model. Meestal gaat het om kleine lijstjes waar geen discussie over mogelijk is. Bij codelijsten zijn de toegestane waarden nog niet (allemaal) bekend op het moment dat het model gemaakt wordt; de toegestane waarden worden op een andere manier bepaald. Er zijn een verschillende regimes waarmee de waarden van een codelijst beheerd kunnen worden. Een uitgebreide beschrijving hiervan staat in paragraaf 9.5.2.2 *The code list classifiers* van het [Generic Conceptual Model](#generic-conceptual-model). Codelijsten voor de INSPIRE thema's staan in het Europese of Nederlandse [codelijstregister](#Codelijstregister) en in Annex C van de betreffende [INSPIRE dataspecificatie](#inspire-dataspecificaties). Voor sommige thema's is het verplicht om gebruik te maken van deze codelijsten. 

### Uitbreidbaarheid van codelijsten
Iedere INSPIRE-codelijst valt onder een van de volgende uitbreidingsregimes:
- **none**: deze codelijsten zijn niet uitbreidbaar. Alleen waarden zoals beschreven in de *Implementing Rule* (IR) kunnen worden gebruikt.
- **narrower**: bij deze codelijsten mogen de dataproviders zelf nieuwe waarden toevoegen, zolang de nieuwe waarden maar meer specifiek zijn dan de waarden die in de IR worden gegeven.
- **open**: een dataprovider mag waarden uit de centrale codelist gebruiken, maar mag zelf ook eigen waarden bedenken.
- **any**: in dit geval zijn geen waarden bekend in de centrale codelijst en moet de data provider zijn eigen codelijst publiceren.

### Codelijstregister
In het  <a href="http://inspire.ec.europa.eu/codelist/" target="_blank">Europese INSPIRE codelijstregister</a> worden de waarden van de door de EU beheerde codelijsten gepubliceerd. Bij een codelijst is altijd een verwijzing opgenomen naar dit Europese INSPIRE codelijstregister. 

Wanneer een dataprovider zijn eigen uitbreiding op een codelist definieert, moeten deze in een lokaal codelijstregister beheerd worden. Hiervoor kan het <a href="http://inspireregister.nl/codelijst" target="_blank">INSPIRE codelijstregister voor Nederland</a> worden gebruikt. Voor het registreren van codelijsten op het Nederlandse codelijstregister is een account nodig. Deze accounts zijn aan te vragen via de [INSPIRE Helpdesk](#inspire-helpdesk) door een e-mail te sturen naar inspire@geonovum.nl. Na <a href="http://inspireregister.nl:8080/re3gistry2/login" target="_blank">inloggen</a> kunt je voor uw gegevensbron een nieuwe codelijst registreren en vullen. Een Engelstalige handleiding voor het gebruik van het codelijstregister is <a href="https://github.com/ec-jrc/re3gistry/blob/master/documentation/user-manual.md" target="_blank">hier</a> te vinden.

## Portrayal
*Portrayal* betreft voornamelijk de grafische weergave van de data in een [viewservice](#view-service), maar kan ook in GIS-applicaties gebruikt worden. De portayal wordt beschreven in de [INSPIRE dataspecificatie](#inspire-dataspecificaties), meestal, in hoofdstuk 11 en is dus per INSPIRE thema verschillend. De portrayal conform de INSPIRE dataspecificatie kan dus pas ingesteld worden in een viewservice nadat er geharmoniseerd is. Deze portrayal-richtlijnen in de INSPIRE dataspecificaties zijn opgesteld om  consistentie in de INSPIRE datasets te brengen en ze over de verschillende lidstaten ‘leesbaar’ te houden in de viewservice; het gaat niet om het maken van ‘mooie kaarten’ maar om het leesbaar houden van de data.

Portrayal beschreven in INSPIRE dataspecificatie bestaat uit de volgende onderdelen:
- **Layer types**: De INSPIRE *view services* kennen een specifieke, thema-afhankelijke opbouw. Soms wordt een INSPIRE thema in één layer getoond, maar dat is niet altijd het geval. De paragraaf *Layers to be provided by INSPIRE view services* geeft de definitie van de layer-opbouw voor de viewservice van het betreffende INSPIRE thema. In deze paragraaf wordt het volgende van de viewservice bepaald:
	- Layer name
	- Layer title
	- Spatial Object Type(s)
	- Keywords
- **Layer organisation**: In de subparagraaf *Layers organisation* kan een bepaalde layer aggregation binnen een INSPIRE thema worden aangegeven door een groepering van bepaalde layers (*layergroups*).
- **Layer Styles**: De paragraaf *Styles required to be supported by INSPIRE view services* beschrijft de presentatie van de view layers. Kleuren, lijndikte, symbolen, presentatie-regels m.b.t. tot bepaalde groepen objecten worden in deze parafraaf beschreven. De INSPIRE dataspecificaties beschrijven in de paragraaaf voor de *default style(s)* ook de SLD-code. Dat geldt ook voor de *Other styles*, maar deze worden niet bij elk INSPIRE thema geimplementeerd.
- **Symbology**: Beschrijft de te gebuiken symbolen.

Indien de [INSPIRE dataspecificatie](#inspire-dataspecificaties) geen default style aanbiedt, definieert het [Generic Conceptual Model](#generic-conceptual-model) de style in de viewservice:
- Punt: grey square, 6 px;
- Lijn: zwarte solid lijn, 1 px;
- Vlak: zwarte solid lijn, 1px, grijs gevuld.

De standaarden voor de presentatie van data zijn:
- [standaard] - [namespace prefix]
- OGC Styled-Layer Descriptor - <a href="http://www.opengis.net/sld" target="_blank">sld</a> (WMS/SLD 1.1)
- OGC Symbology Standards - <a href="http://www.opengis.net/se" target="_blank">se</a> (SE 1.1)
- OGC Filter Encoding Standards - <a href="http://www.opengis.net/ogc" target="_blank">ogc</a> (FE 1.1)


## Data capture
Met *data capture rules* worden INSPIRE-afspraken/regels omtrent de toepassingsschaal bedoeld. Voor sommige datasets is het nodig om resoluties te specificeren, met  gevolgen voor het detailniveau van de digitale kaart. Een dataset van een schaal van 1:100.000 kent andere details dan dezelfde dataset met een schaal van 1:10.000. De data capturing rules worden per INSPIRE thema gedefinieerd. Sommige INSPIRE thema’s hebben geen specifieke regels, terwijl anderen zeer specifiek zijn. 

Voor de specifieke afspraken wordt naar het hoofdstuk 'Data Capture' in de [INSPIRE dataspecificatie](#inspire-dataspecificaties) van het betreffende thema verwezen (meestal hoofdstuk 10).


## Geometrie
In de [INSPIRE dataspecificaties](#inspire-dataspecificaties) en het [Generic Conceptual Model](#generic-conceptual-model) wordt aangegeven welke geometrietypen zijn toegestaan. In de meeste INSPIRE dataspecificaties wordt verwezen naar de *simple feature* specificatie van OGC, waarin exact beschreven staat hoe een valide geometrie eruit moet zien. In een aantal INSPIRE dataspecificaties worden ook geometrieën beschreven, die buiten de simple features vallen (zoals 3D-objecten).

Geometrische objecten moeten voldoen aan de regels zoals deze door het OGC worden gesteld. De [Europese INSPIRE validator](#validatie) kan helpen bij het detecteren van invalide geometrieën. Via deze Europese INSPIRE validator kan een dataset van een dataprovider getest worden op de ‘INSPIRE-conformiteit’. Deze validatie test niet alleen de geometrie, maar test ook op het applicatieschema (.xsd) van het betreffende INSPIRE thema.

Wanneer je alleen de geometrie wilt valideren, zijn er verschillende opties die conform de OGC-regels testen, zowel open-source tools (bijvoorbeeld <a href="https://github.com/locationtech/jts" target="_blank">JavaTopologySuite (JTS)</a>) als closed-source tools.


Naast de geometrische benadering van 'valide objecten' zijn er ook specifieke regels voor bepaalde INSPIRE thema's zoals in de volgende twee subparagrafen staat beschreven.

### Aansluitende netwerken
Binnen de INSPIRE thema's **Hydrografie** en **Vervoersnetwerken** zijn er aanvullende eisen gedefinieerd over het op elkaar aansluiten van deze netwerken (voorbeeld: wegen op waterwegen op spoor). Hiervoor is een mechanisme uitgewerkt waarin aangegeven moet worden welke knooppunten op elkaar horen aan te sluiten. Hiermee is het mogelijk de verschillende netwerken te koppelen zonder dat deze fysiek al op elkaar liggen. Dit moet op datasetniveau worden opgepakt.

De aanvullende eisen hiervoor staan in de subparagraaf 'Logical Consistency – Topological consistency' van de INSPIRE dataspecificaties: 
- voor het INSPIRE thema **Hydrografie** is dit in paragraaf 7.1.5 van de betreffende <a href="https://inspire.ec.europa.eu/id/document/tg/hy" target="_blank">dataspecificatie</a>;
- voor het INSPIRE thema **Vervoersnetwerken** is dit in paragraaf 7.1.6 van de betreffende <a href="https://inspire.ec.europa.eu/id/document/tg/tn" target="_blank">dataspecificatie</a>. 

### Cross-boundary harmonisatie
Bij het gebruik van geodata over lands-, regio- en administratieve grenzen heen kunnen verschillende soorten fouten optreden, o.a. door:
- Het hanteren van verschillende classificaties aan beide kanten van de grens;
- Het gebruik van een verschillend *Level of Detail (LoD)* bij dezelfde thematiek;
- Verschillende interpretatie van de grens;
- Overlappende objecten en geometrische verschuivingen.

Onderstaande figuur geeft dit grafisch weer:

![grensproblemen](media/grensproblemen.png "Gebruik van geodata over grenzen heen kan leiden tot verschillende soorten fouten")

Het verbeteren van grensoverstijgende onregelmatigheden kan alleen op basis van wederzijdse afstemming en goedkeuring plaatsvinden. Het is de verantwoordelijkheid van de aangemerkte organisaties om dit af te stemmen met de buurlanden. 

INSPIRE geeft op verschillende plaatsen aan welke zogenaamde *edge matching*-technieken gebruikt kunnen worden om met deze situaties om te gaan:
- Annex B 'Management of connections at international boundaries' van <a href="https://inspire.ec.europa.eu/reports/ImplementingRules/DataSpecifications/D2.6_v3.0.pdf" target="_blank">Methodology for the development of data specifications (D2.6)</a> beschrijft verschillende situaties en welke oplossingen INSPIRE adviseert.
- De <a href="https://inspire.ec.europa.eu/id/document/tg/hy" target="_blank">dataspecificatie</a> van **Hydrografie** beschrijft in paragraaf 10.2.7 de grensoverschrijdende dataharmonisatie situaties.
- Ook bij het thema **Vervoersnetwerken** speelt het probleem van de edge-matching. Voor de grensoverschrijdende connectiviteit (verbindingen tussen netwerken over lands- en regiogrenzen heen) wordt hier gebruik van een mechanisme dat wordt geleverd door het [INSPIRE Base model - Generic Network Model (GNM)](#documentatie-dataharmonisatie).
- De INSPIRE dataspecificaties van de andere thema's kennen geen specifieke aandacht voor dit onderwerp. Dat wil overigens niet zeggen dat de problematiek van cross-boundary harmonisation daar niet zal voorkomen.

## Datavalidatie
Datavalidatie is een mechanisme om te controleren of een bepaalde dataset aan de INSPIRE specificaties voldoet en is een onmisbaar hulpmiddel om tot een correcte implementatie te komen. Het is daarmee een onmisbare toets op de vraag of de dataharmonisatie goed is uitgevoerd.
Datavalidatie wordt uitgevoerd met de Europese INSPIRE-validator. Lees meer over dit onderwerp in het hoofdstuk [Validatie](#validatie) en voor datavalidatie ook specifiek de paragraaf [Conformance classes datavalidatie](#conformance-classes-datavalidatie).
