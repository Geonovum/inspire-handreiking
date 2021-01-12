# Validatie

Een belangrijk aspect van een implementatie is de mogelijkheid deze te valideren en monitoren. Bij voorkeur gebeurt dit met geautomatiseerde processen, dan wel beschreven procedures. Validatie helpt dataproviders hun (meta)data en services te laten voldoen aan de INSPIRE Technical Guidelines. Daarnaast genereert de Europese Unie jaarlijks een rapport van Nederland waar op basis van validatie de conformiteit aan de INSPIRE-regelgeving beschreven wordt voor de aangeboden (meta)dataset en services.

Om u te helpen bij validatie en monitoring zijn er validatietools beschikbaar. De tools zijn bedoeld als hulpmiddel om fouten in de toepassing van standaarden te verminderen. Er zijn Nederlandse en Europese validatietools. Vanaf 1 september 2020 is het advies om voor het controleren van de toepassing van de INSPIRE-standaard alleen nog de Europese validator te gebruiken. Op die datum wordt in Nederland ook overgestapt op metadataprofiel 2.1.0. In de Nederlandse validatietools hiervoor worden de INSPIRE-regels niet meer geüpdatet.

## Validatieregels

In Annex A van alle INSPIRE technische specificaties is de Abstract Test Suite (ATS) opgenomen. Deze beschrijft tegen welke vereisten u een implementatie van die specificatie dient te toetsen. Een regel in de ATS beschrijft woordelijk aan welke eisen voldaan moet worden. Delen van de Abstract Test Suite kunnen geautomatiseerd worden getest en worden uitgewerkt in (de Europese) validators (Europa noemt deze de "INSPIRE reference validators”). De daadwerkelijke regels die geautomatiseerd getest kunnen worden is samen een Executable Test Suite (ETS).

## Wanneer valideren

Geonovum raadt u aan deze tools (en eventuele steekproefsgewijs handmatige controles) op regelmatige basis te gebruiken, maar ten minste bij de volgende gebeurtenissen:
- Het publiceren van een (nieuwe) dataset.
- Een mutatie van de data, de metadata en/of service.
- De implementatie van een software release, een storing, herstel van een backup en/of onderhoudsmoment (dit geldt ook voor releases van het Nationaal Georegister)
- Het beschikbaar komen van nieuwe versies van testtools.

## Te gebruiken validators

**Gebruik de [Europese validator](https://inspire.ec.europa.eu/validator/) om de INSPIRE-regels omtrent data, metadata en services te checken.**

**Gebruik daarnaast, ook als het INSPIRE (meta)data of een service is, de [Nederlandse validator](http://validatie.geostandaarden.nl/) voor het checken van compliance aan de Nederlandse profielen voor [metadata](http://validatie.geostandaarden.nl/etf-webapp/testprojects?testdomain=Metadata), [WMS en WFS](http://validatie.geostandaarden.nl/etf-webapp/testprojects?testdomain=Nederlandse%20profielen%20services).**

**Voor WFS werkt de EU-validatietooling met bepaalde implementaties niet. Gebruik in dat geval nog de [Nederlandse INSPIRE-validatietooling voor WFS](http://validatie.geostandaarden.nl/etf-webapp/testprojects?testdomain=INSPIRE).**

*Validatietools zijn nooit feilloos. Er kunnen bugs in zitten en de tools kunnen achterlopen op de ontwikkeling van Technical Guidelines. Ook kunnen twee tools (bijvoorbeeld die van Geonovum en de Europese validator) op hetzelfde onderdeel testen en toch een andere uitkomst geven. Dat kan bijvoorbeeld komen doordat bij de ontwikkeling van validatietools bepaalde afwegingen gemaakt worden, bijvoorbeeld hoe er getest wordt, of door interpretatieverschillen. Het is belangrijk te realiseren dat validatietools voornamelijk technisch valideren (bijvoorbeeld, controleren of er een identifier is). Of iets fout is ingevuld (bijvoorbeeld, de identifier verwijst niet naar de juiste dataset) kan niet altijd ondervangen worden. Daarnaast zijn niet alle vereisten door middel van geautomatiseerde processen te testen. Vanzelfsprekend doen wij ons best om de tooling zo snel mogelijk in lijn te krijgen met de laatste inzichten rond het implementeren van de INSPIRE-regelgeving en zo veel mogelijk vereisten geautomatiseerd te testen. Toch raden we u aan om ook zelf kritisch naar uw gepubliceerde data en services te kijken, bijvoorbeeld door te controleren of deze goed vindbaar en te bekijken en te downloaden zijn in de [Thematic Viewer](https://inspire-geoportal.ec.europa.eu/).*

In de tabel hieronder staan welke tests beschikbaar zijn en aangeraden worden om data, metadata en services te valideren. De tests die genoemd worden in de kolom 'validatietooling EU' zijn allemaal op dezelfde hoofdpagina van de EU-validator te vinden.

| INSPIRE-eis | Validatietooling NL | Validatietooling Europa |
| ----------- | ------------------- | ----------------------- |
|**Dataharmonisatie** * | | |
| INSPIRE GML Annex I | | [Validator: Annex I Data theme conformance](http://inspire.ec.europa.eu/validator/) |
| INSPIRE GML Annex II & III (mits beschikbaar) | | [Validator: Annex II/III Data theme conformance](http://inspire.ec.europa.eu/validator/) of [staging instance](http://staging-inspire-validator.eu-west-1.elasticbeanstalk.com/etf-webapp/) |
| INSPIRE GML general requirements (gebruiken wanneer Annex II/III-validator niet beschikbaar is) | | [Validator: INSPIRE GML application schemas, general requirements](http://inspire.ec.europa.eu/validator/) |
| **Discovery service** | | |
| Discovery service | | [Validator: Discovery Service - CSW Core](http://inspire.ec.europa.eu/validator/) |
| **Metadata** | | |
| Metadata dataset | [Validator: Nederlands profiel op ISO 19115 v21 2020](http://validatie.geostandaarden.nl/etf-webapp/testprojects?testdomain=Metadata) | [Validator: INSPIRE Profile based on EN ISO 19115 and EN ISO 19119](http://inspire.ec.europa.eu/validator/) |
| Metadata service | [Validator: Nederlands profiel op ISO 19119 v21 2020](http://validatie.geostandaarden.nl/etf-webapp/testprojects?testdomain=Metadata) | [Validator: INSPIRE Profile based on EN ISO 19115 and EN ISO 19119](http://inspire.ec.europa.eu/validator/) |
| **View service**| | |
| WMS | [Validator: Nederlands WMS profiel 1_3_0](http://validatie.geostandaarden.nl/etf-webapp/testprojects?testdomain=Nederlandse%20profielen%20services) | [Validator: View Service WMS](http://inspire.ec.europa.eu/validator/) |
| WMTS | | [Validator: View Service WMTS](http://inspire.ec.europa.eu/validator/) |
| **Download service** | | |
| WFS | Validator: [Nederlands WFS profiel WFS 2_0_0 ISO 19142](http://validatie.geostandaarden.nl/etf-webapp/testprojects?testdomain=Nederlandse%20profielen%20services) en [INSPIRE Download service WFS 2_0_0](http://validatie.geostandaarden.nl/etf-webapp/testprojects?testdomain=INSPIRE) bij niet-werkende EU-implementatie. | [Validator: Download Service - Direct WFS en/of Download Service - Pre-defined WFS](http://inspire.ec.europa.eu/validator/) |
| ATOM | | [Validator: Download service – Pre-defined ATOM](http://inspire.ec.europa.eu/validator/) |
| WCS | | [Validator: Download service – WCS core](http://inspire.ec.europa.eu/validator/) |
| SOS | | [Validator: Download service – Pre-defined SOS](http://inspire.ec.europa.eu/validator/) |

\* *zie de roadmap op de Geonovum-website om na te gaan vanaf welk moment uw dataset aan deze eis dient te voldoen.*

## Conformance classes

De INSPIRE Reference validators van Europa kennen zogenaamde conformance classes. Dit zijn te testen onderdelen van een implementatie. In bepaalde gevallen zijn er meerdere conformance classes van belang om te testen. De Europese validators zijn zo ingericht, dat als er een afhankelijkheid is bij een conformance class, deze automatisch ook geselecteerd wordt.

### Conformance classes metadata

Voor metadata zijn er meerdere conformance classes beschikbaar. De volgende conformance classes kunnen het beste gebruikt worden, omdat dan automatisch alle relevante andere conformance classes geselecteerd worden:

| Te testen | Conformance class |
| --------- | ----------------- |
| Metadata (TG version 2.0) - dataset metadata | Conformance Class 2: 'INSPIRE data sets and data set series interoperability metadata |
| Metadata (TG version 2.0) - service metadata | Conformance Class 4: 'INSPIRE Network Services metadata' |
| Metadata (TG version 2.0) - SDS | Conformance Class 5, 6 of 7 overeenkomstig het type SDS |

### Conformance classes datavalidatie

Om (geharmoniseerde) data te valideren zijn per thema validators beschikbaar. Op dit moment biedt de Europese validator voor alle Annex I thema-specifieke validators aan. Dat betekent dat er naast de GML-structuur, ook gevalideerd wordt tegen het XSD-bestand van het applicatieschema, en dus de thema-specifieke bestandsstructuur wordt gecontroleerd. Kies bij het valideren van een Annex I dataset de betreffende conformance classes van het thema. De algemene / generieke conformance classes worden dan automatisch geselecteerd, voor zo ver die relevant zijn. Algemeen advies is om alle conformance classes van een thema te selecteren bij het testen. Desgewenst kan echter ook een selectie gemaakt worden, als een bepaald onderdeel van de data harmonisatie getest moet worden.

Op het moment wordt eraan gewerkt om ook voor Annex II en III thema-specifieke validatie te ontwikkelen. De voortgang daarvan is te vinden in dit [Github-issue](https://github.com/inspire-eu-validation/community/issues/336). Let op: soms zijn nieuw ontwikkelde thema-validaties alleen nog beschikbaar in de testversie van de validator, de zogeheten [staging instance](http://staging-inspire-validator.eu-west-1.elasticbeanstalk.com/etf-webapp/). In dat geval kun je deze staging vast gebruiken om Annex II of III data te testen.

### Conformance classes service-validators

Voor de meeste service validators (WMS, WMTS, WFS pre-defined, WFS direct access en ATOM) is er maar 1 Conformance class beschikbaar die gebruikt kan worden.

## Bekende problemen Europese validator

De Europese validators werken over het algemeen goed. Er zijn echter nog een paar bekende problemen. **Voor WFS werkt de EU validatie met bepaalde implementaties niet, gebruik in dat geval nog de NL validatie voor WFS.** De overige belangrijkste issues staan hieronder, zie de [Github repository van INSPIRE-validatie](https://github.com/inspire-eu-validation/community/issues) voor alle openstaande issues.

**WMS**
1. Bij gebruik van WMS-extensies in de Capabilities, bijvoorbeeld voor de extensie voor SLD-operaties (o.a. als de WMS de operatie GetLegendGraphic ondersteunt), gaat de XML-schemavalidatie van de Capabilities niet goed. De validatie houdt geen rekening met extensies anders dan INSPIRE-extensies. Dit is te strikt, maar er is nog geen oplossing voor geïmplementeerd (https://github.com/inspire-eu-validation/community/issues/44). Als de XML-schemavalidatie fout gaat op dit punt, kan de foutmelding genegeerd worden. De Nederlandse validator controleert wel correct op het XML-schema.

2. WMS Layer names: te strikte controle op geharmoniseerde Layer names. De validator geeft een foutmelding als er een Layer name niet een geharmoniseerde Layer name is. Maar een WMS mag ook niet-geharmoniseerde Layer names bevatten. Als deze foutmelding verschijnt, kan die voor nu genegeerd worden (Github: https://github.com/inspire-eu-validation/community/issues/39). **Dit issue wordt verholpen bij de validatorrelease gepland op 15 september 2020.**

3. Foutmeldingen bij Service exceptions: strikt genomen moeten services bij het ontbreken van bepaalde parameters (zoals: service=WMS) van een operatie, een foutmelding geven. Sommige implementaties zijn echter wat “vergevingsgezind”, bijvoorbeeld door aannames te doen voor een standaardwaarde als de parameter ontbreekt. Dit laatste is conform de (WMS) specificaties niet toegestaan. De Europese validators valideren op dit punt strikter dan de Nederlandse.

**WFS (predefined)**
1. Bij sommige implementaties blijft de validatie hangen bij Initialization and basic checks > Autoconfigure WFS > Analyze WFS Capabilities. De oorzaak hiervan is nog onduidelijk. Als deze foutmelding voorkomt, rapporteer deze dan aan de Geonovum helpdesk, met opgave van de URL van de WFS die getest is. (Github: https://github.com/inspire-eu-validation/community/issues/38)

2. Bij bepaalde WFS implementaties, waarschijnlijk als de Mapserver software in gebruik is, blijft de validatie hangen op Autoconfigure WFS > Analyze WFS Capabilities > Get Schema Definition. De oorzaak hiervan is nog onduidelijk. Als deze foutmelding voorkomt, rapporteer deze dan aan de Geonovum helpdesk, met opgave van de URL van de WFS die getest is. (Github: https://github.com/inspire-eu-validation/community/issues/29). **Dit issue wordt verholpen bij de validatorrelease gepland op 15 september 2020.**

Tip: de Europese validator kan ook middels een API aangeroepen worden. Bij het (semi) geautomatiseerd uitvoeren van tests kan het nuttig zijn dit te gebruiken.

## Link checker

Om direct inzicht te hebben in de relaties tussen datasets, metadata en services is het niet nodig te wachten op de harvesting van het INSPIRE-geoportal. Met de [linkchecker](https://inspire-geoportal.ec.europa.eu/linkagechecker.html) van het INSPIRE Geoportal kan deze check op elk willekeurig moment worden uitgevoerd.

De Thematic viewer van Europa toont in welke mate een dataset ook daadwerkelijk raadpleegbaar (vie een viewservice) en downloadbaar (via een downloadservice) is. Hiervoor moeten diverse verwijzingen (via links en identifiers) tussen metadata en services goed opgegeven zijn. Dit is essentieel voor een werkende infrastructuur: als een dataset niet raadpleegbaar of niet downloadbaar is, is deze niet goed aangeboden aan INSPIRE en niet goed of zelfs helemaal niet bruikbaar.

Om de verwijzingen te controleren op juistheid bevat het INSPIRE Geoportal de Linkchecker: een tool om na te gaan of alle verwijzingen goed staan en waar eventuele correcties noodzakelijk zijn. De linkchecker voert verder geen validatie uit van de metadata, dataset en services. Deze onderdelen moeten apart gevalideerd worden, zie de tabel hierboven.

De linkchecker kan gestart worden door bestaande of nieuwe metadata van een dataset op te geven. Advies is om altijd voor New metadata te kiezen, omdat dan ook wijzigingen gelijk getest kunnen worden.