# Gebruik INSPIRE data

In dit hoofdstuk worden enkele aspecten van het gebruik van INSPIRE datasets behandeld.
Het gebruik begint bij het vinden van de juiste dataset via de metadata in catalogi. 
Na het bestuderen van de metadata moet dan de juiste benadering van de data bepaald worden.

## Vinden van de data

Wanneer het alleen Nederlandse geodata betreft wordt geadviseerd eerst te zoeken in het <a href="https://www.nationaalgeoregister.nl/" target="_blank">Nationaal Georegister</a>. 
Wanneer het geen geodata, maar wel Nederlandse overheids data betreft wordt geadviseerd eerst te zoeken in het <a href="https://data.overheid.nl/" target="_blank">open data portaal van de overheid</a>.

Wanneer het geen Nederlandse data betreft kan het beste in eerste instantie gezocht worden via het <a href="https://inspire-geoportal.ec.europa.eu/" target="_blank">INSPIRE GEOPORTAL</a>
Wanneer het niet te vinden is via het INSPIRE GEOPORTAL, dan kan het mogelijk nog gevonden worden via de locale catalogie.
Hieronder volgen enkele tips voor onze buurlanden.
- Duitsland, Nedersaksen: https://www.geodaten.niedersachsen.de/
- Duitsland, Noordrijn Westfalen: https://www.geoportal.nrw/
- Belgie, Vlaanderen: https://www.geopunt.be/
- Belgie, Wallonië: http://geoportail.wallonie.be/
- Noordzee: https://www.noordzeeloket.nl/beheer/noordzeeatlas/
- Groot Brittannië: https://www.gov.uk/guidance/how-to-access-natural-englands-maps-and-data/

Omdat het hier vooral om INSPIRE datasets gaat is het verstandig ook het betreffende INSPIRE thema als zoekcriterium te gebruiken. 
Daarnaast helpt het om eerst het datamodel van dit thema goed te bestuderen en vervolgens het feature type te kiezen waar men naar op zoek is. 
Ook dat kan vaak als zoekcriterium gebruikt worden.

Wanneer het gaat om grensoverschreidend gebruik is het natuurlijk verstandig eerst te zoeken naar datasets die geharmoniseerd zijn naar het betreffende thema. 
Als dat niet te vinden is, kan de AsIs data soms toch ook voldoende zijn voor het gebruiksdoel.

## Bestuderen van de metadata
Bij het bestuderen van de metadata gaat het in eerste instantie om de vraag of de dataset geschikt is voor het doel van het gebruik. 
Daarbij spelen aspecten als:
- Actualiteit
- Nauwkeurigheid
- Volledigheid
- Gebruiksbeperkingen
- Hoe de data te benaderen is
- Geharmoniseerd of AsIs

Maar eigenlijk alles wat hierover beschreven staat in het hoofdstuk over [metadata](#metadata)

In het geval de metadata niet het antwoord geeft dat gezocht wordt kan contact opgenomen wordt met de organisatie die verantwoordelijk is. Die contact-informatie is ook te vinden in de metadata.

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
Het resultaat ziet er dan als volgt uit.

![view resultaat](media/view2.png "view resultaat")

Het is ook mogelijk de WMS te viewen in een browser met bv: 
https://service.pdok.nl/kadaster/bestuurlijkegebieden/wms/v1_0?SERVICE=WMS&REQUEST=GetMap&WIDTH=1920&HEIGHT=1024&VERSION=1.3.0&FORMAT=image/png&BBOX=0.0,300000.0,650000.0,650000.&CRS=EPSG:28992&STYLES=&TRANSPARENT=TRUE&LAYERS=Gemeentegebied

Daarnaast zijn er verschillende applicaties die helpen bij het tonen van een WMS. De meest bekende zijn de GIS-applicaties zoals [QGIS](#), maar er zijn ook vele andere online applicaties ontwikkeld die gebruiken maken van de WMS. Het enige wat voor deze applicaties van belang is als input is de Stam URL van de WMS zoals te vinden in de metadata (bv https://service.pdok.nl/kadaster/bestuurlijkegebieden/wms/v1_0? in het voorbeeld hierboven.

### Downloaden



### Gebruik in GIS

***QGIS direct***

***QGIS-plugin***

***PDOK-plugin***

### Gebruik in app

## Algemene tips

