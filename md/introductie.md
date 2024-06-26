# Introductie
In het kader van INSPIRE realiseren de Europese lidstaten een digitaal netwerk voor het uitwisselen van gegevens over de leefomgeving. Geonovum ondersteunt het Ministerie van Binnenlandse Zaken en Koninkrijksrelaties en de Nederlandse dataproviders bij de invoering van INSPIRE in Nederland. 

De handreiking "Aan de slag met INSPIRE" is een handreiking met informatie om te voldoen aan de (technische) INSPIRE-verplichtingen. Deze INSPIRE-handreiking is bedoeld voor de INSPIRE-dataproviders, die datasets voor INSPIRE ontsluiten. Voor meer algemene informatie over INSPIRE verwijzen we graag naar het INSPIRE dossier op de <a href="https://www.geonovum.nl/geo-standaarden/inspire-europese-leefomgeving" target="_blank">Geonovum website</a>.

De opbouw van de INSPIRE-handreiking is gebaseerd op de verschillende [processtappen](#processtappen) die de dataproviders doorlopen. Per (deel)processtap is aangegeven:
- welke Nederlandse standaard erop van toepassing is;
- welke (delen van) de INSPIRE-richtlijnen er betrekking op hebben en
- of er in aanvulling op de Nederlandse standaarden nog specifieke stappen uitgevoerd moeten worden.
 
En waar mogelijk zijn voorbeelden uitgewerkt. 


## Doelgroep
Deze INSPIRE-handreiking bedient meerdere doelgroepen, maar richt zich in eerste instantie op partijen die verantwoordelijk zijn voor de uitvoering van INSPIRE. Daarnaast is de informatie ook relevant voor andere partijen die aan slag gaan met INSPIRE. Het belangrijkste doel van deze handreiking is om het werkproces inzichtelijk te maken en kennis hierover op een overzichtelijke manier ter beschikking te stellen.

### Uitvoerders
Onder partijen die verantwoordelijk zijn voor de uitvoering verstaan wij die personen en organisaties die praktisch en technisch met INSPIRE aan de slag gaan. Dat gaat hier concreet om de Nederlandse dataproviders. Zij zullen de processtappen uitvoeren die nodig zijn om te voldoen aan de INSPIRE-richtlijn. Ook zijn zij verantwoordelijk voor het publiceren van de metadata, het ontsluiten van de data via services en het harmoniseren van de data. Dit kan door verschillende personen binnen een organisatie uitgevoerd worden, zoals data-beheerders, applicatie-specialisten, dba’ers van ruimtelijke databases en ICT'ers.

### Beleidsmakers
De handreiking is daarmee momenteel meer technisch dan organisatorisch ingestoken. Ook beleidmakers en managers krijgen met INSPIRE te maken. Zij zullen ook praktisch met INSPIRE aan de slag gaan, maar op een andere manier dan de technische beheerders, GIS-operators en ICT'ers. Toch kan het verhelderend zijn de handreiking te lezen om een idee te krijgen van het type werk, dat voor INSPIRE moet worden uitgevoerd.

## Processtappen
Het INSPIRE-implementatieproces is, na het [aanmerken](#aanmerken) van de dataprovider en het vervolgens [inrichten van de eigen organisatie](#inrichten-organisatie), opgedeeld in vier technische stappen. Deze pagina licht deze stappen kort toe. Uitgebreidere informatie over de afzonderlijke stappen staat beschreven in de afzonderlijke hoofdstukken. 

Bij het publiceren van een INSPIRE *Implementing Rule* (IR) en begeleidende documentatie wordt geen rekening gehouden met processtappen die een technisch data-beheerder of GIS-operator moet ondernemen om de data conform INSPIRE te ontsluiten. Deze handreiking helpt de dataproviders om het werkproces inzichtelijk te maken. Dit werkproces bestaat, naast het aanmerken en inrichten van de organisatie uit de onderstaande vier stappen: 

- [Dataharmonisatie](#dataharmonisatie)
- [Metadata](#metadata)
- [Services](#services)
	- [Network services](#network-services)
	- [Spatial data services](#spatial-data-services-sds)
- [Validatie](#validatie) (als aparte processtap beschreven, maar deze stap is eigenlijk onderdeel van de hierboven beschreven processtappen)

De informatie op deze handreiking volgt deze structuur (zie ook onderstaande figuur). De groene pijlen in de figuur tonen de opeenvolgende processtappen die doorlopen moeten worden om aan de *INSPIRE richtlijn* te voldoen.

![Processtappen.png](media/Processtappen.png "Processtappen INSPIRE")

Per processtap wordt de bijbehorende documentatie weergegeven:
- de Europese technische guidelines, dataspecificaties en andere documenten (in oranje);
- de Nederlandse standaarden die INSPIRE ondersteunen (in blauw);
Om het figuur zo overzichtelijk mogelijk te houden, is er voor gekozen om de wetteksten (IR’s - *decisions en regulations*) hier niet in op te nemen. 

De Europese documenten zijn te vinden via de <a href="https://knowledge-base.inspire.ec.europa.eu/index_en" target="_blank">Europese INSPIRE website</a>. In de paragraaf [bronnen](#bronnen) in deze handreiking worden deze documenten nader toegelicht.
De Nederlandse standaarden zijn te vinden via de Geo-standaarden op de <a href="https://www.geonovum.nl/geo-standaarden" target="_blank">Geonovum website</a>.

Al deze processtappen (Nationaal Georegister, metadata, services, data) hebben ook een onderlinge relatie die in volgende afbeelding is getoond. 

![Relatie processtappen](media/processtappen_relatie.png "Relatie processtappen")

## Deadlines
Alle INSPIRE deadlines om datasets beschikbaar te maken zijn reeds verstreken. De oorspronkelijke INSPIRE roadmap met alle verschillende deadlines is <a href="https://inspire.ec.europa.eu/road-map-graphic/32443" target="_blank">hier</a> te vinden.

Alleen de deadline rondom het actualiseren van de gegevens is nog steeds van kracht. Deze actualisatie deadline is in de paragraaf hieronder beschreven.

### Deadline actualisatie van de INSPIRE gegevens
In de <a href="https://eur-lex.europa.eu/legal-content/NL/TXT/?uri=CELEX%3A32010R1089" target="_blank">VERORDENING (EU) Nr. 1089/2010 VAN DE COMMISSIE</a> van 23 november 2010 ter uitvoering van Richtlijn 2007/2/EG van het Europees Parlement en de Raad betreffende de interoperabiliteit van verzamelingen ruimtelijke gegevens en van diensten met betrekking tot ruimtelijke gegevens] staat de deadline met betrekking tot de actualisatie van de INSPIRE gegevens beschreven.

In artikel 8, lid 2 staat:

Uiterlijk 6 maanden nadat de wijziging in de brongegevensverzameling was aangebracht, moeten alle updates worden uitgevoerd, tenzij in bijlage II een andere periode is vastgelegd voor een specifiek ruimtelijke gegevensthema.

Dat betekent dat binnen 6 maanden nadat de brondata aangepast is:

1. de metadata van de dataset conform INSPIRE specificaties moet worden aangeboden
2. de view en downloadservices conform INSPIRE specificaties moeten worden aangeboden
3. de link naar de metadata in het aanmerkingsregister ingevuld moet worden

## Bronnen

### Europese INSPIRE website
De <a href="https://knowledge-base.inspire.ec.europa.eu/index_en" target="_blank">Europese INSPIRE website</a> is een belangrijke bron voor informatie. 
Hier is onder andere de volgende informatie te vinden:
- <a href="https://knowledge-base.inspire.ec.europa.eu/legislation_en" target="_blank">INSPIRE wetgeving</a>
- <a href="https://knowledge-base.inspire.ec.europa.eu/legislation/implementing-rules_en" target="_blank">Implementing rules</a>
- <a href="https://github.com/INSPIRE-MIF/technical-guidelines/tree/main/data" target="_blank">INSPIRE dataspecificaties</a>
- <a href="https://github.com/INSPIRE-MIF/technical-guidelines" target="_blank">Technische guidelines</a>
- <a href="https://knowledge-base.inspire.ec.europa.eu/tools/inspire-your-country_en" target="_blank">Overzicht van de implementatie van INSPIRE in de verschillende lidstaten</a>

### Europese INSPIRE geoportal
In het Europese <a href="https://inspire-geoportal.ec.europa.eu/" target="_blank">INSPIRE geoportal</a> kan je Europese milieu gegevens vinden die onder de INSPIRE-richtlijn vallen. Dit portaal biedt verschillende zoekingangen. Zo is er een ingang op thema en een op datasets die relevant zijn voor milieurapportage. 
Het Europese geoportal harvest de metadata van 36 officieel geregistreerde nationale data catalogi van Europese lidstaten en EFTA landen. Het INSPIRE Geoportal team wordt ontwikkeld door het Joint Research Centre (JRC).

#### Harvesting
Elke eerste maandag van de maand wordt het NGR geharvest naar het Europese INSPIRE geoportal. In het INSPIRE geoportal wordt op de pagina <a href="https://inspire-geoportal.ec.europa.eu/harvesting_status.html" target="_blank">Harvesting Status</a> getoond wanneer de laatste harvesting van alle lidstaten heeft plaats gevonden.

Het [INSPIRE aanmerkingregister](#aanmerkingsregister) toont onder Kwaliteitscontrole de harvesting resultaten uit het Europese INSPIRE geoportal, die tijdens het harvesten automatisch wordt gegenereerd. Het overzicht laat zien waar nog problemen zijn met het downloadbaar of viewbaar beschikbaar maken van de dataset in het Europese INSPIRE geoportal. 


### INSPIRE registry
De <a href="https://inspire.ec.europa.eu/registry" target="_blank">INSPIRE registry</a> omvat een aantal elementen waarvoor een duidelijke beschrijving nodig is en de mogelijkheid om ernaar te verwijzen door middel van unieke identificatoren. Voorbeelden van dergelijke elementen zijn de INSPIRE themas, codelijsten, applicatie schemas of zoek diensten. Registers bieden een manier aan om identificatoren toe te wijzen aan deze elementen en aan hun labels, definities en beschrijvingen (in verschillende talen). 

De INSPIRE registry biedt een centraal toegangspunt voor een aantal centraal beheerde INSPIRE registers. De inhoud van deze registers is gebaseerd op de INSPIRE richtlijn, de implementing rules en de technische guidelines. Zo omvat de Registry onder meer de volgende elementen:
- De <a href="https://inspire.ec.europa.eu/featureconcept" target="_blank">Feature Concept Dictionary (FCD)</a> bevat termen en definities die nodig zijn voor het specificeren van de thematische ruimtelijke objecttypes en het is vooral de belangrijkste rol om de harmonisatie-inspanningen te ondersteunen en om conflicten tussen de specificaties van de ruimtelijke objecttypes in de verschillende thema's te identificeren.
- Het <a href="https://inspire.ec.europa.eu/codelist" target="_blank">Codelijst register</a> bevat de codelijsten en hun waarden.
- Het <a href="https://inspire.ec.europa.eu/metadata-codelist" target="_blank">Metadata code list register</a> bevat de metadata codelijsten en hun waarden.
- De <a href="https://inspire.ec.europa.eu/glossary" target="_blank">Glossary</a> bevat generieke termen en definities van veelgebruikte INSPIRE terminologie.

### Nationaal Georegister
De Nederlandse "tegenhanger" van het INSPIRE Geoportal op Europees niveau is het <a href="http://www.nationaalgeoregister.nl/" target="_blank">Nationaal Georegister (NGR)</a>. Het NGR doet dienst als de INSPIRE zoekdienst (Discovery Service), die de Nederlandse metadata over de INSPIRE datasets en services naar het [Europese INSPIRE Geoportal](#europese-inspire-geoportal) ontsluit. Het NGR wordt maandelijks geharvest naar het Europese INSPIRE geoportal, zie [hier](#harvesting) voor meer informatie.

Het NGR biedt voor Nederlandse dataproviders een metadata editor en validator functionaliteit aan.


## Over deze handreiking
### INSPIRE is nog steeds in beweging
INSPIRE is nog steeds in beweging. Dat betekent dat nog niet alles over INSPIRE gezegd is. Als er aanpassingen zijn, dan wordt deze handreiking daarop aangepast. 

Verwacht hier echter niet alles over INSPIRE. De insteek is om *die* informatie te verstrekken die nodig is om data volgens de INSPIRE-richtlijn beschikbaar te kunnen stellen. De meest complete bron van informatie is de richtlijn zelf (inclusief bijbehorende documentatie). Daarbij horen ook de Nederlandse profielen en standaarden. 

Het detail van de handreiking slaat het software-niveau over; het is geen *how to* die uitlegt hoe je in specifieke software bepaalde functionaliteit oproept, of uitvoert. Wel reikt de handreiking principes of mechanismen aan.

### Taal en Terminologie
INSPIRE-terminologie (Engels) wordt niet structureel vertaald naar het Nederlands. De belangrijkste reden hiervoor is dat niet van alle technische termen een eenduidige Nederlandse vertaling bestaat. Om verwarring te voorkomen hanteren we hier de Engelse termen. Engelse en INSPIRE-terminologie staan de eerste keer in *italics*. Veel juridische termen kennen wél een goede Nederlandse vertaling; die nemen we hier daarom over.

Om interpretatieverschillen te voorkomen worden de termen die in verband met INSPIRE gebruikt worden geformaliseerd en gestandaardiseerd. Een volledig overzicht van deze termen vind je in het [INSPIRE Register](#inspire-registry). Hierin staat ook de <a href="https://inspire.ec.europa.eu/featureconcept" target="_blank">Feature Concept Dictionary (FCD)</a> met termen en definities van de thematische ruimtelijke objecttypes die van belang zijn bij de INSPIRE harmonisatie en de <a href="https://inspire.ec.europa.eu/glossary" target="_blank">Glossary</a> met hierin algemene terminologie. De laatste is van belang voor alle INSPIRE-documenten.

### INSPIRE Helpdesk
We proberen via deze handreiking zoveel mogelijk informatie over INSPIRE te delen. Heb je toch nog een vraag over INSPIRE, stuur dan een e-mail naar inspire@geonovum.nl.

Daarnaast kun je op het <a href="https://geoforum.nl/c/standaarden/inspire" target="_blank">Geoforum</a> ervaringen delen en/of vragen stellen aan vakgenoten bij collega dataproviders, specialisten van PDOK en Geonovum. Door gebruik te maken van het GeoForum kunnen we issues èn oplossingen direct met elkaar delen.

Op de Geonovum-website is zoals al eerder aangegeven algemene informatie over <a href="https://www.geonovum.nl/geo-standaarden/inspire-europese-leefomgeving" target="_blank">INSPIRE</a> te vinden en over de <a href="https://www.geonovum.nl/geo-standaarden" target="_blank">Nederlandse geo-standaarden</a>.

Tot slot zijn op <a href="https://github.com/inspire-mif" target="_blank">Github pagina 'INSPIRE Maintenance and Implementation'</a> de Europese helpdesks en discussieplatforms rondom INSPIRE te vinden. Elk centaal INSPIRE-component (Geoportal, Registry en Reference Validator) heeft hier zijn eigen helpdesk. Ook is er een algemene helpdesk voor meer generieke INSPIRE-gerelateerde vragen of problemen.
