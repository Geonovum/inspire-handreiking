# Services

In dit deel van de handreiking worden de verschillende electronische diensten (services) behandeld, waarmee de INSPIRE dataproviders hun data kunnen ontsluiten. Omdat deze services ruimtelijke data ontsluiten, worden ze ook wel *Spatial Data Services (SDS)* genoemd en vertaald als “diensten met betrekking tot ruimtelijke gegevens”. Er zijn verschillende soorten spatial data services, die ieder afzonderlijk behandeld worden.

## Soorten Spatial Data Services

Spatial data services zijn INSPIRE-services, waarmee operaties kunnen worden uitgevoerd op ruimtelijke data van ten minste één van de INSPIRE-thema's. De INSPIRE network services, zijn ook Spatial Data Services, waarvoor verdere specificaties van de service zijn opgesteld.

Onderstaande figuur geeft een overzicht van de verschillende soorten spatial data services.

![sds_schema2](media/SDS_en_network_services.png "SDS-types.")

Hieronder worden de verschillende soorten spatial data services nader toegelicht.

**Discovery services / Zoekdienst** network service
- De discovery service (of zoekdienst) is bedoeld om het zoeken, beoordelen (evalueren) en vinden van ruimtelijke data die via het netwerk van webservices worden aangeboden te ondersteunen.
- Het zoeken van data vindt plaats op basis van metadata van INSPIRE-data en metadata van INSPIRE-services.
- Voor INSPIRE wordt dit op lidstaat-niveau uitgevoerd; voor Nederland is dit het <a href="https://www.nationaalgeoregister.nl/" target="_blank">Nationaal Georegister (NGR)</a>.

**View services / Raadpleegdienst** network service
- De viewservice (of raadpleegdienst) heeft als functie de gegevens die via de discovery service van het NGR gevonden worden, te kunnen bekijken en beoordelen.
- Regels over weergave en presentatie worden in de [INSPIRE dataspecificaties](#inspire-dataspecificaties) meegeleverd om over alle lidstaten heen dezelfde presentatie te kunnen houden. Deze regels zijn hiervoor juist basaal gehouden.

**Download services / Downloaddienst** network service
- De downloadservice (of downloaddienst) heeft als functie de gegevens die via de discovery service van het NGR gevonden worden, te kunnen downloaden om ze daarna te kunnen analyseren en te gebruiken voor de gewenst toepassing.
- De dataset kan als geheel worden gedownload. Waar mogelijk ook het bevragen en downloaden van enkele objecten.

**Transformation services / Verwerkingsdienst** network service
- Dit is een ondersteunende service die de andere services helpt met het bereiken van de conformiteit van INSPIRE, bijvoorbeeld door schema translatie of coördinaten translatie.

**Spatial Data Services**
- De spatial data servies ontsluiten ten minste één INSPIRE dataset, maar kunnen hele andere specificaties hebben, die buiten de INSPIRE community tot stand zijn gekomen.
- De specificatie van de service moet wel zijn vastgelgd en in de metadata beschreven. 
- Deze diensten zijn verder in te delen als invocable, interoperable en harmonised.

**Other Spatial Data Services**
- De other spatial data Servies ontsluiten wel ruimteliijke data, maar geen INSPIRE data, of ze voldoen niet aan de vereiste dat er een specificatie van de service is.

## Network services
### Wetgeving
Op de Europese website van INSPIRE is de wetgeving met betrekking tot network services te vinden.

|Type wetgeving | Site | Titel |
|-----------------|-------------|-------------|
| Regulation | <a href="https://eur-lex.europa.eu/legal-content/NL/TXT/?uri=CELEX:32007L0002" target="_blank">eur-lex</a> | <a href="https://eur-lex.europa.eu/legal-content/NL/TXT/?uri=CELEX:02009R0976-20141231" target="_blank">Regulation on INSPIRE Network Services</a> |
| Amendement voor download services en transformation services | <a href="https://ec.europa.eu/transparency/comitology-register/screen/home" target="_blank">comitology</a> | <a href="https://eur-lex.europa.eu/legal-content/NL/TXT/?uri=CELEX:32010R1088" target="_blank">COMMISSION REGULATION (EU) No 1088/2010 of 23 November 2010 amending Regulation (EC) No 976/2009 as regards download services and transformation services</a> |

### Technische INSPIRE richtlijnen
In de Technical Guidances (of Guidance Documents) zijn de technische specificaties opgesteld voor network services, als uitwerking van de wettelijke eisen. De technical guidances definiëren hiermee waar een network service aan zal moeten voldoen. De huidig geldende versies van de technical guidances van de network services zijn te vinden op de <a href="https://inspire.ec.europa.eu/Technical-Guidelines2/Network-Services/41" target="_blank">Europese website van INSPIRE</a>. De tabel hieronder biedt de directe links naar de documenten.

| Titel | Opmerking |
|-----------------|-------------|
| <a href="https://inspire.ec.europa.eu/documents/technical-guidance-implementation-inspire-download-services" target="_blank">Technical Guidance for the implementation of INSPIRE Download Services </a> |WFS en ATOM implementatie|
| <a href="https://inspire.ec.europa.eu/id/document/tg/download-wcs" target="_blank">Technical Guidance for the implementation of INSPIRE Download Services - Web Coverage Service</a>| WCS implementatie| 
| <a href="https://inspire.ec.europa.eu/id/document/tg/download-sos" target="_blank">Technical Guidance for the implementation of INSPIRE Download Services - Sensor Observation Service</a> | SOS implementatie|
| <a href="https://inspire.ec.europa.eu/documents/technical-guidance-implementation-inspire-view-services-1" target="_blank">Technical Guidance for the implementation of INSPIRE View Services</a> |WMS en WMTS implementatie|
| <a href="https://inspire.ec.europa.eu/documents/technical-guidance-implementation-inspire-discovery-services-0" target="_blank">Technical Guidance for the implementation of INSPIRE Discovery Services</a> |Dit onderdeel is niet in deze handreiking uitgewerkt|
| <a href="https://inspire.ec.europa.eu/documents/technical-guidance-inspire-schema-transformation-network-service" target="_blank">Technical Guidance for the INSPIRE Schema Transformation Network Service</a> |Dit onderdeel is niet in deze handreiking uitgewerkt| 


### Quality of Services
INSPIRE definieert *Quality of Services* (QoS), de eisen omtrent het kwaliteitsbeheer van netwerk services. Een aantal QoS-criteria verschillen per service (zie voor de precieze criteria de tabel hieronder). 

Er zijn een aantal parameters van invloed op de door INSPIRE gedefinieerde QoS:
- *performance*: de performance van een INSPIRE-conforme netwerkdienst geeft de tijd weer die de netwerkdienst nodig heeft om aan een verzoek (*request*) een antwoord (*response*) te geven. Een verzoek is gelijk aan een functie of operatie. Als tijd wordt de tijd gezien die de netwerkdienst (serverside) nodig heeft om de eerste byte van het antwoord terug te geven.
- *capacity*: de capaciteit van een netwerkdienst geeft de omvang van het maximum aantal simultane serviceverzoeken aan, dat met prestatiewaarborg (bijv. 10 parallelle verzoeken per seconde) wordt uitgevoerd.
- *availability* (beschikbaarheid): de beschikbaarheid is de kans dat de netwerkdienst beschikbaar is en op verzoeken een response geeft. Deze eis ligt voor alle services op 99% op jaarbasis (gedurende 24/7); dit komt overeen met 3.7 dagen ‘offline’ per jaar.
- *reliability* (betrouwbaarheid): beschrijft de vaardigheden van de netwerkdienst om conform de afspraken (functies, eisen en tijd) de netwerkdienst te leveren. INSPIRE heeft i.r.t. betrouwbaarheid geen specifieke eis gedefinieerd.
- *security en compliance*: deze twee eisen hebben een algemener toepassingsgebied en worden door INSPIRE niet specifiek gedefinieerd (zijn kwalitatief van aard). Ze zijn formeel wel van toepassing op de network services, maar niet op zozeer op de hardware-matige en infrastructurele aspecten zoals de criteria die boven gespecificeerd zijn.

| Criteria | Discovery | View | Download | Transformation |
|-----------------|-------------|-------------|-------------|-------------|
| Performance | 3 sec | 5 sec | Zie a, b, c, d | Zie TG's |
| Capacity | 30 / sec | 20  / sec | 10 / sec | 10 / sec |
| Availability | 99% | 99% | 99% | 99% |
| Reliability | - | - | - | - |
| Security | - | - | - | - |
| Compliance | - | - | - | - |

*Opmerkingen bij performance van de view service:*
- Deze tijd geldt voor een 8-bits image van 470 Kb (800\*600 px).
- Het maximum aantal layers die per GetMap request opgehaald kan worden, is hier maximaal 1.

*Opmerkingen bij performance van de discovery service:*
 - De tijd is inclusief het versturen van errors of exceptions. Binnen de drie seconden dient er ook één metadata record verstuurd te worden.

*Opmerkingen bij performance van de download service:*

a) Get Download Service Metadata: max. 10 seconden.
b) Get Spatial Objects: 30 seconden voor de eerste response, daarna een ‘sustained response’ van > 0.5 MB/s.
c) Describe Spatial Object Types: 10 seconds initial reponse, daarna een ‘sustained response’ van > 0.5 MB/s.
d) Define Query: geen performance criteria gegeven.

*Opmerkingen bij transformation service:*
- Voor performance wordt naar de Technical Guidances verwezen. Alleen is TG van Coordinate Transformations beschikbaar (in versie 2.1).
- Voor capacity worden verschillende criteria gegeven. In de Guidance staat 5 requests per seconde, in de Implementing Rule wordt 10 requests per seconde gegeven. IR is normatief, dus wordt het 10/s .

### Rights management
De INSPIRE richtlijn schrijft voor dat de INSPIRE diensten in principe gratis moeten zijn. Echter geeft de richtlijn ook aan dat er (publieke) instellingen zijn die – vanwege de hoge datavolumes en update-frequenties – kosten in rekening mogen brengen om de service te kunnen waarborgen. Dat houdt in dat er een mogelijkheid moet zijn om de toegang tot services en data te beperken.

Bij het implementeren van *Rights management* is het van belang dat er door de dataproviders mee rekening wordt gehouden in de metadata. Verschillende niveaus zijn hierbij van belang:
- Provider moet per layer van een view-service het rights management vaststellen.
- Metadata voor services moet altijd toegankelijk zijn; ook voor services met beperkte toegang. Op deze manier blijft de service wel vindbaar in het NGR.
- De metadata moet voorwaarden voor toegang en gebruik en de voorwaarden voor beperkingen op publieke toegang  en – in het geval van eCommerce – het honorarium bevatten.

De Rights management controleert toegang tot netwerkdiensten en wordt dus op een ander niveau toegepast.


## View service
De view service (of raadpleegdienst) heeft als functie de gegevens die via de discovery service van het NGR gevonden worden, te kunnen bekijken en beoordelen. Hiertoe dient de dataprovider de INSPIRE-thema’s met een viewservice te ontsluiten. De viewservice heeft uitdrukkelijk niet de functie om ‘mooie kaartbeelden’ te maken. Het gaat om een rudimentaire inspectie en beoordeling van de INSPIRE-conforme datasets die via een de viewservice ontsloten worden. Dit omvat onder andere:
- het weergeven van ruimtelijke data met pan, overlay, zoom functionaliteit;
- de legenda en relevante metadata moet zichtbaar zijn.

De onderstaande figuur geeft schematisch de operaties van de OGC WMS 1.3.0 weer.

![wms](media/Wms.png "Schematische weergave van INSPIRE-viewservice.")

### Vereisten view service

Voor de view services beschrijft het document <a href="https://inspire.ec.europa.eu/documents/technical-guidance-implementation-inspire-view-services-1" target="_blank">Technical Guidance voor view services</a> de technische eisen waaraan een service moet voldoen. Hiermee kan zowel ISO 19128: OGC Web Map Service 1.3.0 (WMS) of OGC Web Map Tile Service 1.0.0 (WMTS) worden geimplementeerd.  

De INSPIRE view service implementeert de verplichte elementen van een WMS of WMTS aangevuld met de volgende vereisten:
- Ondersteuning van de HTTP GET-interface is verplicht;
- De image/png of image/gif (zonder LZW-compressie) is verplicht als respons op een GetMap-request;
- Service metadata moet beschikbaar worden gesteld via een discovery service;
- De viewservice moet de volgende geografische coördinaat-referentiesystemen ondersteunen:
	- EPSG:4258 (ETRS89)
	- EPSG:4326 (WGS84)
- Minimaal één taal moet worden ondersteund en kenbaar worden gemaakt in de respons op de GetViewServiceMetadata-operatie.

Voor een WMS is daarnaast ook het <a href="https://www.geonovum.nl/geo-standaarden/services/nederlands-profiel-wms-op-iso-19128-versie-11" target="_blank">Nederlands profiel op ISO 19128 WMS 1.3, versie 1.1</a> van toepassing. 

In het <a href="https://www.geonovum.nl/uploads/documents/Raamwerk%20Geo-Standaarden%20v3.0.pdf" target="_blank">Raamwerk GeoStandaarden</a> is meer informatie te vinden over de samenhang van verschillende standaarden.

### Meertaligheid
Een capabilities-document kan maar in één taal worden opgesteld. Om meertaligheid te ondersteunen is het dus noodzakelijk om voor iedere ondersteunde taal één capabilities-document aan te maken. In ieder capabilities-document moeten de ondersteunde talen worden opgenomen in de `inspire_vs:ExtendedCapabilities`.

<pre class="xml">
&lt;inspire_vs:ExtendedCapabilities&gt; 
	....     
	&lt;inspire_common:SupportedLanguages&gt;
        &lt;inspire_common:DefaultLanguage&gt;
        	&lt;inspire_common:Language&gt;dut&lt;/inspire_common:Language&gt;
        &lt;/inspire_common:DefaultLanguage&gt;
    &lt;/inspire_common:SupportedLanguages&gt;
    &lt;inspire_common:ResponseLanguage&gt;
        &lt;inspire_common:Language&gt;dut&lt;/inspire_common:Language&gt;
    &lt;/inspire_common:ResponseLanguage&gt;
	....
&lt;/inspire_vs:ExtendedCapabilities&gt;
</pre>

Als een client een getCapabilities-verzoek doet met een taal als parameter die de service niet ondersteunt, dan heeft dat invloed op de volgende elementen:
- Title elementen (WMS_Capabilities/Service/Title en ../Layer/Title)
- Abstract elementen (WMS_Capabilities/Service/Abstract en ../Layer/Abstract)

De INSPIRE Network Services Regulation en de INSPIRE Regulation voor de interoperability van datasets en services stellen geen verplichtingen om meertaligheid te ondersteunen voor teksten die op een kaart worden getekend als respons op een GetMap-request. Wel geeft de technical guidance een aanbeveling voor de ondersteuning van meertaligheid in Capabilities:

1. De client doet een initieel GetCapabilities request:

<a href="https://example.com/services/wms?request=GetCapabilities&service=WMS&version=1.3.0." target="_blank">https://example.com/services/wms?request=GetCapabilities&service=WMS&version=1.3.0.</a>

2. De service antwoordt met een capabilities-document waarin de ondersteunde talen zijn weergegeven in de Extended Capabilities:

<pre class="xml">
&lt;inspire_vs:ExtendedCapabilities&gt;
…
    &lt;inspire_common:SupportedLanguages&gt;
        &lt;inspire_common:DefaultLanguage&gt;dut&lt;/inspire_common:DefaultLanguage&gt;
        &lt;inspire_common:SupportedLanguage&gt;eng&lt;/inspire_common:SupportedLanguage&gt;
    &lt;/inspire_common:SupportedLanguages&gt;
    &lt;inspire_common:ResponseLanguage&gt;dut&lt;/inspire_common:ResponseLanguage&gt;
…
&lt;/inspire_vs:ExtendedCapabilities&gt;
</pre>

3. De client doet vervolgens een GetCapabilities-request met een specifieke taal, bijvoorbeeld Engels (eng) opgegeven als language parameter:

<a href="https://example.com/services/wms?request=GetCapabilities&service=WMS&version=1.3.0&language=eng" target="_blank">https://example.com/services/wms?request=GetCapabilities&service=WMS&version=1.3.0&language=eng</a>.

4. De service antwoordt door een capabilities-document te sturen in de gevraagde (ondersteunde) taal, waarbij de Title en Abstract elementen zijn weergegeven in de gevraagde taal. Voor de operaties wordt verwezen naar een voor die taal specifieke URL. Een client gebruikt vervolgens die taalspecifieke URL.

### INSPIRE scenario's voor metadata in capabilities-document

De Technical Guidance beschrijft 2 scenario's om de verplichte INSPIRE-elementen op te nemen in een ISO 19128 (WMS 1.3.0) Capabilities document:
- Scenario 1: Verplichte WMS-elementen opnemen met een minimale uitbreiding voor verplichte INSPIRE-elementen als ExtendedCapabilities.
- Scenario 2: Verplichte WMS elementen opnemen aangevuld met alle INSPIRE elementen, deels via een mapping als ISO 19128 WMS-elementen en deels als ExtendedCapabilities-elementen.

Bij het kiezen van de scenario's moet in overweging worden genomen dat het gebruik van extended capabilities niet in alle tooling geimplementerd is. De beweging binnen de Europese INSPIRE community is om te komen tot implementaties zonder INSPIRE specifieke extenties. Daarvoor wordt nu gewerkt aan een derde scenario, waarbij geen gebruik wordt gemaakt van extended capabilities.


**Scenario 1: Minimale extended capabilities**

De volledige INSPIRE-metadata wordt opgenomen in een apart metadata-voor-services-document, dat beschikbaar wordt gesteld via een discovery service.

![scenario1](media/Scenario1.png "Schematische weergave van het eerste scenario.")

Het capabilities-document bevat (naast de verplichte WMS-elementen) ook de volgende INSPIRE-elementen:
1. Een verwijzing (MetadataURL) naar een INSPIRE-metadata-voor-services document;
2. De ondersteunde defaulttaal (eventueel aangevuld met aanvullende ondersteunde talen);
3. De default respons-taal.

| INSPIRE-metadata-elementen | M / C^ |  Extended Capabilities |
|-----------------|----- |-------------|
| MetadataURL | M | inspire_vs:MetadataURL |
| SupportedLanguages | M | inspire_vs:SupportedLanguages |
| ResponseLanguage | M | inspire_vs:ResponseLanguage |

^ *M: Mandatory, C: Conditional*


**MetadataURL (M)**

Dit element wordt opgenomen als `inspire_vs:MetadataURL` element in de extendedCapabilities en bevat een verwijzing, het GetRecordById request met als argument het Id (element fileIdentifier van het metadata-voor-services document), naar het metadata-voor-services-document welke gepubliceerd is in een catalog-service.

<pre class="xml">
&lt;inspire_common:MetadataUrl&gt;     
    &lt;inspire_common:URL&gt;"https://www.nationaalgeoregister.nl/geonetwork/srv/dut/xml.metadata.get?uuid=cea38797-ea4b-4969-b979-8d25eb543a6c"&lt;/inspire_common:URL&gt;
    &lt;inspire_common:MediaType&gt;application/vnd.ogc.csw.GetRecordByIdResponse_xml&lt;/inspire_common:MediaType&gt;
&lt;/inspire_common:MetadataUrl&gt;
</pre>


**SupportedLanguages (M)**

Zie beschrijving onder scenario 2.

**ResponseLanguage (M)**

Zie beschrijving onder scenario 2.



**Scenario 2: Volledige extended capabilities**

Het capabilities-document gaat hiermee fungeren als de bron om een metadata-voor-services-document te genereren. Het gegenereerde document wordt via een discovery service beschikbaar gesteld.

![scenario2](media/Scenario_2.png "Schematische weergave van het tweede scenario.")

- Waar een mapping naar WMS-elementen mogelijk is, worden INSPIRE-elementen gemapped naar de WMS-elementen;
- Waar geen mapping naar WMS-elementen mogelijk is, worden de INSPIRE-elementen opgenomen als ExtendedCapabilities in het Capabilities-document.

| INSPIRE-metadata-elementen | M/C^ | ISO 19128 WMS-elementen | Extended Capabilities |
|-----------------|-------------|-------------|-------------|
| Resource Title | M | wms:Title | |
| Resource Abstract | M | wms:Abstract | |
| Resource Type | M | | inspire_vs:ResourceType |
| Resource Locator | C | | inspire_vs:ResourceLocator |
| Coupled Resource | C | wms:Layer/wms:MetadataURL | |
| Spatial Data Service Type | M	| | inspire_vs:SpatialDataServiceType |
| Keyword | M | wms:Keyword | inspire_vs:Keyword; inspire_vs:MandatoryKeyword |
| Geographic Bounding Box | M | wms:EX_GeographicBoundingBox | |
| Temporal Reference | M | | inspire_vs:TemporalReference |
| Spatial Resolution | C | wms:Abstract | |
| Conformity | M | | inspire_vs:Conformity |
| Conditions for Access and Use | M | wms:Fees | | 
| Limitations on Public Access | M | wms:AccessConstraints | |
| Responsible Organisation | M | wms:ContactInformation | |
| Metadata Point of Contact | M | | inspire_common:MetadataPointOfContact |
| Metadata Date | M | | inspire_common:MetadataDate |
| Metadata Language | M	| | inspire_common:SupportedLanguages |

^ *M: Mandatory, C: Conditional*



**Resource Title (M)**

Dit element wordt opgenomen als `wms:Title` element en geeft een karakteristieke naam aan de service.

**Resource Abstract (M)**

Dit element wordt opgenomen als `wms:Abstract` element en geeft een korte beschrijving van de inhoud van de service.

**Resource Type (M)**

Dit element heeft een vaste waarde 'service':

<pre class="xml">
&lt;inspire_vs:ExtendedCapabilities&gt;
    ....
    &lt;inspire_common:ResourceType&gt;service&lt;/inspire_common:ResourceType&gt;
    ....
&lt;/inspire_vs:ExtendedCapabilities&gt;
</pre>


**Resource Locator (C)**

Definieert een link naar de view service. Dit kan zijn:
- Een link naar het capabilities-document van de view service;
- Een link naar een WSDL-document dat de view service beschrijft (SOAP Binding);
- Een link naar een webpagina met instructies om de service te benaderen;
- Een link naar een toepassing waarmee de view service direct kan worden benaderd.

Hieronder een voorbeeld van een link naar het capabilities-document:
<pre class="xml">
&lt;inspire_common:ResourceLocator&gt;
    &lt;inspire_common:URL&gt;http://www.provinciaalgeoregister.nl/pgr-wms/services?request=GetCapabilities&service=WMS&version=1.3.0&lt;/inspire_common:URL&gt;
    &lt;inspire_common:MediaType&gt;application/vnd.ogc.wms_xml&lt;/inspire_common:MediaType&gt;
&lt;/inspire_common:ResourceLocator&gt;
</pre>


**Coupled Resource (C)**

Coupled Resource geeft informatie over de datasets waarop de view service werkt. Dit element wordt ingevuld als `wms:MetadataURL` (een link naar de metadata van de dataset waarop een Layer is gedefinieerd) voor iedere Layer in de view service. De MetadataURL kan op 2 manieren worden ingevuld:
1. De MetadataURL bevat een link naar een metadatadocument dat beschikbaar is in een discovery service, waarbij gebruik wordt gemaakt van de GetRecordByID operatie van de discovery service om het document op te halen op basis van het `<fileIdentifier>` element (gevuld met een UUID) van dat document.
2. De MetadataURL bevat een directe link naar een ISO19115/19139 metadata-document.

<pre class="xml">
&lt;Layer&gt;
    ....
    &lt;MetadataURL type="ISO19115:2003 "&gt;
    	&lt;Format&gt;text/xml&lt;/Format&gt;
    	&lt;OnlineResource xlink:href="http://www.nationaalgeoregister.nl/geonetwork/srv/nl/csw?Service=CSW&Request=GetRecordById&Version=2.0.2&id=f002bfc5-7d87-46b6-819e-8415422b65c9&outputSchema=http://www.isotc211.org/2005/gmd&elementSetName=full " xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple"/&gt;
    &lt;/MetadataURL&gt;
    ....
&lt;/Layer&gt;
</pre>


**Spatial Data Service Type (M)**

Dit element heeft een vaste waarde 'view' en wordt ingevuld als `inspire_common:SpatialDataServiceType` element onder `inspire_vs:ExtendedCapabilities`.

<pre class="xml">
&lt;inspire_vs:ExtendedCapabilities&gt;
    &lt;inspire_common:SpatialDataServiceType&gt;view&lt;/inspire_common:SpatialDataServiceType&gt;
&lt;/inspire_vs:ExtendedCapabilities&gt;
</pre>


**Keyword (M)**

Er is één keyword verplicht. Dat is het keyword om de classificatie van de service te duiden (`classificationOfSpatialDataService`). Daarnaast kunnen nog andere keywords worden opgenomen. Keywords kunnen op meerdere manieren worden ingevuld:
1. met het `wms:Keyword` onder het `wms:Service` element en
2. in de `inspire_vs:ExtendedCapabilities` met de elementen `inspire_common:Keyword` en `inspire_common:MandatoryKeyword`. Het verplichte keyword voor de classificatie van de service is er een uit de <a href="https://inspire.ec.europa.eu/metadata-codelist/SpatialDataServiceCategory" target="_blank">"Classification of Spatial Data Services" lijst</a>. Voor een viewservice is dat in ieder geval "infoMapAccessService".

*1. gebruik wms:keyword*

Als een keyword afkomstig is uit een Thesaurus kan het attribuut "vocabulary" worden gebruikt om aan te geven uit welke thesaurus dat keyword afkomstig is.

<pre class="xml">
&lt;!-- Het verplichte keyword voor de classificatie van de service --&gt;

&lt;Keyword vocabulary="ISO"&gt;infoMapAccessService&lt;/Keyword&gt;
</pre>

*2. gebruik inspire_vs:ExtendedCapabilities elementen*

Voor het verplichte keyword voor de "Classification of Spatial Data Services" wordt het element `inspire_common:MandatoryKeyword` gebruikt. Dit is een element van het type classificationOfSpatialDataService.

<pre class="xml">
&lt;!-- Verplicht keyword voor de classificatie van de service --&gt;

&lt;inspire_common:MandatoryKeyword&gt;
    &lt;inspire_common:KeywordValue&gt;infoMapAccessService&lt;/inspire_common:KeywordValue&gt;
&lt;/inspire_common:MandatoryKeyword&gt;
</pre>

Voor de overige keywords wordt het element `inspire_common:Keyword` gebruikt. Dit laatste element heeft ook sub-elementen om aan te geven uit welke thesaurus een keyword afkomstig is.

<pre class="xml">
&lt;!-- keyword: INSPIRE thema zoals gedefinieerd in de GEMET Thesaurus --&gt;
&lt;inspire_common:Keyword xsi:type="inspire_common:inspireTheme_dut"&gt;
    &lt;inspire_common:OriginatingControlledVocabulary&gt;
        &lt;inspire_common:Title&gt;GEMET - INSPIRE themes&lt;/inspire_common:Title&gt;
        &lt;inspire_common:DateOfPublication&gt;2008-06-01&lt;/inspire_common:DateOfPublication&gt;
    &lt;/inspire_common:OriginatingControlledVocabulary&gt;
    &lt;!-- INSPIRE thema --&gt;
    &lt;inspire_common:KeywordValue&gt;Beschermde gebieden&lt;/inspire_common:KeywordValue&gt;
&lt;/inspire_common:Keyword&gt;
</pre>


**GeographicBoundingBox (M)**

Voor GeographicBoundingBox wordt het element `wms:EX_GeographicBoundingBox` gebruikt.

<pre class="xml">
&lt;EX_GeographicBoundingBox&gt;
    &lt;westBoundLongitude&gt;2.99&lt;/westBoundLongitude&gt;
    &lt;eastBoundLongitude&gt;7.63&lt;/eastBoundLongitude&gt;
    &lt;southBoundLatitude&gt;50.51&lt;/southBoundLatitude&gt;
    &lt;northBoundLatitude&gt;53.79&lt;/northBoundLatitude&gt;
&lt;/EX_GeographicBoundingBox&gt;
</pre>


**Temporal Reference (M)**

Voor Temporal Reference wordt het element `inspire_common:TemporalReference` in `inspire_vs:ExtendedCapabilities` gebruikt. Binnen dit element moet minimaal één van de sub-elementen `inspire_common:DateOfCreation`, `inspire_common:DateOfLastRevision` of `inspire_common:DateOfPublication` worden ingevuld, waarbij de voorkeur uitgaat naar `inspire_common:DateOfLastRevision`.

<pre class="xml">
&lt;inspire_common:TemporalReference&gt;
    &lt;inspire_common:DateOfCreation&gt;2011-05-01&lt;/inspire_common:DateOfCreation&gt;
    &lt;inspire_common:DateOfLastRevision&gt;2011-05-01&lt;/inspire_common:DateOfLastRevision&gt;
    &lt;inspire_common:DateOfPublication&gt;2011-05-01&lt;/inspire_common:DateOfPublication&gt;
&lt;/inspire_common:TemporalReference&gt;
</pre>


**Spatial Resolution (C)**

Dit element kan niet worden beschreven in ISO 19119. Daarom worden restricties voor Spatial Resolution, als deze er zijn, kwalitatief beschreven in `wms:Abstract`.


**Conformity (M)**

Hiermee wordt aangegeven of een service conformant of notConformant is aan de implementing rules van de INSPIRE richtlijn. Als dit niet bekend is dan moet de waarde notEvaluated op worden gegeven. Dit kan worden aangegeven in het element `inspire_common:Conformity` in de `inspire_vs:ExtendedCapabilities`.

<pre class="xml">
&lt;!-- Voldoet deze service aan de INSPIRE richtlijn --&gt;
&lt;inspire_common:Conformity&gt;
    &lt;inspire_common:Specification xsi:type="inspire_common:citationInspireInteroperabilityRegulation_dut"&gt;
        &lt;inspire_common:Title&gt;VERORDENING (EU) Nr. 1089/2010 VAN DE COMMISSIE van 23 november 2010 ter uitvoering van Richtlijn 2007/2/EG van het Europees Parlement en de Raad betreffende de interoperabiliteit van verzamelingen ruimtelijke gegevens en van diensten met betrekking tot ruimtelijke gegevens&lt;/inspire_common:Title&gt;
        &lt;inspire_common:DateOfPublication&gt;2010-12-08&lt;/inspire_common:DateOfPublication&gt;
        &lt;inspire_common:URI&gt;OJ:L:2010:323:0011:0102:NL:PDF&lt;/inspire_common:URI&gt;
        &lt;inspire_common:ResourceLocator&gt;
            &lt;inspire_common:URL&gt;http://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2010:323:0011:0102:NL:PDF&lt;/inspire_common:URL&gt;
            &lt;inspire_common:MediaType&gt;application/pdf&lt;/inspire_common:MediaType&gt;
        &lt;/inspire_common:ResourceLocator&gt;
    &lt;/inspire_common:Specification&gt;
    &lt;inspire_common:Degree&gt;notEvaluated&lt;/inspire_common:Degree&gt;
&lt;/inspire_common:Conformity&gt;
</pre>


**Conditions for Access and Use (M)**

Voor het aangeven van beperkingen voor de toegang en gebruik wordt het element `wms:Fees` gebruikt. Dit is een vrij tekstveld. Als de service kosteloos is te gebruiken dan wordt hiervoor de tekst "Geen gebruiksbeperkingen" (no conditions apply) gebruikt. Als het onbekend is of er kosten zijn verbonden aan het gebruik van de service dan wordt de waarde "Onbekend" (conditions unknown) gebruikt.

<pre class="xml">
&lt;Fees&gt;Geen gebruiksbeperkingen&lt;/Fees&gt;
</pre>


**Limitations on Public Access (M)**

Om aan te geven of er restricties gelden voor het gebruik van de service wordt het element `wms:AccessConstraints` gebruikt. Als er geen beperkingen gelden dan wordt hier "Geen beperkingen" ingevuld. Als er wel beperkingen gelden dan wordt hiervoor de codelijst MD_RestrictionCode gebruikt uit ISO 19115, Annex B – Data Dictionary, Section 5.24.

<pre class="xml">
&lt;!-- Als er geen gebruiksrestricties zijn: Geen beperkingen (None) --&gt;
&lt;!-- Anders een waarde uit de codelijst MD_RestrictionCode: --&gt;
&lt;!-- copyright, patent, patentPending, trademark, license, intellectualPropertyRights, restricted, otherRestrictions --&gt;
&lt;AccessConstraints&gt;Geen beperkingen&lt;/AccessConstraints&gt;
</pre>


**Responsible Organisation (M)**

Voor Responsible Organisation, de organisatie die verantwoordelijk is voor de view service, wordt het element `wms:ContactInformation` gebruikt en daarbinnen het element `wms:ContactPersonPrimary`, waarbij een `wms:ContactPerson` en een `wms:ContactOrganization` worden ingevuld. De rol van de Responsible Organization wordt aangeven in het element `wms:ContactPosition` waarbij een code uit de codelijst CI_RoleCode wordt gebruikt. Voor het element `wms:ContactElectronicMailAddress` wordt bij voorkeur een functioneel emailadres binnen de organisatie gebruikt.

<pre class="xml">
&lt;ContactInformation&gt;
&lt;!-- Verantwoordelijke organisatie voor de service --&gt;
    &lt;ContactPersonPrimary&gt;
        &lt;ContactPerson&gt;Functioneel beheerder Provinciaal Georegister&lt;/ContactPerson&gt;
        &lt;ContactOrganization&gt;GBO provincies&lt;/ContactOrganization&gt;
    &lt;/ContactPersonPrimary&gt;
    &lt;!-- Een waarde uit de codelijst CI_RoleCode: --&gt;
    &lt;!-- resourceProvider, custodian, owner, user, distributor, originator, pointOfContact, principalInvestigator, processor, publisher, author --&gt;
    &lt;ContactPosition&gt;pointOfContact&lt;/ContactPosition&gt;
    &lt;ContactElectronicMailAddress&gt;provinciaalgeoregister@gbo-provincies.nl&lt;/ContactElectronicMailAddress&gt;
&lt;/ContactInformation&gt;
</pre>


**Metadata Point of Contact (M)**

De INSPIRE Metadata implementing rule vereist dat ook de organisatie die verantwoordelijk is voor de metadata van de view service wordt geidentificeerd. Omdat in ISO 19128 maar één organisatie kan worden opgegeven onder het element `wms:ContactInformation` wordt voor Metadata Point of Contact het element `inspire_common:MetadataPointOfContact` in de `inspire_vs:ExtendedCapabilities` gebruikt.

<pre class="xml">
&lt;inspire_common:MetadataPointOfContact&gt;
    &lt;inspire_common:OrganisationName&gt;GBO-provincies&lt;/inspire_common:OrganisationName&gt;
    &lt;inspire_common:EmailAddress&gt;provinciaalgeoregister@gbo-provincies.nl&lt;/inspire_common:EmailAddress&gt;
&lt;/inspire_common:MetadataPointOfContact&gt;
</pre>


**Metadata Date (M)**

De datum waarop de metadata is aangemaakt. Hiervoor wordt het element `inspire_common:MetadataDate` in de `inspire_vs:ExtendedCapabilities` gebruikt.

<pre class="xml">
&lt;inspire_common:MetadataDate&gt;2011-05-01&lt;/inspire_common:MetadataDate&gt;
</pre>


**Metadata Language (M)**

Voor Metadata Language wordt het element `inspire_common:SupportedLanguages` in `inspire_vs:ExtendedCapabilities` gebruikt. Binnen dit element moet exact één `inspire_common:DefaultLanguage` element worden opgenomen om de standaardtaal van de service weer te geven. Voor de aanduiding van de taal moet de drielettercode voor die taal worden gebruikt zoals gedefinieerd in de codelijst van <a href="http://www.loc.gov/standards/iso639-2/" target="_blank">ISO 639-2/B (bibliographic codes)</a>. Met het element `inspire_common:ResponseLanguage` wordt de taal van het capabilities-document aangeduid. Volgens het Technical Guidance document zou dit element moeten overeenkomen met de taal die als language parameter bij het GetCapabilities-request is gebruikt. Omdat een capabilities-document maar in één taal kan worden opgesteld (voor de ondersteuning van meerdere talen is per taal een capabilities-document nodig), komt de waarde van dit element in de praktijk dus overeen met de waarde van `inspire_common:DefaultLanguage`. 

<pre class="xml">
&lt;inspire_common:SupportedLanguages&gt;
    &lt;inspire_common:DefaultLanguage&gt;
        &lt;inspire_common:Language&gt;dut&lt;/inspire_common:Language&gt;
    &lt;/inspire_common:DefaultLanguage&gt;
&lt;/inspire_common:SupportedLanguages&gt;
&lt;inspire_common:ResponseLanguage&gt;
    &lt;inspire_common:Language&gt;dut&lt;/inspire_common:Language&gt;
&lt;/inspire_common:ResponseLanguage&gt;
</pre>

In de toekomst zal meertaligheid ook worden ondersteund in de [OGC-standaarden](#iso-en-ogc-standaarden). Daarin zal de codering van de taal plaatsvinden op basis van <a href="https://www.ietf.org/rfc/rfc4646.txt" target="_blank">IETF RFC 4646</a> in plaats van ISO 639-2/B. Het Technical Guidance document bevat een tabel met daarin de vertaling van de ISO 639-2/B codes naar IETF RFC 4646 codes en voorziet in de toekomst ook een mogelijke wijziging van de huidige codes naar de IETRF RFC 4646 codes.


**Metadata voor de Layers elementen in het Capabilities document**

Een aantal parameters die in Annex III van de [INSPIRE Network Services Regulation](#wetgeving) worden voorgeschreven voor een INSPIRE-viewservice zijn gemapped naar sub-elementen van `wms:Layer`. In de onderstaande tabel is die mapping weergegeven.

| INSPIRE-metadata-elementen | ISO 19128 WMS-elementen van wms:Layer |
| -------------------------- | ------------------------------------- |
| Resource Title | wms:Title |
| Resource Abstract | wms:Abstract |
| Keyword | wms:KeywordList |
| Geographic Bounding Box | wms:BoundingBox |
| Unique Resource Identifier | wms:Identifier + wms:AuthorityURL |
| Name | wms:Name |
| Coordinate Reference Systems | wms:CRS |
| Styles | wms:Style |
| Legend URL | wms:Style/wms:LegendURL |
| Dimension Pairs | wms:Dimension[@name,@units] |
| Link to metadata of the corresponding spatial dataset | wms:MetadataURL |
| Coupled Resource | wms:DataURL |


**Resource Title**

De Resource Title bevat de geharmoniseerde naam die is vastgelegd in de INSPIRE-richtlijn en wordt ingevuld in het element `wms:Layer`/`wms:Title` in de taal die is weergegeven als de `inspire_common:DefaultLanguage` in de `inspire_vs:ExtendedCapabilities`.

<pre class="xml">
&lt;Layer&gt;
    ....
    &lt;Title&gt;Beschermde gebieden&lt;/Title&gt;

    ....

&lt;/Layer&gt;
</pre>


**Resource Abstract**

De Resource Abstract geeft een korte beschrijving van de laag en wordt ingevuld in het element `wms:Layer`/`wms:Abstract` in de taal die is weergegeven als de `inspire_common:DefaultLanguage` in de `inspire_vs:ExtendedCapabilities`.


**Keyword**

Keywords kunnen worden opgenomen in `wms:Keyword` elementen onder `wms:Layer`/`wms:KeywordList`. Voor de keywords die afkomstig zijn uit een thesaurus kan de naam van de thesaurus worden opgenomen in het attribuut vocabulary.

<pre class="xml">
&lt;KeywordList&gt;
    &lt;!-- Keyword uit een controlled vocabulary --&gt;
    &lt;Keyword vocabulary="PGR Thesaurus"&gt;Landschap&lt;/Keyword&gt;

    &lt;!-- Keyword niet afkomstig uit een controlled vocabulary --&gt;

    &lt;Keyword&gt;geomorfologie&lt;/Keyword&gt;
&lt;/KeywordList&gt;
</pre>


**Geographic Bounding Box**

Voor GeographicBoundingBox wordt het element `wms:Layer`/`wms:BoundingBox` gebruikt. Hierin worden de coördinaten voor alle ondersteunde Coordinaat Referentie Systemen van de minimum bounding box beschreven.

<pre class="xml">
&lt;BoundingBox CRS="CRS:84" minx="2.99" miny="50.51" maxx="7.63" maxy="53.79"/&gt;
&lt;BoundingBox CRS="EPSG:4326" minx="50.51" miny="2.99" maxx="53.79" maxy="7.63"/&gt;
&lt;BoundingBox CRS="EPSG:4258" minx="2.99" miny="50.51" maxx="7.63" maxy="53.79"/&gt;
&lt;BoundingBox CRS="EPSG:3035" minx="3073712" miny="3851511" maxx="3405160" maxy="4138318"/&gt;
&lt;BoundingBox CRS="EPSG:3034" minx="2652344" miny="3532708" maxx="3004189" maxy="3837437"/&gt;
&lt;BoundingBox CRS="EPSG:28992" minx="10000" miny="305000" maxx="280000" maxy="619000"/&gt;
&lt;BoundingBox CRS="EPSG:25831" minx="499705" miny="5604132" maxx="805311" maxy="5960224"/&gt;
&lt;BoundingBox CRS="EPSG:25832" minx="86512" miny="5606077" maxx="397932" maxy="5967089" /&gt;
</pre>


**Link to metadata on the spatial dataset**

Het element `wms:Layer`/`wms:MetadataURL` wordt gebruikt om een verwijzing op te nemen naar het metadatadocument bij de dataset die via deze Layer wordt gevisualiseerd. Dit element wordt gevuld met een GetRecordById request naar een discovery service waarmee dit metadatadocument kan worden opgehaald of een directe link naar een ISO 19115/19139 metadatadocument.

<pre class="xml">
&lt;MetadataURL type="ISO19115:2003"&gt;
    &lt;Format&gt;text/xml&lt;/Format&gt;
    &lt;OnlineResource xlink:href="http://www.nationaalgeoregister.nl/geonetwork/srv/nl/csw?Service=CSW&Request=GetRecordById&Version=2.0.2&id=f002bfc5-7d87-46b6-819e-8415422b65c9&outputSchema=http://www.isotc211.org/2005/gmd&elementSetName=full" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple"/&gt;
&lt;/MetadataURL&gt;
</pre>


**Unique Resource Identifier**

De Unique Resource Identifier  geeft de unieke identificatie weer van de bron (dataset) waarop de Layer is gebaseerd. Een Unique Resource Identifier wordt samengesteld door twee elementen te combineren, te weten `wms:AuthorityURL` en `wms:Identifier`. Het element `wms:AuthorityURL` kan op meerdere plekken worden gedefinieerd in het capabilities-document. 

Dat kan op het hoogste niveau onder `wms:Layer` of in een `wms:Layer` element daaronder (`wms:Layer`/`wms:Layer`). De eerste methode kan worden gebruikt om één keer voor alle Layers één AuthorityURL aan te geven. Alle onderliggende `wms:Layer` elementen worden dan verondersteld gebruikt te maken van deze AuthorityURL. 

De tweede methode kan worden gebruikt om per `wms:Layer` een unieke AuthorityURL op te nemen. Het laatste geval kan zich voordoen als een service is gemaakt die Layers bevat waarmee datasets van verschillende dataproviders worden gevisualiseerd. De technical guidance raadt aan om voor het element `wms:Identifier` een UUID te gebruiken om de dataset mee te identificeren.

<pre class="xml">
 &lt;!-- Codespace om de authority uniek mee te identificeren--&gt;
&lt;AuthorityURL name="NL.IPO"&gt;
    &lt;OnlineResource xlink:href="http://www.ipo.nl" xlink:type="simple" xmlns:xlink="http://www.w3.org/1999/xlink"/&gt;
&lt;/AuthorityURL&gt;
&lt;!-- Verwijzing naar de onderliggende dataset die wordt gevisualiseerd door deze Layer --&gt;

&lt;Identifier authority="NL.IPO"&gt;
    ca94a0cb-7561-4a10-a7d6-b840e56c33ff
&lt;/Identifier&gt;
</pre>


**Name**

Dit is de geharmoniseerde naam voor INSPIRE-thema's die wordt gebruikt voor communicatie tussen computers, in tegenstelling tot Title dat wordt gebruikt als 'naam' voor de Layer die voor mensen begrijpelijk is. Hiervoor wordt het element `wms:Name` gebruikt, waarbij de volgende conventie wordt aangehouden: THEME.LayerName, met het INSPIRE-theme in hoofdletters en LayerName in UpperCamelCase-schrijfwijze zonder spaties. Voor services waarin meerdere SubLayers zijn opgenomen, kan deze schrijfwijze worden uitgebreid tot THEME.LayerName.SubLayerName

| Thema | Voorbeeld |
| ----- | --------- |
| Geografische Namen | GN.GeographicalNames |
| Administratieve Eenheden | AU.AdministrativeUnit |
| Adressen | AD.Address |
| Kadastrale Percelen | CP.CadastralParcel |
| Transport Netwerken | TN.RoadTransportNetwork.RoadArea |
| Hydrografie | HY.Network |
| Beschermde Gebieden | PS.ProtectedSite |

Layer names en Layer titles zijn verplicht voor de view services van geharmoniseerde datasets zoals ze in de [INSPIRE dataspecificaties](#inspire-dataspecificaties) gedefinieerd zijn.


**Coordinate Reference Systems (CRS)**

Minimaal moeten de geografische Coordinaat Referentie Systemen (WGS84 en ETRS89) worden opgegeven. Voor ieder CRS wordt een `wms:CRS` element gebruikt. 

<pre class="xml">
&lt;!-- Verplicht voor WGS 84 buiten Europa --&gt;
&lt;CRS&gt;CRS:84&lt;/CRS&gt;
&lt;!-- Verplicht: WGS 84 Wereld --&gt;
&lt;CRS&gt;EPSG:4326&lt;/CRS&gt;
&lt;!-- Verplicht CRS: ETRS89 Geografisch binnen Europa--&gt;
&lt;CRS&gt;EPSG:4258&lt;/CRS&gt;
</pre>


**Styles**

Hiervoor wordt het element `wms:Layer`/`wms:Style` gebruikt. Voor een style moet in ieder geval een Title (`wms:Title`, hier wordt een voor mensen leesbare naam opgenomen) en een Unique Identifier (`wms:Name`) worden opgenomen. Voor ieder INSPIRE-thema moet in ieder geval een style `inspire_common:DEFAULT` worden opgenomen. Deze default style moet zijn gedefinieerd op basis van het hoofdstuk [Portrayal](#portrayal) uit de INSPIRE dataspecificaties voor dat thema. Als er geen opmaak is gedefinieerd in de INSPIRE dataspecificatie voor het betreffende thema, dan wordt de volgende opmaak aangehouden voor de `inspire_common:Default` style:

- Punt: grijs vierkant, 6 pixels;
- Lijn: zwarte doorgetrokken lijn, 1 pixel;
- Vlak: zwarte doorgetrokken lijn, 1 pixel met een grijze vulling.

Naast de `inspire_common:Default` Style kunnen nog aanvullende Style-elementen worden opgenomen voor andere visualisaties.

Voor de style moet ook een URL worden opgenomen, die verwijst naar een legenda in de taal die is gedefinieerd als `inspire_common:DefaultLanguage` voor de service in `inspire_vs:ExtendedCapabilities`. Hiervoor wordt het element `wms:LegendURL` gebruikt.

<pre class="xml">
&lt;Style&gt;
    &lt;Name&gt;inspire_common:DEFAULT&lt;/Name&gt;
    &lt;Title&gt;Beschermde gebieden&lt;/Title&gt;
    &lt;LegendURL&gt;
        &lt;Format&gt;image/png&lt;/Format&gt;
        &lt;OnlineResource xlink:href="http://www.provinciaalgeoregister.nl/pgr-wms/services?request=GetLegendGraphic&service=WMS&version=1.3.0&width=25&height=25&format=image/png&layer=PS.ProtectedSite&style=inspire_common:DEFAULT" xlink:type="simple" xmlns:xlink="http://www.w3.org/1999/xlink"/&gt;
    &lt;/LegendURL&gt;
&lt;/Style&gt;
</pre>

Default styling is gedefinieerd in de [Technical Guidance voor view services](#technische-inspire-richtlijnen) (zie TG view service v3.0 paragraaf 4.2.3.3.4.8, eis 43 en 44). Dit is dus altijd verplicht voor view services, ook al is het nog niet vereist aan de INSPIRE dataspecificaties te voldoen. Zolang de [portrayal](#portrayal) zoals vastgelegd in de INSPIRE dataspecificaties (nog) niet verplicht is, moeten serviceproviders tenminste de default styling uit view services toepassen (requirement in de Technical Guidance voor view services).

"inspire_common:DEFAULT" is een placeholder voor een Style Unique Identifier van de INSPIRE default style, maar je kan ook een andere naam kiezen voor de (default) stijl. De naam van de Style hoeft dus niet per se "inspire_common:DEFAULT" te zijn.


**Dimension Pairs**

Dit element wordt alleen gebruikt als de Layer afhankelijk is van tijd of hoogte. In dat geval wordt het element `wms:Dimension` gebruikt. Als een laag volledig is gedefinieerd door de beide assen van het CRS, dan wordt dit element niet ingevuld.


**Coupled Resource**

Coupled Resource geeft een verwijzing die toegang biedt tot de dataset die in deze Layer wordt gevisualiseerd. Dit kan een verwijzing zijn naar bijvoorbeeld een zip-bestand dat kan worden gedownload of naar een download service waarmee toegang tot deze dataset wordt geboden. Hiervoor wordt het element `wms:Layer`/`wms:DataURL` gebruikt.

<pre class="xml">
&lt;!-- Voorbeeld van een verwijzing naar de onderliggende dataset (FeatureType) in de PGR download service--&gt;
&lt;DataURL&gt;
  &lt;Format&gt;text/xml&lt;/Format&gt;
  &lt;OnlineResource xlink:href="http://www.provinciaalgeoregister.nl/pgr-wfs/services?Service=WFS&Request=GetFeature&Version=1.1.0&TypeName=PS.ProtectedSite.AW" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple"/&gt;
&lt;/DataURL&gt;


&lt;!-- Voorbeeld van een verwijzing naar de onderliggende dataset (download locatie voor een gezipte GML) --&gt;
&lt;DataURL&gt;
&lt;Format&gt;application/zip&lt;/Format&gt;
    &lt;OnlineResource xlink:href="http://www.provinciaalgeoregister.nl/downloads/NL.IPO.PS.ProtectedSite.EHS.zip" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple"/&gt;
&lt;/DataURL&gt;
</pre>


### Category layers
Als een Layer meerdere regionale datasets visualiseert, of meerdere featuretypes (bijvoorbeeld lijnen en vlakken in 1 laag), dan beveelt de Technical Guidance voor view services aan om gebruik te maken van Category Layers. Een Category Layer is een Layer die zelf weer uit meerdere Layers is opgebouwd die ieder een eigen dataset visualiseren. Als een viewservice gebruik maakt van Category Layers dan wordt het element `wms:Layer`/`wms:Name` gebruikt om de INSPIRE-geharmoniseerde naam voor het INsPIRE thema weer te geven. Als er een metadata-document beschikbaar is dan wordt het element `wms:Layer`/`wms:MetadataURL` gebruikt om een verwijzing naar dat metadata-document op te nemen.

<pre class="xml">
&lt;Layer&gt;
    &lt;!-- Category Layer die is samengesteld uit meerdere Layers --&gt;

    &lt;Name&gt;PS.ProtectedSite&lt;/Name&gt;
    &lt;Title&gt;Beschermde gebieden&lt;/Title&gt;

    &lt;Abstract&gt;De laag Beschermde gebieden is gebaseerd op de geharmoniseerde provinciale datasets voor Beschermde Gebieden. Onderdeel van deze laag zijn lagen voor Aardkundige Waarden, Ecologische Hoofdstructuur, Provinciale Monumenten, Nationale Landschappen, Stiltegebieden en WAV gebieden&lt;/Abstract&gt;

    ....
    &lt;Layer&gt;
    &lt;!-- Layer op basis van de dataset Aardkundige Waarden --&gt;
    &lt;Name&gt;PS.ProtectedSite.AW&lt;/Name&gt;
    &lt;Title&gt;Beschermde gebieden: Aardkundige Waarden&lt;/Title&gt;
    &lt;Abstract&gt;De term aardkundige waarden wordt gebruikt als een verzamelnaam voor geomorfologische, geologische, bodemkundige of geohydrologische verschijnselen in het landschap, die een bepaalde waarde vertegenwoordigen. Het gaat daarbij niet alleen om het behoud en de beleefbaarheid van historische verschijnselen. Er wordt ook betekenis gehecht aan actuele processen, die aardkundige waarden opleveren. Dit bestand bevat informatie conform de INSPIRE dataspecificaties voor beschermde gebieden. Raadpleeg voor meer detailinformatie het bronbestand van de desbetreffende provincie. Meer gedetailleerde informatie voor de beschermde gebieden in de afzonderlijke provincies is te vinden in de beschrijving van de provinciale bestanden over dit onderwerp.&lt;/Abstract&gt;

    ....

    &lt;/Layer&gt;
    &lt;Layer&gt;
    &lt;!-- Layer op basis van de dataset EHS --&gt;
    &lt;Name&gt;PS.ProtectedSite.EHS&lt;/Name&gt;
    &lt;Title&gt;Beschermde gebieden: Ecologische Hoofdstructuur&lt;/Title&gt;
    &lt;Abstract&gt;De EHS is een netwerk van gebieden in Nederland waar de natuur voorrang heeft. Het netwerk helpt voorkomen dat planten en dieren in geïsoleerde gebieden uitsterven en dat natuurgebieden hun waarde verliezen. De EHS kan worden gezien als de ruggengraat van de Nederlandse natuur. Dit bestand bevat informatie conform de INSPIRE dataspecificaties voor beschermde gebieden. Raadpleeg voor meer detailinformatie het bronbestand van de desbetreffende provincie. Meer gedetailleerde informatie voor de beschermde gebieden in de afzonderlijke provincies is te vinden in de beschrijving van de provinciale bestanden over dit onderwerp.&lt;/Abstract&gt;
    ....
    &lt;/Layer&gt;

    ....
&lt;/Layer&gt;
</pre>



Volgens de [Technical Guidance voor view services](#technische-inspire-richtlijnen), moet een Category Layer een naam hebben (eis 49). Daarnaast gelden de algemene eisen van WMS, die INSPIRE overneemt. In de paragraaf "7.2.4.8 Inheritance of layer properties" van de WMS 1.3.0 specificatie is aangegeven per element wat wel en wat niet overgeorven kan worden.
INSPIRE volgt de WMS 1.3.0 specificatie voor overerving van de Layer elementen. In de paragraaf "7.2.4.8 Inheritance of layer properties" van de WMS 1.3.0 specificatie is aangegeven per element wat wel en wat niet overgeorven kan worden.


### Voorbeeldbestand XML voor Capabilities
Hier zijn twee voorbeeldbestanden te vinden voor de capabilities-documenten, volgens [scenario 1](docs/WMS_Capabilities_Voorbeeld_Scenario1.zip) en [scenario 2](docs/WMSCapabilities_Voorbeeld_Scenario2.zip).



## Download services

De downloadservice (of downloaddienst) heeft als functie de gegevens die via de discovery service van het [NGR](#nationaal-georegister) gevonden worden, te kunnen downloaden om ze daarna te kunnen analyseren en te gebruiken voor de gewenst toepassing. Hiertoe dient de dataprovider de INSPIRE-thema’s met een downloadservice te ontsluiten. INSPIRE kent meerdere opties om de download service te implementeren;

1. Atom Feed
2. Web Feature Services (WFS)
3. Web Coverage Service (WCS)
4. Sensor Observation Services (SOS)
5. OGC API Features (OAPIF of OAF)
6. OGC SensorThings API (STA)

Afhankelijk van het type gegevens of de voorkeuren van een dataprovider, bepaalt de dataprovider het type service. In de volgende paragrafen worden de verschillende download service implementaties behandeld. 

Aandachtspunten

- Als er nog geen webservices draaien om een dataset aan te bieden en de dataset is niet erg dynamisch, dan is vaak een Atom feed het snelste en meest eenvoudige om te maken. Bij grote datasets kan het dataverkeer (over de netwerkverbinding) ook te veel gaan vragen en kan opsplitsen van het bestand nodig zijn. Dit vraagt om extra handelingen bij het inrichten. Is de dataset dynamischer van aard of is het niet gewenst om de data in verschillende CRSen op te slaan, dan kan een Download Service op basis van WFS (implementaties ondersteunen vaak on-the-fly herprojectie) handiger zijn. Webservices biedt ook voordelen voor gebruik van de data in andere processen.

- In INSPIRE komt het voor dat vanuit data verwezen wordt naar andere datasets, bijvoorbeeld om gebruik te maken van de geometrie van een andere dataset als de dataset zelf geen geometrie bevat. Dit gebeurt bijvoorbeeld bij de INSPIRE thema's 'Human Health and Safety', Statistical Units' of bij 'Transport Networks'. Als een organisatie data aanbiedt waar een andere dataset naar verwijst, is het voor de technische werking van de links noodzakelijk dat de data per object te linken is. Bij datasets die alleen via Atom feeds als bestand worden aangeboden, is dit technisch vaak lastig. Met WFS kan dit wel; door gebruik te maken van requests om 1 object op te halen. Het verdient daarom aanbeveling om data waar andere datasets naar (kunnen) verwijzen, aan te bieden via WFS.


## Atom feed

Dit betreft een dataset die in zijn geheel (als één bestand) gedownload kan worden, zonder dat er een selectie van de dataset gemaakt wordt door de client. Met andere woorden: de data is van te voren klaargezet. Het bestand mag gecomprimeerd worden. Met *predefined part* van een dataset wordt bedoeld dat er met deze download een geografisch deel van een INSPIRE-thema geleverd kan worden. Het hoeft dus niet altijd een download van de dataset voor heel Nederland te zijn, maar het kan bijvoorbeeld ook een download per provincie of ander deelgebied zijn. De aanbieder bepaalt hoe de dataset opgedeeld wordt; de client kan geen eigen selecties / filters toepassen.

Kenmerken zijn:
- Meest simpele oplossing die toegang tot de data zelf oplevert.
- De Atomfeed beschrijft waar de data te downloaden is, op welke datum die gepubliceerd is en legt relaties met metadata-records.
- De pre-defined dataset kent een metadata-record dat via de discovery service gevonden kan worden.

De <a href="https://tools.ietf.org/html/rfc4287" target="_blank">Atom-standaard</a> is een (voorgestelde) standaard van IETF, the <a href="https://www.ietf.org/" target="_blank">Internet Engineering Task Force</a>. Atom is een XML-formaat om (op internet beschikbare) informatie te publiceren in feeds. Deze feeds bevatten vaak een algemeen deel en verscheidene items. Zo'n item (entry) bestaat uit elementen die de informatie beschrijven en ernaar verwijzen. Items kunnen bijvoorbeeld nieuwsberichten zijn, weblog-posts of gepubliceerde video's.

De <a href="https://www.ogc.org/standards/georss" target="_blank">GeoRSS-specificatie</a> breidt feeds uit met elementen om de geografische eigenschappen van gegevens te publiceren. Dit is bijvoorbeeld een puntlocatie of bounding box van het gebied waar de gegevens betrekking op hebben.

De afbeelding hieronder geeft de samenhang van de feeds weer voor datasets, die als (statisch) bestand te downloaden zijn van een standaard webserver.

![atom](media/Atom_feeds_overview.png "Overview van atomfeeds.")

Een *Atom service feed* kan naar meerdere *Atom dataset feeds* verwijzen. Een dataset feed kan vervolgens per combinatie van CRS, taal en formaat naar meerdere bestanden wijzen. Zie de afbeeldingen hieronder.

![atom_structuur](media/Atom_feeds_structuur.png "Structuur van atomfeeds.")


Enkele genoemde voor- en nadelen van Atom feed zijn:

Voordelen:
- Eenvoudig te gebruiken met standaard web technologie: browsers en newsreaders om te openen, code / programmeerbibliotheken om te verwerken en maken;
- Te indexeren door zoekmachines (gebeurt bij ISO metadata meestal niet);
- Relatief eenvoudig XML-formaat.

Nadelen:
- Niet standaard ondersteuning voor in geo-software;
- Veel overlap met ISO-metadata;
- Zoals nu beschreven: mogelijkerwijs zijn veel feeds nodig om op te stellen.

### Vereisten Atom feeds

De <a href="https://inspire.ec.europa.eu/documents/technical-guidance-implementation-inspire-download-services" target="_blank">Technical Guidance for the implementation of INSPIRE Download Services</a>  beschrijft hoe datasets via een Atom feed gepubliceerd kunnen worden, om te voldoen aan de Implementing Rule voor Download Services. Globaal komt het erop neer dat de downloadservice via enkele Atom feeds wordt beschreven en de downloadlocaties aanbiedt van de bestanden om gehele datasets of delen daarvan te downloaden. Atom feeds van een  dataset bevat daarvoor (onder andere):
1. Gegevens over de aanbieder van de downloadservice. Deze gegevens staan in de *Atom Service feed*.
2. Algemene gegevens over de downloadservice, zoals een id, locatie en de datum van laatste wijzigingen en copyrights en verwijzingen naar de Atom Dataset Feeds. Ook deze gegevens staan in de Atom Service feed.
3. Per dataset, of deel van een dataset: Beschrijvende gegevens, zoals een titel, beknopte samenvatting, copyrights en andere rechten, het CRS, het geografisch gebied van de data en verwijzingen (URL) naar de data zelf. Deze gegevens staan in de *Atom Dataset feed(s)*.
4. Indien van toepassing: Verwijzingen naar feeds in een andere taal (meertaligheid INSPIRE).
5. verwijzingen naar <a href="https://www.opensearch.org/" target="_blank">OpenSearch-functionaliteit</a> om de feeds te kunnen doorzoeken. Deze gegevens staan in de Atom Service feed.


### OpenSearch

Een INSPIRE-downloadservice met Atom feeds dient een *OpenSearch Description* en zoekfunctionaliteit aan te bieden. Voor dergelijke OpenSearch-functionaliteit biedt het NGR nu een eenvoudige manier aan voor dataproviders die niet zelf de functionaliteit willen of kunnen bieden. Dataproviders hoeven hiermee (in de meeste gevallen) dus zelf geen implementatie van OpenSearch meer te doen, maar hoeven alleen hun Atom feeds en de metadata op orde te hebben. Hieronder volgt een gedetailleerde beschrijving hoe dit te implementeren is.

Om gebruik te maken van een OpenSearch Description, dienen de feeds en metadata aan de volgende voorwaarden te voldoen:
1. **algemeen**: de Atom feeds dienen uiteraard, op de OpenSearch-vereisten na, aan alle INSPIRE-eisen te voldoen. Dus zorg voor de juiste links naar de dataset-feeds en de juiste metadata-verwijzingen en valide metadata. Het NGR kan anders wellicht geen OpenSearch Description genereren.
2. **service metadata**: het protocol van de ResourceLocator moet in het XML-bestand op "INSPIRE Atom" staan. In het NGR is dit eenvoudig te kiezen in de metadata-editor. Kies dan uit de keuzelijst Protocol de optie "Atom Service Feed". Dit is de enige wijziging die nodig is in service metadata.
3. **dataset metadata**: het protocol van de URL dient in het XML-bestand op "INSPIRE Atom" staan. In het NGR is dit eenvoudig te kiezen in de metadata-editor. Kies dan uit de keuzelijst Protocol de optie "Atom Service Feed". Dit moet voor alle dataset metadata waar de Atom feeds en de service naar verwijzen gedaan worden.
4. **in de Atom service feed**: de URL van de OpenSearch Description moet toegevoegd worden aan de service feed. Het NGR gaat de OpenSearch Description genereren (let op: zie opmerking hieronder) op basis van de metadata-identifier (fileIdentifier) van de metadata van de service. Het format van de URL van de OpenSearch Description die het NGR gaat genereren is:

Bijvoorbeeld:


<a href="https://www.nationaalgeoregister.nl/geonetwork/opensearch/dut/ef2a7962-8bb4-483f-ac78-851b619f357f/OpenSearchDescription.xml" target="_blank">https://www.nationaalgeoregister.nl/geonetwork/opensearch/dut/ef2a7962-8bb4-483f-ac78-851b619f357f/OpenSearchDescription.xml</a>


Hierbij is **ef2a7962-8bb4-483f-ac78-851b619f357f** de metadataidentifier van de ATOM download service.

De samenhang van de onderdelen van een ATOM download service is weergegeven in onderstaande afbeelding:

![atom_componenten](media/atom_componenten.png "Componenten van de ATOM download service.")

**Aandachtspunten**

- **Let op met identifiers van de bron van de dataset**: Het NGR doet de aanname dat de identifier van de bron van de dataset uniek is in NGR voor de dataset-metadata-records (oftewel: beschreven is in één dataset-metadata-record). Dit heeft te maken met de interne werking en controles om tot een geldige OpenSearch Description te komen. Als er meerdere dataset-metadata-records voorkomen in NGR met dezelfde dataset-identifier, dan kan het zijn dat de OpenSearch Description niet volledig opgebouwd wordt. Een dataprovider dient dan zelf zorg te dragen voor de OpenSearch Description.
- **Volgende dag beschikbaar**: De hierboven beschreven punten 1 t/m 4 zijn nodig voor het NGR om een OpenSearch Description te kunnen genereren. Het NGR moet daarvoor de feeds en metadata ophalen en analyseren. Dit gebeurt dagelijks. Een OpenSearch Description is dus niet gelijk beschikbaar, maar doorgaans wel de volgende dag.
- **Hoofdlettergebruik**: Het is essentieel voor de werking dat links en identifiers exact kloppen en dat codes exact overeenkomen met codes uit de codelijsten. Dit is inclusief het gebruik van hoofdletters. Let daar dus op, vooral bij handmatige wijzigingen in XML bestanden.


### Elementen van een Atom feed

In onderstaande tabellen is het overzicht van de elementen van een service feed, entry service feed, dataset feed en entry dataset feed opgenomen.

**Elementen service feed**

De onderstaande tabel bevat een overzicht van de elementen van een Atom feed, zoals de [Technical Guidance](#technische-inspire-richtlijnen) die beschrijft en die van toepassing zijn op de gehele feed. Het betreft geen volledige opsomming van alle details, zie daarvoor de Technical Guidance zelf.

| Element | Type | Belangrijkste extra attributen / elementen | Verplicht? | Omschrijving |
| ------- | ---- | ------------------------------------------ | ---------- | ------------ |
| title | | Taal (xml:lang) | Ja | Een voor mensen leesbare titel van de feed als geheel, m.a.w. van de download service, inclusief opgave van de taal van dit element. |
| subtitle | | Taal (xml:lang) | Nee | Een voor mensen leesbare subtitel, met extra toelichting over de feed als geheel, inclusief opgave van de taal van dit element. |
| link | service metadata | Soort link (rel="describedby"), Type (type="application/xml") | Ja | Link naar de metadata record van deze download service in de discovery service. | 
| link | zelf referentie | Soort link (rel="self"), Taal (hreflang="en"), Titel (title="Title of this document"), Type (type="application/atom+xml") | Ja | Verwijzing naar de URL van de feed zelf. Dit is een vereiste van Atom en is bijvoorbeeld handig als een feed lokaal wordt opgeslagen of gekopieerd, dan is de oorspronkelijke (online) locatie van de feed via deze link nog te achterhalen. |
| link | alternatieve talen | Soort link (rel="alternate"), Type (bijv. type="text/html"), Alternatieve taal (bijv. hreflang="de"), Titel (bijv. title="An HTML version of this document in German") | Verplicht als er meerdere talen van de download service zijn | Als een download service ook in andere talen beschikbaar is, dient deze link opgenomen te worden en te verwijzen naar de feed in de andere talen.|
| link | OpenSearch document | Soort link (rel="search"), Type (bijv. type="application/opensearchdescription+xml"), Taal (bijv. hreflang="en") | Verwijst naar een OpenSearch description van de Download Service. |
| link | alternatieve formaten | Soort link (rel="alternate"), Type (bijv. type="text/html"), Titel (bijv. title="An HTML version of this document") | Nee | Dit gaat om alternatieve formaten van de feed zelf, dus niet van de datasets. Bijvoorbeeld als er een website is over de Download Service. |
| id | | | Ja | Dit is de identifier van de feed. De waarde dient een URI te zijn. Aanbevolen is de URI van de feed te gebruiken. |
| rights | | | Ja | Informatie over de rechten en restricties die gelden voor de feed. Vaak komt dit overeen met de waarde voor 'accessConstraints' in de overeenkomstige service metadata record. Individuele entries in de feed kunnen ook hun eigen rechten en restricties hebben. |
| updated | | | Ja | Datum en tijd van de laatste wijzgingen van de feed. |
| author | | Contactinformatie over de feed (naam en emailadres) | Ja | Het kan contactinformatie zijn van een individu of een organisatie die verantwoordelijke is voor de feed. Tenminste moet een naam en e-mailadres worden verstrekt. |



**Elementen entry service feed**

Voor elke dataset feed, dient de atom service feed een entry-element te bevatten. Voor elk entry-element zijn de volgende subelementen beschikbaar:

| Element | Type | Belangrijkste extra attributen / elementen | Verplicht? | Omschrijving |
| ------- | ---- | ------------------------------------------ | ---------- | ------------ |
| INSPIRE dataset identifier | INSPIRE elementen | INSPIRE custom elementen, spatial_dataset_identifier_code, spatial_dataset_identifier_namespace | Ja | Verwijzingen naar de INSPIRE dataset identifier code en namespace. De XML elementen zijn door INSPIRE specifiek voor download services gedefinieerd. |
| title | | Taal (xml:lang) | Ja | Een voor mensen leesbare titel van de entry, m.a.w. van de dataset (of deel daarvan), inclusief opgave van de taal van dit element. |
| link | Metadata | Soort link (rel="describedby" en type="application/xml") | Ja | Link naar het metadata record van de dataset. |
| link | Dataset feed | Soort link (rel="alternate" en type="application/atom+xml") | Ja | Link naar de Atom dataset feed horend bij de dataset van de entry. |
| subtitle | | Taal (xml:lang) | Nee | Een voor mensen leesbare subtitel, met extra toelichting over de entry, inclusief opgave van de taal van dit element. |
| id | | | Ja | Dit is de identifier van de datasets. De waarde dient een URI te zijn. Aanbevolen is de URL van de dataset te gebruiken, dus dezelfde URL als in het href-attribuut van de link van de dataset. |
| rights | | | Nee | Informatie over de rechten en restricties die gelden voor de entry. Indien dit niet opgegeven is, geldt de informatie zoals opgegeven bij de rights van de gehele feed. |
| updated | | | Ja | Datum en tijd van de laatste wijzgingen van de feed. |
| author | | Contactinformatie over de dataset (naam en emailadres) | Nee | Gegevens voor contact over de datasets. Naam en emailadres zijn, op basis van de INSPIRE Metadata IR, minimaal vereist. Indien dit niet opgegeven is, geldt de informatie zoals opgegeven bij de rights van de gehele feed. |
| georss | | | Nee | Het gebied waar de dataset betrekking op heeft, uitgedrukt met bijvoorbeeld een boundingbox. De geometrie wordt opgegeven conform GeoRSS(-Simple). De coordinaten staan in latitude/longitude conform WGS84. |
| category | CRSen | Well-known definitie van het CRS (attribuut term) en eventueel het label voor de leesbare toelichting. | Ja | CRSen waarin de dataset feed de data aanbiedt. |



**Elementen dataset feed**

Dataset feeds bevatten de informatie om de bestanden daadwerkelijk te kunnen downloaden. Dataset feeds bevatten de onderstaande elementen.

| Element | Type | Belangrijkste extra attributen / elementen | Verplicht? | Omschrijving |
| ------- | ---- | ------------------------------------------ | ---------- | ------------ |
| title | | Taal (xml:lang) | Ja | Een voor mensen leesbare titel van de dataset feed, inclusief opgave van de taal van dit element. |
| subtitle | | Taal (xml:lang) | Nee | Een voor mensen leesbare subtitel, met extra toelichting over de dataset feed, inclusief opgave van de taal van dit element. |
| id | | | Ja | Dit is de identifier van de dataset feed. De waarde dient een URI te zijn, de URL van de dataset feed zelf. |
| rights | | | Nee | Informatie over de rechten en restricties die gelden voor de dataset feed. |
| updated | | | Ja | Datum en tijd van de laatste wijzgingen van de feed. |
| author | | Contactinformatie over de dataset feed (naam en emailadres) | Ja | Gegevens voor contact over de datasets. Naam en emailadres zijn, op basis van de INSPIRE Metadata IR, minimaal vereist. Indien dit niet opgegeven is, geldt de informatie zoals opgegeven bij de rights van de gehele feed. |
| link | | Spatial Object description, via een link met rel="describedby" en type="text/html", vindt verwijzing naar een (INSPIRE) Registry en/of een ander registry plaats | Ja | Een of meerdere elementen die aangeven welke *spatial object types* in de dataset zitten. De waardes hiervan komen uit de INSPIRE Registry in geval de data aan een INSPIRE dataspecifictie voldoet, zie <a href="https://inspire.ec.europa.eu/featureconcept" target="_blank">hier</a> voor waardes van de spatial object types. |
| link | Service feed | Soort link (rel="up"), Type link (type="application/atom+xml") | Nee | Link naar de Atom service feed ("omhoog" / terugverwijzing naar de service feed). |



**Elementen entry dataset feed**

Een dataset feed bevat tenminste een entry van een dataset om te downloaden. Elke entry in een dataset feed beschrijft per combinatie van een formaat en CRS een te downloaden bestand. Per entry gelden de volgende regels.

| Element | Type | Belangrijkste extra attributen / elementen | Verplicht? | Omschrijving |
| ------- | ---- | ------------------------------------------ | ---------- | ------------ |
| link | Dataset | Soort link (rel="alternate"), Formaat / type (type), Groote in octetten  / bytes (length), Taal van het bestand  waarnaar verwezen is (hreflang), indien het een van de alternatieve talen betreft | Ja | Link naar de dataset of delen daarvan, bijvoorbeeld naar een GML document. Het type geeft het formaat aan, bijvoorbeeld "application/gml+xml;version=3.2" voor een ongecomprimeerd GML bestand. De dataset kan ook gecomprimeerd aangeboden worden of in een ander formaat. Dit is bijvoorbeeld bij rasterdata van Elevation te verwachten. **Voor datasets die in meerdere CRSen beschikbaar zijn, volgt nog een voorgestelde oplossing.** |
| georss | | | Nee | Het gebied waar de dataset betrekking op heeft, uitgedrukt met bijvoorbeeld een boundingbox. De geometrie wordt opgegeven conform GeoRSS(-Simple). De coordinaten staan in latitude/longitude conform WGS84. |
| category | CRSen | Well-known definitie van het CRS (attribuut term) en eventueel het label voor de leesbare toelichting. | Ja | CRSen waarin de dataset feed de data aanbiedt. |



## WFS

Een dataset kan ook via Web Feature Services (WFS) in zijn geheel gedownload worden. De gebruiker (client) kan via het WFS-protocol gegevens downloaden, maar kan nog niet uitgebreid filters / eigen selecties toepassen. Voor deze methode hoeft een Web Feature Service (WFS) maar een beperkt deel van de volledige WFS-standaard te ondersteunen. Deze vorm is een opstap naar een volledige *direct access* implementatie met Web Feature Services (WFS).

Kenmerken zijn:
- Een Web Feature Service (WFS) op basis van ISO 19142 Geographic Information – Web Feature Service, ook wel WFS 2.0.
- Downloaden van gehele dataset of voorgedefinieerd deel ervan.
- Beperkte query-mogelijkheid.
- *Requests* via HTTP GET.


![wfs](media/Wfs.png "Interactie tussen een client en een basic WFS.")

De OGC standaard voor <a href="https://www.ogc.org/standards/wfs" target="_blank">Web Feature Service 2.0 (WFS 2.0)</a> is in samenwerking met ISO opgesteld. Bij ISO heet deze standaard formeel ISO 19142. WFS 2.0 specificeert een webservice-interface om geografische gegevens te bevragen. Een WFS geeft standaard GML terug (3.2 voor WFS 2.0). 

Voor het bevragen maakt WFS gebruik van filters. Voorbeelden van filters zijn: gegevens selecteren op basis van een bepaald gebied en/of bepaalde attribuutwaarden. Deze filters dienen conform de <a href="https://www.ogc.org/standards/filter" target="_blank">Filter Encoding 2.0 (FE 2.0)</a> gecodeerd te zijn. Deze standaard is ook in samenwerking met ISO opgesteld en heet daar ISO 19143.


**Conformance classes**

Om aan te geven welke delen van de WFS 2.0 en FE 2.0 standaard ondersteund zijn in een implementatie, zijn in de standaarden zogenaamde conformance classes gedefinieerd. Een conformance class groepeert een deel van de eisen uit de standaard. Als een implementatie claimt aan een bepaalde conformance class te voldoen, dan is voor een gebruiker duidelijk welke functionaliteit ondersteund wordt.

Voorbeelden van conformance classes uit WFS 2.0 en FE 2.0 zijn:
- HTTP GET: een WFS voldoet hiermee aan alle eisen die met HTTP GET te maken hebben, zoals de encoding van requests.
- HTTP POST: een WFS voldoet hiermee aan alle eisen die met HTTP POST te maken hebben, zoals de encoding van requests in XML.
- Minimum Spatial Filter: een WFS ondersteunt een set filters om ruimtelijke queries op te kunnen lossen.
- Basic WFS: een WFS ondersteunt de basis functies van de WFS standaard. De WFS ondersteunt onder andere de requests GetCapabilities, DescribeFeatureType en GetFeature en enkele ruimtelijke filters.
- Transactional WFS: een WFS biedt de functies die vereist zijn voor het bewerken van gegevens via WFS.

Meestal zullen implementaties meerdere conformance classes ondersteunen.


### Vereisten WFS

Het aanbieden van Pre-defined datasets via een Web Feature Service (WFS) is een methode om aan de eisen uit de Implementing Rule te kunnen voldoen. Een dergelijke WFS is in staat om van datasets een applicatie schema te geven en via GetFeature in zijn geheel op te halen of individuele objecten via hun identifier.

De [Technical Guidance](#technische-inspire-richtlijnen) bevat de eisen die INSPIRE stelt aan een dergelijke WFS:
- voldoen aan de conformance class Simple WFS uit WFS 2.0. Dit is o.a. inclusief de operaties GetCapabilities, DescribeFeatureType, ListStoredQueries, DescribeStoredQueries, GetFeature en de stored query GetFeatureById. De WFS geeft GML 3.2 terug.
- voldoen aan de conformance class HTTP GET uit WFS 2.0: de WFS dient in ieder geval de HTTP GET vormen van de requests te ondersteunen.
- voldoen aan de conformance class Query uit FE 2.0. De WFS is in staat een query uit te voeren (zoals de stored query GetFeatureById).
- ondersteuning van Stored Queries om de pre-defined datasets om alle mogelijke combinaties van het CRS, een dataset (via de dataset ID) en de taal terug te geven. De WFS moet hiervoor Stored Queries aanbieden.

De [Technical Guidance](#technische-inspire-richtlijnen) beschrijft in hoofdstuk 6 hoe een Download service voor Pre-defined datasets geïmplementeerd kan worden met een Web Feature Service (WFS) en Filter Encoding (FE).

Voor een WFS is daarnaast ook het <a href="https://www.geonovum.nl/geo-standaarden/services/nederlands-wfs-profiel-11-op-iso-19142-voor-web-feature-services-20" target="_blank">Nederlands profiel op ISO 19142 WFS 2.0, versie 1.1</a> van toepassing. Het Nederlands profiel is afgestemd op de INSPIRE-specificaties. Per eis staat in het Nederlands profiel aangegeven of die van INSPIRE komt of dat het een specifieke aanvulling voor Nederland is. Een voorbeeld van dat laatste is ondersteuning voor het Rijksdriehoekstelsel.

Het profiel bevat ook een aparte bijlage met de zaken die INSPIRE nog extra vereist ten opzichte van het Nederlands profiel.

**Capabilities**

Het GetCapabilities request voor WFS geeft een vergelijkbare Capabilities file als bij de WMS, op enkele specifieke WMS onderdelen na. Het wordt daarom in deze paragraaf niet zo uitgebreid beschreven als in dat van de WMS in paragraaf [INSPIRE scenario's voor metadata in Capabilities-document](#inspire-scenario-s-voor-metadata-in-capabilities-document).


**Stored queries**

In WFS 2.0 kan gebruik worden gemaakt van *stored queries*. Hiermee worden een soort query-templates aangeboden, waarmee een client niet een geheel filter hoeft op te stellen, maar alleen enkele van te voren opgegeven parameters hoeft te specificeren. WFS-requests worden hier eenvoudiger van. Een service kan hiermee een soort FAQs aanbieden van WFS-requests, die voor een client makkelijk te gebruiken zijn. Bijvoorbeeld requests om op basis van een typering (categorie) een dataset te bevragen.


### Meertaligheid

INSPIRE stelt via de Implementing Rules aan Netwerk Services, zoals View Services, Discovery Services en ook Download Services, eisen ten aanzien van ondersteuning van meerdere talen. WFS 2.0 biedt zelf geen mechanisme hiertoe. De [Technical Guidance van Download Services](#technische-inspire-richtlijnen) stelt daarom de volgende aanvullende eisen aan een WFS-2.0-implementatie om meertaligheid te ondersteunen:
1. Voor het GetCapabilities request via HTTP GET dient de WFS een extra parameter te ondersteunen waarmee de client de taal van de Capabilities kan opvragen. De naam van de parameter is LANGUAGE, de waardes komen uit de <a href="http://www.loc.gov/standards/iso639-2/" target="_blank">ISO 639-2/B Alpha 3 lijst</a>. Voorbeelden van waardes zijn: "dut" voor Nederlands, "eng" voor Engels.
2. de Capabilities elementen Title en Abstract dienen in de gevraagde taal teruggegeven worden of in de standaard taal als de gevraagde taal niet ondersteund wordt.
3. De Capabilities bevatten een lijst van ondersteunde talen in de Extended Capabilities. Dit mechanisme is hetzelfde als bij View Services.

Handig om te weten is dat een WFS, als die maar één taal ondersteunt, de parameter LANGUAGE kan negeren als een client die verstuurt. Dit is, omdat een WFS de standaard taal mag teruggeven als de gevraagde taal niet ondersteund wordt. Dit betekent als een WFS maar één taal ondersteunt dat altijd de Capabilities in die taal teruggegeven zullen worden.

De andere operaties hoeven geen extra zaken te ondersteunen voor meertaligheid, omdat:
1. DescribeFeatureType een technische beschrijving teruggeeft, een schema, waarop een natuurlijke taal niet van toepassing is.
2. De GetFeature operation data teruggeeft conform de INSPIRE-applicatieschema's mits het een geharmoniseerde dataset betreft. Deze schema's bevatten al een mechanisme om waardes in meerdere talen op te geven. De [Technical Guidance](#technische-inspire-richtlijnen) stelt daarom dat het niet van toepassing is om hier een aparte parameter voor op te geven.

Naast de eisen doet de [Technical Guidance](#technische-inspire-richtlijnen) de volgende aanbevelingen, voor het geval een service provider meerdere talen wil aanbieden:
1. Gebruik aparte URLs voor verschillende talen, dus bijvoorbeeld voor requests op Engelstalige data een andere URL dan voor requests op Nederlandstalige data. Dit houdt het overzichtelijk.
2. Geef foutmeldingen in de talen die de service aanbiedt.


### WFS direct access

Met de direct access download is het mogelijk om meer controle over de download te krijgen, dan bij de pre-defined download het geval is. Zo kunnen er downloads samengesteld worden op basis van een ruimtelijke query, of op basis van een query naar attribuutinformatie.

Kenmerken zijn:
- Een Web Feature Service (WFS) op basis van ISO 19142 Geographic Information – Web Feature Service, ook wel WFS 2.0.
- De functionaliteit van een Pre-defined dataset Download Service via WFS (zie hierboven), uitgebreid met ondersteuning voor:
	- "Ad Hoc Query" op basis van <a href="https://www.ogc.org/standards/filter" target="_blank">Filter Encoding 2.0 (FE 2.0; ISO 19143)</a>.
	- Standaard, ruimtelijke en temporele filters.
	- XPath (voor opvragen geneste attributen zoals adres.plaats.straat.nummer)
	- Enkele Stored Queries, bijvoorbeeld om datasets in een ander Coördinaat Referentie Stelsel (CRS) op te vragen.

Het aanbieden van direct access download service via een Web Feature Service (WFS) is een methode om aan de eisen uit de Implementing Rule te kunnen voldoen. Een dergelijke WFS stelt een gebruiker in staat om, in aanvulling op alles wat een Pre-defined datasets Download Service via WFS biedt, eigen selecties te maken van de data en dat direct te gebruiken (of downloaden). Bijvoorbeeld door selecties te maken met ruimtelijke, temporele en administratieve filters. 

De WFS direct access download service biedt de meeste funtionaliteit aan een gebruiker en maakt het mogelijk om alleen die data op te vragen (en versturen) die nodig is, in plaats van gehele datasets. Dit kan vooral bij grote datasets en/of dynamische datasets erg belangrijk zijn.

De [Technical Guidance](#technische-inspire-richtlijnen) bevat de eisen die INSPIRE stelt aan een dergelijke WFS:
1. Voldoen aan alle eisen die gelden voor een Pre-defined datasets Download Service via WFS.
2. Voldoen aan de conformance class Basic WFS uit WFS 2.0, zodat de WFS minimale filtering ondersteunt en de operatie GetPropertyValue.
3. Voldoen aan de conformance class Ad hoc Query uit FE 2.0, zodat de WFS door de client gemaakte filters kan verwerken.
4. Voldoen aan de conformance class Resource Identification uit FE 2.0, zodat de WFS met Resource Identifiers bevraagd kan worden. Het gebruik van Resource Identifiers ten opzichte van GetFeatureById is bijvoorbeeld handig bij gebruik van versie mechanismes van features, zodat alle versies van een resource opgevraagd kunnen worden.
5. Voldoen aan de conformance class Minimum Standard Filter uit FE 2.0. Dit is met de filter operatoren PropertyIsEqualTo, PropertyIsNotEqualTo, PropertyIsLessThan, PropertyIsGreaterThan, PropertyIsLessThanOrEqualTo, PropertyIsGreaterThanOrEqualTo en alle logische operatoren (And, Or, Not).
6. Voldoen aan de conformance class Minimum Spatial Filter uit FE 2.0. Dit betekent dat de filter operator BBOX ondersteund moet worden.
7. Voldoen aan de conformance class Minimum Temporal Filter uit FE 2.0. Dit betekent dat de filter operator During ondersteund moet worden. Hiermee kunnen objecten opgevraagd worden die wat betreft tijd (of tijdsperiode) vallen in een bepaalde periode.
8. Voldoen aan de conformance class Minimum XPath uit FE 2.0. Hiermee kunnen via XPath opgegeven waardes gebruikt worden in een filter. Er wordt een subset van XPath ondersteuning vereist. Deze is beschreven in paragraaf 7.4.4 van de <a href="https://www.ogc.org/standards/filter" target="_blank">Filter Encoding 2.0</a> standaard.



## WCS

De <a href="https://inspire.ec.europa.eu/id/document/tg/download-wcs" target="_blank">Technical Guidance WCS</a> beschrijft de implementatie van coverage data via Web Coverage Services (WCS). Deze Technical Guidance neemt als basis voor een download service de OGC WCS 2.0 specificatie. De INSPIRE-operaties worden gemapped op de WCS-operaties. Daarnaast worden aanvullende eisen gesteld, over onder andere:
- de te gebruiken (metadata)-elementen in het Capabilities-document;
- ondersteuning van de INSPIRE Extended Capabilities, o.a. voor talen in de Capabilities;
- hoe Direct Access in te vullen is via de processing extension van WCS;
- Quality of Service voor de verschillende operaties.

Voor het publiceren van raster data conform INSPIRE is de good practice <a href="https://inspire.ec.europa.eu/good-practice/ogc-compliant-inspire-coverage-data-and-service-implementation" target="_blank">OGC compliant INSPIRE Coverage data and service implementation</a> relevant. 


## SOS

De <a href="http://inspire.ec.europa.eu/id/document/tg/download-sos" target="_blank">Technical Guidance SOS</a> beschrijft de implementatie van sensor data via Sensor Observation Services (SOS). Deze Technical Guidance neemt als basis voor een download service de OGC specificaties voor Sensor Observation Service en de ISO 19143 Filter Encoding (FE 2.0). De INSPIRE operaties worden gemapped op de SOS operaties en de Filter encoding classes. Daarnaast worden aanvullende eisen gesteld, over onder andere:
- de te gebruiken (metadata) elementen in het Capabilities-document;
- ondersteuning van de INSPIRE Extended Capabilities, o.a. voor talen in de Capabilities;
- gebruik van de GetObservationByID operatie om Direct Access in te vullen;
- Quality of Service voor de verschillende operaties.

 Naast de implementatie van sensor data via SOS service kan sensor data ook via een [OGC SensorThings API](#ogc-sensorthings-api) worden ontsloten.

## OGC API's

De <a href="https://ogcapi.ogc.org/" target="_blank">OGC API's</a> vormen een familie van standaarden die ontwikkeld is/wordt om het voor iedereen gemakkelijk te maken om geospatial gegevens aan het web te verstrekken. Deze standaarden bouwen voort op de erfenis van de OGC Web Service standaarden (zoals WMS, WFS, WCS), maar definiëren API's die profiteren van moderne webontwikkelingspraktijken. 

### OGC API Features

<a href="https://docs.opengeospatial.org/is/17-069r3/17-069r3.html" target="_blank">*OGC API features*</a> (OAPIF of OAF) is een vorm van een download service op basis van een *Application Program Interface (API)*; gebaseerd op de OGC standaarden. Het wordt beschouwd als opvolger van de OGC WFS standaard. Dit betekent niet dat het de WFS standaard in de nabije toekomst volledig gaat vervangen; ook al zou dat in de verre toekomst wel het geval kunnen zijn. Voorlopig zijn ze nog complementair aan elkaar. De WFS zal vooral in de GIS wereld worden gebruikt terwijl de OAPIF meer bedoeld is voor andere gebruikers, zoals webapplicatie ontwikkelaars.

Voor het publiceren van OGC API features (OAPIF of OAF) is de good practice <a href="https://inspire.ec.europa.eu/good-practice/ogc-api-%E2%80%93-features-inspire-download-service" target="_blank">OGC API – Features as an INSPIRE download service</a> relevant.  

De OGC API features (OAPIF of OAF) is eenvoudiger in het gebruik en vergt minder geo-kennis, maar is bijvoorbeeld op twee punten na nog niet echt geschikt voor INSPIRE:
1. Het werkt nu alleen nog op basis van simpele datamodellen en uitwisselformaten en is dus moeilijk te implementeren voor complexe INSPIRE datamodellen waarbij het complexere GML nog de default is. Mapping naar eenvoudigere modellen en uitwisselformaten is mogelijk, maar moet dan voor INSPIRE wel goed beschreven en gepubliceerd worden om aan de INSPIRE vereisten te voldoen.
2. Nog niet alle tooling is in staat om met andere coördinaatsystemen te werken dan WGS84. INSPIRE vereist ETRS89. De uitbreiding op de OGC API features standaard, die dit mogelijk maakt <a href="https://docs.opengeospatial.org/is/18-058/18-058.html" target="_blank">OGC API - Features - Part 2: Coordinate Reference Systems by Reference</a> is er al wel.

In het <a href="https://github.com/Geonovum/testbed-spatial-APIs" target="_blank">Geonovum Testbed Spatial data API's</a> is ervaring opgedaan met de verschillende aspecten van implementatie en gebruik van OGC API's. Daarnaast is in de <a href="https://geonovum.github.io/OAPIF-PDOK-INSPIRE/" target="_blank">Handreiking OGC API Features conform INSPIRE</a> de eerste bevindingen voor het maken van een OAPIF conform INSPIRE beschreven. 


### OGC SensorThings API

De standaard voor <a href="https://docs.ogc.org/is/18-088/18-088.html" target="_blank">OGC SensorThings API</a> (STA) biedt een open, geospatiale en uniforme manier om de Internet of Things (IoT)-apparaten, gegevens en applicaties via het web met elkaar te verbinden. Op een hoog niveau biedt de OGC SensorThings API twee hoofdfunctionaliteiten en elke functie wordt afgehandeld door een onderdeel. De twee delen zijn het Sensing-gedeelte en het Tasking-gedeelte. Het Sensing-gedeelte biedt een standaard manier om observaties en metadata van heterogene IoT-sensorsystemen te beheren en op te halen. Het Tasking-gedeelte is gepland als een toekomstige werkactiviteit en zal in een apart document worden gedefinieerd als <a href="https://docs.opengeospatial.org/is/17-079r1/17-079r1.html" target="_blank">Part II van de SensorThings API</a>.

Voor het publiceren van sensor data conform INSPIRE is de good practice <a href="https://inspire.ec.europa.eu/good-practice/ogc-sensorthings-api-inspire-download-service" target="_blank">OGC SensorThings API as an INSPIRE download service</a> relevant. 


### Andere OGC API's

De hierboven genoemde OGC API's zijn van belang als service voor INSPIRE en ook al vastgesteld. Andere OGC-API's, die nog niet vastgesteld zijn, maar die van belang kunnen worden voor INSPIRE zijn:
- <a href="https://ogcapi.ogc.org/maps/" target="_blank">OGC API Maps</a> (opvolger WMS)
- <a href="https://ogcapi.ogc.org/tiles/" target="_blank">OGC API Tiles</a> (opvolger WMTS)
- <a href="https://ogcapi.ogc.org/styles/" target="_blank">OGC API Styles</a> (opvolger SLD)
- <a href="https://ogcapi.ogc.org/coverages/" target="_blank">OGC API Coverages</a> (opvolger WCS)
- <a href="https://ogcapi.ogc.org/records/" target="_blank">OGC API Records</a> (opvolger CSW) 


## Spatial Data Services (SDS)
Spatial data services (SDS) zijn INSPIRE-services, waarmee operaties kunnen worden uitgevoerd op ruimtelijke data van ten minste één van de INSPIRE-thema's. De INSPIRE network services waarvan de view en download services het meest toegepast zijn, zijn ook Spatial Data Services, waarvoor verdere specificaties van de service zijn opgesteld.

Voor de Spatial Data Services (SDS), die wel INSPIRE data ontsluiten, maar geen view of download service zijn, gelden ook INSPIRE vereisten. Deze vereisten zijn beperkt voor de categorie invocable SDS en zijn uitgebreider voor de categorie harmonised SDS. De eisen zijn voornamelijk op het gebied van metadata, zie [Spatial Data Service (SDS) metadata](#spatial-data-services-sds-metadata). Alleen voor de categorie harmonised SDS, worden er ook aan de [service implementatie eisen](#vereisten-sds) gesteld. 

De SDS zijn middels een amendement opgenomen in <a href="https://inspire.ec.europa.eu/Legislation/Spatial-Data-Services/580" target="_blank">Implementing Rules for Spatial Data  Services</a>. In de <a href="https://inspire.ec.europa.eu/Technical-Guidelines2/Spatial-Data-Services/580" target="_blank">Technical Guidance for INSPIRE Spatial Data Services and services allowing spatial data services to be invoked</a> zijn de vereisten voor implementatie opgenomen.


**SDS-categorieën**

SDS die geen network service zijn en wel onder de <a href="https://inspire.ec.europa.eu/documents/commission-regulation-eu-no-13122014-10-december-2014-amending-regulation-eu-no-10892010-0" target="_blank">Commission Regulation (EU) No 1312/2014 of 10 December 2014 amending Regulation (EU) No 1089/2010 implementing Directive 2007/2/EC of the European Parliament and of the Council as regards interoperability of spatial data services</a> vallen, zijn afhankelijk van het niveau van interoperabiliteit, verder onder te verdelen in drie categorieën: 
- Invocable SDS; 
- Interoperable SDS; 
- Harmonised SDS. 

Met behulp van onderstaand stroomschema kan worden bepaald wat voor SDS-categorie een service is:

![sds_schema](media/SDS_schema.png "Stroomdiagram om service-type te bepalen.")


SDS die geen network service zijn, kunnen heel verschillende services zijn, waardoor er geen specificaties in technische richtlijnen voor mogelijk is. Om te bepalen in wat voor categorie een SDS valt, kan onderstaand stroomschema worden gebruikt:

![sds_cat](media/SDS_cat.png "Stroomdiagram om SDS-categorie te bepalen.")


### Vereisten SDS
De eisen voor invocable, interoperable en harmonised SDS zijn voornamelijk op het gebied van metadata, zie hiervoor [Spatial Data Service (SDS) metadata](#spatial-data-services-sds-metadata). 

Alleen voor de harmonised SDS, worden er ook aan de service implementatie eisen gesteld:
- **kwaliteit**: "A harmonised spatial data service shall be available 98 % of the time."
- **operaties**: "A harmonised spatial data service shall include a Get Harmonised Spatial Data Service Metadata operation, similar to the Get Discovery/View/Download/Transformation Service Metadata Operations."
- **output encoding**: "If a request to the spatial data service returns spatial objects in the scope of the INSPIRE directory, the returned data shall meet the requirements for encoding specified for these spatial objects in Art. 7 and the relevant annexes of IR-ISDSS." The INSPIRE dataspecifications Technical Guidelines contain default encoding rules for all spatial data themes meet the requirements of IR-ISDSS.


## Wijzigingen doorvoeren

Wanneer je een wijziging doorvoert in je dataset of service, kan dit gevolgen hebben voor bijvoorbeeld de metadata, atomfeeds en conformiteit van je data en services. In het document <a href="https://www.geonovum.nl/uploads/documents/inspire-en-wat-te-doen-bij-wijzigingen.pdf" target="_blank">wijzigingen en INSPIRE</a> vindt je een praktische handreiking van de punten die je kunt controleren na een wijziging van je INSPIRE-datasets en -services.

## Service validatie
Validatie is een mechanisme om te controleren of een service aan de INSPIRE specificaties voldoet. Het is een onmisbaar hulpmiddel om tot een correcte implementatie te komen. Er zijn verschillende validatietools beschikbaar om INSPIRE services te valideren. In het hoofdstuk [validatie](#validatie) is dit beschreven.
