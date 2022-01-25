# Validatie

Een belangrijk aspect van een implementatie is de mogelijkheid deze te valideren en monitoren. Bij voorkeur gebeurt dit met geautomatiseerde processen, dan wel beschreven procedures. Validatie helpt dataproviders hun (meta)data en services te laten voldoen aan de INSPIRE Technical Guidelines. Daarnaast genereert de Europese Unie jaarlijks een rapport van Nederland waar op basis van validatie de conformiteit aan de INSPIRE-regelgeving beschreven wordt voor de aangeboden (meta)dataset en services.

Om u te helpen bij validatie en monitoring zijn er validatietools beschikbaar. De tools zijn bedoeld als hulpmiddel om fouten in de toepassing van standaarden te verminderen. Er zijn Nederlandse en Europese validatietools. De Nederlandse validatietools testen op Nederlandse profielen en de Europese op de INSPIRE-standaard. Vanaf 1 september 2020 is het advies om voor het controleren van de toepassing van de INSPIRE-standaard alleen nog de Europese validator te gebruiken en voor het testen van de Nederlandse profielen de Nederlandse validatietools. Op die datum is in Nederland ook overgestapt op metadataprofiel 2.1.0. In de Nederlandse validatietools hiervoor worden de INSPIRE-regels niet meer geüpdatet en daarom kunnen die dus niet meer gebruikt worden voor het testen op de INSPIRE-standaard, maar juist wel voor het testen op het Nederlandse profiel. Beide validatietools moeten dus gebruikt worden om te testen of zowel aan de Nederlandse profielen als aan de Europese INSPIRE-standaarden voldaan wordt.

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

Validatietools zijn nooit feilloos. Er kunnen bugs in zitten en de tools kunnen achterlopen op de ontwikkeling van Technical Guidelines. Ook kunnen twee tools  op hetzelfde onderdeel testen en toch een andere uitkomst geven. Dat kan bijvoorbeeld komen doordat bij de ontwikkeling van validatietools bepaalde afwegingen gemaakt worden, bijvoorbeeld hoe er getest wordt. Geonovum adviseert de Europese validatietools te gebruiken. Het is belangrijk te realiseren dat validatietools voornamelijk technisch valideren (bijvoorbeeld, er is een identifier). Of iets fout is ingevuld (bijvoorbeeld, de identifier verwijst niet naar de juiste dataset) kan niet altijd ondervangen worden. Daarnaast zijn niet alle vereisten door middel van geautomatiseerde processen te testen. Toch is het aan te raden om zelf kritisch naar uw gepubliceerde data en services te kijken, bijvoorbeeld door te controleren of deze goed vindbaar, te bekijken en te downloaden zijn in de [INSPIRE geoportal](https://inspire-geoportal.ec.europa.eu/).

In de tabel hieronder staan welke tests beschikbaar zijn en aangeraden worden om data, metadata en services te valideren. De tests die genoemd worden in de kolom 'validatietooling EU' zijn allemaal op dezelfde hoofdpagina van de EU-validator te vinden.

| INSPIRE-eis | Validatietooling NL | Validatietooling EU |
| ----------- | ------------------- | ------------------- |
|**Dataharmonisatie** | | |
| INSPIRE GML Annex I, II & III | | [Validator: Annex I Data theme conformance](http://inspire.ec.europa.eu/validator/) |
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
| OGC API - Features | | [Validator: Download service – OGC API - Features](http://inspire.ec.europa.eu/validator/) |

### Europese INSPIRE-validator
Op 25 juli 2017 is de Europese INSPIRE-validator gelanceerd. Daarmee is er nu voor alle lidstaten één tool waarmee je kunt testen in hoeverre je voldoet aan de INSPIRE-vereisten. De Europese validator zal vermoedelijk nog af en toe bijgewerkt worden op basis van issues. De voortgang hierin is [hier](https://github.com/INSPIRE-MIF/helpdesk-validator/tree/master/release%20strategy) te vinden.

Nederland heeft via de INSPIRE Maintenance and Implementation Group een actieve bijdrage geleverd aan de ontwikkeling van deze validator. De lancering van deze Europese validator vermindert de kans op interpretatieverschillen door lidstaten van de technische richtlijnen. De validator wordt nu op Europees niveau onderhouden en doorontwikkeld.

Met de Europese validator, kunnen testen worden uitgevoerd voor de volgende onderdelen:
- INSPIRE-themaspecifieke vereisten
- Generieke vereisten voor INSPIRE-datasets
- Applicatieschema
- GML

De officiële Europese INSPIRE-validator is [hier te vinden](https://inspire.ec.europa.eu/validator/).
Daarnaast is er ook een testversie van de validator, de zogeheten [staging instance](http://staging-inspire-validator.eu-west-1.elasticbeanstalk.com/etf-webapp/) waar de nieuwste functionaliteit in verwerkt is, maar die nog niet volledig getest is.

### Nederlandse INSPIRE-validator
Voordat de Europese validator beschikbaar was kon Nederlandse INSPIRE-data gevalideerd worden via de [Nederlandse INSPIRE-validator](http://validatie.geostandaarden.nl/etf-webapp/testprojects?testdomain=INSPIRE). Vanaf 1 september 2020 is het advies echter om voor het controleren van de toepassing van de INSPIRE-standaard alleen nog de Europese validator te gebruiken. Op die datum is in Nederland overgestapt op metadataprofiel 2.1.0. In de Nederlandse validatietools hiervoor worden de INSPIRE-regels niet meer geüpdatet. De Nederlandse validatietools zijn natuurlijk nog wel van belang voor het testen op de Nederlandse profielen voor metadata, WMS en WFS.

## Conformance classes

De INSPIRE Reference validators van Europa kennen zogenaamde conformance classes. Dit zijn te testen onderdelen van een implementatie. In bepaalde gevallen zijn er meerdere conformance classes van belang om te testen. De Europese validators zijn zo ingericht, dat als er een afhankelijkheid is bij een conformance class, deze automatisch ook geselecteerd wordt.

### Conformance classes metadata

Voor metadata zijn er meerdere conformance classes beschikbaar. Wanneer de metadata getest wordt met de Europese validator, worden de relevante conformanceclasses automatisch op de achtergrond geselecteerd voor de gebruiker. 

### Conformance classes datavalidatie

Om (geharmoniseerde) data te valideren zijn per thema validators beschikbaar. Dat betekent dat er naast de GML-structuur, ook gevalideerd wordt tegen het XSD-bestand van het applicatieschema, en dus de thema-specifieke bestandsstructuur wordt gecontroleerd. Bij de keuze van het thema worden de relevante conformance classes automatisch geselecteerd. Algemeen advies is om alle conformance classes van een thema te selecteren bij het testen. Desgewenst kan echter ook een selectie gemaakt worden, als een bepaald onderdeel van de data harmonisatie getest moet worden.

### Conformance classes service-validators

Voor de meeste service validators (WMS, WMTS, WFS pre-defined, WFS direct access, ATOM, SOS, WCS en OGC API Features) is er maar 1 Conformance class beschikbaar die gebruikt kan worden.

## Bekende problemen Europese validator

De Europese validators werken over het algemeen goed. Er zijn echter nog een paar bekende problemen. **Voor WFS werkt de EU validatie met bepaalde implementaties niet, gebruik in dat geval nog de NL validatie voor WFS.** De overige belangrijkste issues staan hieronder, zie de [Github repository van INSPIRE-validatie](https://github.com/INSPIRE-MIF/helpdesk-validator/issues) voor alle openstaande issues.

Tip: de Europese validator kan ook middels een API aangeroepen worden. Bij het (semi) geautomatiseerd uitvoeren van tests kan het nuttig zijn dit te gebruiken.

## Link checker

Om direct inzicht te hebben in de relaties tussen datasets, metadata en services is het niet nodig te wachten op de harvesting van het INSPIRE-geoportal. Met de [linkchecker](https://inspire-geoportal.ec.europa.eu/linkagechecker.html) van het INSPIRE Geoportal kan deze check op elk willekeurig moment worden uitgevoerd.

De Thematic viewer van Europa toont in welke mate een dataset ook daadwerkelijk raadpleegbaar (vie een viewservice) en downloadbaar (via een downloadservice) is. Hiervoor moeten diverse verwijzingen (via links en identifiers) tussen metadata en services goed opgegeven zijn. Dit is essentieel voor een werkende infrastructuur: als een dataset niet raadpleegbaar of niet downloadbaar is, is deze niet goed aangeboden aan INSPIRE en niet goed of zelfs helemaal niet bruikbaar.

Om de verwijzingen te controleren op juistheid bevat het INSPIRE Geoportal de Linkchecker: een tool om na te gaan of alle verwijzingen goed staan en waar eventuele correcties noodzakelijk zijn. De linkchecker voert verder geen validatie uit van de metadata, dataset en services. Deze onderdelen moeten apart gevalideerd worden, zie de tabel hierboven.

De linkchecker kan gestart worden door bestaande of nieuwe metadata van een dataset op te geven. Advies is om altijd voor New metadata te kiezen, omdat dan ook wijzigingen gelijk getest kunnen worden.
