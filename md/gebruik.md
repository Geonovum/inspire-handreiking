# Gebruik INSPIRE data

In dit hoofdstuk worden enkele aspecten van het gebruik van INSPIRE datasets behandeld.
Bij de beoogde gebruiker wordt uitgegaan van een basiskennis op het gebied van geoinformatie.
Het gebruik begint bij het vinden van de juiste dataset via de metadata in catalogi. 
Voor het gebruik maakt het uit of het gaat om het gebruik van alleen Nederlandse data of ook data van andere Europese lidstaten.
Daarom zijn paragrafen hieronder, wanneer relevant opgesplitst in 2 delen op basis van dit onderscheid.

Heb je na het lezen van dit hoofdstuk nog een vraag over het gebruik van INSPIRE data, dan kun je die stellen op het <a href="https://geoforum.nl/c/standaarden/inspire/71" target="_blank">Geoforum</a>.

## Vinden

### Vinden van Nederlandse data

Zoals in [hoofdstuk 4](#metadata-publiceren) aangegeven wordt de metadata van de INSPIRE datasets gepubliceerd in het <a href="https://www.nationaalgeoregister.nl/" target="_blank">Nationaal Georegister (NGR)</a>.
Daarom wordt geadviseerd in het NGR te zoeken naar de INSPIRE datasets.
Om alleen INSPIRE datasets en services te vinden, kan je filteren op de zoekresultaten met de categorie INSPIRE.

![NGR](media/NGR-categorie-INSPIRE.png "Nationaalgeoregister")

Zowel de dataset als de view- en downloadservices op die dataset, zijn voorzien van [metadata](#metadata). Door te filteren op brontype kan aangeven worden of alleen de dataset metadata getoond moet worden of juist de service metadata.
Daarnaast kan er ook gefilterd worden op verantwoordelijke organisatie, trefwoorden, type lycenties, servicetypen of tijdsaspecten.
Via de help optie rechtsboven in het NGR kan hulp gevonden worden.
Via de tekst 'Geavanceerd zoeken ↓', kan ook gericht op INSPIRE thema's gezocht worden.

![NGR_geavanceerd zoeken](media/NGR_geavanceerd_zoeken.png "Zoeken op INSPIRE thema in NGR")

### Vinden van Europese data

Wanneer het INSPIRE data van andere Europese lidstaten betreft, kan gezocht worden via het <a href="https://inspire-geoportal.ec.europa.eu/" target="_blank">Europese INSPIRE geoportal</a>.

![EU-geoportal](media/geoportaltip8a.png "EU INSPIRE GEOPORTAL")

Het Europese INSPIRE geoportal heeft momenteel twee hoofdingangen. De INSPIRE Thematic Viewer geeft toegang tot alle datasets die onder INSPIRE vallen. In de INSPIRE Thematic Viewer kan gefilterd worden op het INSPIRE thema en er kan op het land gefiltered worden. 

De Priority Dataset Viewer geeft toegang tot de [INSPIRE prioritaire datasets](#prioritaire-datasets) die ook voor milieurapportage verplichtingen gebruikt worden.
Hierin kan onder andere gezocht worden via de milieuwetgeving waarvoor gerapporteerd wordt. 

Nadat een keuze is gemaakt in de verschillende filteropties verschijnt een lijst van datasets die aan de filteropties voldoen.

![EU-geoportal na selectie](media/geoportaltip1.png "EU INSPIRE GEOPORTAL na selectie op Nederlandse data")

Hierop kan gezien worden of de datasets viewbaar ![image](https://user-images.githubusercontent.com/80040145/170225076-edd06c12-fa61-4756-8d15-178b0c16f60c.png) en/of downloadbaar ![image](https://user-images.githubusercontent.com/80040145/170225177-156c949a-e107-4c0f-9613-5d0102738d33.png) en/of ze regionaal ![image](https://user-images.githubusercontent.com/80040145/170218509-aea835b9-89b7-477e-a3ba-5f94e40badcc.png)
 of landsdekkend ![image](https://user-images.githubusercontent.com/80040145/170218358-2065a7c1-c783-43f2-a956-fa8852828429.png)
zijn.
Wanneer de lijst van zoekresultaten te lang is, kan er eventueel nog verder gezocht worden met zoektermen.
De metadata van de dataset wordt getoond wanneer op één van de datasets in de lijst wordt geklikt. 

Voor grensoverschrijdend gebruik heeft geharmoniseerde data waarschijnlijk de voorkeur, want geharmoniseerde data sluit zowel ruimtelijk als thematisch beter op elkaar aan.
Of een dataset geharmoniseerd is, is aangegeven in het metadata-element *DQ_ConformanceResult*. 
Dit metadata-element wordt helaas niet getoond in de metadata in het INSPIRE Geoportal, maar kan wel via de xml metadata gevonden worden.
Een link naar de xml metadata staat in de getoonde metadata zoals in de afbeelding hieronder is aangegeven met de rode pijl.

![EU-geoportal metadata](media/metadata_EU_portal.png "EU INSPIRE metadata met link naar xml file")

Wanneer een dataset niet te vinden is via het Europese INSPIRE Geoportal, dan kan deze mogelijk gevonden worden via de nationale of regionale catalogi van de lidstaten.
Hieronder volgen enkele tips voor onze buurlanden:

- <a href="https://www.geodaten.niedersachsen.de/startseite/" target="_blank">Nedersaksen</a> (Duitsland)
- <a href="https://www.geoportal.nrw/" target="_blank"> Noordrijn Westfalen</a> (Duitsland)
- <a href="https://gdk.gdi-de.org/gdi-de/srv/dut/catalog.search#/home" target="_blank">Duitsland: Geodatencatalog</a> (Duitsland en ondersteunt Nederlands)
- <a href="https://www.geopunt.be/" target="_blank">Vlaanderen</a> (België)
- <a href="http://geoportail.wallonie.be/" target="_blank">Wallonië</a> (België)
- <a href="https://ckan.publishing.service.gov.uk/dataset/" target="_blank">Groot Brittannië</a>
- <a href="https://www.noordzeeloket.nl/beheer/noordzeeatlas/" target="_blank">Noordzee atlas</a>

Tips voor het vinden van Europese data:
- Omdat de metadata vaak in de lokale taal staat beschreven, loont het om eerst op INSPIRE thema te zoeken en om op zoektermen in de gebruikte metadata taal te zoeken. Er is in het INSPIRE geoportal ook een optie om de metadata automatisch in het Engels te vertalen (zie rechtsboven onder Show metadata fields in:).
- Omdat datasets in de buurlanden vaak regionaal versnipperd zijn, loont het ook te zoeken op de regionale naam.
- Houdt rekening met verschillen in de actualiteit en detailniveau.


## Benaderen

In de metadata van de dataset is te zien op welke manier de data benaderd kan worden.
INSPIRE eist dat data naast vindbaar ook viewbaar en downloadbaar is. Hieronder wordt het bekijken (viewen) van de data behandeld voor de Nederlandse data in het Nationaal Georegister (NGR) en daarna voor Europese data via het Europese INSPIRE Geoportal. Daarnaast is beschreven hoe de data in een GIS of browser benaderd kan worden.


### Viewen Nederlandse data via NGR

In de afbeelding hieronder is te zien hoe in het Nationaal Georegister (NGR) aan de metadata te zien is, of een dataset downloadbaar en/of viewbaaar is via het tabblad "Download, View en links".
Druk op de knop "Voeg aan kaart toe" bij de WMS om de dataset te bekijken.

![viewen via NGR](media/view1.png "viewen via NGR")

Let op: Om performance redenen moet je soms eerst inzoomen voordat je wat te zien krijgt.
Het resultaat ziet er dan bijvoorbeeld als volgt uit.

![view resultaat](media/view2.png "view resultaat")

Door op een object in de getoonde kaart te klikken kan in de meeste gevallen ook de attribuutinformatie van dat object getoond worden.

### Viewen Europese data via INSPIRE Geoportal

In het INSPIRE Geoportal is per dataset aangegeven hoe de dataset te benaderen is met het view symbool ![image](https://user-images.githubusercontent.com/80040145/170225076-edd06c12-fa61-4756-8d15-178b0c16f60c.png) en met het download symbool ![image](https://user-images.githubusercontent.com/80040145/170225177-156c949a-e107-4c0f-9613-5d0102738d33.png). 
Door op het view symbool te klikken bij de gevonden kaartlagen in het INSPIRE Geoportal kan de data bekeken worden. Ook hier geldt dat je soms moet inzoomen voordat de data goed getoond wordt.

![view resultaat EU Geoportal](media/viewresultaat_EU_Geoportal.png "view resultaat in het EU Geoportaal")

### Downloaden data

Voor het downloaden van data zijn er vaak verschillende opties. Is het de bedoeling de hele dataset te downloaden, dan is de [Atomfeed](#atom-feed) een goede optie, indien die beschikbaar is.
Gaat het om slechts een deelgebied of slechts enkele features dan is een [WFS](#wfs), [WCS](#wcs), [SOS](#sos) of [OGC-API Feature service](#ogc-api-s) een betere optie.
Net als bij de WMS, zijn de datasets via downloads op meerdere manieren te benaderen. 

De Atomfeed kan verschillende formaten terugleveren, veelal aangeboden in een zip-file.
Deze is meestal direct te downloaden via de catologi als NGR of het INSPIRE Geoportal waar de dataset gevonden is.  
<!--- De directe URL voor het downloaden van de zip-file via een Atomfeed is te vinden via de service-feed. Dat is een xml-file waarvan de URL in de metadata van de dataset en de Atom service moet staan.
In deze xml file staat dan dan een link naar de dataset-feed. Die bevat dan de directe URL voor het downloaden van de zip-file. Het komt voor dat deze link al direct is opgenomen in de service-feed. --->

Het downloaden van data via een WFS, WCS, OGC-API-features of SOS kan via een [browser](#downloaden-via-een-browser), via een [GIS](#gebruik-nl-inspire-data-in-gis) of via catalogi als NGR of het INSPIRE Geoportal. 
Het INSPIRE Geoportal heeft echter een beperking ingebouwd dat er maar 2 features geleverd worden om te voorkomen dat het systeem overbevraagd wordt.  

De WFS geeft default een GML bestand terug. 
De OGC-API-features geven in de meeste gevallen default een GeoJSON bestand. Voor beide geldt dat ook andere formaten geïmplementeerd kunnen zijn. 

Het is niet altijd nodig de bestanden lokaal op te slaan. De meeste download-services kunnen ook direct gebruikt worden in applicaties die toegang hebben tot internet. Dit geldt ook voor GIS-applicaties zoals beschreven in de volgende paragraaf.

In het geval van te grote datasets die niet in zijn geheel via een WFS in een GIS te gebruiken zijn, is het advies om deze grote datasets eerst te downloaden via de predefined download. Dat kan via een Atomfeed zijn, maar ook via een stored query in een WFS.

### Gebruik NL INSPIRE data in GIS

***QGIS-INSPIRE plugin***

Om het gebruik van Nederlandse INSPIRE data te vergemakkelijken voor de GIS-gebruikers in Nederland is er een QGIS-INSPIRE plugin ontwikkeld. De plugin maakt het gemakkelijk om direct de INSPIRE datasets en services te vinden, te raadplegen en te downloaden. Via de plugin kan een gebruiker zowel vrij zoeken als zoeken op trefwoord, INSPIRE-thema, organisatie of type service. Het gevonden resultaat kan direct aan QGIS toegevoegd worden. De QGIS-INSPIRE plugin is te downloaden vanuit het plugin menu in de werkbalk van QGIS. 
De QGIS-INSPIRE plugin is tot stand gekomen onder verantwoordelijkheid van Geonovum. De plugin is ontwikkeld door <a href="https://kgis.be/" target="_blank">KGIS</a>.
Er is een <a href="https://youtu.be/X-LPuf5Vchg" target="_blank">video</a> gemaakt om uit te leggen hoe de plugin geïnstalleerd en gebruikt kan worden.
Daarnaast is er een <a href="https://github.com/warrieka/inspireNL" target="_blank">Github pagina</a> over deze plugin. Hier kunnen de source-code en issues gevonden worden. Bekende issues zijn dat niet elke Atom feed een goede download geeft en dat als Type op service gezet wordt, dat dan niet alles gevonden wordt.

![QGIS plugin](media/QGIS_plugin.png "QGIS INSPIRE plugin")

### Gebruik EU INSPIRE data in GIS 

Europese INSPIRE data is helaas niet met de QGIS-INSPIRE plugin in te lezen, maar wel met de basisfunctionaliteit van QGIS. 
Omdat het grensoverschrijdend kunnen werken met geoinformatie, een belangrijk doel is van INSPIRE, wordt in deze paragraaf daarvan een voorbeeld getoond.

Wanneer INSPIRE kaartlagen van verschillende EU-landen in een GIS getoond worden, is het verstandig eerst een coordinaatsysteem te kiezen dat door alle te gebruiken kaartlagen ondersteund wordt.
Een ETRS89 gebaseerd coördinaatsyteem is dan voor de hand liggend, omdat dat voor INSPIRE ondersteund moet worden.
In onderstaande afbeelding wordt getoond hoe INSPIRE WMS-en van meerdere EU-landen toe te voegen zijn aan een QGIS project met de basisfunctionaliteit van QGIS. 
Door met de rechter muisknop op "WMS/WMTS" in de QGIS te klikken, kan een nieuwe verbinding gemaakt worden met een view service.
De stam URL van de WMS, zoals te vinden in de metadata, moet opgegeven worden en de gebruiker mag een eigen bedachte naam aan WMS geven.

![WMS in QGIS](media/WMS_QGIS.png "WMS verbinding maken in QGIS")

Nadat de verbinding is gemaakt, kan een laag uit de WMS gekozen worden en de kaartlaag zal worden toegevoegd en getoond.
Daarna kunnen ook andere services worden toegevoegd, zoals bijvoorbeeld de WMS-en van de gemeentelijke administratieve eenheden van België en Duitsland via de URL's die in de metadata beschreven worden:
- https://ccff02.minfin.fgov.be/geoservices/arcgis/services/INSPIRE/AU/MapServer/WMSServer?service=WMS&request=GetCapabilities
- https://www.wms.nrw.de/geobasis/wms_nw_inspire-verwaltungseinheiten_atkis-basis-dlm?REQUEST=GetCapabilities&SERVICE=WMS&VERSION=1.3.0

Daarna ontstaat het volgende beeld:

![WMS in QGIS EU data](media/AU_NL_B_D_QGIS.png "WMS INSPIRE datasets van 3 EU landen")

Voor de downloadservices als WFS, OGC API Features en WCS worden vergelijkbare stappen doorlopen. Het loont bij grote datasets om eerst de WMS te laden, dan in te zoomen op het interesse gebied en daarna pas de downloadservices te laden, omdat dan minder features ingelezen hoeven te worden. 
CBS heeft een internetpagina ingericht waarin het <a href="https://www.cbs.nl/geoservices/" target="_blank">gebruik van geoservices</a> in QGIS wordt uitgelegd met een handleiding en video. Het is inmiddels enigszins verouderd, maar het principe is nog steeds hetzelfde.

In sommige gevallen leiden de INSPIRE datamodellen tot complexe GML die niet direct in te lezen is in QGIS.
Het kan dan helpen om ***QGIS GML Application Schema Toolbox*** ook te laden via het plugin menu in QGIS.
![GML_ASTB plugin](media/GML_ASTB.png "QGIS GML Application Schema Toolbox plugin")

### Viewen via een browser

Het is ook mogelijk de WMS te viewen in een browser. Bijvoorbeeld de WMS: 
https://service.pdok.nl/kadaster/bestuurlijkegebieden/wms/v1_0?REQUEST=GetMap&WIDTH=1920&HEIGHT=1024&VERSION=1.3.0&FORMAT=image/png&BBOX=0.0,300000.0,650000.0,650000.&CRS=EPSG:28992&LAYERS=Gemeentegebied

Hierin is:
- https://service.pdok.nl/kadaster/bestuurlijkegebieden/wms/v1_0? de algemene stam-URL van de service.
- ***REQUEST=GetMap*** het toon kaart verzoek.
- ***WIDTH=1920&HEIGHT=1024*** het formaat in de browser.
- ***VERSION=1.3.0*** de versie van het servicetype.
- ***FORMAT=image/png*** het gewenste outputformaat.
- ***BBOX=0.0,300000.0,650000.0,650000.0*** de begrenzing van het gebied dat afgebeeld moet worden.
- ***CRS=EPSG:28992*** het coordinaatsysteem, waarin de BBOX gegeven is.
- ***LAYERS=Gemeentegebied*** de kaartlaag

Via het GetCapabilities request kan o.a. gezien worden welke layers (lagen), styles en CRS-en ondersteund worden. Voor het voorbeeld van de bestuurlijke gebieden hierboven, zijn de Capabilities als volgt op te vragen:
https://service.pdok.nl/kadaster/bestuurlijkegebieden/wms/v1_0?SERVICE=WMS&REQUEST=GetCapabilities

Daarnaast zijn er verschillende applicaties die helpen bij het tonen van een WMS. Genoemd zijn al de GIS-applicaties zoals [QGIS](#gebruik-nl-inspire-data-in-gis), maar er zijn ook vele andere online applicaties ontwikkeld die gebruik maken van de WMS.
Het enige wat voor deze applicaties van belang is als input, is de stam URL van de WMS, zoals te vinden in de metadata (zoals https://service.pdok.nl/kadaster/bestuurlijkegebieden/wms/v1_0? in het voorbeeld van de bestuurlijke gebieden hierboven).

### Downloaden via een browser

Net als bij de WMS is de downloadservices WFS ook direct via de browser te bevragen met het GetCapabilities request. Om specifieke features op te vragen is het GetFeature request beschikbaar in combinatie met een filter. Een voorbeeld van een WFS-request is:
https://service.pdok.nl/kadaster/bestuurlijkegebieden/wfs/v1_0?service=WFS&version=2.0.0&request=GetFeature&typename=gemeentegebied&CRS=epsg:28992&format=GML&filter=%3CFilter%2Bxmlns%3D%22http%3A%2F%2Fwww.opengis.net%2Fogc%22%3E%3CPropertyIsEqualTo%3E%3CPropertyName%3Eidentificatie%3C%2FPropertyName%3E%3CLiteral%3EGM0503%3C%2FLiteral%3E%3C%2FPropertyIsEqualTo%3E%3C%2FFilter%3E 

Hierin is
- https://service.pdok.nl/kadaster/bestuurlijkegebieden/wfs/v1_0? de stam-URL 
- ***service=WFS&version=2.0.0*** de versie
- ***request=GetFeature*** het verzoek
- ***typename=gemeentegebied*** de laagnaam
- ***CRS=epsg:28992*** het gevraagde coordinaatsysteem voor de coordinaten
- ***format=GML*** het outputformaat
- ***filter=tekst tot het einde van het request*** de filter op de gemeente Delft met code GM0503.

In de meeste browsers is dit daarna via de rechter muisknop op te slaan als een lokaal GML bestand.
