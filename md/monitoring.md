# Monitoring en rapportage

De Implementing Rule: <a href="https://inspire.ec.europa.eu/monitoring-and-reporting/69" target="_blank">Monitoring en Reporting</a> is niet opgenomen in de processtappen die eerder in de wiki een leidraad voor dataproviders vormen. De achterliggende reden is dat deze IR in feite geen onderdeel is van het (technische) proces dat dataproviders moeten doorlopen om (meta)data en services met de INSPIRE richtlijnen te harmoniseren. Buiten dat is de IR wel degelijk van belang en leveren de dataproviders indirect gegevens zodat de voortgang van de implementatie in Nederland gemonitoord kan worden.

De Implementing Rule Monitoring en Reporting omvat twee aspecten:
- Rapportage over de coordinatie en infrastructuur;
- Monitoring van de datasets en services.

Ten behoeve van de monitoring van de voortgang van de implementatie van INSPIRE dient jaarlijks informatie verstrekt te worden aan de EU aan de hand van voorgeschreven indicatoren. Daarvoor wordt gebruik gemaakt van de informatie die aanwezig is in het INSPIRE-portaal in Nederland, het Nationaal Georegister. Op basis van de daarin opgenomen informatie worden de indicatoren voor de monitoring geautomatiseerd afgeleid en berekend. Het is voor de monitoringvan van belang dat de metadata van alle aangemerkte datasets en bijbehorende services goed bijgehouden wordt en voldoet aan de INSPIRE vereisten. Alleen de metadata die in het Nationaal Georegister is gepubliceerd en als INSPIRE data herkenbaar is gemaakt door het opnemen van de categorie INSPIRE, wordt voor de monitoring gebruikt. 

De resultaten van de monitoring en de rapportage worden op <a href="https://inspire.ec.europa.eu/mr/NL/69" target="_blank">Monitoring en Reporting NL</a> onder het kopje country fiche gepubliceerd.

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
