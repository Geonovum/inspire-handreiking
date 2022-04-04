# Validatie

Een belangrijk aspect van een implementatie is de mogelijkheid deze te valideren en monitoren. Bij voorkeur gebeurt dit met geautomatiseerde processen, dan wel beschreven procedures. Validatie helpt dataproviders hun (meta)data en services te laten voldoen aan de INSPIRE Technical Guidelines. Daarnaast genereert de Europese Unie jaarlijks een [rapport](#monitoring-en-rapportage) van Nederland waar op basis van validatie de conformiteit aan de INSPIRE-regelgeving beschreven wordt voor de aangeboden (meta)dataset en services.

Om je te helpen bij validatie en monitoring zijn validatietools beschikbaar. De tools zijn bedoeld als hulpmiddel om fouten in de toepassing van standaarden te verminderen. Er zijn Nederlandse en Europese validatietools. De Nederlandse validatietools testen op Nederlandse profielen en de Europese validatietools op de INSPIRE-standaard. 

Vanaf 1 september 2020 is het **advies** om voor het controleren van de toepassing van de INSPIRE-standaard alleen nog de Europese INSPIRE validator te gebruiken en voor het testen van de Nederlandse profielen de Nederlandse validatietools.

**Aandachtspunt**

In de Nederlandse validatietools worden de INSPIRE-regels niet meer geüpdatet en daarom kunnen die dus niet meer gebruikt worden voor het testen op de INSPIRE-standaard, maar juist wel voor het testen op het Nederlandse profiel. Voor het testen op de INSPIRE-standaard moet dus de Europese INSPIRE validator worden gebruikt. 
Beide validatietools (Nederlands als Europees) moeten dus gebruikt worden om te testen of zowel aan de Nederlandse profielen als aan de Europese INSPIRE-standaarden voldaan wordt.


## Validatieregels

In Annex A van alle INSPIRE technische specificaties is de *Abstract Test Suite (ATS)* opgenomen. Deze beschrijft tegen welke vereisten je een implementatie van die specificatie dient te toetsen. Een regel in de ATS beschrijft woordelijk aan welke eisen voldaan moet worden. Delen van de ATS kunnen geautomatiseerd worden getest en zijn/worden uitgewerkt in (de Europese) validator. Europa noemt deze Europese INSPIRE validator de *"INSPIRE reference validator”*. De daadwerkelijke regels die geautomatiseerd getest kunnen worden, vormen samen een *Executable Test Suite (ETS)*.

## Wanneer valideren

Geonovum raadt je aan deze validatietools (en eventuele steekproefsgewijs handmatige controles) op regelmatige basis te gebruiken, maar ten minste bij de volgende gebeurtenissen:
- Het publiceren van een (nieuwe) dataset.
- Een mutatie van de data, de metadata en/of service.
- De implementatie van een software release, een storing, herstel van een backup en/of onderhoudsmoment (dit geldt ook voor releases van het NGR).
- Het beschikbaar komen van nieuwe versies van de validatietools.

## Te gebruiken validators

**Gebruik de <a href="https://inspire.ec.europa.eu/validator/" target="_blank">Europese INSPIRE validator</a> om de INSPIRE-regels omtrent data, metadata en services te checken.**

**Gebruik daarnaast, ook als het INSPIRE (meta)data of een service is, de <a href="https://validatie.geostandaarden.nl/" target="_blank">Nederlandse validator</a> voor het checken van compliance aan de Nederlandse profielen voor <a href="https://validatie.geostandaarden.nl/etf-webapp/testprojects?testdomain=Metadata" target="_blank">metadata</a>, <a href="https://validatie.geostandaarden.nl/etf-webapp/testprojects?testdomain=Nederlandse%20profielen%20services" target="_blank">WMS en WFS</a>.**

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
| WFS | Validator: <a href="https://validatie.geostandaarden.nl/etf-webapp/testprojects?testdomain=Nederlandse%20profielen%20services" target="_blank">Nederlands WFS profiel WFS 2_0_0 ISO 19142</a> | <a href="https://inspire.ec.europa.eu/validator/" target="_blank">Validator: Download Service - Direct WFS en/of Download Service - Pre-defined WFS</a> |
| WCS | | <a href="https://inspire.ec.europa.eu/validator/" target="_blank">Validator: Download service – WCS core</a> |
| SOS | | <a href="https://inspire.ec.europa.eu/validator/" target="_blank">Validator: Download service – Pre-defined SOS</a> |
| OGC API - Features | | <a href="https://inspire.ec.europa.eu/validator/" target="_blank">Validator: Download service – OGC API - Features</a> |
| **Discovery service** | | |
| Discovery service | | <a href="https://inspire.ec.europa.eu/validator/" target="_blank">Validator: Discovery Service - CSW Core</a> |



### Europese INSPIRE validator
Op 25 juli 2017 is de <a href="https://inspire.ec.europa.eu/validator/" target="_blank">Europese INSPIRE validator</a> gelanceerd. Daarmee is er nu voor alle lidstaten één tool waarmee je kunt testen in hoeverre je voldoet aan de INSPIRE-vereisten. De Europese INSPIRE validator wordt op Europees niveau onderhouden en doorontwikkeld. Voor meer informatie zie de <a href="https://github.com/INSPIRE-MIF/helpdesk-validator/" target="_blank">github-pagina over de Europese INSPIRE validator</a>. Hier zijn bekende problemen beschreven als ook de link naar de changelog van de huidige en eerdere releases te vinden en de release strategie van toekomstige releases.

Met de Europese INSPIRE validator kunnen validatietesten worden uitgevoerd voor de volgende onderdelen:

- Metadata.
- Services.
- Datasets.

Naast de officiële <a href="https://inspire.ec.europa.eu/validator/" target="_blank">Europese INSPIRE-validator</a> is er ook een testversie van de validator, de zogeheten <a href="https://staging-inspire-validator.eu-west-1.elasticbeanstalk.com/etf-webapp/" target="_blank">staging instance</a> beschikbaar waar de nieuwste functionaliteit in verwerkt is, maar die nog niet volledig getest is.


**Gebruik middels API**

De Europese INSPIRE validator kan ook middels een API aangeroepen worden. Bij het (semi) geautomatiseerd uitvoeren van tests kan het nuttig zijn de API te gebruiken. De API is te vinden via <a href="https://inspire.ec.europa.eu/validator/" target="_blank">Europese INSPIRE validator</a>.


**Bekende problemen**

De Europese INSPIRE validator werkt over het algemeen goed. Er zijn echter nog een paar bekende problemen te vinden op de <a href="https://github.com/INSPIRE-MIF/helpdesk-validator/issues" target="_blank">helpdesk</a> van de Europese INSPIRE validator. 


### Nederlandse INSPIRE validator
Voordat de Europese INSPIRE validator beschikbaar was, kon Nederlandse INSPIRE-data gevalideerd worden via de Nederlandse INSPIRE validator. Vanaf 1 september 2020 is het **advies** echter om voor het controleren van de toepassing van de INSPIRE-standaard alleen nog de Europese INSPIRE validator te gebruiken. Op die datum is in Nederland ook overgestapt op Metadataprofiel 2.1.0. In de Nederlandse validatietools hiervoor worden de INSPIRE-regels niet meer geüpdatet. 

De Nederlandse validatietools zijn natuurlijk nog wel van belang voor het testen op de Nederlandse profielen voor metadata, WMS en WFS.

## Conformance classes

De Europese INSPIRE validator kent zogenaamde conformance classes. Dit zijn te testen onderdelen van een implementatie. In bepaalde gevallen zijn er meerdere conformance classes van belang om te testen. De Europese INSPIRE validator is zo ingericht, dat als er een afhankelijkheid is bij een conformance class, deze automatisch ook geselecteerd wordt.

### Conformance classes metadata

Voor metadata zijn er meerdere conformance classes beschikbaar. Wanneer de metadata getest wordt met de Europese INSPIRE validator, worden de relevante conformanceclasses automatisch op de achtergrond geselecteerd voor de gebruiker. 

Voor de prioritaire [IACS-datasets](#iacs-datasets) is ook een conformance class beschikbaar. Deze dient echter handmatig aangevinkt te worden via de *Advanced options* (de optie conformance Class 2c: 'INSPIRE data sets and data set series metadata for IACS').

### Conformance classes datavalidatie

Om (geharmoniseerde) data te valideren zijn per thema validators beschikbaar. Dat betekent dat er naast de GML-structuur, ook gevalideerd wordt tegen het XSD-bestand van het applicatieschema, en dus de thema-specifieke bestandsstructuur wordt gecontroleerd. Bij de keuze van het thema worden de relevante conformance classes automatisch geselecteerd. Algemeen advies is om alle conformance classes van een thema te selecteren bij het testen. Desgewenst kan echter ook een selectie gemaakt worden, als een bepaald onderdeel van de dataharmonisatie getest moet worden.

### Conformance classes service-validators

Voor de meeste service validators (WMS, WMTS, WFS pre-defined, WFS direct access, ATOM, SOS, WCS en OGC API Features) is er maar 1 conformance class beschikbaar die gebruikt kan worden.

## Link checker

Om direct inzicht te hebben in de relaties tussen datasets, metadata en services is het niet nodig te wachten op de harvesting van het Europese INSPIRE geoportal. Met de <a href="https://inspire-geoportal.ec.europa.eu/linkagechecker.html" target="_blank">Link checker</a> van het Europese INSPIRE Geoportal kan deze check op elk willekeurig moment worden uitgevoerd.

Het <a href="https://inspire-geoportal.ec.europa.eu/" target="_blank">INSPIRE Geoportal</a> toont in welke mate een dataset ook daadwerkelijk raadpleegbaar (via een viewservice) en downloadbaar (via een downloadservice) is. Hiervoor moeten diverse verwijzingen (via links en identifiers) tussen metadata en services goed opgegeven zijn. Dit is essentieel voor een werkende infrastructuur: als een dataset niet raadpleegbaar of niet downloadbaar is, is deze niet goed aangeboden aan INSPIRE en niet goed of zelfs helemaal niet bruikbaar.

Om de verwijzingen te controleren op juistheid bevat het Europese INSPIRE Geoportal de Link checker: een tool om na te gaan of alle verwijzingen goed staan en waar eventuele correcties noodzakelijk zijn. De Link checker voert geen validatie uit van de metadata, dataset en services. Deze onderdelen moeten apart gevalideerd worden, zie hiervoor de paragraaf [Te gebruiken validators](#te-gebruiken-validators).

De Link checker kan gestart worden door bestaande of nieuwe metadata van een dataset en services op te geven. Advies is om altijd voor New metadata te kiezen, omdat dan ook wijzigingen gelijk getest kunnen worden. Een Engelstalige beschrijving van de Link checker is <a href="https://inspire-geoportal.ec.europa.eu/files/INSPIRE_Geoportal_process_for_data-service_linking_v1.0.pdf" target="_blank">hier</a> te vinden.

## Tips om data raadpleegbaar en downoadbaar in het Geoportal te krijgen
Het <a href="https://inspire-geoportal.ec.europa.eu/" target="_blank">INSPIRE Geoportal</a> toont in welke mate een dataset ook daadwerkelijk raadpleegbaar (via een viewservice) en downloadbaar (via een downloadservice) is. Hiervoor moeten diverse verwijzingen (via links en identifiers) tussen metadata en services goed opgegeven zijn. 

Om de verwijzingen te controleren is in deze paragraaf aangegeven op welke elementen de relatie tussen data en service wordt gelegd en wat de oorzaak kan zijn als data en services niet in het Europese INSPIRE Geoportal getoond wordt. 
Loop onderstaande checks door, voor verder in het diepe te duiken:

1. Is de data beschikbaar?
2. Check of de data is te vinden onder het INSPIRE data thema, waar het onder valt.
3. Check of de data een download link heeft.
4. Check of de data view link heeft.
5. Check of de data daadwerkelijk downloadbaar is.
6. Check of de data daadwerkelijk viewable is.
7. Check of de data, service en metadata valide is.
8. Check of de data te vinden is onder het domein voor e-reporting.
9. Overige aandachtspunten.

### Check 1: Is de data beschikbaar?
Ga naar het startscherm van het <a href="https://inspire-geoportal.ec.europa.eu/" target="_blank">Geoportal</a> en kies INSPIRE Thematic Viewer.
![check 8 PDS Viewer](media/geoportaltip8a.png "Start Priority Data Sets Viewer ") 
Pas in het Geoportal een selectie toe op het INSPIRE thema van de dataset en lidstaat. Check of
1. De (meta)data voorkomt in de lijst met data. 
Als de (meta)data voorkomt in de lijst met data en 
2. De data ook daadwerkelijk te downloaden en te bekijken is, 
Dan is verdere actie niet noodzakelijk.

![check 1](media/geoportaltip1.png "Check of de data vindbaar is")

### Check 2: Is de dataset te vinden onder het INSPIRE thema
Check of de data is te vinden onder het INSPIRE data thema, waar het onder valt.
Dit wordt zichtbaar door een selectie toe te passen op een thema en lidstaat.
In het voorbeeld hieronder is er geen (meta)data onder het thema Gegraphical grid systems voor Nederland.

![check 2](media/geoportaltip2.png "Check of vindbaar onder thema")

Als de (meta)data niet voorkomt in de Geoportal, dan is 
- Of de metadata niet in het NGR gepubliceerd met de categorie INSPIRE, zie ook [hier](#publiceren-inspire-aanduiding)
- Of het INSPIRE thema en citatie naar de thesaurus is niet goed opgenomen in de metadata van de dataset.

Het INSPIRE thema wordt opgenomen uit de INSPIRE Thesaurus.
De INSPIRE Thesaurus citatie, is als volgt: 
- Thesaurus: ”GEMET - INSPIRE themes, version 1.0”
- Datum: ”2008-06-01”  
- Datum type: ”publication”
zie ook [hier](#hoe-om-te-gaan-met-anchor-en-uri) voor meer informatie.

### Check 3: Heeft de data een download link
Als het download pictogram ![image](https://user-images.githubusercontent.com/80040145/160800473-0b6b17e2-65e5-4254-820a-02fdd9552723.png)
ontbreekt terwijl er wel een download service beschikbaar is, check dan of de metadata van de service in het NGR gepubliceerd is met de categorie INSPIRE, zie ook [hier](#publiceren-inspire-aanduiding).
Als de metadata correct is gepubliceerd, check dan of de koppeling tussen dataset en service goed is.
Daarvoor moeten we onderscheid maken tussen [WFS](#wfs), [ATOM](#atom-feed), [SOS](#sos) en [WCS](#wcs).

***WFS***

Chek of de koppeling aanwezig en correct is. De koppeling tussen een dataset en een WFS wordt in het Geoportal gelegd via het SpatialDataSetIdentifier element in de Extended Capabilities van de OGC WFS service:

Het SpatialDataSetIdentifier element bestaat uit twee subelementen:
- identifier: inspire_dls:SpatialDataSetIdentifier/inspire_common:Code
- namespace: inspire_dls:SpatialDataSetIdentifier/inspire_common:Namespace

De SpatialDataSetIdentifier moet hetzelfde zijn als die in het element unieke identifier van de bron, in de metadata van de dataset.

De inspire_common:Namespace mag worden weggelaten als er geen aparte namespace in de metadata van de data is opgenomen voor de dataset identifier. De dataset identifier en de inspire_common:Code, moeten in dat geval de unieke bron identificatie van de dataset bevatten.
Als er wel een aparte namespace bij de dataset identifier in de metadata staat, dient het element inspire_common:Namespace die namespace te bevatten. Dit betekent wel dat de metadata de zogenaamde RS_Identifier gebruikt, met twee elementen: een code en een codeSpace voor de namespace, om de dataset te identificeren. 


Check ook of de links naar de metadata van de dataset opgenomen zijn in het element MetadataURL per FeatureType.
Deze moet hetzelfde zijn als de link in het OperatesOn element in de metadata van de service.

Als laatste kan gecontroleerd worden of de link naar de metadata van de service opgenomen is via inspire_common:MetadataUrl.

![check 3_WFS](media/geoportaltip3_wfs.png "Check dataset service koppeling WFS")

***Atom***

Chek of de koppeling aanwezig en correct is. De koppeling tussen een dataset en een Atom wordt in het Geoportal gelegd via het link element (rel="describedby") in de entry in de top feed van de Atom service.   

De link  bevat:
- De link naar de metadata van de dataset (href="URL naar metadata in bv NGR")
- De relatie (rel="describedby") 
- Het type (type="application/xml" )
Deze link moet hetzelfde zijn als de link in het OperatesOn element in de metadata van de service.

Daarnaast wordt in deze entry ook de identifier en namespace van de dataset opgenomen in het spatial_dataset_identifier_code element en spatial_dataset_identifier_namespace element.
De identifier moet hetzelfde zijn als die in het element unieke identifier van de bron, zoals opgegeven in de metadata van de dataset.
De elementen voor de INSPIRE namespace dienen alleen ingevuld te worden als er een apart namespace element is, bij de dataset identifier in de dataset metadata.
De dataset identifier en de spatial_dataset_identifier_code, moeten in dat geval de unieke bron identificatie van de dataset bevatten.

Als laatste kan gecontroleerd worden of de link naar de metadata van de service opgenomen is in de service feed.

![check 3_ATOM](media/geoportaltip3_atom.png "Check dataset service koppeling ATOM-feed")

***SOS***

De koppeling tussen de dataset en de SOS wordt gelegd in het element SpatialDataSetIdentifier element in de Extended Capabilities van de  service voor elke ”ObservationOffering”. 
Het SpatialDataSetIdentifier element bestaat uit twee subelementen:

capabilities van de SOS via ”SpatialDataSet-Identifier”
- inspire_dls:SpatialDataSetIdentifier/inspire_common:Code
- inspire_dls:SpatialDataSetIdentifier/inspire_common:Namespace

Hierin wordt  de identifier en eventueel de namespace van de dataset opgenomen. 

De identifier moet hetzelfde zijn als die in het element unieke identifier van de bron, in de metadata van de dataset.

De inspire_common:Namespace mag worden weggelaten als er geen aparte namespace in de metadata van de data is opgenomen voor de dataset identifier. De dataset identifier en de inspire_common:Code, moeten in dat geval de unieke bron identificatie van de dataset bevatten.
Als er wel een aparte namespace bij de dataset identifier in de metadata staat, dient het element inspire_common:Namespace die namespace te bevatten. Dit betekent wel dat de metadata de zogenaamde RS_Identifier gebruikt, met twee elementen: een code en een codeSpace voor de namespace, om de dataset te identificeren. 

Als laatste kan gecontroleerd worden of de link naar de metadata van de service opgenomen is via inspire_common:MetadataUrl.

***WCS***

De koppeling tussen de dataset en de WCS wordt gelegd in het element SpatialDataSetIdentifierin de Extended Capabilities van de  service. Het SpatialDataSetIdentifier element bestaat uit twee subelementen:

- inspire_dls:SpatialDataSetIdentifier/inspire_common:Code
- inspire_dls:SpatialDataSetIdentifier/inspire_common:Namespace

Hierin wordt  de identifier en eventueel de namespace van de dataset opgenomen. 

De identifier moet hetzelfde zijn als die in het element unieke identifier van de bron, in de metadata van de dataset.

De inspire_common:Namespace mag worden weggelaten als er geen aparte namespace in de metadata van de data is opgenomen voor de dataset identifier. De dataset identifier en de inspire_common:Code, moeten in dat geval de unieke bron identificatie van de dataset bevatten.
Als er wel een aparte namespace bij de dataset identifier in de metadata staat, dient het element inspire_common:Namespace die namespace te bevatten. Dit betekent wel dat de metadata de zogenaamde RS_Identifier gebruikt, met twee elementen: een code en een codeSpace voor de namespace, om de dataset te identificeren. 

Daarnaast wordt ook de link naar de metadata van de dataset opgenomen in het element MetadataURL van de Coverage.
Deze moet hetzelfde zijn als de link in het OperatesOn element in de metadata van de service.

Als laatste kan gecontroleerd worden of de link naar de metadata van de service opgenomen is via inspire_common:MetadataUrl

### Check 4: Heeft de data een view link
Als de (meta)data voorkomt in de lijst met bij het Geoportal bekende datasets, maar het view symbool ![image](https://user-images.githubusercontent.com/80040145/161044869-375c840f-0b01-489c-a644-37818329f354.png) ontbreekt, is de data niet viewable.
Dit kan verschillende oorzaken hebben, maar een vaak voorkomend probleem is de koppeling tussen de dataset en de view service.

Als er een view service beschikbaar is, maar niet getoond wordt in de lijst, check dan of de koppeling aanwezig is met de metadata van de dataset.
De link tussen de metadata van de dataset en de View Service wordt gelegd via het MetadataURL element van de Layer in het capabilities document van de OGC WMS service. Deze link moet hetzelfde zijn als de link in het OperatesOn element in de metadata van de service!

Als laatste kan gecontroleerd worden of de link naar de metadata van de service opgenomen is in het element inspire_vs:ResourceLocator en of de metadata van de service in het NGR gepubliceerd is met de categorie INSPIRE, zie ook [hier](#publiceren-inspire-aanduiding)

![check 4_WMS](media/geoportaltip4.png "Check dataset service koppeling WMS")

### check 5: Daadwerkelijk download data
Check of de data gedownload wordt nadat geklikt wordt op ![image](https://user-images.githubusercontent.com/80040145/160800473-0b6b17e2-65e5-4254-820a-02fdd9552723.png).
en daarna op de blauwe knop "Get Data Set".

### Check 6: Daadwerkelijk viewable data
Check of de data getoond wordt nadat geklikt wordt op ![image](https://user-images.githubusercontent.com/80040145/161044869-375c840f-0b01-489c-a644-37818329f354.png).
en daarna op de blauwe knop "Preview Data Set".

### Check 7: Data en services valideren
Als check 5 of 6 niet gelukt is, valideer dan de data en de services zoals beschreven in het hoofdstuk over [valideren](#validatie).

### Check 8: Priority Data Sets Viewer
Check of de data is te vinden is onder het betreffende Directive voor e-reporting, als dit van [toepassing](#prioritaire-datasets) is.
Ga daarvoor weer naar het startscherm van het <a href="https://inspire-geoportal.ec.europa.eu/" target="_blank">Geoportal</a> en kies nu "Priority Data Sets Viewer".

![check 8 PDS Viewer](media/geoportaltip8a.png "Start Priority Data Sets Viewer ")

En kies dan het betreffende domein:

![check 8_Domein selectie](media/geoportaltip8b.png "Selecteer voor e-reporting domein")

In de meeste gevallen is de (meta)data te vinden onder de domeinen van de prioritaire datasets. 
Dan wordt dit zichtbaar door een selectie toe te passen op een domein en lidstaat.
Check of de (meta)data voorkomt in de lijst met data met een selectie op het Directive waar de data ook voor beschikbaar wordt gemaakt.

![check 8_Lijst](media/geoportaltip8c.png "lijst na selectie domein en land")

Als de (meta)data niet voorkomt onder de Directive, dan is het INSPIRE prioritaire dataset trefwoord en citatie naar de codelijst waarschijnlijk onjuist.
Voor prioritaire datasets dienen de juiste trefwoorden en de juiste citatie informatie van thesaurus te zijn opgenomen, zie voor [instructie](#hoe-om-te-gaan-met-anchor-en-uri).
De prioritaire datasets zijn ook opgenomen in het <a href="https://inspireaanmerking.nl/" target="_blank">Aanmerkingsregister</a>.

### Check 9: Overige checks
Bij INSPIRE geldt dat je maar 1 dataset in de WFS kan ontsluiten <a href="https://inspire.ec.europa.eu/documents/technical-guidance-implementation-inspire-download-services" target="_blank">(TG INSPIRE Download Services)</a>

![check 9_TG RQ 52](media/geoportaltip_TG-RQ-52.png "max 1 dataset per WFS")

Het Geoportal wordt maandelijks geharvest, zie <a href="https://inspire-geoportal.ec.europa.eu/harvesting_status.html" target="_blank">harvesting status</a> en zoek dan op NL voor actuele harvest datum. 
Als door de dataprovider veel aanpassingen zijn doorgevoerd en het resultaat daarvan wil zien in het Geoportal, stuur dan even een mail naar de INSPIRE helpdesk (inspire@geonovum.nl). In zulke gevallen is het mogelijk om een nieuwe harvest te laten runnen!
