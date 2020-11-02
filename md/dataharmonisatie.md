# Dataharmonisatie
De dataharmonisatie INSPIRE beoogt het ontsluiten van de aangemerkte datasets conform de INSPIRE-dataspecificaties. Letterlijk betekent harmoniseren “op elkaar afstemmen”. Dataharmonisatie wordt in de context van INSPIRE gedefinieerd als het vertalen (mappen) van de data zoals ze opgeslagen zijn bij de dataprovider (‘as-is’) naar een INSPIRE-conforme structuur. Sommige partijen definiëren dataharmonisatie ruimer. In dat geval heeft dataharmonisatie ook een beleidskundige dimensie. Dit is bijvoorbeeld het geval bij de provincies. Zij bieden de gegevens over het Natuurnetwerk Nederland niet twaalf keer afzonderlijk aan, maar slechts één keer landsdekkend. Voordat de data "gemapt" kon worden, bleek interne beleidskundige harmonisatie nodig.

Op deze wiki gaat het over dataharmonisatie in technisch-inhoudelijke zin; het beleidskundige perspectief blijft buiten beschouwing.

## Documentatie dataharmonisatie
Voor ieder INSPIRE-thema is door de EU een dataspecificatie vastgelegd die beschrijft welke gegevens en op welke manier deze gegevens moeten worden geleverd. Dit is vastgelegd in een Dataspecificatie. Deze dataspecificaties worden gepubliceerd op het [officiële INSPIRE-portaal](https://inspire.ec.europa.eu/). Op dit portaal vind je de meest actuele dataspecificaties van INSPIRE: [data-specifications](https://inspire.ec.europa.eu/data-specifications/2892).

Met ingang van 10 December 2013 zijn er van alle thema's stabiele versies van de dataspecificaties beschikbaar. Deze zijn te vinden via onderstaande links. De publicatie van definitieve versies van data specificaties voor annex II en III resulteert ook in gewijzigde specificaties voor annex I omdat in de oorspronkelijke annex I middels candidate types en placeholders werd verwezen naar de nog niet ontwikkelde specificaties van annex II en III. Deze voorziene wijziging van de annex I specificaties is op 17 april 2014 gepubliceerd en resulteert in data specificaties met versie nummers 3.1 voor de annex I thema's.

|Titel | Versie | Datum | Opmerking |
|-----------------|-------------|-------------|-------------|
| [Dataspecificaties](https://inspire.ec.europa.eu/data-specifications/2892)  | 4.0  | 2017-04-01   | Data specificaties voor alle themas in UML,GML,Feature Catalogue en Code list dictionaries voor voor Annex I, II en III  |
| [Definition of Annex Themes and Scope](https://inspire.ec.europa.eu/reports/ImplementingRules/DataSpecifications/D2.3_Definition_of_Annex_Themes_and_scope_v3.0.pdf) (D2.3)  | 3.0  | 2008-10-03   | -   |
| [INSPIRE Generic Conceptual Model](https://inspire.ec.europa.eu/documents/Data_Specifications/D2.5_v3.4rc3.pdf) (D2.5)  | 3.4rc3   | 2013-04-05   | Basismodel met hierin de voor alle dataspecificaties relevante ‘basis typen’.   |
| [Methodology for the development of data specifications: baseline version](https://inspire.ec.europa.eu/reports/ImplementingRules/DataSpecifications/D2.6_v3.0.pdf) (D2.6)  | 3.0   | 2008-06-20	   | -   |
| [Guidelines for the Encoding of Spatial Data](https://inspire.ec.europa.eu/file/1412/download?token=lHYwKEk5) (D2.7)  | 	3.3   | 2014-04-08   | -   |
| [Data models](http://inspire.ec.europa.eu/Data-Models/Data-Specifications/2892) | 	r 4618   | 	2011-02-06  | Delen van modellen die genoemd worden in IR's zijn definitief (*approved*). Dit geldt niet voor de *extended* delen (geen onderdeel IR's, wel van dataspecificaties) (*draft*)   |

### Find your scope
Wanneer je niet zeker bent onder welk INSPIRE-thema een bepaalde dataset valt, is de tool [find your scope](https://inspire-regadmin.jrc.ec.europa.eu/dataspecification/FindYourScope.action) erg nuttig. Naast de mogelijkheid om het juiste INSPIRE-thema te vinden, biedt deze tool ook een overzicht van alle objecten die binnen INSPIRE zijn gedefinieerd.

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
- [HALE](https://www.wetransform.to/products/halestudio/); Een beknopte handleiding, gemaakt door RVO, is [hier te vinden](https://wiki.geonovum.nl/images/Handleiding_Gebruik_HALE_voor_INSPIRE_dataharmonisatie_120618.pdf).
- [Talend](https://www.talend.com/resources/what-is-etl/);
- [MapForce](https://www.altova.com/mapforce);
- [GO Publisher](https://snowflakesoftware.com/geospatial-products/);

Een volledige lijst met INSPIRE-tools is terug te vinden op de pagina [INSPIRE tools](https://inspire-reference.jrc.ec.europa.eu/tools). Hierop kan men op eenvoudige wijze alle ETL- maar ook andere tools terugvinden.

![etlplaatje](media/etl.gif "ETL-stappen te nemen voor INSPIRE")

#### On the fly converteren
Bovenstaande principes zijn gericht op het klaarzetten van data alvorens ze te ontsluiten (ook wel *pre-defined*). Dat hoeft niet in alle gevallen. Het is ook mogelijk om data *on the fly* te converteren. Let er echter op dat dit voor grote datasets geen bruikbare toepassing is omdat de performance van de service teveel te wensen over zal laten. Waar deze grens ligt en bij welke dataset-grootte het breekpunt tussen ‘on the fly’ en ‘pre-defined’ ligt, is alleen op basis van testresultaten vast te stellen.

### Welke optie toepassen?
Dit hangt van een aantal organisatie-gebonden factoren af:

- Aanwezige kennis
- Aanwezige software
- Beschikbare tijd

De belangrijkste factor is de kennis die binnen een organisatie aanwezig is. Zijn er binnen de organisatie database-specialisten aanwezig, die verstand hebben van ruimtelijke databases? Zijn er GIS-operators die al vaker met ETL tools werken? Dit betekent dus ook dat er wellicht gekozen moet worden voor uitbesteding.

De ‘spin-off’ is een zijdelingse overweging die bij de keuze van harmonisatie-principe van belang kan zijn. Voor INSPIRE-gerichte harmonisaties is veel kennis nodig. Deze kennis kan voor andere GEO-ICT projecten ook van praktisch belang zijn, bijvoorbeeld omdat het de kennis van een tool verhoogt. Dit kan een overweging zijn om een kennis-domein te versterken en hierin te investeren.

## As-is versus geharmoniseerd
Deze vraag is voorgelegd aan de EU commissie:

*What is the position of INSPIRE regarding the status of the view and download services serving the INSPIRE data ‘as is’ at the moment the harmonized data shall to be served? Are the data providers in the member states allowed to ‘pull out the plug’ after the view and download service offers harmonized data. Or are the view and download services serving the INSPIRE data ‘as is’ considered as SDSs? Or both? The data providers can decide themselves how to deal with this? Keep the service up or pull out the plug. Are you able to give us the reference to the Directive with respect to this issue?*

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
2. Het “RIJK en ARM”-scenario van de “arme geharmoniseerde dataset”. In dit scenario volgt de dataprovider de harmonisatie-eisen van INSPIRE en wordt de rijkere dataset tevens ‘as is’ ook aangeboden conform de INSPIRE-eisen voor netwerkdiensten, omdat relevante gebruikerswensen en use cases dit vereisen.
3. In het “RIJK”-scenario is de data set ‘as is’ volledig geharmoniseerd beschikbaar. Dit kan bereikt worden door een extensie te maken van het door INSPIRE voorgedragen geharmoniseerde model. De rijke gegevens worden dan toegevoegd aan het INSPIRE-model zodanig dat nog steeds wordt voldaan aan het INSPIRE-model. In dit geval zal de dataprovider slechts 1 geharmoniseerde, rijke dataset beschikbaar stellen, omdat relevante gebruikerswensen en use cases dit vereisen.

In onderstaande figuur zijn de 3 scenario’s bezien in het licht van de INSPIRE-richtlijn en de keuze mogelijkheden voor de dataproviders.

![rijkarmplaatje](media/rijk_arm_scenario.png "De verschillende mogelijkheden voor het aanbieden van as-is data ná harmonisatie en voor het aanbieden van geharmoniseerde data")

## Prioritaire datasets (e-reporting)
Sinds 2016 geeft de Europese Commissie prioriteit aan datasets die relevant zijn in het kader van de verplichte Europese rapporteringen m.b.t. het milieu, de zogenoemde “Priority list of datasets for e-Reporting”. Dit is een dynamische lijst. Naast de ontsluiting en het opmaken van metadata, hebben deze datasets ook wat betreft de dataharmonisatie prioriteit in harmonisatie. Uiteraard is dit binnen het INSPIRE-tijdschema voor de desbetreffende annex en voor as-is versus nieuwe datasets. Meer info is te vinden op de website van [JRC](https://ies-svn.jrc.ec.europa.eu/projects/2016-5/wiki).