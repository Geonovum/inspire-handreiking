# Validatie

Een belangrijk aspect van een implementatie is de mogelijkheid deze te valideren en monitoren. Bij voorkeur gebeurt dit met geautomatiseerde processen, dan wel beschreven procedures. Validatie helpt dataproviders hun (meta)data en services te laten voldoen aan de INSPIRE Technical Guidelines. Daarnaast genereert de Europese Unie jaarlijks een [rapport](#monitoring-en-rapportage) van Nederland waar op basis van validatie de conformiteit aan de INSPIRE-regelgeving beschreven wordt voor de aangeboden (meta)dataset en services.

Om je te helpen bij validatie en monitoring zijn validatietools beschikbaar. De tools zijn bedoeld als hulpmiddel om fouten in de toepassing van standaarden te verminderen. Er zijn Nederlandse en Europese validatietools. De Nederlandse validatietools testen op Nederlandse profielen en de Europese validatietools op de INSPIRE-standaard. 

Vanaf 1 september 2020 is het **advies** om voor het controleren van de toepassing van de INSPIRE-standaard alleen nog de Europese INSPIRE validator te gebruiken en voor het testen van de Nederlandse profielen de Nederlandse validatietools.

**Aandachtspunt**

In de Nederlandse validatietools worden de INSPIRE-regels niet meer geüpdatet en daarom kunnen die dus niet meer gebruikt worden voor het testen op de INSPIRE-standaard, maar juist wel voor het testen op het Nederlandse profiel. Voor het testen op de INSPIRE-standaard moet dus de Europese INSPIRE validator worden gebruikt. 
Beide validatietools (Nederlands als Europees) moeten dus gebruikt worden om te testen of zowel aan de Nederlandse profielen als aan de Europese INSPIRE-standaarden voldaan wordt.


## Validatieregels

In Annex A van alle INSPIRE technische specificaties is de *Abstract Test Suite (ATS)* opgenomen. Deze beschrijft tegen welke vereisten je een implementatie van die specificatie dient te toetsen. Een regel in de ATS beschrijft woordelijk aan welke eisen voldaan moet worden. Delen van de ATS kunnen geautomatiseerd worden getest en zijn/worden uitgewerkt in (de Europese) validator. Europa noemt deze Europese INSPIRE validator de **"INSPIRE reference validator”**. De daadwerkelijke regels die geautomatiseerd getest kunnen worden, vormen samen een *Executable Test Suite (ETS)*.

## Wanneer valideren

Geonovum raadt je aan deze validatietools (en eventuele steekproefsgewijs handmatige controles) op regelmatige basis te gebruiken, maar ten minste bij de volgende gebeurtenissen:
- Het publiceren van een (nieuwe) dataset.
- Een mutatie van de data, de metadata en/of service.
- De implementatie van een software release, een storing, herstel van een backup en/of onderhoudsmoment (dit geldt ook voor releases van het NGR).
- Het beschikbaar komen van nieuwe versies van de validatietools.

## Te gebruiken validators

**Gebruik de <a href="https://inspire.ec.europa.eu/validator/" target="_blank">Europese INSPIRE validator</a> om de INSPIRE-regels omtrent data, metadata en services te checken.**

**Gebruik daarnaast, ook als het INSPIRE (meta)data of een service is, de <a href="https://validatie.geostandaarden.nl/" target="_blank">Nederlandse validator</a> voor het checken van compliance aan de Nederlandse profielen voor <a href="https://validatie.geostandaarden.nl/etf-webapp/testprojects?testdomain=Metadata" target="_blank">metadata</a>, <a href="https://validatie.geostandaarden.nl/etf-webapp/testprojects?testdomain=Nederlandse%20profielen%20services" target="_blank">WMS en WFS</a>.**

**Voor WFS werkt de EU-validatietooling met bepaalde implementaties <a href="https://github.com/INSPIRE-MIF/helpdesk-validator/issues?q=WFS+is%3Aopen" target="_blank">niet</a>. Gebruik in dat geval nog de <a href="https://validatie.geostandaarden.nl/etf-webapp/testprojects?testdomain=INSPIRE" target="_blank">Nederlandse INSPIRE validatietooling voor WFS</a>.**

Validatietools zijn nooit feilloos. Er kunnen bugs in zitten en de tools kunnen achterlopen op de ontwikkeling van Technical Guidelines. Ook kunnen twee tools op hetzelfde onderdeel testen en toch een andere uitkomst geven. Dat kan bijvoorbeeld komen doordat bij de ontwikkeling van validatietools bepaalde afwegingen gemaakt worden, bijvoorbeeld hoe er getest wordt. 

Geonovum adviseert de Europese validatietools te gebruiken. Het is belangrijk te realiseren dat validatietools voornamelijk technisch valideren (bijvoorbeeld of er een identifier is). Of iets fout is ingevuld (bijvoorbeeld, de identifier verwijst niet naar de juiste dataset), kan niet altijd ondervangen worden. Daarnaast zijn niet alle vereisten door middel van geautomatiseerde processen te testen. Daarom is het aan te raden om zelf kritisch naar je gepubliceerde data en services te kijken, bijvoorbeeld door te controleren of deze goed vindbaar, te bekijken en te downloaden zijn in de <a href="https://inspire-geoportal.ec.europa.eu/" target="_blank">Europese INSPIRE geoportal</a>.

In de tabel hieronder staan welke tests beschikbaar zijn en aangeraden worden om data, metadata en services te valideren. De tests die genoemd worden in de kolom 'validatietooling EU' zijn allemaal op dezelfde hoofdpagina van de <a href="https://inspire.ec.europa.eu/validator/" target="_blank">Europese INSPIRE validator</a> te vinden.

| INSPIRE-eis | Validatietooling NL | Validatietooling EU |
| ----------- | ------------------- | ------------------- |
|**Dataharmonisatie** | | |
| INSPIRE GML  | | <a href="https://inspire.ec.europa.eu/validator/" target="_blank">Validator: Data theme conformance</a> |
| **Metadata** | | |
| Metadata dataset | <a href="https://validatie.geostandaarden.nl/etf-webapp/testprojects?testdomain=Metadata" target="_blank">Validator: Nederlands profiel op ISO 19115 v21 2020</a> | <a href="https://inspire.ec.europa.eu/validator/" target="_blank">Validator: INSPIRE Profile based on EN ISO 19115 and EN ISO 19119</a> |
| Metadata service | <a href="https://validatie.geostandaarden.nl/etf-webapp/testprojects?testdomain=Metadata" target="_blank">Validator: Nederlands profiel op ISO 19119 v21 2020</a> | <a href="https://inspire.ec.europa.eu/validator/" target="_blank">Validator: INSPIRE Profile based on EN ISO 19115 and EN ISO 19119</a> |
| **View service**| | |
| WMS | <a href="https://validatie.geostandaarden.nl/etf-webapp/testprojects?testdomain=Nederlandse%20profielen%20services" target="_blank">Validator: Nederlands WMS profiel 1_3_0</a> | <a href="https://inspire.ec.europa.eu/validator/" target="_blank">Validator: View Service WMS</a> |
| WMTS | | <a href="https://inspire.ec.europa.eu/validator/" target="_blank">Validator: View Service WMTS</a> |
| **Download service** | | |
| ATOM | | <a href="https://inspire.ec.europa.eu/validator/" target="_blank">Validator: Download service – Pre-defined ATOM</a> |
| WFS | Validator: <a href="https://validatie.geostandaarden.nl/etf-webapp/testprojects?testdomain=Nederlandse%20profielen%20services" target="_blank">Nederlands WFS profiel WFS 2_0_0 ISO 19142</a> en <a href="http://validatie.geostandaarden.nl/etf-webapp/testprojects?testdomain=INSPIRE" target="_blank">INSPIRE Download service WFS 2_0_0</a> bij niet-werkende EU-implementatie. | <a href="https://inspire.ec.europa.eu/validator/" target="_blank">Validator: Download Service - Direct WFS en/of Download Service - Pre-defined WFS</a> |
| WCS | | <a href="https://inspire.ec.europa.eu/validator/" target="_blank">Validator: Download service – WCS core</a> |
| SOS | | <a href="https://inspire.ec.europa.eu/validator/" target="_blank">Validator: Download service – Pre-defined SOS</a> |
| OGC API - Features | | <a href="https://inspire.ec.europa.eu/validator/" target="_blank">Validator: Download service – OGC API - Features</a> |
| **Discovery service** | | |
| Discovery service | | <a href="https://inspire.ec.europa.eu/validator/" target="_blank">Validator: Discovery Service - CSW Core</a> |



### Europese INSPIRE validator
Op 25 juli 2017 is de <a href="https://inspire.ec.europa.eu/validator/" target="_blank">Europese INSPIRE validator</a> gelanceerd. Daarmee is er nu voor alle lidstaten één tool waarmee je kunt testen in hoeverre je voldoet aan de INSPIRE-vereisten. De Europese INSPIRE validator wordt op Europees niveau onderhouden en doorontwikkeld. Voor meer informatie zie de <a href="https://github.com/INSPIRE-MIF/helpdesk-validator/" target="_blank">github-pagina over de Europese INSPIRE validator</a>. Hier zijn bekende problemen beschreven als ook de link naar de changelog van de huidige en eerdere releases te vinden en de release strategie van toekomstige releases.

Met de Europese INSPIRE validator kunnen validatietesten worden uitgevoerd voor de volgende onderdelen:
- INSPIRE-themaspecifieke vereisten;
- Generieke vereisten voor INSPIRE-datasets;
- Applicatieschema;
- GML.

De officiële Europese INSPIRE-validator is <a href="https://inspire.ec.europa.eu/validator/" target="_blank">hier</a> te vinden.
Daarnaast is er ook een testversie van de validator, de zogeheten <a href="https://staging-inspire-validator.eu-west-1.elasticbeanstalk.com/etf-webapp/" target="_blank">staging instance</a> waar de nieuwste functionaliteit in verwerkt is, maar die nog niet volledig getest is.


**Gebruik middels API**

De Europese INSPIRE validator kan ook middels een API aangeroepen worden. Bij het (semi) geautomatiseerd uitvoeren van tests kan het nuttig zijn de API te gebruiken. De API is te vinden via <a href="https://inspire.ec.europa.eu/validator/" target="_blank">Europese INSPIRE validator</a>.


**Bekende problemen**

De Europese INSPIRE validator werkt over het algemeen goed. Er zijn echter nog een paar bekende problemen te vinden op de <a href="https://github.com/INSPIRE-MIF/helpdesk-validator/issues" target="_blank">helpdesk</a> van de Europese INSPIRE validator. Voor <a href="https://github.com/INSPIRE-MIF/helpdesk-validator/issues?q=WFS+is%3Aopen" target="_blank">WFS</a> werkt de Europese INSPIRE validator met bepaalde implementaties niet goed. Gebruik in dat geval nog de de Nederlandse INSPIRE validator voor WFS, zie voor meer informatie ook de paragraaf [Te gebruiken validators](#te-gebruiken-validators). 


### Nederlandse INSPIRE validator
Voordat de Europese INSPIRE validator beschikbaar was, kon Nederlandse INSPIRE-data gevalideerd worden via de Nederlandse INSPIRE validator. Vanaf 1 september 2020 is het **advies** echter om voor het controleren van de toepassing van de INSPIRE-standaard alleen nog de Europese INSPIRE validator te gebruiken. Op die datum is in Nederland ook overgestapt op Metadataprofiel 2.1.0. In de Nederlandse validatietools hiervoor worden de INSPIRE-regels niet meer geüpdatet. 

De Nederlandse validatietools zijn natuurlijk nog wel van belang voor het testen op de Nederlandse profielen voor metadata, WMS en WFS.

## Conformance classes

De Europese INSPIRE validator kent zogenaamde conformance classes. Dit zijn te testen onderdelen van een implementatie. In bepaalde gevallen zijn er meerdere conformance classes van belang om te testen. De Europese INSPIRE validator is zo ingericht, dat als er een afhankelijkheid is bij een conformance class, deze automatisch ook geselecteerd wordt.

### Conformance classes metadata

Voor metadata zijn er meerdere conformance classes beschikbaar. Wanneer de metadata getest wordt met de Europese INSPIRE validator, worden de relevante conformanceclasses automatisch op de achtergrond geselecteerd voor de gebruiker. 

### Conformance classes datavalidatie

Om (geharmoniseerde) data te valideren zijn per thema validators beschikbaar. Dat betekent dat er naast de GML-structuur, ook gevalideerd wordt tegen het XSD-bestand van het applicatieschema, en dus de thema-specifieke bestandsstructuur wordt gecontroleerd. Bij de keuze van het thema worden de relevante conformance classes automatisch geselecteerd. Algemeen advies is om alle conformance classes van een thema te selecteren bij het testen. Desgewenst kan echter ook een selectie gemaakt worden, als een bepaald onderdeel van de dataharmonisatie getest moet worden.

### Conformance classes service-validators

Voor de meeste service validators (WMS, WMTS, WFS pre-defined, WFS direct access, ATOM, SOS, WCS en OGC API Features) is er maar 1 conformance class beschikbaar die gebruikt kan worden.



## Link checker

Om direct inzicht te hebben in de relaties tussen datasets, metadata en services is het niet nodig te wachten op de harvesting van het Europese INSPIRE geoportal. Met de <a href="https://inspire-geoportal.ec.europa.eu/linkagechecker.html" target="_blank">linkchecker</a> van het Europese INSPIRE Geoportal kan deze check op elk willekeurig moment worden uitgevoerd.

Het <a href="https://inspire-geoportal.ec.europa.eu/" target="_blank">INSPIRE Geoportal</a> toont in welke mate een dataset ook daadwerkelijk raadpleegbaar (via een viewservice) en downloadbaar (via een downloadservice) is. Hiervoor moeten diverse verwijzingen (via links en identifiers) tussen metadata en services goed opgegeven zijn. Dit is essentieel voor een werkende infrastructuur: als een dataset niet raadpleegbaar of niet downloadbaar is, is deze niet goed aangeboden aan INSPIRE en niet goed of zelfs helemaal niet bruikbaar.

Om de verwijzingen te controleren op juistheid bevat het Europese INSPIRE Geoportal de Linkchecker: een tool om na te gaan of alle verwijzingen goed staan en waar eventuele correcties noodzakelijk zijn. De linkchecker voert geen validatie uit van de metadata, dataset en services. Deze onderdelen moeten apart gevalideerd worden, zie de [tabel](#te-gebruiken-validators) hierboven.

De linkchecker kan gestart worden door bestaande of nieuwe metadata van een dataset en services op te geven. Advies is om altijd voor New metadata te kiezen, omdat dan ook wijzigingen gelijk getest kunnen worden. Een beschrijving van de linkchecker is <a href="https://inspire-geoportal.ec.europa.eu/files/INSPIRE_Geoportal_process_for_data-service_linking_v1.0.pdf" target="_blank">hier</a> te vinden.

In <a href="docs/Geoportal_tips.pdf" target="_blank">Geoportal</a>  is aangegeven wat de oorzaak kan zijn als data niet in het Geoportal aanwezig isen waarom een download en view link kunnen ontbreken. Ook is hier te vinden via welke elementen de relatie tussen (metadata)data en service wordt gelegd. Loop deze stappen eerst door, voor verder in het diepe te duiken.
