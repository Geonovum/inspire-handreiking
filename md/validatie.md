# Validatie

Een belangrijk aspect van een implementatie is de mogelijkheid deze te valideren en te monitoren. Bij voorkeur gebeurt dit met geautomatiseerde processen, aangevuld met beschreven procedures. Validatie helpt dataproviders te controleren of hun metadata, datasets en services voldoen aan de INSPIRE Technical Guidelines.

Naast validatie vindt monitoring van de INSPIRE-implementatie plaats. Lidstaten moeten de implementatie monitoren en de resultaten openbaar maken. Meer informatie staat in de paragraaf [Monitoring en rapportage](#monitoring-en-rapportage).

Om je te helpen bij validatie zijn validatietools beschikbaar. Deze tools helpen fouten in de toepassing van standaarden op te sporen. De Nederlandse validatietools toetsen aan Nederlandse profielen. De INSPIRE Reference Validator toetst aan de INSPIRE Technical Guidelines.

## Validatieregels en testselectie

### Validatieregels: ATS en ETS

In Annex A van de INSPIRE-dataspecificaties is een *Abstract Test Suite (ATS)* opgenomen. Deze beschrijft welke tests nodig zijn om te beoordelen of een implementatie aan de betreffende vereisten voldoet.

Tests uit een ATS die geautomatiseerd kunnen worden uitgevoerd, worden uitgewerkt in een *Executable Test Suite (ETS)*. De INSPIRE Reference Validator gebruikt deze ETS om metadata, datasets en services te toetsen aan de INSPIRE Technical Guidelines.

### Conformance classes

De INSPIRE Reference Validator gebruikt zogenaamde conformance classes. Deze groeperen vereisten waaraan een implementatie kan worden getoetst. In bepaalde gevallen zijn meerdere conformance classes van belang. Sommige classes zijn afhankelijk van andere classes. Controleer of de gebruikte lokale instantie deze afhankelijkheden automatisch meeneemt.

#### Metadata

Voor metadata zijn meerdere conformance classes beschikbaar. Welke classes van toepassing zijn, hangt af van het type metadata en de gebruikte testsets.

Voor de prioritaire [IACS-datasets](#iacs-datasets) bestaat een specifieke conformance class: 'INSPIRE data sets and data set series metadata for IACS'. Controleer of deze beschikbaar is in de gebruikte lokale instantie en afzonderlijk moet worden geselecteerd.

#### Datavalidatie

Om geharmoniseerde data te valideren zijn thematische testsets beschikbaar. Deze toetsen onder meer de GML-structuur en de overeenstemming met het XSD-bestand van het applicatieschema. Daarnaast kunnen andere vereisten uit de betreffende dataspecificatie worden getoetst.

Selecteer bij het testen alle toepasselijke conformance classes van het thema. Desgewenst kan een selectie worden gemaakt om een specifiek onderdeel van de dataharmonisatie te testen. Daarmee worden alleen de geselecteerde onderdelen getoetst.

#### Services

Voor services zoals WMS, WMTS, WFS pre-defined, WFS direct access, ATOM, SOS, WCS en OGC API - Features zijn specifieke testsets beschikbaar. Het aantal en de indeling van de conformance classes kunnen per testset en versie verschillen. Selecteer de classes die van toepassing zijn op de aangeboden service.

## Wanneer valideren?

Geonovum raadt je aan validatietools en aanvullende handmatige controles op regelmatige basis te gebruiken, maar ten minste bij de volgende gebeurtenissen:

- Het publiceren van een nieuwe dataset.
- Een wijziging van de data, metadata en/of service.
- De implementatie van een softwarerelease, herstel na een storing, herstel van een back-up en/of een onderhoudsmoment. Dit geldt ook voor releases van het NGR.
- Het beschikbaar komen van nieuwe versies van de validatietools of testsets.

## Te gebruiken validators

Voor het toetsen van data, metadata en services aan de INSPIRE Technical Guidelines kan een lokale instantie van de INSPIRE Reference Validator worden gebruikt.

Voor het toetsen aan Nederlandse profielen zijn de Nederlandse validatietools beschikbaar. Als zowel Nederlandse profielen als INSPIRE-eisen van toepassing zijn, voer dan beide toetsen uit. Controleer daarbij welke versies van de testsets en profielen de gebruikte validatietools ondersteunen.

### INSPIRE Reference Validator

De INSPIRE Reference Validator is een tool waarmee je kunt testen in hoeverre metadata, services en datasets voldoen aan de INSPIRE Technical Guidelines.

Met de INSPIRE Reference Validator kunnen validatietesten worden uitgevoerd voor de volgende onderdelen:

- Metadata.
- Services.
- Datasets.

#### Lokale instantie: installatie en configuratie

Sinds 1 april 2026 wordt de [centrale instantie van de INSPIRE Reference Validator niet meer door de Europese Commissie aangeboden](https://knowledge-base.inspire.ec.europa.eu/news-and-publications/news/discontinuation-inspire-reference-validator-2026-04-01_en). De validator kan via lokale instanties worden gebruikt. De broncode, testsets en installatie-instructies blijven hiervoor beschikbaar.

Meer informatie over het installeren en configureren van een lokale instantie is te vinden in de <a href="https://github.com/inspire-eu-validation/INSPIRE-Validator-Container#readme" target="_blank">installatiedocumentatie van de INSPIRE Reference Validator</a>.

#### Gebruik via een API

Een lokale instantie van de INSPIRE Reference Validator kan ook via een API worden aangeroepen, indien deze beschikbaar is gesteld. Bij het (semi)geautomatiseerd uitvoeren van tests kan het nuttig zijn deze API te gebruiken. Raadpleeg hiervoor de API-documentatie van de gebruikte lokale instantie.

Meer achtergrondinformatie over de API is beschikbaar in de <a href="https://github.com/etf-validator/docs" target="_blank">documentatie van het ETF-framework</a>. Raadpleeg daarnaast, indien beschikbaar, de interactieve documentatie via 'Web API v2' van de gebruikte lokale instantie voor de ondersteunde API-operaties en adressen.

#### Bekende problemen

Gemelde problemen met de INSPIRE Reference Validator zijn te vinden op de <a href="https://github.com/INSPIRE-MIF/helpdesk-validator/issues" target="_blank">GitHub-issuepagina</a>. Of een probleem van toepassing is, hangt onder meer af van de softwareversie en testsets van de gebruikte instantie.

Problemen met de validatiesoftware of testsets kunnen via deze GitHub-pagina worden gemeld. Neem voor problemen met de installatie, configuratie of bereikbaarheid van een lokale instantie contact op met de betreffende beheerder.

### Nederlandse validatietools

De <a href="https://validatie.geostandaarden.nl/" target="_blank">Nederlandse validatietools</a> zijn beschikbaar voor het toetsen aan de Nederlandse profielen voor <a href="https://validatie.geostandaarden.nl/etf-webapp/testprojects?testdomain=Metadata" target="_blank">metadata</a> en <a href="https://validatie.geostandaarden.nl/etf-webapp/testprojects?testdomain=Nederlandse%20profielen%20services" target="_blank">WMS en WFS</a>.

Voordat de Europese INSPIRE Reference Validator beschikbaar was, kon Nederlandse INSPIRE-data worden gevalideerd via de Nederlandse INSPIRE validator. Vanaf 1 september 2020 werd geadviseerd om voor het toetsen aan de INSPIRE-standaard de Europese INSPIRE Reference Validator te gebruiken. Op die datum is in Nederland ook overgestapt op Metadataprofiel 2.1.0.

De INSPIRE-regels in de Nederlandse validatietools worden niet meer bijgewerkt. Gebruik deze tools daarom voor het toetsen aan de Nederlandse profielen. Voor het toetsen aan de INSPIRE Technical Guidelines kan een lokale instantie van de INSPIRE Reference Validator worden gebruikt.

### Overzicht van beschikbare tests

De onderstaande tabel geeft een overzicht van tests voor data, metadata en services. De genoemde INSPIRE-testnamen zijn afkomstig uit het eerdere overzicht van de INSPIRE Reference Validator. Controleer welke tests en versies beschikbaar zijn in de gebruikte lokale instantie.

| INSPIRE-eis | Validatietooling NL | INSPIRE Reference Validator (lokale instantie) |
| ----------- | ------------------- | --------------------------------------------- |
| **Dataharmonisatie** | | |
| INSPIRE GML | | Validator: Data theme conformance |
| **Metadata** | | |
| Metadata dataset | <a href="https://validatie.geostandaarden.nl/etf-webapp/testprojects?testdomain=Metadata" target="_blank">Validator: Nederlands profiel op ISO 19115 v21 2020</a> | Validator: INSPIRE Profile based on EN ISO 19115 and EN ISO 19119 |
| Metadata service | <a href="https://validatie.geostandaarden.nl/etf-webapp/testprojects?testdomain=Metadata" target="_blank">Validator: Nederlands profiel op ISO 19119 v21 2020</a> | Validator: INSPIRE Profile based on EN ISO 19115 and EN ISO 19119 |
| **View service** | | |
| WMS | <a href="https://validatie.geostandaarden.nl/etf-webapp/testprojects?testdomain=Nederlandse%20profielen%20services" target="_blank">Validator: Nederlands WMS profiel 1_3_0</a> | Validator: View Service WMS |
| WMTS | | Validator: View Service WMTS |
| **Download service** | | |
| ATOM | | Validator: Download service – Pre-defined ATOM |
| WFS | Validator: <a href="https://validatie.geostandaarden.nl/etf-webapp/testprojects?testdomain=Nederlandse%20profielen%20services" target="_blank">Nederlands WFS profiel WFS 2_0_0 ISO 19142</a> | Validator: Download Service - Direct WFS en/of Download Service - Pre-defined WFS |
| WCS | | Validator: Download service – WCS core |
| SOS | | Validator: Download service – Pre-defined SOS |
| OGC API - Features | | Validator: Download service – OGC API - Features |
| **Discovery service** | | |
| Discovery service | | Validator: Discovery Service - CSW Core |

**Let op:** De beschikbaarheid en benaming van de INSPIRE-tests kunnen per lokale instantie en versie verschillen.

### Beperkingen van validatietools

Validatietools zijn nooit feilloos. Ze kunnen fouten bevatten of achterlopen op de ontwikkeling van de Technical Guidelines. Ook kunnen verschillende tools voor hetzelfde onderdeel verschillende resultaten geven, bijvoorbeeld doordat zij andere testmethoden of versies van testsets gebruiken.

Controleer daarom welke eisen en versies van de testsets de gebruikte validatietool ondersteunt.

Validatietools toetsen voornamelijk technische aspecten, zoals de aanwezigheid en structuur van een identifier. Of die identifier naar de juiste dataset verwijst, kan niet altijd automatisch worden vastgesteld. Bovendien zijn niet alle vereisten geautomatiseerd te toetsen.

Vul geautomatiseerde validatie daarom aan met handmatige controles. Controleer of de datasets vindbaar zijn en test rechtstreeks of de data via de aangeboden services kunnen worden bekeken en gedownload.

## Aanvullende controles

### Link checker

De Link checker was een functie van het voormalige Europese INSPIRE Geoportal waarmee de verwijzingen tussen datasets, metadata en services konden worden gecontroleerd.

Deze verwijzingen kunnen rechtstreeks worden gecontroleerd in de gepubliceerde metadata en servicedocumenten. Hiervoor is het niet nodig te wachten op harvesting door een dataportaal.

Correcte verwijzingen via links en identifiers zijn essentieel voor een werkende infrastructuur. Hiermee wordt de relatie gelegd tussen een dataset, de bijbehorende metadata en de services waarmee de data kunnen worden bekeken en gedownload.

Het controleren van verwijzingen en het testen van de werking van services vervangen niet de validatie van metadata, datasets en services. Zie hiervoor de paragraaf [Te gebruiken validators](#te-gebruiken-validators).

### Tips om data vindbaar, raadpleegbaar en downloadbaar te maken via het Europese dataportaal data.europa.eu

Controleer de vindbaarheid via het Nationaal Georegister (NGR) en het Europese dataportaal data.europa.eu. Test daarnaast rechtstreeks of de aangeboden services werken.

Loop hiervoor de volgende checks door:

1. Is de dataset vindbaar?
2. Is het juiste INSPIRE-thema opgenomen?
3. Heeft de dataset een downloadlink?
4. Heeft de dataset een viewlink?
5. Is de dataset daadwerkelijk downloadbaar?
6. Is de dataset daadwerkelijk raadpleegbaar?
7. Zijn metadata, datasets en services gevalideerd?
8. Zijn prioritaire datasets correct beschreven?

#### Check 1: Is de dataset vindbaar?

Zoek de dataset op titel in het NGR en via de <a href="https://data.europa.eu/data/datasets?source_type=geospatial&locale=en" target="_blank">geospatial search van data.europa.eu</a>. Selecteer daar Nederland en eventueel de betreffende catalogus. Controleer of het gevonden record bij de juiste dataset en dataprovider hoort.

Met het geospatial-filter kun je datasets uit geocatalogi zoeken, waaronder INSPIRE-datasets. Volgens de planning die op 2 oktober 2026 is gepresenteerd, is een afzonderlijk INSPIRE-filter voorzien voor januari 2027.

Als de dataset in het NGR staat maar niet op data.europa.eu, controleer dan de selectie- en harvestingafspraken. Afwezigheid in het Europese dataportaal betekent niet automatisch dat de dataset of service niet beschikbaar is.

#### Check 2: Is het juiste INSPIRE-thema opgenomen?

Controleer in de datasetmetadata in het NGR of het juiste INSPIRE-thema en de bijbehorende thesauruscitatie zijn opgenomen.

De algemene themacategorieën op data.europa.eu zijn niet hetzelfde als de INSPIRE-thema's. Gebruik daarom de datasetmetadata in het NGR voor deze controle.

#### Check 3: Heeft de dataset een downloadlink?

Controleer op de datasetpagina van data.europa.eu welke distributies en download- of toegangslinks beschikbaar zijn. Een toegangslink kan naar een service of toegangspagina verwijzen en hoeft geen directe downloadlink te zijn.

Controleer daarnaast in de datasetmetadata in het NGR of de juiste downloadservice is opgenomen en of de verwijzingen tussen datasetmetadata, servicemetadata en servicedocumenten consistent zijn.

#### Check 4: Heeft de dataset een viewlink?

Controleer in de datasetmetadata in het NGR of een verwijzing naar de juiste viewservice is opgenomen.

Controleer daarnaast op de datasetpagina van data.europa.eu of de distributie met de viewservice is weergegeven. Voor ondersteunde services kan een Preview beschikbaar zijn. Het ontbreken van een Preview betekent niet automatisch dat de viewservice niet werkt.

#### Check 5: Is de dataset daadwerkelijk downloadbaar?

Open de aangeboden download- of toegangslink en voer een download uit met een geschikte browser of client.

Controleer of het verzoek daadwerkelijk de bedoelde data oplevert. Alleen het openen van een capabilities-document, feed of toegangspagina is hiervoor onvoldoende.

#### Check 6: Is de dataset daadwerkelijk raadpleegbaar?

Gebruik de Preview op data.europa.eu wanneer deze beschikbaar is. Test de viewservice daarnaast rechtstreeks met een geschikte GIS-client.

Controleer of de juiste layer kan worden geopend en de bedoelde data zichtbaar zijn binnen het opgegeven geografische gebied.

#### Check 7: Zijn metadata, datasets en services gevalideerd?

Valideer metadata, datasets en services met de toepasselijke INSPIRE-testsets en Nederlandse profieltests, zie [Te gebruiken validators](#te-gebruiken-validators).

De Metadata Quality Assessment (MQA) van data.europa.eu kan aanvullende informatie geven over de kwaliteit van de geharveste metadata en de bereikbaarheid van links. Deze beoordeling vervangt geen INSPIRE-validatie of functionele test van de services.

#### Check 8: Zijn prioritaire datasets correct beschreven?

Controleer voor prioritaire datasets in de datasetmetadata in het NGR of de toepasselijke trefwoorden, URI's en thesauruscitaties correct zijn opgenomen.

Zie [Hoe om te gaan met anchor en URI](#hoe-om-te-gaan-met-anchor-en-uri).
