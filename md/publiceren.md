# Publiceren

INSPIRE verplicht het ontsluiten van de metadatabestanden in een Discovery Service. In Nederland dient het [Nationaal Georegister](https://nationaalgeoregister.nl/geonetwork/srv/dut/catalog.search#/home) (NGR) als de Discovery Service voor INSPIRE. Het Nationaal Georegister maakt het mogelijk deze metadata te doorzoeken. Metadata speelt een cruciale rol in het toegankelijk maken van de dataset zelf.

Het publiceren in het Nationaal Georegister is de laatste stap die een dataprovider moet doorlopen. In de praktijk houdt dit niets anders in dan de metadata van de dataprovider aanbieden aan het NGR, waardoor ze doorzoekbaar en vindbaar (en bindbaar) wordt. Je hebt hier als dataprovider een account voor nodig, die via het [PDOK Klantcontactcenter](https://www.pdok.nl/contact) aan te vragen is. Met het account krijg je gratis toegang tot het deel bestemd voor content-beheerders, het 'publiceer'-gedeelte van het NGR-portaal. Op het portaal zelf is documentatie te vinden die de dataprovider uitleggen hoe het publiceren in zijn werk gaat. Als men over een account beschikt kan men naar de beheeromgeving gaan door te navigeren naar inloggen (bovenaan de pagina). Vervolgens kan men naar beheer te gaan. In de beheeromgeving kan men nieuwe metadata aanmaken of metadata uploaden of harvesten. Het is ook mogelijk om bestaande metadata aan te passen of te verwijderen.

Als een organisatie nog niet beschikt over metadata kan gebruik worden gemaakt van de metadata-editor, die is opgenomen in het NGR. Hiermee kan metadata volgens het Nederlands metadataprofiel op ISO 19115 versie 1.3 worden ingevuld, of metadata voor services volgens het Nederlandse metadata profiel op ISO 19119 voor services versie 1.2.

![ngr_editor](media/NGR2_editor2.png "Metadata-editor van het NGR.")

Een meer geavanceerde manier om metadata op te nemen in het Nationaal Georegister is door het uploaden van een XML-bestand. Deze methode is vooral geschikt voor gebruikers die met behulp van een eigen tool metadata hebben aangemaakt en deze in XML-formaat kunnen wegschrijven.

![ngr_xml](media/NGR2_xml_upload2.png "Importeren van XML-metadata in het NGR.")

Voor organisaties die weinig metadata beheren, is het implementeren en beheren van een catalogue weinig rendabel. Aangezien het plaatsen van XML-bestanden in een web accessible folder gemakkelijk is, is dit een laagdrempelige oplossing om meer metadata-documenten beschikbaar te maken voor anderen, die geharvest kunnen worden. Hiervoor wordt het webDAV (Distributed Authoring and Versioning) protocol gebruikt om metadata van een DAV-server te harvesten. WebDAV definieert zogenoemde collecties van files op een webserver. Deze kunnen gebruikt worden om meerdere metadata documenten tegelijk te
harvesten.

![webdav](media/NGR2_harvesting2.png "")

Als een organisatie een eigen catalogue heeft kan van deze catalogue informatie overgenomen worden waarbij de metadata-records worden gekopieerd naar het nationaal georegister. De harvest-operatie van de catalogue-service is erop gericht om records in het nationaal georegister te creëren of te updaten. Hiervoor wordt de CSW-standaard gebruikt. CSW staat voor Catalogue Services for the Web en is een zoek-interface voor catalogues ontwikkeld door het Open Geospatial Consortium. NGR ondersteunt versie 2.0.2 ISO AP van deze standaard.

## Publiceren INSPIRE-aanduiding

De selectie voor het Europese INSPIRE-portaal uit het NGR vindt plaats op basis van de categorie-aanduiding INSPIRE. Via de user interface van het NGR kan men dezelfde resultaten krijgen door het filter categorie INSPIRE toe te passen.

![categorie](media/Inspire_categorie.png "Filteren op INSPIRE in het NGR.")

Als dataprovider kan de categorie INSPIRE aan de metadata worden toegevoegd/verwijderd door in de publiceer omgeving van het NGR in te loggen, het juiste bestand te kiezen, met rechter muisknop op de titel te klikken, naar categorieen te gaan en bij categorie het INSPIRE vinkje te zetten/verwijderen.

![categorie_maken](media/Categorie_INSPIRE_maken.png "Categorie INSPIRE toevoegen aan dataset in het NGR.")
![categorie_selecteren](media/Categorie_INSPIRE_selecteren.png "Categorie INSPIRE selecteren in het NGR.")