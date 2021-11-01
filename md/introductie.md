# Introductie
In het kader van INSPIRE realiseren de Europese lidstaten een digitaal netwerk voor het uitwisselen van gegevens over de leefomgeving. Geonovum ondersteunt het Ministerie van Binnenlandse Zaken en Koninkrijksrelaties en de Nederlandse dataproviders bij de invoering van INSPIRE in Nederland. 

De wiki "Aan de slag met INSPIRE" is een handreiking met informatie om te voldoen aan de (technische) INSPIRE-verplichtingen. Deze INSPIRE-wiki is bedoeld voor de INSPIRE-dataproviders, die datasets voor INSPIRE ontsluiten. Voor meer algemene informatie over INSPIRE verwijzen we graag naar het INSPIRE dossier op de [Geonovum website](https://www.geonovum.nl/geo-standaarden/inspire-europese-leefomgeving).

De opbouw van de INSPIRE-wiki is gebaseerd op de verschillende [processtappen](#processtappen) die de dataproviders doorlopen. Per (deel)processtap is aangegeven:
- welke Nederlandse standaard erop van toepassing is;
- welke (delen van) de INSPIRE-richtlijnen er betrekking op hebben en
- of er in aanvulling op de Nederlandse standaarden nog specifieke stappen uitgevoerd moeten worden.
 
En waar mogelijk zijn voorbeelden uitgewerkt. 


## Doelgroep
Deze INSPIRE-wiki bedient meerdere doelgroepen, maar richt zich in eerste instantie op partijen die verantwoordelijk zijn voor de uitvoering van INSPIRE. Daarnaast is de informatie ook relevant voor andere partijen die aan slag gaan met INSPIRE. Het belangrijkste doel van deze wiki is om het werkproces inzichtelijk te maken en kennis hierover op een overzichtelijke manier ter beschikking te stellen.

### Uitvoerders
Onder partijen die verantwoordelijk zijn voor de uitvoering verstaan wij die personen en organisaties die praktisch en technisch met INSPIRE aan de slag gaan. Dat gaat hier concreet om de Nederlandse dataproviders. Zij zullen de processtappen uitvoeren die nodig zijn om te voldoen aan de INSPIRE-richtlijn. Ook zijn zij verantwoordelijk voor het publiceren van de metadata, het ontsluiten van de data via services en het harmoniseren van de data. Dit kan door verschillende personen binnen een organisatie uitgevoerd worden, zoals data-beheerders, applicatie-specialisten, dba’ers van ruimtelijke databases en ICT'ers.

### Beleidsmakers
De wiki is daarmee momenteel meer technisch dan organisatorisch ingestoken. Ook beleidmakers en managers krijgen met INSPIRE te maken. Zij zullen ook praktisch met INSPIRE aan de slag gaan, maar op een andere manier dan de technische beheerders, GIS-operators en ICT'ers. Toch kan het verhelderend zijn de wiki te lezen om een idee te krijgen van het type werk, dat voor INSPIRE moet worden uitgevoerd.

## Processtappen
Het INSPIRE-implementatieproces is, na het aanmerken van de dataprovider en het vervolgens inrichten van de eigen organisatie, opgedeeld in vijf technische stappen. Deze pagina licht deze stappen kort toe. Uitgebreidere informatie over de afzonderlijke stappen staat beschreven in de afzonderlijke hoofdstukken. 

Bij het publiceren van een INSPIRE *Implementing Rule* (IR) en begeleidende documentatie wordt geen rekening gehouden met processtappen die een technisch data-beheerder of GIS-operator moet ondernemen om de data conform INSPIRE te ontsluiten. Deze wiki helpt de dataproviders om het werkproces inzichtelijk te maken. Dit werkproces bestaat, naast het aanmerken en inrichten van de organisatie uit de onderstaande vijf stappen: 

1. [Dataharmonisatie](#dataharmonisatie)
2. [Metadata](#metadata)
3. [Services](#services)
	1. [Network services](#network-services)
	2. [Spatial data services](#spatial-data-services)
4. [Publiceren van de metadata in het Nationale Georegister](#publiceren)
5. [Validatie](#validatie)

De informatie op deze wiki volgt deze structuur (zie ook onderstaande figuur). De groene pijlen in de figuur tonen de opeenvolgende processtappen die doorlopen moeten worden om aan de *INSPIRE richtlijn* te voldoen.

![Processtappen5.png](media/Processtappen5.png)

Per processtap wordt de bijbehorende documentatie weergegeven:
- de Europese technische guidelines, dataspecificaties en andere documenten (in oranje);
- de Nederlandse standaarden die INSPIRE ondersteunen (in blauw);
Om het figuur zo overzichtelijk mogelijk te houden, is er voor gekozen om de wetteksten (IR’s - *decisions en regulations*) hier niet in op te nemen. 

De Europese documenten zijn te vinden via de [Europese INSPIRE website](https://inspire.ec.europa.eu/). In het onderdeel [bronnen](#bronnen) op deze wiki worden deze documenten ook nog nader toegelicht.
De Nederlandse standaarden zijn te vinden via de Geo-standaarden op de [Geonovum website](https://www.geonovum.nl/geo-standaarden).

## Deadlines
Alle INSPIRE deadlines om datasets beschikbaar te maken zijn reeds verstreken. De oorspronkelijke INSPIRE roadmap met alle verschillende deadlines is [hier](https://inspire.ec.europa.eu/road-map-graphic/32443) te vinden.

Alleen de deadline rondom het actualiseren van de gegevens is nog steeds van kracht. Deze actualisatie deadline is in de paragraaf hieronder beschreven.

### Deadline actualisatie van de INSPIRE gegevens
In de [VERORDENING (EU) Nr. 1089/2010 VAN DE COMMISSIE](https://eur-lex.europa.eu/legal-content/NL/TXT/?uri=CELEX%3A32010R1089) van 23 november 2010 ter uitvoering van Richtlijn 2007/2/EG van het Europees Parlement en de Raad betreffende de interoperabiliteit van verzamelingen ruimtelijke gegevens en van diensten met betrekking tot ruimtelijke gegevens] staat de deadline met betrekking tot de actualisatie van de INSPIRE gegevens beschreven.

In artikel 8, lid 2 staat:

Uiterlijk 6 maanden nadat de wijziging in de brongegevensverzameling was aangebracht, moeten alle updates worden uitgevoerd, tenzij in bijlage II een andere periode is vastgelegd voor een specifiek ruimtelijke gegevensthema.

Dat betekent dat binnen 6 maanden nadat de brondata aangepast is:

1. de metadata van de dataset conform INSPIRE specificaties moet worden aangeboden (zie [invulinstructie](#invulinstructie-voor-datasets))
2. de view en downloadservices conform INSPIRE specificaties moeten worden aangeboden
3. de link naar de metadata in het aanmerkingsregister ingevuld moet worden

## Bronnen

### Europese INSPIRE website
De [Europese INSPIRE website](https://inspire.ec.europa.eu/) is een belangrijke bron voor informatie. 
Hier is onder andere de volgende informatie te vinden:
- [INSPIRE wetgeving](https://inspire.ec.europa.eu/inspire-legislation/26)
- [Implementing rules](https://inspire.ec.europa.eu/inspire-implementing-rules/51763)
- [Dataspecificaties](https://inspire.ec.europa.eu/data-specifications/2892)
- [Technische guidelines](https://inspire.ec.europa.eu/Technical-guidelines3)
- [Overzicht van de implementatie van INSPIRE in de verschillende lidstaten](https://inspire.ec.europa.eu/portfolio/inspire-your-country)

De online tool [Find Your Scope](https://inspire-regadmin.jrc.ec.europa.eu/dataspecification/FindYourScope.action) ondersteunt de dataproviders bij het bepalen van de INSPIRE thema's en ruimtelijke objecttypes die relevant zijn voor de dataset(s) die de dataproviders beheren. Er zijn drie manieren om de INSPIRE thema's en/of objecttypes te bepalen namelijk via een catalogus van alle INSPIRE objecttypes, via een interactieve werkflow of via direct zoeken.


### Europese INSPIRE geoportal
In het Europese [INSPIRE geoportal](https://inspire-geoportal.ec.europa.eu/) kan je Europese milieu gegevens vinden die onder de INSPIRE-richtlijn vallen. Dit portaal biedt verschillende zoekingangen. Zo is er een ingang op thema en een op datasets die relevant zijn voor milieurapportage. 
Het Europese geoportal harvest de metadata van 36 officieel geregistreerde nationale data calogi van Europese lidstaten en EFTA landen. Het INSPIRE Geoportal team wordt ontwikkeld door het Joint Research Centre (JRC).

### INSPIRE registry
De [INSPIRE registry](https://inspire.ec.europa.eu/registry) omvat een aantal elementen waarvoor een duidelijke beschrijving nodig is en de mogelijkheid om ernaar te verwijzen door middel van unieke identificatoren. Voorbeelden van dergelijke elementen zijn de INSPIRE themas, codelijsten, applicatie schemas of zoek diensten. Registers bieden een manier aan om identificatoren toe te wijzen aan deze elementen en aan hun labels, definities en beschrijvingen (in verschillende talen). 

De INSPIRE registry biedt een centraal toegangspunt voor een aantal centraal beheerde INSPIRE registers. De inhoud van deze registers is gebaseerd op de INSPIRE richtlijn, de implementing rules en de technische guidelines. Zo omvat de Registry onder meer de volgende elementen:
- De [Feature Concept Dictionary (FCD)](https://inspire.ec.europa.eu/featureconcept) bevat termen en definities die nodig zijn voor het specificeren van de thematische ruimtelijke objecttypes en het is vooral de belangrijkste rol om de harmonisatie-inspanningen te ondersteunen en om conflicten tussen de specificaties van de ruimtelijke objecttypes in de verschillende thema's te identificeren.
- Het [Codelijst register](https://inspire.ec.europa.eu/codelist) bevat de codelijsten en hun waarden.
- Het [Metadata code list register](https://inspire.ec.europa.eu/metadata-codelist) bevat de metadata codelijsten en hun waarden.
- De [Glossary](https://inspire.ec.europa.eu/glossary) bevat generieke termen en definities van veelgebruikte INSPIRE terminologie.

### Nationaal Georegister
De Nederlandse "tegenhanger" van het INSPIRE Geoportal op Europees niveau is het [Nationaal GeoRegister (NGR)](http://www.nationaalgeoregister.nl/). Het NGR doet dienst als de INSPIRE zoekdienst (Discovery Service), die de Nederlandse metadata over de INSPIRE datasets en services naar het Europese INSPIRE Geoportal ontsluit. Het NGR biedt voor Nederlandse dataproviders een metadata editor en validator functionaliteit aan.


## Over deze wiki
### INSPIRE is nog steeds in beweging
INSPIRE is nog steeds in beweging. Dat betekent dat nog niet alles over INSPIRE gezegd is. Als er aanpassingen zijn, dan wordt deze wiki daarop aangepast. 

Verwacht hier echter niet alles over INSPIRE. De insteek is om *die* informatie te verstrekken die nodig is om data volgens de INSPIRE-richtlijn beschikbaar te kunnen stellen. De meest complete bron van informatie is de richtlijn zelf (inclusief bijbehorende documentatie). Daarbij horen ook de Nederlandse profielen en standaarden. 

Het detail van de wiki slaat het software-niveau over; het is geen *how to* die uitlegt hoe je in specifieke software bepaalde functionaliteit oproept, of uitvoert. Wel reikt de wiki principes of mechanismen aan.

### Taal en Terminologie
INSPIRE-terminologie (Engels) wordt niet structureel vertaald naar het Nederlands. De belangrijkste reden hiervoor is dat niet van alle technische termen een eenduidige Nederlandse vertaling bestaat. Om verwarring te voorkomen hanteren we hier de Engelse termen. Engelse en INSPIRE-terminologie staan de eerste keer in *italics*. Veel juridische termen kennen wél een goede Nederlandse vertaling; die nemen we hier daarom over.

### INSPIRE Helpdesk
We proberen via deze wiki zoveel mogelijk informatie over INSPIRE te delen. Heb je toch nog een vraag over INSPIRE, stuur dan een e-mail naar inspire@geonovum.nl.

Daarnaast kun je op het [Geoforum](https://geoforum.nl/c/standaarden/inspire) ervaringen delen en/of vragen stellen aan vakgenoten bij collega dataproviders, specialisten van PDOK en Geonovum. Door gebruik te maken van het GeoForum kunnen we issues èn oplossingen direct met elkaar delen.

Op de Geonovum-website is zoals al eerder aangegeven algemene informatie over het [INSPIRE](https://www.geonovum.nl/geo-standaarden/inspire-europese-leefomgeving) te vinden en over de [Nederlandse geo-standaarden](https://www.geonovum.nl/geo-standaarden).

Tot slot is op [Github pagina 'INSPIRE Maintenance and Implementation'](https://github.com/inspire-mif) de Europese helpdesks en discussieplatforms rondom INSPIRE te vinden. Elk centaal INSPIRE-component (Geoportal, Registry en Reference Validator) heeft hier zijn eigen helpdesk. Ook is er een algemene helpdesk voor meer generieke INSPIRE-gerelateerde vragen of problemen.
