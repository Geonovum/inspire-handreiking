# Gebruik INSPIRE data

In dit hoofdstuk worden enkele aspecten van het gebruik van INSPIRE datasets behandeld.
Het gebruik begint bij het vinden van de juiste dataset via de metadata in catalogi. 
Na het bestuderen van de metadata moet dan de juiste benadering van de data bepaald worden.
Voor het gebruik maakt het nogal uit of het gaat om het gebruik van alleen Nederlandse data of ook data van andere Europese landen.
Daarom is dit hoodfstuk opgesplitst in 2 delen op basis van dit onderscheid.

##Gebruik Nederlandse INSPIRE data

### Vinden van NL-data

In het geval van Nederlandse INSPIRE-data wordt geadviseerd eerst te zoeken in het <a href="https://www.nationaalgeoregister.nl/" target="_blank">Nationaal Georegister</a> (NGR).
Om alleen INSPIRE-datasets en services te vinden, kan je filteren op de zoekresultaten met de categorie INSPIRE.
![NGR](media/NGR-categorie-INSPIRE.png "Nationaalgeoregister")

Veel data komt meerdere keren voor maar dan als verschilend brontype. Meestal als dataset, maar ook vaak als verschillende services. Om deze dubbeling er uit te halen kan gefilterd worden op bontype.
Daarnaast kan er ook gefilterd worden op verantwoordelijke organisatie, trefwoorden, type lycenties, servicetypen en tijdsaspecten.
Via de helpknop reschtboven de pagina kan hulp gevonden worden.

### Bestuderen van de metadata
Bij het bestuderen van de metadata gaat het in eerste instantie om de vraag of de dataset geschikt is voor het doel van het gebruik. 
Daarbij spelen aspecten als:
- Actualiteit
- Nauwkeurigheid
- Volledigheid
- Gebruiksbeperkingen
- Hoe de data te benaderen is
- Geharmoniseerd of AsIs?
- Beschikbare coördinaatsysteem

Maar eigenlijk alles wat hierover beschreven staat in het hoofdstuk over [metadata](#metadata)

In het geval de metadata niet het antwoord geeft dat gezocht wordt, kan contact opgenomen worden met de organisatie die verantwoordelijk is. Die contact-informatie is ook te vinden in de metadata.

###Benaderen van NL-data


##Gebruik Europese INSPIRE data 

### Vinden van EU-data

Wanneer het geen Nederlandse data betreft kan het beste in eerste instantie gezocht worden via het <a href="https://inspire-geoportal.ec.europa.eu/" target="_blank">INSPIRE GEOPORTAL</a>
![EU-geoportal](media/geoportaltip8a.png "EU INSPIRE GEOPORTAL")

Wanneer het niet te vinden is via het INSPIRE GEOPORTAL, dan kan het mogelijk nog gevonden worden via de lokale catalogi.
Hieronder volgen enkele tips voor onze buurlanden.
- Duitsland <a href="https://www.geodaten.niedersachsen.de/" target="_blank">Nedersaksen</a>
- Duitsland <a href="https://www.geoportal.nrw/" target="_blank"> Noordrijn Westfalen</a>
- België <a href="https://www.geopunt.be/" target="_blank">Vlaanderen</a>
- België <a href="http://geoportail.wallonie.be/" target="_blank">Wallonië</a>
- <a href="https://www.noordzeeloket.nl/beheer/noordzeeatlas/" target="_blank">Noordzee</a>
- <a href="https://ckan.publishing.service.gov.uk/dataset/" target="_blank">Groot Brittannië</a>

Wanneer het gaat om grensoverschrijdend gebruik is het natuurlijk verstandig eerst te zoeken naar datasets die geharmoniseerd zijn naar het betreffende thema. 
Als dat niet te vinden is, kan de AsIs data soms toch ook voldoende zijn voor het gebruiksdoel.

Omdat het hier vooral om INSPIRE datasets gaat is het verstandig ook het betreffende INSPIRE thema als zoekcriterium te gebruiken. 
Daarnaast helpt het om eerst het datamodel van dit thema goed te bestuderen en vervolgens het feature type te kiezen waar men naar op zoek is te kiezen als zoekterm. 
Dit feature type is meestal verplicht in de laagnamen en zal daarom voor alle landen gelijk zijn wanneer het geharmoniseerde bestanden betreft.

Andere belemmeringen voor het gebruik van INSPIRE data in grensoverschrijdende projecten kunnen zijn:
- De metadata is vaak in de lokale taal.
- Dataset in de buurlanden zijn vaak regionaal versnipperd.
- Actualiteit en detailniveau kunnen sterk verschillen.
- Schijnbaar dezelfde data van buurlanden kan toch semantisch verschillend zijn, waardoor appels met peren vergeleken worden.
- Soms moet er eerst iets ondertekend worden voordat je het mag downloaden.
- De Inspire geharmoniseerde datasets zijn niet altijd de meest actuele en volledige datasets.
- De soms gebruikte complexe INSPIRE modelen, leiden vaak tot complexe GML en die is vaak moeilijk in het gebruik.
- Verschillende styling.
- Verschillende coördinaatsystemen. Kies bij voorkeur een op ETRS89 gebaseerd coördinaatsyteem, omdat dat voor INSPIRE ondersteund moet worden.
- Te grote datasets die niet in zijn geheel via een WFS in een GIS-systeem te gebruiken zijn. Het advies is om grote datasets eerst te downloaden.



## Benadering van de data
In de metadata van de dataset is te zien op welke manier de data benaderd kan worden.
INSPIRE eist dat data naast vindbaar ook viewbaar en downloadbaar is. 
In de afbeelding hieronder is te zien hoe dit bv in het Nationaal Georegister te zien is via het tabblad "Download, View en links".

![Download, View en Links](media/gebruik_benaderen.png "Download, View en Links")

### Viewen

Vaak is de dataset al direct te bekijken via de matadatacatalogus via de WMS. Hieronder is een voorbeeld hoe dat werkt in het Nationaal Georegister.

![viewen via NGR](media/view1.png "viewen via NGR")

Druk op de knop "Voeg aan kaart toe" om de dataset te bekijken.
Let op: soms moet je eerst inzoomen voordat je wat te zien krijgt.
Het resultaat ziet er dan bijvoorbeeld als volgt uit.

![view resultaat](media/view2.png "view resultaat")

Het is ook mogelijk de WMS te viewen in een browser met bv: 
https://service.pdok.nl/kadaster/bestuurlijkegebieden/wms/v1_0?SERVICE=WMS&REQUEST=GetMap&WIDTH=1920&HEIGHT=1024&VERSION=1.3.0&FORMAT=image/png&BBOX=0.0,300000.0,650000.0,650000.&CRS=EPSG:28992&STYLES=&TRANSPARENT=TRUE&LAYERS=Gemeentegebied

Via het GetCapabilities request kan o.a. gezien worden welke layers, styles en CRS-en ondersteund worden. Voor het voorbeeld van de bestuurlijke gebieden hierboven:
https://service.pdok.nl/kadaster/bestuurlijkegebieden/wms/v1_0?SERVICE=WMS&REQUEST=GetCapabilities

Daarnaast zijn er verschillende applicaties die helpen bij het tonen van een WMS. De meest bekende zijn de GIS-applicaties zoals [QGIS](#gebruik-in-gis), maar er zijn ook vele andere online applicaties ontwikkeld die gebruik maken van de WMS. Het enige wat voor deze applicaties van belang is als input, is de stam URL van de WMS zoals te vinden in de metadata (bv https://service.pdok.nl/kadaster/bestuurlijkegebieden/wms/v1_0? in het voorbeeld van de bestuurlijke gebieden hierboven.

### Downloaden
Voor het downloaden zijn er vaak verschillende opties. Is het de bedoeling de hele dataset te downloaden, dan is de [Atomfeed](#atom-feed) een goede optie, indien die beschikbaar is. Gaat het om slechts een deelgebied of slechts enkele features dan is een [WFS](#wfs), [WCS](#wcs), [SOS](#sos) of [OGC-API Feature service](#ogc-api-s) een betere optie. Net als bij de WMS, zijn de datasets via downloads op meerdere manieren te benaderen.

De Atomfeed kan verschillende formaten terug leveren, meestal ingepakt in een zip-file. De WFS geeft default een GML bestand terug. De OGC-API-features geven in de meeste gevallen default een Geojson bestand. Voor beide geldt dat ook andere formaten geïmplementeerd kunnen zijn. 
Net als bij de WMS is de downloadservices WFS ook direct via de browser te bevragen met het GetCapabilities request. Om specifieke features op te vragen is het GetFeature request beschikbaar in combinatie met een filter. vb:
https://service.pdok.nl/kadaster/bestuurlijkegebieden/wfs/v1_0?service=WFS&version=2.0.0&request=GetFeature&typename=gemeentegebied&CRS=epsg:28992&format=GML&filter=%3CFilter%2Bxmlns%3D%22http%3A%2F%2Fwww.opengis.net%2Fogc%22%3E%3CPropertyIsEqualTo%3E%3CPropertyName%3Eidentificatie%3C%2FPropertyName%3E%3CLiteral%3EGM0503%3C%2FLiteral%3E%3C%2FPropertyIsEqualTo%3E%3C%2FFilter%3E 
geeft de GML file van de gemeente Delft met code GM0503. In de meeste browsers is dit daarna via de rechter muisknop op te slaan als een lokaal GML bestand. 

Het is niet altijd nodig de bestanden lokaal op te slaan. De meeste download-services kunnen ook direct gebruikt worden in applicaties die toegang hebben tot internet. Dit geldt ook voor GIS-applicaties zoals beschreven in de volgende paragraaf.

### Gebruik in GIS

In deze paragraaf wordt aan de hand van de open source GIS-applicatie QGIS met 3 voorbeelden getoond hoe INSPIRE services gebruikt kunnen worden.

- ***QGIS basisfunctionaliteit***

    In onderstaande afbeelding wordt getoond hoe een WMS is toe te voegen aan een QGIS project met de basisfunctionaliteit van QGIS. De stam URL van de WMS moet opgegeven worden en er mag een eigen bedachte naam aan gegeven worden. 
    ![WMS in QGIS](media/WMS_QGIS.png "WMS verbinding maken in QGIS")
    Nadat de verbinding is gemaakt, kan een laag gekozen worden en zal de laag getoond worden.
    Voor de downloadservices als WFS,OGC-API- Features en WCS worden vergelijkbare stappen doorlopen. Het loont bij grote datasets om eerst de WMS te laden, dan in te zoomen op het interesse gebied en daarna pas de downloadservices te laden, omdat dan minder features ingelezen hoeven te worden. 
    CBS heeft een internetpagina ingericht waarin het <a href="https://www.cbs.nl/geoservices/" target="_blank">gebruik van geoservices</a> in QGIS wordt uitgelegd met een handleiding en video. Het is inmiddels enigszins verouderd, maar het principe is nog steeds hetzelfde.

- ***QGIS-INSPIRE plugin***

    Om het gebruik van INSPIRE data te vergemakkelijken voor de GIS-gebruikers in Nederland is er een QGIS plugin ontwikkeld. De plugin maakt het gemakkelijk om direct de INSPIRE datasets en services te vinden, te raadplegen en te downloaden. Via de plugin kan een gebruiker zowel vrij zoeken als INSPIRE-data zoeken op trefwoord, INSPIRE-thema, organisatie of type service. Het gevonden resultaat kan je direct toevoegen aan QGIS. Je kunt de INSPIRE plugin downloaden vanuit de werkbalk van QGIS. 
    De INSPIRE QGIS plugin is tot stand gekomen onder verantwoordelijkheid van Geonovum. De plugin is ontwikkeld door <a href="https://kgis.be/" target="_blank">KGIS</a>.
    Er is een <a href="https://youtu.be/X-LPuf5Vchg" target="_blank">video</a> gemaakt om uit te leggen hoe de plugin geïnstalleerd en gebruikt kan worden.
    Daarnaast is er een <a href="https://github.com/warrieka/inspireNL" target="_blank">Github pagina</a> over deze plugin. Hier kunnen de source-code en issues gevonden worden. Bekende issues zijn dat niet elke Atom feed een goede download geeft en dat als Type op service gezet wordt, dat dan niet alles gevonden wordt.
    ![QGIS plugin](media/QGIS_plugin.png "QGIS INSPIRE plugin")
    In sommige gevallen leiden de INSPIRE datamodellen tot complexe GML die niet direct in te lezen is in QGIS.
    Het kan dan helpen om ***QGIS GML Application Schema Toolbox*** ook te laden via het plugin menu in QGIS.
    ![GML_ASTB plugin](media/GML_ASTB.png "QGIS GML Application Schema Toolbox plugin")

- ***PDOK-PDOK plugin***

Tenslotte is er ook nog de PDOK plugin in QGIS die kan helpen. Deze toont alle services die beschikbaar zijn bij PDOK. Het voordeel t.o.v. de INSPIRE plugin is dat ook niet INSPIRE services getoond worden. Daarnaast laadt deze plugin ook de bijbehorende styles voor de verschillende WMS services, zoals hieronder getoond. Nadeel is dat alleen de PDOK services getoond worden en niet die van andere providers.
    ![PDOK plugin](media/PDOK_plugin.png "QGIS PDOK plugin")

## Algemene gebruikstips

Op GeoForum kan je ervaringen delen en/of vragen stellen aan specialisten zoals die van PDOK en Geonovum. Door gebruik te maken van het GeoForum kunnen we issues èn oplossingen direct met elkaar delen. Dus heb je een vraag over INSPIRE? Stel hem op GeoForum.

Om kennis te delen, issues te signaleren en feedback te vragen van experts uit heel Europa kan je terecht bij het <a href="https://inspire.ec.europa.eu/inspire-helpdesk" target="_blank">INSPIRE Community Forum</a>.

