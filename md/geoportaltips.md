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
8) Check of de data is te vinden is onder het domein voor e-reporting, als dit van toepassing is.
9) Overige aandachtspunten.

#### stap1: Is de data beschikbaar?

Pas in het Geoportal een selectie toe op het INSPIRE thema van de dataset en lidstaat. Check of
1) De (meta)data voorkomt in de lijst met data. 
Als de (meta)data voorkomt in de lijst met data en 
2) De data ook daadwerkelijk te downloaden en te bekijken is, 
Dan is verdere actie niet noodzakelijk.

![stap 1](media/geoportaltip1.png "Check of de data vindbaar is")

#### stap2: Is de dataset te vinden onder het INSPIRE thema
Check of de data is te vinden onder het INSPIRE data thema, waar het onder valt.
Dit wordt zichtbaar door een selectie toe te passen op een thema en lidstaat.
In het voorbeeld hieronder is er geen (meta)data onder het thema Gegraphical grid systems voor Nederland.

![stap 2](media/geoportaltip2.png "Check of vindbaar onder thema")

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

#### stap3: Heeft de data een download link
Als het download pictogram ![image](https://user-images.githubusercontent.com/80040145/160800473-0b6b17e2-65e5-4254-820a-02fdd9552723.png)
ontbreekt terwijl die er wel had moeten zijn kan dat verschillende oorzaken hebben:
1) De koppeling ontbreekt bij het SpatialDataSetIdentifier element in de Extended GetCapabilities (WFS, SOS en WCS) of in de link element (rel="describedby") in de entry in de top feed van de Atom service.
2) De link naar de metadata van de dataset opgenomen in het element MetadataURL van het FeatureType. Deze moet hetzelfde zijn als de link in het OperatesOn element in de metadata van de service!



 
