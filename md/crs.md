## CRS

Geo-informatie is direct gekoppeld aan een locatie op aarde. De wijze waarop die koppeling wordt gelegd, wordt beschreven in het coördinaatreferentiesysteem (CRS) waarin coördinaten van een locatie worden vastgelegd. 
Het Nederlandse RD (Rijks Driehoeksstelsel), het Europese ETRS89 en het mondiale WGS84 gebruikt door GPS ontvangers zijn bekende voorbeelden van CRS-en.
Er zijn 2 hoofdsoorten van coördinaatreferentiesystemen. De geografische en de geprojecteerde.  

Bij een geografische CRS worden punten vastgelegd met een lengte- en breedtegraad op een bol of ellipsoïde met eventueel nog een hoogte. ETRS89 en WGS84 zijn hiervan voorbeelden.
Bij een geprojecteerd CRS zijn punten van het oppervlak van een bol of ellipsoïde geprojecteerd op een plat vlak, waardoor ook afbeelding op een platte kaart mogelijk is.
De geprojecteerde punten worden vastgelegd in X- en Y-coördinaten met eventueel een hoogte als Z-coördinaat.
Het Nederlandse RD is een projectie vanuit dezelfde ellipsoide als waarop ETRS89 gedefinieerd is.
Projecteren kan op verschillende manieren. Er bestaat geen perfecte projectie, want er wordt altijd op een bepaalde manier iets vervormd.
De toepassing van de kaart bepaalt eigenlijk wat de beste manier is.
De handleiding van QGIS geeft een goede <a href="https://docs.qgis.org/3.16/nl/docs/gentle_gis_introduction/coordinate_reference_systems.html#overview" target="_blank">uitleg over projecties</a>.  

De CRS-en die voor geharmoniseerde datasets ondersteund moeten worden vanuit EU-perspectief, kunnen verschillen per INSPIRE thema en staan vermeld in hoofdstuk 6 van de dataspecificatie behorende bij het thema.
Het is voor Nederlandse datasets ook van belang om de <a href="https://docs.geostandaarden.nl/crs/crs/" target="_blank">handreiking gebruik coördinaatreferentiesystemen</a> te volgen.
Daarin staat een <a href="https://docs.geostandaarden.nl/crs/crs/#mogelijke-crs-en-binnen-inspire" target="_blank">apart hoofdstuk over INSPIRE</a>.
  
CRS-en worden geïdentificeerd met zogenaamde <a href="https://docs.geostandaarden.nl/crs/crs/#bijlage-a-crs-overzicht-tabel" target="_blank">EPSG-codes</a>. 

### Hoogtereferentie systeem

In Nederland worden hoogtes vastgesteld t.o.v. NAP. 
Het EVRS is het Europese referentiesysteem voor de hoogte. 
NAP is strikt genomen geen geldig hoogtesysteem in INSPIRE. In die zin kan NAP dus niet gebruikt worden voor geharmoniseerde data in de context van INSPIRE.
Hier staat tegenover dat het verschil tussen NAP en EVRS klein is (verschil van maximaal een paar centimeter). 
Voor veel datasets is dat verschil kleiner dan de nauwkeurigheid van de data zelf. In zo’n geval kan NAP gezien worden als de Nederlandse realisatie van EVRS.
Met andere woorden: hoogtes opgegeven in NAP hoeven niet getransformeerd te worden, als de hoogte component van de data minder nauwkeurig is dan het verschil tussen NAP en EVRS.
Voor AHN bijvoorbeeld geldt dit, want het AHN heeft een hoogtenauwkeurigheid van 5 centimeter. Dus de hoogte in NAP kan worden beschouwd als de hoogte in EVRS. 
Andersom geldt dat hoogtes in EVRS op land in Nederland als NAP hoogte kunnen worden geïnterpreteerd, als de nauwkeurigheid van de verticale component groter is dan het verschil tussen NAP en EVRS.
Omdat het EVRS regelmatig wordt aangepast verschijnen er regelmatig nieuwe realisaties van EVRS met nieuwe EPSG-codes. Voor INSPIRE worden die daarna ook weer opgenomen de lijst met toegestane verticale referentiesystemen.





 

