# Introductie
De wiki "Aan de slag met INSPIRE" is een handreiking met informatie om te voldoen aan de (technische) INSPIRE-verplichtingen. Deze INSPIRE-wiki is bedoeld voor INSPIRE-dataproviders die datasets voor INSPIRE ontsluiten. 

De opbouw van de INSPIRE-wiki is gebaseerd op de verschillende [processtappen](#processtappen) die dataproviders doorlopen. Per (deel)processtap is aangegeven
- welke Nederlandse standaard erop van toepassing is;
- welke (delen van) de INSPIRE-richtlijnen er betrekking op hebben en
- of er in aanvulling op de Nederlandse standaarden nog specifieke stappen uitgevoerd moeten worden.

Waar mogelijk zijn voorbeelden uitgewerkt. 


## Doelgroep
Deze wiki bedient meerdere doelgroepen, maar richt zich in eerste instantie op partijen die verantwoordelijk zijn voor de uitvoering. Daarnaast is de informatie ook relevant voor andere partijen die aan slag gaan met INSPIRE. Het belangrijkste doel van deze wiki is om het werkproces inzichtelijk te maken en kennis hierover op een overzichtelijke manier ter beschikking te stellen.

### Uitvoerders
Onder partijen die verantwoordelijk zijn voor de uitvoering verstaan wij die personen en organisaties die praktisch en technisch met INSPIRE aan de slag gaan. Dat gaat hier concreet om de Nederlandse dataproviders. Zij zullen de processtappen uitvoeren die nodig zijn om te voldoen aan de INSPIRE-richtlijnen. Ook zijn zij verantwoordelijk voor het publiceren van de metadata, het ontsluiten van de data via services en het harmoniseren van de data. Dit kan door verschillende personen binnen een organisatie uitgevoerd worden, zoals data-beheerders, applicatie-specialisten, dba’ers van ruimtelijke databases en ICT'ers.

### Beleidsmakers
De wiki is daarmee momenteel meer technisch dan organisatorisch ingestoken. Ook beleidmakers en managers krijgen met INSPIRE te maken. Zij zullen ook praktisch met INSPIRE aan de slag gaan, maar op een andere manier dan de technische beheerders, GIS-operators en ICT'ers. Toch kan het verhelderend zijn een blik op de wiki te werpen om een idee te krijgen van het type werk, dat voor INSPIRE moet worden uitgevoerd.

## Processtappen
Het INSPIRE-implementatieproces is, na het inrichten van de eigen organisatie, opgedeeld vijf technische stappen. Deze pagina licht deze stappen kort toe. Uitgebreidere informatie over de afzonderlijke stappen vindt u door in de inhoudsopgave aan de linkerzijde het desbetreffende hoofdstuk aan te klikken.

Bij het publiceren van een INSPIRE *Implementing Rule* (IR) en begeleidende documentatie wordt geen rekening gehouden met processtappen die een technisch data-beheerder of GIS-operator moet ondernemen om de data conform INSPIRE te ontsluiten. Deze wiki helpt deze partijen om het werkproces inzichtelijk te maken. Dit werkproces bestaat, naast het inrichten van de organisatie uit de onderstaande vijf stappen. De informatie op deze wiki volgt deze structuur. De groene pijlen tonen de opeenvolgende stappen die men moet doorlopen om aan de *EU-directive* te voldoen.

1. [Dataharmonisatie](#dataharmonisatie)
2. [Metadata](#dataharmonisatie)
3. [Services](#services)
	1. [Network services](#network-services)
	2. [Spatial data services](#spatial-data-services)
4. [Publiceren in INSPIRE-portal](#publiceren)
5. [Validatie](#validatie)

![processtapplaatje](media/Processtappen5.png "Processtappen voor implementeren van INSPIRE binnen een organisatie")

Per processtap wordt de bijbehorende documentatie weergegeven:
- de EU Guidelines, Data Specs en andere docs (oranje);
- de Nederlandse standaarden die INSPIRE ondersteunen  (blauw);
- het onderste deel (grijs) somt de overeenkomstige testbeds en best practices op die in de toekomst bij elke processtap te vinden zijn.
Om het figuur zo overzichtelijk mogelijk te houden, is er voor gekozen om de wetteksten (IR’s - *decisions en regulations*) hier niet in op te nemen. 

Overzicht van documentatie: Implementing Rules, Guidelines en andere documenten vind je op de [Geonovum website](https://www.geonovum.nl/geo-standaarden/inspire-europese-leefomgeving).

## Deadlines
[Hier is de INSPIRE roadmap te vinden.](https://inspire.ec.europa.eu/road-map-graphic/32443). Kort gezegd houdt het in:

<aside class="note">

- Annex I datasets en services: gereed op 23 november 2017

- Annex II datasets en services: gereed op 21 oktober 2020

- Annex III datasets en services: gereed op 21 oktober 2020.
</aside>

In artikel 8, lid 2 van de VERORDENING (EU) Nr. 1089/2010 VAN DE COMMISSIE van 23 november 2010 ter uitvoering van Richtlijn 2007/2/EG van het Europees Parlement en de Raad betreffende de interoperabiliteit van verzamelingen ruimtelijke gegevens en van diensten met betrekking tot ruimtelijke gegevens staat:

Uiterlijk 6 maanden nadat de wijziging in de brongegevensverzameling was aangebracht, moeten alle updates worden uitgevoerd, tenzij in bijlage II een andere periode is vastgelegd voor een specifiek ruimtelijke gegevensthema.

Dat betekent dat binnen 6 maanden nadat de brondata (op dit moment: de as-is data voor Annex II en III) aangepast is:

1. de metadata van de as-is dataset conform INSPIRE specificaties moet worden aangeboden (zie [invulinstructie](#invulinstructie-voor-datasets))
2. de view en downloadservices conform INSPIRE specificaties moeten worden aangeboden
3. de link naar de as-is metadata in het aanmerkingsregister ingevuld moet worden
4. de geharmoniseerde data en geharmoniseerde view en downloadservices moeten uiterlijk 21 oktober 2020 aangeboden worden

## Bronnen

## Over deze wiki
### INSPIRE is volop in beweging
INSPIRE is volop in beweging. Dat betekent dat nog niet alles over INSPIRE gezegd is. De guidelines worden regelmatig herzien. De wiki wordt daarop aangepast. Verwacht hier niet alles over INSPIRE. De insteek is om *die* informatie te verstrekken die nodig is om data volgens de INSPIRE-richtlijnen beschikbaar te kunnen stellen. De meest complete bron van informatie is de richtlijn zelf (inclusief bijbehorende documentatie). Daarbij horen ook de Nederlandse profielen en standaarden. Het detail van de wiki slaat het software-niveau over; het is geen *how to* die uitlegt hoe je in specifieke software bepaalde functionaliteit oproept, of uitvoert. Wel reikt de wiki principes of mechanismen aan.

### Taal en Terminologie
INSPIRE-terminologie (Engels) wordt niet structureel vertaald naar het Nederlands. De belangrijkste reden hiervoor is dat niet van alle technische termen een eenduidige Nederlandse vertaling bestaat. Om verwarring te voorkomen hanteren we hier de Engelse termen. Engelse en INSPIRE-terminologie staan de eerste keer in *italics*. Veel juridische termen kennen wél een goede Nederlandse vertaling; die nemen we hier daarom over.

### INSPIRE Helpdesk
- Heeft u een vraag over INSPIRE, stuur dan een e-mail naar inspire@geonovum.nl.
- Op de Geonovum-website is informatie over het [INSPIRE-programmabureau](https://www.geonovum.nl/geo-standaarden/inspire-europese-leefomgeving) te vinden.
- Daarnaast is de [website van Geonovum](https://www.geonovum.nl/) het informatieplatform voor de Nederlandse geo-standaarden
