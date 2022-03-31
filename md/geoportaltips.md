### Tips om data goed in het Geoportal te krijgen

In deze paragraaf is aangegeven wat de oorzaak kan zijn als data niet in het Europese INSPIRE Geoportal aanwezig is en waarom een download en/of view link kunnen ontbreken.
Ook is hier te vinden via welke elementen de relatie tussen (metadata)data en service wordt gelegd. 
Loop onderstaande stappen door, voor verder in het diepe te duiken:

1) Is de data beschikbaar?
2) Check of de data is te vinden onder het INSPIRE data thema, waar het onder valt.
3) Check of de data een download link heeft.
4) Check of de data view link heeft.
5) Check of de data daadwerkelijk downloadbaar is.
6) Check of de data daadwerkelijk viewable is.
7) Check of de data, service en metadata valide is.
8) Check of de data te vinden is onder het domein voor e-reporting.
9) Overige aandachtspunten.

#### check 1: Is de data beschikbaar?
Ga naar het startscherm van het [Geoportal](https://inspire-geoportal.ec.europa.eu/) en kies INSPIRE Thematic Viewer.
![check 8 PDS Viewer](media/geoportaltip8a.png "Start Priority Data Sets Viewer ") 
Pas in het Geoportal een selectie toe op het INSPIRE thema van de dataset en lidstaat. Check of
1) De (meta)data voorkomt in de lijst met data. 
Als de (meta)data voorkomt in de lijst met data en 
2) De data ook daadwerkelijk te downloaden en te bekijken is, 
Dan is verdere actie niet noodzakelijk.

!check 1](media/geoportaltip1.png "Check of de data vindbaar is")

#### check 2: Is de dataset te vinden onder het INSPIRE thema
Check of de data is te vinden onder het INSPIRE data thema, waar het onder valt.
Dit wordt zichtbaar door een selectie toe te passen op een thema en lidstaat.
In het voorbeeld hieronder is er geen (meta)data onder het thema Gegraphical grid systems voor Nederland.

![check 2](media/geoportaltip2.png "Check of vindbaar onder thema")

Als de (meta)data niet voorkomt in de Geoportal, dan is 
Of de metadata niet in het NGR gepubliceerd met de categorie INSPIRE, 
      zie https://geonovum.github.io/inspire-handreiking/#publiceren-inspire-aanduiding
- Of het INSPIRE thema en citatie naar de thesaurus is niet goed opgenomen in de metadata van de dataset.

Het INSPIRE thema wordt opgenomen uit de INSPIRE Thesaurus.
De INSPIRE Thesaurus citatie, is als volgt: 
Thesaurus: ”GEMET - INSPIRE themes, version 1.0”
Datum: ”2008-06-01”  
Datum type: ”publication”
zie ook [hier](#hoe-om-te-gaan-met-anchor-en-uri)

#### check 3: Heeft de data een download link
Als het download pictogram ![image](https://user-images.githubusercontent.com/80040145/160800473-0b6b17e2-65e5-4254-820a-02fdd9552723.png)
ontbreekt terwijl die er wel had moeten zijn kan dat verschillende oorzaken hebben.
Daarvoor moeten we onderscheid maken tussen [WFS](#wfs), [ATOM](#atom-feed), [SOS](#sos) en [WCS](#wcs).

***WFS***
Het kan zijn dat de koppeling ontbreekt bij het SpatialDataSetIdentifier element in de Extended GetCapabilities.
Het SpatialDataSetIdentifier element bestaat uit twee subelementen:
1) identifier: inspire_dls:SpatialDataSetIdentifier/inspire_common:Code
2) namespace: inspire_dls:SpatialDataSetIdentifier/inspire_common:Namespace
De identifier moet hetzelfde zijn als die in het element unieke identifier van de bron, in de metadata van de dataset!
De inspire_common:Namespace mag worden weggelaten als er geen aparte namespace in de metadata van de data is opgenomen voor de dataset identifier. De dataset identifier en de inspire_common:Code, moeten in dat geval de unieke bron identificatie van de dataset bevatten.
Als er wel een aparte namespace bij de dataset identifier in de metadata staat, dient het element inspire_common:Namespace die namespace te bevatten. Dit betekent wel dat de metadata de zogenaamde RS_Identifier gebruikt, met 2 elementen: een code en een codeSpace voor de namespace, om de dataset te identificeren. 
Het gebruik van zowel MD_identifier als RS_identifier is mogelijk volgens het NL Metadata profiel v 1.3.1.

Check ook of de links naar de metadata van de dataset opgenomen zijn in het element MetadataURL per FeatureType.
Deze moet hetzelfde zijn als de link in het OperatesOn element in de metadata van de service.
Let op: Deze wordt niet getoond in onderstaande figuur.

Als 3e kan gecontroleerd worden of de link naar de metadata van de service opgenomen is via <inspire_dls:ExtendedCapabilities> en <inspire_common:MetadataUrl>
Dit en de elementen uit de eerst genoemde check worden wel getoond in onderstaande figuur.

![check 3_WFS](media/geoportaltip3_wfs.png "Check dataset service koppeling WFS")

***ATOM***
Het kan zijn dat de koppeling naar de metadata van de dataset ontbreekt in het ***link element*** in de entry in de top feed van de Atom service.
De link  bevat:
- De link naar de metadata van de dataset (href="URL naar metadata in bv NGR")
- De relatie (rel="describedby") 
- Het type (type="application/xml" )
Deze link moet hetzelfde zijn als de link in het OperatesOn element in de metadata van de Atom service!

Daarnaast wordt in deze entry ook de identifier en namespace van de dataset opgenomen in het ***spatial_dataset_identifier_code element*** en ***spatial_dataset_identifier_namespace element***.
De identifier moet hetzelfde zijn als die in het element unieke identifier van de bron, zoals opgegeven in de metadata van de dataset.
Voor Atom feeds is de situatie vergelijkbaar als bij WFS. De elementen voor de INSPIRE namespace dienen alleen ingevuld te worden als er een apart namespace element is, bij de dataset identifier in de dataset metadata.
Dit is in een werkgroep onder de MIG (INSPIRE Maintenance and Implementation Group) behandeld, zie ook de discussie online: https://github.com/inspire-eu-validation/download-service/issues/89. De Technical Guidance Download Services is hier momenteel niet heel duidelijk in, maar wordt hierop aangepast.

![check 3_ATOM](media/geoportaltip3_atom.png "Check dataset service koppeling ATOM-feed")

***SOS***
De koppeling tussen de dataset en de SOS wordt voor elke ”ObservationOffering” net als bij de WFS gelegd in het element SpatialDataSetIdentifier via de capabilities van de SOS.

Of de koppeling naar de metadata van de service en de dataset opgenomen moet worden is niet bekend.

***WCS***
De koppeling tussen de dataset en de SOS wordt voor elke coverage net als bij de WFS gelegd in het element SpatialDataSetIdentifier via de capabilities van de WCS.

Daarnaast wordt ook de link naar de metadata van de dataset opgenomen in het element MetadataURL van de Coverage.
Deze moet hetzelfde zijn als de link in het OperatesOn element in de metadata van de service.

Of de koppeling naar de metadata van de service opgenomen moet worden is niet bekend.

#### check 4: Heeft de data een view link
Als de (meta)data voorkomt in de lijst met bij het Geoportal bekende datasets, maar het view symbool ![image](https://user-images.githubusercontent.com/80040145/161044869-375c840f-0b01-489c-a644-37818329f354.png) ontbreekt, is de data niet viewable.
Dit kan verschillende oorzaken hebben, maar een vaak voorkomend probleem is de koppeling tussen de dataset en de view service.

Als er een view service beschikbaar is, maar niet getoond wordt in de lijst, check dan of de koppeling aanwezig is met de metadata van de dataset.
De link tussen de metadata van de dataset en den View Service wordt gelegd via het MetadataURL element van de Layer in het capabilities document van de OGC WMS service. Deze link moet hetzelfde zijn als de link in het OperatesOn element in de metadata van de service!

![check 4_WMS](media/geoportaltip4.png "Check dataset service koppeling WMS")

#### check 5: Daadwerkelijk download data
Check of de data getoond wordt nadat geklikt wordt op ![image](https://user-images.githubusercontent.com/80040145/160800473-0b6b17e2-65e5-4254-820a-02fdd9552723.png).
en daarna op de blauwe knop "Get Data Set"

#### check 6: Daadwerkelijk viewable data
Check of de data getoond wordt nadat geklikt wordt op ![image](https://user-images.githubusercontent.com/80040145/161044869-375c840f-0b01-489c-a644-37818329f354.png).
en daarna op de blauwe knop "Preview Data Set"

#### check 7: Data en services valideren
Als check 5 of 6 niet gelukt is, doe dan deze check.
Het valideren van de data en de services is beschreven in het hoofdstuk over [valideren](#validatie).

#### check 8: Priority Data Sets Viewer
Check of de data is te vinden is onder het betreffende domein voor e-reporting, als dit van [toepassing](#prioritaire-datasets) is.
Ga daarvoor naar het startscherm van het [Geoportal](https://inspire-geoportal.ec.europa.eu/) en kies "Priority Data Sets Viewer".
![check 8 PDS Viewer](media/geoportaltip8a.png "Start Priority Data Sets Viewer ")
En kies dan het betreffende domein:
![check 8_Domein selectie](media/geoportalti8b.png "Selecteer voor e-reporting domein")

In de meeste gevallen is de (meta)data te vinden onder de domeinen van de prioritaire datasets. 
Dan wordt dit zichtbaar door een selectie toe te passen op een domein en lidstaat.
Check of de (meta)data voorkomt in de lijst met data met een selectie op het domein waar de data ook voor beschikbaar wordt gemaakt.
![check 8_Lijst](media/geoportalti8c.png "lijst na selectie domein en land")

Als de (meta)data niet voorkomt onder het domein, dan is het INSPIRE prioritaire dataset trefwoord en citatie naar de codelijst waarschijnlijk onjuist.
Voor prioritaire datasets dienen de juiste trefwoorden en de juiste citatie informatie van thesaurus te zijn opgenomen, zie voor instructie: https://geonovum.github.io/inspire-handreiking/#hoe-om-te-gaan-met-anchor-en-uri

De prioritaire datasets zijn ook opgenomen in het [Aanmerkingsregister](https://inspireaanmerking.nl/).

#### check 9: Overige checks
Bij INSPIRE geldt dat je maar 1 dataset in de WFS kan ontsluiten (TG INSPIRE Download Services:
https://inspire.ec.europa.eu/documents/technical-guidance-implementation-inspire-download-services). 
![check 9_TG RQ 52](media/geoportaltip_TG-RQ-52.png "max 1 dataset per WFS")

Het Geoportal wordt maandelijks geharvest, zie Harvesting status (https://inspire-geoportal.ec.europa.eu/harvesting_status.html) en zoek dan op NL voor actuele harvest datum. 
Als door de dataprovider veel aanpassingen zijn doorgevoerd en het resultaat daarvan wil zien in het Geoportal, stuur dan even een mail naar de INSPIRE helpdesk (inspire@geonovum.nl). We kunnen in dat geval speciaal een nieuwe harvest laten runnen!
