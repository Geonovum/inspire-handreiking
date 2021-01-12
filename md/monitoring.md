# Monitoring en rapportage

De [Implementing Rule: Monitoring en Reporting](https://inspire.ec.europa.eu/monitoring-and-reporting/69) is niet opgenomen in de processtappen die eerder in de wiki een leidraad voor dataproviders vormen. De achterliggende reden is dat deze IR in feite niet bijdraagt aan het (technische) proces dat dataproviders moeten doorlopen om (meta)data en services met de INSPIRE richtlijnen te harmoniseren. Buiten dat is de IR wel degelijk van belang en zullen dataproviders gegevens moeten leveren zodat ‘lidstaat Nederland’ aan deze IR kan voldoen.

De Implementing Rule: Monitoring en Reporting omvat twee aspecten van INSPIRE:
- Rapportage van de verzameling ruimtelijke gegevens;
- Monitoring van de services.

Ten behoeve van de monitoring van de voortgang van INSPIRE dient jaarlijks een rapportage verstrekt te worden aan de EU aan de hand van voorgeschreven indicatoren. Dit gebeurt op basis van informatie die aanwezig is in het INSPIRE-portaal in Nederland, het Nationaal Georegister en als INSPIRE data herkenbaar is gemaakt door het opnemen van de categorie INSPIRE. Op basis van de daarin opgenomen informatie worden de indicatoren voor de monitoring geautomatiseerd afgeleid en berekend. Metadata van alle aangemerkte datasets dient in het Nationaal Georegister gepubliceerd te zijn.

## Dataset

Per Dataset worden de volgende gegevens verzameld:

| Indicator | Voorwaarde |
| --------- | ---------- |
| Wat is de naam van de dataset? (naam) | |
| Is de bijbehorende metadata beschikbaar? (j/n) | |
| Is die metadata conform de INSPIRE-richtlijnen? (j/n) | v |
| Is de structuur van de dataset conform de INSPIRE-richtlijnen? (j/n) | v* |
| Wat is de geografische dekking van de dataset? (%) | dp |
| Is de dataset en bijbehorende metadata benaderbaar door een zoekdienst? (j/n) | |
| Is de dataset benaderbaar door een raadpleegdienst? (j/n) | |
| Is de dataset benaderbaar door een downloaddienst? (j/n) | |
| Hoeveel bijbehorende dataservices zijn er beschikbaar? (aantal) | |

## Service

Per Service worden de volgende gegevens verzameld:

| Indicator | Voorwaarde |
| --------- | ---------- |
| Wat is de naam van de dataservice? (naam) | |
| Is de bijbehorende metadata beschikbaar? (j/n) | |
| Is die metadata conform de INSPIRE-richtlijnen? (j/n) | v |
| Is de dataservice benaderbaar door een raadpleegdienst? (j/n) | |
| Wat is het adres van de dataservice? (url) | |
| Wat voor type netwerkdienst is de dataservice? (zoek/raadpleeg/download/transformatie/oproepdienst/overig) | |
| Is de netwerkdienst conform de INSPIRE-richtlijnen (j/n) | v* |
| Hoe vaak werd de netwerkdienst gebruikt in afgelopen jaar? (aantal) | dp |

## Werkwijze

- De **v** gegevens worden op basis van EU validator tooling automatisch gegenereerd.
- De **v\*** gegevens worden als daarvoor EU validator tooling beschikbaar is automatisch gegenereerd.
- Voor de v* gegevens dient de conformiteit in de metadata opgenomen te worden.
- De **dp** gegevens dienen jaarlijks te worden ingevuld door de data provider. Voor datasets waarvan de geografische dekking niet volledig is, wordt het dekkingspercentage per dataset met de identifier van de metadata die die dataset beschrijft in het template ingevuld. Een voorbeeld van niet volledige dekking is een landsdekkende dataset van de waterschappen waarin de data van enkele waterschappen nog niet is opgenomen.
- Voor services wordt het jaarlijkse aantal serviceverzoeken per service met de identifier van de metadata die die service beschrijft in het template ingevuld.
- De EU monitoringsrapportage wordt op basis van de metadata in het nationaal georegister gegenereerd. Metadata van alle aangemerkte datasets dient daarin gepubliceerd te zijn.
- Zorg dat de metadata in het NGR op orde is. Zie ook de aandachtspunten hieronder.
- De conformiteit van datasets en services is in de metadata opgenomen. Gebruik voor het checken van de conformiteit de Inspire validatie tools.
- Valideer de metadata met de Inspire validatie tools.

De conformiteit van de metadata wordt gegenereerd als de monitoringsrapportage wordt gemaakt. Daarvoor wordt gebruik gemaakt van de Europese INSPIRE-validator

## Tijdlijn

- Uiterlijk op 31 januari elk jaar verwachten we de gevraagde informatie, ingevuld in het bijgeleverde template, binnen te hebben en de metadata op orde.
- Als u als dataprovider niet zelf de services en de metadata daarvan beheert, maak dan tijdig afspraken met de serviceprovider over het verstrekken van informatie en het op orde maken van de metadata.
- De EU rapportage wordt in één keer voor alle dataproviders gegenereerd.
- In de maand februari kan op basis van de resultaten van de eerste gegenereerde rapportage de metadata nog worden bijgesteld.
- De definitieve rapportage wordt in maart gegenereerd.
- Eind juni is het dashboard beschikbaar waarmee de actuele stand van invoering van INSPIRE van alle lidstaten per indicator inzichtelijk is.

## Aandachtspunten

Voor de monitoring zijn de volgende acties van de dataproviders noodzakelijk:

**Metadata in NGR op orde**
Zorg dat de metadata in het NGR op orde is. De EU monitoringsrapportage wordt op basis van de metadata in het NGR gegenereerd. Let daarbij extra op de volgende punten:
- Is voor alle INSPIRE data en service beschrijvingen categorie INSPIRE aangegeven? Dit is te controleren door in het NGR te filteren op categorie INSPIRE en organisatie, of bij weinig metadata beschrijvingen, te zoeken op organisatienaam.
- Is in de metadata van de services de link naar de metadata van de data correct? Het element Coupled Resource bevat de link naar de metadata van de dataset waarop de service opereert. Als de service op meerdere datasets opereert dit element ook meerdere keren opnemen. Waarbij de id in het (CSW) GetRecordById request in de xlink verwijst naar de file identifier van het metadata voor data document. Bij het genereren van de monitoringsrapportage wordt middels dit element gecheckt of er services voor een dataset beschikbaar zijn.
- De conformiteit van datasets en services is in de metadata opgenomen. Gebruik voor het checken van de conformiteit de validators, zoals genoemd bij [validatie](#validatie).
- Voor **prioritaire datasets**: de Commissie let extra op prioritaire datasets. Het is voor de definitieve monitoring noodzakelijk om een extra keyword toe te voegen als de dataset onder de prioritaire datasets valt, anders mist de Commissie deze dataset. Dit is de verantwoordelijkheid van de dataprovider. Dataproviders van prioritaire datasets krijgen nog nadere informatie hoe dit exact uitgevoerd moet worden. De codelijst hiervan is nog niet gereed, de Commissie en JRC werken hier nog aan.
- Zorg dat referenties naar services op orde zijn. Bijvoorbeeld vanwege wijzigingen in URLs en/of omdat een dataset inmiddels ook als geharmoniseerde dataset wordt aangeboden.

**Services op orde**
Let extra op de volgende zaken bij services, omdat er bij de monitoring ook validatie van services plaats vindt:
- Is in de Capabilities van de services op alle vereiste plekken de URL naar de metadata van de dataset opgenomen (zoals de MetadataURL voor WMS en WFS en in de ATOM feed in het betreffende link-element)? Deze URL is bijvoorbeeld een CSW GetRecordById request om de metadata van de dataset op te vragen.
- Is voor WFS implementaties de juiste dataset identifier opgenomen in de Extended Capabilities? Let op: dit moet de identifier van de bron zijn, zoals die ook in de metadata is opgenomen.
- In geval van Annex I datasets: moet de metadata van de services aangepast worden (als de service is veranderd)?

**Aanmerkingsregister**
- Werk indien nodig de UUIDs / metadata file identifiers bij in het [INSPIRE Aanmerkingsregister](https://inspireaanmerking.nl/), zodat duidelijk is dat een aangemerkte dataset daadwerkelijk aangeboden wordt.

**Geharmoniseerde data**
Zie de pagina [Checklist dataharmonisatie](#checklist-dataharmonisatie) voor specifieke punten die spelen rondom publiceren van geharmoniseerde datasets.