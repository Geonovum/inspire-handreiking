# Services

Introductie services

## Network services
INSPIRE wordt gebaseerd op een geo-informatie infrastructuur (GII; in het Engels SDI: *spatial data infrastructure*) die deels door de individuele lidstaten gebouwd en beheerd worden, en deels door de dataproviders gebouwd moet worden. De figuur hieronder geeft de services-archtectuur schematisch weer. Transformatie, Invoke, Register en Externe Diensten worden vooralsnog buiten beschouwing gelaten. Spatial Data Services worden [elders beschreven](#spatial-data-services).

![inspire_sdi](media/Inspire_sdi.png "NGII-architectuur")

Het bovenstaande figuur valt uiteen in een aantal services:

**Discovery services / Zoekdienst**
- De discovery service is bedoeld om het zoeken, beoordelen (evalueren) en vinden van ruimtelijke data die via het netwerk van webservices worden aangeboden te ondersteunen.
- Het zoeken van data vindt plaats op basis van metadata van INSPIRE-data en metadata van INSPIRE-services.
- Ook het beschikbaar maken van ruimtelijke data en het linken van de data & diensten.
- Voor INSPIRE wordt dit op lidstaat-niveau uitgevoerd; voor Nederland is dit het [Nationaal Georegister](https://www.nationaalgeoregister.nl/).

**View services / Raadpleegdienst**
- Weergeven van ruimtelijke data met pan-, overlay- en zoomfunctionaliteit.
- Regels over weergave en presentatie worden in de dataspecificaties meegeleverd om over alle lidstaten heen dezelfde presentatie te kunnen houden. Deze regels zijn hiervoor juist basaal gehouden.
- Legenda en relevante metadata moet zichtbaar zijn.
- Uitvoer op niveau van dataprovider.

**Download services**
- Downloaden van een compleet INSPIRE-thema, of deel ervan.
- Let op: de oorspronkelijke nationale dataset verschilt van de geharmoniseerde INSPIRE-conforme variant.
- Uitvoer op niveau van dataprovider.

**Transformation services / Verwerkingsdienst**
- Ondersteunende service die de andere services helpt met het bereiken van de beoogde consistentie en conformiteit van INSPIRE.
- Valt uiteen in (a) schema translatie (b) coördinaten translatie
- Kan zowel op niveau data provider (schema transformatie dienst) als op lidstaten niveau (coordinate transformation dienst) een rol spelen
- Alleen van coordinate translation is een IR en Technical Guidance document beschikbaar.

**Invoke services / aanroep diensten**
- Ook wel *orchestration* genoemd.
- Het kunnen aanroepen van andere webservices, waarbij volgordelijkheid van belang is.
- Nog geen IR- of Technical-Guidance-document.

**Registerdiensten**
- Worden (nog) niet formeel door INSPIRE beschreven.
- Vormen een beheerde repository voor toegansrechten en huidige en oude applicatie-schema’s en registers voor codelijsten, namespaces etc.
- [INSPIRE Registry](https://inspire.ec.europa.eu/registry/) (EU) biedt nu alleen een Glossary en Feature Catalogue aan, wordt uitgebreid.
- Nog geen IR- of Technical-Guidance-document (mei/juni 2010).

**Externe (register-)diensten**
- Worden nog niet door INSPIRE beschreven.
- Nog geen IR- of Technical-Guidance-document.

### Overige architectuuronderdelen
Buiten de services, zijn er ook een aantal andere delen in de architectuur te onderscheiden.
- **INSPIRE NGII-servicebus**: de ‘bemiddelings’-laag. Doordat de INSPIRE-standaarden voor services de interoperabiliteit waarborgen kunnen in de servicebus aanvrager en aanbieder (van webservices) in deze interface communiceren. Het is in feite de koppeling tussen aanbieder en aanvrager, waarbij de aanvrager met de servicebus communiceert.
- **Toepassingen en portalen**: de architectuur-laag waarin viewers, catalogus, geoportals en andere applicaties (bv. applicaties van de dataprovider zelf) vorm in kunnen krijgen. Deze verbinden op hun beurt weer naar de servicebus: de viewer met de raadpleegdienst, de ‘voorkant’ van het NGR (discovery) weer met de zoekdienst.
- **Rights-Managementlayer**: Tussen servicebus en netwerkdiensten loopt een laag die middels toegangsrechten dirigeert of een gebruiker op bepaalde diensten rechten heeft, zie [deze paragraaf](#rights-management-layer).

### Wetgeving
Op de website van INSPIRE is de wetgeving met betrekking tot network services te vinden.

|Type wetgeving | Site | Titel |
|-----------------|-------------|-------------|
| Regulation | [eur-lex](https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A32008R1205) | [Regulation on INSPIRE Network Services](https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=OJ%3AL%3A2009%3A274%3ATOC) |
| Amendement voor download services en transformation services | [comitology](https://ec.europa.eu/transparency/comitology-register/screen/home) | [COMMISSION REGULATION (EU) No 1088/2010 of 23 November 2010 amending Regulation (EC) No 976/2009 as regards download services and transformation services](https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A02009R0976-20101228) |

### Technische richtlijnen
In de Technical Guidances (of Guidance Documents) zijn de technische specificaties opgesteld voor network services, als uitwerking van de wettelijke eisen. De Technical Guidances definiëren hiermee waar een network service aan zal moeten voldoen. De huidig geldende versies van de guidance documents van de network services zijn te vinden op de [website van INSPIRE](https://inspire.ec.europa.eu/Technical-Guidelines2/Network-Services/41). De tabel hieronder biedt directe links naar de documenten.

| Titel | Versie | Datum | Opmerking |
|-----------------|-------------|-------------|-------------|
| [Technical Guidance for the implementation of INSPIRE Download Services (3.1) - WFS en ATOM](https://inspire.ec.europa.eu/documents/Network_Services/Technical_Guidance_Download_Services_v3.1.pdf) | 3.1 | 09-08-2013 |
| [Technical Guidance for the implementation of INSPIRE Download Services - Web Coverage Service](https://inspire.ec.europa.eu/file/1635/download?token=7m3PXp4a) | 1.0 | 16-12-2016 | 
| [Technical Guidance for the implementation of INSPIRE Download Services - Sensor Observation Service](https://inspire.ec.europa.eu/file/1639/download?token=To5FISaB) | 1.0 | 16-12-2016 |
| [Technical Guidance for the implementation of INSPIRE View Services (3.11)](http://inspire.jrc.ec.europa.eu/documents/Network_Services/TechnicalGuidance_ViewServices_v3.11.pdf) | 3.11 | 04-04-2013 |
| [Technical Guidance for the implementation of INSPIRE Discovery Services (3.1)](http://inspire.jrc.ec.europa.eu/documents/Network_Services/TechnicalGuidance_DiscoveryServices_v3.1.pdf) | 3.1 | 07-11-2011 |
| [Technical Guidance for the INSPIRE Schema Transformation Network Service](http://inspire.jrc.ec.europa.eu/documents/Network_Services/JRC_INSPIRE-TransformService_TG_v3-0.pdf) | 3.0 | 15-12-2010 | Niet op wiki uitgewerkt |

Voor spatial data services, zie [verderop in dit document](#spatial-data-services).

Er is geen definitieve beslissing i.v.m. de **Rights Management layer** die binnen INSPIRE gebruikt zal gaan worden voor het toepassen van toegangsrestricties. Er is dus nog geen Implementing Rule die deze layer beschrijft – die wordt ook niet verwacht.

### Nederlandse profielen voor WMS en WFS
Buiten de INSPIRE Implementing Rules en Guidances zijn er ook Nederlandse profielen van toepassing op de Network Services. De volgende tabel geeft een overzicht van deze profielen, hun versie en status.


| Profielen | Versie | Datum |
|-----------------|-------------|-------------|
| [Nederlands profiel Web Map Service op ISO 19128 versie 1.1](https://www.geonovum.nl/geo-standaarden/services/nederlands-profiel-wms-op-iso-19128-versie-11) | 1.1 | 1-5-2015| 
| [Nederlands WFS profiel 1.1 op ISO 19142 voor Web Feature Services 2.0](https://www.geonovum.nl/geo-standaarden/services/nederlands-wfs-profiel-11-op-iso-19142-voor-web-feature-services-20) | 1.1 | 1-5-2015 |
| *Informatieve documenten* | | |
| [Raamwerk GeoStandaarden](https://www.geonovum.nl/uploads/documents/Raamwerk%20Geo-Standaarden%20v3.0.pdf) | 3.0 | 31-03-2015 |

### Verschillende soorten implementatie
INSPIRE kent per type network service één of meerdere opties om die network service te implementeren. Een viewservice kan bijvoorbeeld met WMS of met WMTS geïmplmenteerd worden. Een downloadservice kan, afhankelijk van het type gegevens of de voorkeuren van een dataprovider, worden aangeboden via WFS, ATOM, WCS of SOS. Een dataprovider kan dus zelf het type service bepalen.

In de tabel hieronder wordt een overzicht gegeven van de INSPIRE-services en de verschillende (OGC)-protocollen die hiermee samenhangen. Ook de Nederlandse profielen voor webservices zijn opgenomen.

| Servicetype | Interface-protocollen | Kort | Nederlands profiel |
|-----------------|-------------|-------------|-------------|
| **View** | ISO 19128: OGC WebMap Service 1.3.0 of OGC Web Map Tile Service 1.0.0 | WMS 1.3 of WMTS 1.0.0 | [Nederlands profiel op ISO 19128 WMS 1.3, versie 1.0](https://www.geonovum.nl/geo-standaarden/services/nederlands-profiel-wms-op-iso-19128-versie-11) |
| **Discovery** | OGC Catalogue Service for the web2.0.2 AP ISO 1.0 | OGC CSW ISO AP | |
| **Downloaddiensten** | | | |
| *- Pre-defined* | ATOM feeds of OGC Web Feature Service 2.0 met beperkte filter mogelijkheden of WCS Coverage Service (raster) of Sensor Observation Services | WFS 2.0; OGC of OGC WCS of SOS | |
| *- Direct Access* | OGC Web Feature Service 2.0 met meer filter mogelijkheden, Filter Encoding of WCS Coverage Service (raster) met processing of Sensor Observation Services met meer filter mogelijkheden | WFS 2.0; OGC FE of OGC WCS of SOS | [Nederlands profiel op ISO 19142 WFS 2.0, versie 1.0](https://www.geonovum.nl/geo-standaarden/services/nederlands-wfs-profiel-11-op-iso-19142-voor-web-feature-services-20) | 
| **Transformatiedienst** | | | |
| *- schema* | Niet beschikbaar | | |
| *- coöordinaat* | OGC Web Coordinate Transformation Service, OGC Web Processing Service | WCTS; OGC WPS| |

**Opmerkingen bij tabel**:
- Met de ‘Pre-defined downloaddienst’ wordt de dienst gebruikt waarmee een INSPIRE-dataset in zijn geheeld gedownload kan worden. Deze zullen dan zeer waarschijnlijk gecomprimeerd aangeboden worden.
- Met de ‘Direct access downloaddienst’ wordt toegang tot individuele features en de filter/selectiemogelijkheid op features aangeboden.

### Quality of services
INSPIRE definieert *Quality of services* (QoS), de eisen omtrent het kwaliteitsbeheer van netwerk services. Een aantal QoS-criteria verschillen per service; voor het overzicht zie tabel hieronder. Er zijn een aantal parameters van invloed op de door INSPIRE gedefinieerde QoS:
- *performance*: de performance van een INSPIRE-conforme netwerkdienst geeft de tijd weer die de netwerkdienst nodig heeft om aan een verzoek (request) een antwoord (response) te geven. Een verzoek is gelijk aan een functie of operatie. Als tijd wordt de tijd gezien die de netwerkdienst (serverside) nodig heeft om de eerste byte van het antwoord terug te geven.
- *capacity*: de capaciteit van een netwerkdienst geeft de omvang van het maximum aantal simultane serviceverzoeken aan, dat met prestatiewaarborg (bijv. 10 parallelle verzoeken per seconde) wordt uitgevoerd.
- *beschikbaarheid*: de beschikbaarheid is de kans dat de netwerkdienst beschikbaar is en op verzoeken een response geeft. Deze eis ligt voor alle services op 99% op jaarbasis (gedurende 24/7); dit komt overeen met 3.7 dagen ‘offline’ per jaar.
- *betrouwbaarheid*: beschrijft de vaardigheden van de netwerkdienst om conform de afspraken (functies, eisen en tijd) de netwerkdienst te leveren. INSPIRE heeft i.r.t. betrouwbaarheid geen specifieke eis gedefinieerd.
- *security en compliance* : deze twee eisen hebben een algemener toepassingsgebied en worden door INSPIRE niet specifiek gedefinieerd (zijn kwalitatief van aard). Ze zijn formeel wel van toepassing op de network services, maar niet op zozeer op de hardware-matige en infrastructurele aspecten zoals de criteria die boven gespecificeerd zijn.

| Criteria | Discovery | View | Download | Transformation |
|-----------------|-------------|-------------|-------------|-------------|
| Performance | 3 sec | 5 sec | Zie a, b, c | Zie TG's |
| Capacity | 30 / sec | 20  / sec | 10 / sec | 10 / sec |
| Availability | 99% | 99% | 99% | 99% |
| Reliability | - | - | - | - |
| Security | - | - | - | - |
| Compliance | - | - | - | - |

*Opmerkingen bij performance van de View service:*
- Deze tijd geldt voor een 8-bits image van 470 Kb (800\*600 px).
- Het maximum aantal layers die per GetMap request opgehaald kan worden, is hier maximaal 1.

*Opmerkingen bij performance van de Discovery Service:*
 - De tijd is inclusief het versturen van errors of exceptions. Binnen de drie seconden dient er ook één metadata record verstuurd te worden.

*Opmerkingen bij performance van de Download Service:*
- Get Download Service Metadata: max. 10 seconden.
- Get Spatial Objects: 30 seconden voor de eerste response, daarna een ‘sustained response’ van > 0.5 MB/s.
- Describe Spatial Object Types: 10 seconds initial reponse, daarna een ‘sustained response’ van > 0.5 MB/s.
- Define Query: geen performance criteria gegeven.

*Opmerkingen bij Transformational Service:*
- Voor performance wordt naar de Technical Guidances verwezen. Op moment van schrijven (juni 2010) is alleen de TG van Coordinate Transformations beschikbaar (in versie 2.1).
- Voor capacity worden verschillende criteria gegeven. In de Guidance staat 5 requests per seconde, in de Implementing Rule wordt 10 requests per seconde gegeven. IR is normatief, dus wordt het 10/s .

#### Documentatie QoS

| Titel | Versie | Datum |
|-----------------|-------------|-------------|
| [Regulation on INSPIRE Network Services](https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=OJ%3AL%3A2009%3A274%3ATOC) | adopted | 19-10-2009 |
| [Network Services Architecture (Version 3.0)](https://inspire.ec.europa.eu/reports/ImplementingRules/network/D3_5_INSPIRE_NS_Architecture_v3-0.pdf) | 3.0 | 30-09-2008 |
| [Implementing Rules en Technical Guidances van de network services](#wetgeving) | | verschillende |

### Rights management layer
De richtlijn schrijft voor dat de i.h.k.v. INSPIRE aangeboden diensten in principe gratis moeten zijn. Echter geeft de richtlijn ook aan dat er (publieke) instellingen zijn die – vanwege de hoge datavolumes en update-frequenties – kosten in rekening mogen brengen om de service te kunnen waarborgen. Dat houdt in dat er een mogelijkheid moet zijn om de toegang tot services en data te beperken – de Rights Management (RM)-layer.

De RM architectuur-laag wordt in [deze afbeelding](#network-services) weergegeven met de term ‘toegangsrechten’ en wordt tussen de servicebus en de netwerkdiensten gepositioneerd. De RM-layer is geïntroduceerd om juridische rechten tussen INSPIRE en andere applicaties te kunnen ‘begeleiden’ en controleren en beperken. In feite houdt dit in dat er mogelijke restricties komen tussen enerzijds de dataprovider met haar data en services, en anderzijds de gebruiker.

Er is geen Implementing Rule voor deze RM-layer dienst beschikbaar en deze wordt ook niet verwacht. Algemene houding ten opzichte van RM is dat het op dit moment, juni 2010, (te) vroeg is om hier definitieve beslissingen over te maken. Er wordt in de INSPIRE-documentatie verwezen naar GeoDRM (ISO 19153) als een kandidaat-standaard voor de RM-layer. ISO 19153 is een *working draft* die naar verwachting in 2011 gepubliceerd zal worden.

#### Typen restricties
- Private Access Terms: INSPIRE-service is toegankelijk maar de ruimtelijke data kan niet ge-redistribueerd worden.
- Public Access Terms: INSPIRE-service is toegankelijk, en de ruimtelijke data mag voor niet-commerciele doeleinden ge-redistribueerd worden.
- Commercial Access Terms: INSPIRE-service is toegankelijk onder commerciele voorwaarden; eCommerce.
- Emergency Access Terms: INSPIRE-service is in noodgevallen toegankelijk; alleen het gebruik wordt gelogd.

#### RM-implementatie
Bij het implementeren van het Rights Management is het van belang dat er door de dataproviders rekening wordt gehouden met de metadata. Verschillende niveaus zijn van belang:
- Provider moet per layer van een view-service het Rights Management vaststellen.
- Metadata voor services moet altijd toegankelijk zijn; ook voor services met beperkte toegang. Op deze manier blijft de service wel vindbaar in het GeoPortaal NGR.
- De metadata moet de toegangsbeperkingen en – in het geval van eCommerce – het honorarium bevatten.
- De implementatie van het authenticeren varieert van (a) elke dataprovider gebruikt haar eigen mechanisme tot (b) alle INSPIRE-services gebruiken hetzelfde identificatie-mechanisme. In het laatste geval is er maar één login-credential nodig.

#### Agree operation
Met betrekking tot OGC-webservices zijn een aanatal specifieke operaties van toepassing. Er wordt meestal gesproken van het zogenaamde *publish-find-bind*-patroon. Dat is in verband met de RM-layer voor INSPIRE onvoldoende. Het publish-find-bind patroon wordt hierop aangevuld met een *agree*-stap. Onder worden alle stappen kort omschreven:
- **Publish**: waarbij een dataprovider ruimtelijke data of een service ‘publiceert’ en zo via een register toegankelijk maakt voor een gebruiker.
- **Find**: waarbij een gebruiker services zoekt / ontdekt; vaak via een portaal die het register van metadata doorzoekt. De NGR-catalogus is hier de voor de gebruiker relevante ‘voorkant’ van. De discovery service is de dienst die aan de achterkant het werk doet en met de resultaten komt.
- **Agree**: In onderstaand figuur is te zien dat het normale publish-find-bind patroon vervangen wordt door een patroon met een extra stap. Vanwege het Right Management is het noodzakelijk om vόόr het binden een ‘Agree’-stap te hebben op basis waarvan al dan niet de toegang verschaft wordt.
	- De *provider* publiceert bepaalde data met behulp van een webserice. De RM-layer is ook bij de provider geïmplementeerd.
	- De *user* zoekt via een catalogue-service (hier niet afgebeeld) en vindt een of meerdere services. Wanneer de user naar deze service gaat, zorgt de RM-layer voor de verschaffing van toegang tot de service, waarna pas de *bind* plaatsvindt en de gevonden data bekeken kan worden. Wanneer de toegang niet verschaft wordt (bv, geen credits / niet geautoriseerd), stuurt de RM-layer de user weer terug naar de vorige stap.
- **Bind**: wanneer een service aangeroepen wordt, bindt de client van de consument zich aan de betreffende dienst. Hierop volgen weer een aantal verplichte operations.

![pfab](media/pfab.png "Publish, find, agree, bind.")

De agree-stap zal ook met specifieke RM-services afgehandeld worden, zodat toegang tussen consumer en provider algemeen en op iedereen toepasbaar is. De service-laag bestaat op haar beurt ook uit verschillende onderdelen, waaronder authenticatie en authorisatie, het afhandelen van de toegangsvoorwaarden (licensing), en wellicht eCommerce van/voor externe diensten. Het afhandelen van de toegang gebeurt op basis van een INSPIRE-specifieke tag, de rightsManagementKey.

#### RM en GeoGedeeld
GeoGedeeld beschrijft de voorwaarden voor het kunnen (her)gebruiken van datasets. De RM-layer controleert toegang tot netwerkdiensten. RM en GG liggen in elkaars verlengde en worden dus op verschillend niveau toegepast.

Het is denkbaar dat via een geoportaal (zoals het NGR) ruimtelijke data gevonden wordt die via een service wordt aangeboden waarvoor geen beperkingen gelden. Dat neemt niet weg dat de data die via netwerkdiensten bv. ter download aangeboden worden, zelf nog steeds gebonden kan zijn aan specifieke gebruikersvoorwaarden die middels GeoGedeeld gedefineerd zijn. Deze GeoGedeeld-keuzes zijn vervolgens in de metadata van de dataset terug te lezen.

Onderstaand figuur geeft de 'evolutie' van het Rights Management aan. Het 'copyright' (auteursrecht) is in de Geo-ICT werled minder goed toepasbaar; het wordt van oudsher voor analoge werken gebruikt. Het is opgevolgd door Creative Commons (en, in het verlengde hiervan: GeoGedeeld). Dit was een van de eerste licentievormen die (ook) voor digitale werken gebruikt kan worden (minder 'static' content). Het RM gaat nog een stap verder en voorziet in licentievormen en techniek om ook de toegang tot het werk dynamisch in te richten.

![RM-GG](media/Licence.png "Rights management.")

## View service
De viewservice (of raadpleegdienst) heeft als functie de gegevens die via de Discovery Service van het Nationaal GeoRegister gevonden worden, te kunnen bekijken en beoordelen. Hiertoe dient de dataprovider de INSPIRE-thema’s met een viewservice te ontsluiten. De viewservice heeft uitdrukkelijk niet de functie om ‘mooie kaartbeelden’ te maken. Het gaat om een rudimentaire inspectie en beoordeling van de INSPIRE-conforme datasets die via een de viewservice ontsloten worden. Dit omvat onder andere:
- het weergeven van ruimtelijke data met pan, overlay, zoom functionaliteit;
- de legenda en relevante metadata moet zichtbaar zijn;
- de INSPIRE-viewservice is gebaseerd op ISO 19128:2005 Geographic Information-Web Map Server (WMS) interface. Deze standaard is door het OGC ontwikkeld als de WMS 1.3.0 standaard, en vervolgens door het ISO geadopteerd en gespecificeerd als ISO 19128.

De onderstaande figuur geeft schematisch de operaties van de OGC WMS 1.3.0 weer.

![wms](media/Wms.png "Schematische weergave van INSPIRE-viewservice.")

In de onderstaande tabel is de mapping weergegeven van de verplichte INSPIRE-viewservice-operaties op de ISO 19128 operaties. De INSPIRE Link View Service operatie heeft geen equivalente operatie in de ISO 19128 standaard en wordt geïmplementeerd op basis van de Discover Metadata operatie van een INSPIRE-discovery-service. De ISO 19128 operatie GetFeatureInfo is niet verplicht voor een INSPIRE-viewservice.

| INSPIRE-viewservice-operatie | Verplicht | ISO 19128 WMS-operatie |
|-----------------|-------------|-------------|
| Get View Service Metadata | J | GetCapabilities |
| Get Map | J | GetMap |
| Link View Service | J | - |

### Vereisten viewservice
- Gebaseerd op de verplichte elementen van een ISO 19128 service aangevuld met extensies, die vereist zijn vanuit de INSPIRE-richtlijn en de Implementing Rule voor viewservices.
- Ondersteuning van de HTTP GET-interface is verplicht.
- De image/png of image/gif (zonder LZW-compressie) is verplicht als respons op een GetMap-request;
- Servicemetadata moet beschikbaar worden gesteld via een Discovery Service;
- De viewservice moet de volgende geografische coördinaat-referentiesystemen ondersteunen:
	- EPSG:4258 (ETRS89)
	- EPSG:4326
	- CRS:84
- Minimaal één taal moet worden ondersteund en kenbaar worden gemaakt in de respons op de GetViewServiceMetadata-operatie.

### INSPIRE-vereisten in een Capabilities-document
De Technical Guidance beschrijft hoe een lidstaat de Implementing Rules zou kunnen implementeren. Voor de viewservices beschrijft het document [Technical Guidance View Services](https://inspire.ec.europa.eu/documents/technical-guidance-implementation-inspire-view-services-1) de (niet bindende) technische eisen waaraan een service moet voldoen. De beschrijving van de Implementation Requirements en Implementation Recommendations is gebaseerd op de ISO 19128 (WMS 1.3.0) standaard.

De Technical Guidance beschrijft 2 scenario's om de verplichte INSPIRE-elementen op te nemen in een ISO 19128 (WMS 1.3.0) Capabilities document:
1. Verplichte WMS-elementen opnemen met een minimale uitbreiding voor INSPIRE-elementen als ExtendedCapabilities.
2. Verplichte WMS elementen opnemen aangevuld met alle INSPIRE verplichte elementen, deel via een mapping als ISO 19128 WMS-elementen en deels als ExtendedCapabilities-elementen.

#### Scenario 1: Extended capabilities
De volledige INSPIRE-metadata wordt opgenomen in een apart metadata-voor-services-document, dat beschikbaar wordt gesteld via een Discovery Service.

![scenario1](media/Scenario1.png "Schematische weergave van het eerste scenario.")

Het Capabilities-document bevat (naast de verplichte WMS-elementen) ook de volgende INSPIRE-elementen:
1. Een verwijzing (MetadataURL) naar een INSPIRE-metadata-voor-services document;
2. De ondersteunde defaulttaal (eventueel aangevuld met aanvullende ondersteunde talen);
3. De default responstaal.

| INSPIRE-metadata-elementen | Extended Capabilities |
|-----------------|-------------|
| MetadataURL | inspire_vs:MetadataURL |
| SupportedLanguages | inspire_vs:SupportedLanguages |
| ResponseLanguage | inspire_vs:ResponseLanguage |

**MetadataURL (M)**

Dit element wordt opgenomen als `inspire_vs:MetadataURL` element in de extendedCapabilities en bevat een verwijzing, het GetRecordById request met als argument het Id (element fileIdentifier van het metadata-voor-services document), naar het metadata-voor-services-document welke gepubliceerd is in een catalog service.

<pre class="xml">
&lt;inspire_common:MetadataUrl&gt;     
    &lt;inspire_common:URL&gt;"http://www.nationaalgeoregister.nl/geonetwork/srv/nl/csw?Service=CSW&Request=GetRecordById&Version=2.0.2&id=C2DFBDBC-5092-11E0-BA8E-B62DE0D72085&outputSchema=http://www.isotc211.org/2005/gmd&elementSetName=full"&lt;/inspire_common:URL&gt;
    &lt;inspire_common:MediaType&gt;application/vnd.iso.19139+xml&lt;/inspire_common:MediaType&gt;
&lt;/inspire_common:MetadataUrl&gt;
</pre>


**SupportedLanguages (M)**

Zie beschrijving onder scenario 2.

**ResponseLanguage (M)**

Zie beschrijving onder scenario 2.

#### Scenario 2: INSPIRE-elementen in het capabilities-document
Het Capabilities-document gaat hiermee fungeren als de bron om een metadata-voor-services-document te genereren. Het gegenereerde document wordt via een Discovery Service beschikbaar gesteld.

![scenario2](media/Scenario_2.png "Schematische weergave van het tweede scenario.")

- Waar een mapping naar WMS-elementen mogelijk is, worden INSPIRE-elementen gemapped naar de WMS-elementen.
- Waar geen mapping naar WMS-elementen mogelijk is, worden de INSPIRE-elementen opgenomen als ExtendedCapabilities in het Capabilities-document.

| INSPIRE-metadata-elementen | M/C | ISO 19128 WMS-elementen | Extended Capabilities |
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

**Resource Title (M)**

Dit element wordt opgenomen als `wms:Title` element en geeft een karakteristieke naam aan de Service.

**Resource Abstract (M)**

Dit element wordt opgenomen als `wms:Abstract` element en geeft een korte beschrijving van de inhoud van de Service.

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

Definieert een link naar de viewservice. Dit kan zijn:
- Een link naar het Capabilities document van de viewservice;
- Een link naar een WSDL document dat de viewservice beschrijft (SOAP Binding);
- Een link naar een web pagina met instructies om de service te benaderen;
- Een link naar een toepassing waarmee de viewservice direct kan worden benaderd.

Hieronder een voorbeeld van een link naar het Capabilities-document:
<pre class="xml">
&lt;inspire_common:ResourceLocator&gt;
    &lt;inspire_common:URL&gt;http://www.provinciaalgeoregister.nl/pgr-wms/services?request=GetCapabilities&service=WMS&version=1.3.0&lt;/inspire_common:URL&gt;
    &lt;inspire_common:MediaType&gt;application/vnd.ogc.wms_xml&lt;/inspire_common:MediaType&gt;
&lt;/inspire_common:ResourceLocator&gt;
</pre>

**Coupled Resource (C)**

Coupled Resource geeft informatie over de datasets waarop de viewservice werkt. Dit element wordt ingevuld als `wms:MetadataURL` (een link naar de metadata van de dataset waarop een Layer is gedefinieerd) voor iedere Layer in de viewservice. De MetadataURL kan op 2 manieren worden ingevuld:
1. De MetadataURL bevat een link naar een metadatadocument dat beschikbaar is in een Discovery Service, waarbij gebruik wordt gemaakt van de GetRecordByID operatie van de Discovery Service om het document op te halen op basis van het `<fileIdentifier>` element (gevuld met een [UUID](#uuid)) van dat document.
2. De MetadataURL bevat een directe link naar een ISO19115/19139 metadata document.

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
2. in de `inspire_vs:ExtendedCapabilities` met de elementen `inspire_common:Keyword` en `inspire_common:MandatoryKeyword`. Het verplichte keyword voor de classificatie van de service is er een uit de lijst die in Part D.4 uit INS MD te vinden is. Voor een viewservice is dat in ieder geval "infoMapAccessService".

*1. gebruik wms:keyword*
Als een Keyword afkomstig is uit een Thesaurus kan het attribuut "vocabulary" worden gebruikt om aan te geven uit welke thesaurus dat keyword afkomstig is.

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

Dit element kan niet worden beschreven in ISO19119. Daarom worden restricties voor Spatial Resolution, als deze er zijn, kwalitatief beschreven in `wms:Abstract`.

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

Voor het aangeven van beperkingen voor de toegang en gebruik wordt het element `wms:Fees` gebruikt. Dit is een vrijetekstveld. Als de service kosteloos is te gebruiken dan wordt hiervoor de tekst "Geen gebruiksbeperkingen" (no conditions apply) gebruikt. Als het onbekend is of er kosten zijn verbonden aan het gebruik van de service dan wordt de waarde "Onbekend" (conditions unknown) gebruikt.

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

Voor Responsible Organisation, de organisatie die verantwoordelijk is voor de viewservoce, wordt het element `wms:ContactInformation` gebruikt en daarbinnen het element `wms:ContactPersonPrimary`, waarbij een `wms:ContactPerson` en een `wms:ContactOrganization` worden ingevuld. De rol van de Responsible Organization wordt aangeven in het element `wms:ContactPosition` waarbij een code uit de codelijst CI_RoleCode wordt gebruikt. Voor het element `wms:ContactElectronicMailAddress` wordt bij voorkeur een functioneel email adres binnen de organisatie gebruikt.

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

De INSPIRE Metadata implementing rule vereist dat ook de organisatie die verantwoordelijk is voor de metadata van de viewservice wordt geidentificeerd. Omdat in ISO19128 maar één organisatie kan worden opgegeven onder het element `wms:ContactInformation` wordt voor Metadata Point of Contact het element `inspire_common:MetadataPointOfContact` in de `inspire_vs:ExtendedCapabilities` gebruikt.

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

Voor Metadata Language wordt het element `inspire_common:SupportedLanguages` in `inspire_vs:ExtendedCapabilities` gebruikt. Binnen dit element moet exact één `inspire_common:DefaultLanguage` element worden opgenomen om de standaardtaal van de service weer te geven. Voor de aanduiding van de taal moet de drielettercode voor die taal worden gebruikt zoals gedefinieerd in de codelijst van [ISO 639-2/B (bibliographic codes)](http://www.loc.gov/standards/iso639-2/). Met het element `inspire_common:ResponseLanguage` wordt de taal van het Capabilitiesdocument aangeduid. Volgens het Technical Guidance document zou dit element moeten overeenkomen met de taal die als language parameter bij het GetCapabilities-request is gebruikt. Omdat een Capabilitiesdocument maar in één taal kan worden opgesteld (voor de ondersteuning van meerdere talen is per taal een Capabilities document nodig), komt de waarde van dit element in de praktijk dus overeen met de waarde van `inspire_common:DefaultLanguage`. 

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

In de toekomst zal meertaligheid ook worden ondersteund in de OGC-standaarden. Daarin zal de codering van de taal plaatsvinden op basis van [IETF RFC 4646](https://www.ietf.org/rfc/rfc4646.txt) in plaats van ISO 639-2/B. Het Technical Guidance document bevat een tabel met daarin de vertaling van de ISO 639-2/B codes naar IETF RFC 4646 codes en voorziet in de toekomst ook een mogelijke wijziging van de huidige codes naar de IETRF RFC 4646 codes.

**Metadata voor de Layers elementen in het Capabilities document**

Een aantal parameters die in Annex III van de INSPIRE Network Services Regulation worden voorgeschreven voor een INSPIRE-viewservice zijn gemapped naar sub-elementen van `wms:Layer`. In de onderstaande tabel is die mapping weergegeven.

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

Keywords kunnen worden opgenomen in `wms:Keyword` elementen onder `wms:Layer`/`wms:KeywordList`. Voor de keywords die afkomstig zijn uit een thesaurus kan de naam van de thesaurus worden opgenomen in het attribuut vocabulary

<pre class="xml">
&lt;KeywordList&gt;
    &lt;!-- Keyword uit een controlled vocabulary --&gt;
    &lt;Keyword vocabulary="PGR Thesaurus"&gt;Landschap&lt;/Keyword&gt;

    &lt;!-- Keyword niet afkomstig uit een controlled vocabulary --&gt;

    &lt;Keyword&gt;geomorfologie&lt;/Keyword&gt;
&lt;/KeywordList&gt;
</pre>

**Geographic Bounding Box**

Voor GeographicBoundingBox wordt het element `wms:Layer`/`wms:BoundingBox` gebruikt. Hierin worden de coordinaten voor alle ondersteunde Coordinaat Referentie Systemen van de minimum bounding box beschreven.

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

Het element `wms:Layer`/`wms:MetadataURL` wordt gebruikt om een verwijzing op te nemen naar het metadatadocument bij de dataset die via deze Layer wordt gevisualiseerd. Dit element wordt gevuld met een GetRecordById request naar een catalogservice waarmee dit metadatadocument kan worden opgehaald of een directe link naar een ISO19115/19139 metadatadocument.

<pre class="xml">
&lt;MetadataURL type="ISO19115:2003"&gt;
    &lt;Format&gt;text/xml&lt;/Format&gt;
    &lt;OnlineResource xlink:href="http://www.nationaalgeoregister.nl/geonetwork/srv/nl/csw?Service=CSW&Request=GetRecordById&Version=2.0.2&id=f002bfc5-7d87-46b6-819e-8415422b65c9&outputSchema=http://www.isotc211.org/2005/gmd&elementSetName=full" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple"/&gt;
&lt;/MetadataURL&gt;
</pre>

**Unique Resource Identifier**

De Unique Resource Identifier geeft de unieke identificatie weer van de bron (dataset) waarop de Layer is gebaseerd. Een Unique Resource Identifier wordt samengesteld door twee elementen te combineren, te weten `wms:AuthorityURL` en `wms:Identifier`. Het element `wms:AuthorityURL` kan op meerdere plekken worden gedefinieerd in het Capabilitiesdocument. Dat kan op het hoogste niveau onder `wms:Layer` of in een `wms:Layer` element daaronder (`wms:Layer`/`wms:Layer`). De eerste methode kan worden gebruikt om één keer voor alle Layers één AuthorityURL aan te geven. Alle onderliggende `wms:Layer` elementen worden dan verondersteld gebruikt te maken van deze AuthorityURL. De tweede methode kan worden gebruikt om per `wms:Layer` een unieke AuthorityURL op te nemen. Het laatste geval kan zich voordoen als een service is gemaakt die Layers bevat waarmee datasets van verschillende dataproviders worden gevisualiseerd. De technical guidance raadt aan om voor het element `wms:Identifier` een [UUID](#uuid) te gebruiken om de dataset mee te identificeren. .

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

Dit is de geharmoniseerde naam voor INSPIRE-thema's die wordt gebruikt voor communicatie tussen computers, in tegenstelling tot Title dat wordt gebruikt als 'naam' voor de Layer die voor mensen begrijpelijk is. Hiervoor wordt het element `wms:Name` gebruikt, waarbij de volgende conventie wordt aangehouden: THEME.LayerName, met het INSPIRE-thems in hoofdletters en LayerName in UpperCamelCase-schrijfwijze zonder spaties. Voor services waarin meerdere SubLayers zijn opgenomen, kan deze schrijfwijze worden uitgebreid tot THEME.LayerName.SubLayerName

| Thema | Voorbeeld |
| ----- | --------- |
| Geografische Namen | GN.GeographicalNames |
| Administratieve Eenheden | AU.AdministrativeUnit |
| Adressen | AD.Address |
| Kadastrale Percelen | CP.CadastralParcel |
| Transport Netwerken | TN.RoadTransportNetwork.RoadArea |
| Hydrografie | HY.Network |
| Beschermde Gebieden | PS.ProtectedSite |

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

Hiervoor wordt het element `wms:Layer`/`wms:Style` gebruikt. Voor een Style moet in ieder geval een Title (`wms:Title`, hier wordt een voor mensen leesbare naam opgenomen) en een Unique Identifier (`wms:Name`) worden opgenomen. Voor ieder INSPIRE-thema moet in ieder geval een Style `inspire_common:DEFAULT` worden opgenomen. Deze default Style moet zijn gedefinieerd op basis van het hoofdstuk Portrayal uit de dataspecificaties voor dat thema. [Zie hier voor meer informatie](#portrayal). Als er geen opmaak is gedefinieerd in de dataspecificatie voor het betreffende thema dan wordt de volgende opmaak aangehouden voor de `inspire_common:Default` style:

- Punten: grijs vierkant, 6 pixels.
- Lijnen: zwarte doorgetrokken lijn, 1 pixel.
- Vlakken: zwarte doorgetrokken lijn, 1 pixel met een grijze vulling.

Naast de `inspire_common:Default` Style kunnen nog aanvullende Style-elementen worden opgenomen voor andere visualisaties.

Voor de Style moet ook een URL worden opgenomen die verwijst naar een legenda in de taal die is gedefinieerd als `inspire_common:DefaultLanguage` voor de service in `inspire_vs:ExtendedCapabilities`. Hiervoor wordt het element `wms:LegendURL` gebruikt.

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

**Dimension Pairs**

Dit element wordt alleen gebruikt als de Layer afhankelijk is van tijd of hoogte. In dat geval wordt het element `wms:Dimension` gebruikt. Als een laag volledig is gedefinieerd door de beide assen van het CRS, dan wordt dit element niet ingevuld.

**Coupled Resource**

Coupled Resource geeft een verwijzing die toegang biedt tot de dataset die in deze Layer wordt gevisualiseerd. Dit kan een verwijzing zijn naar bijvoorbeeld een zip-bestand dat kan worden gedownload of naar een downloadservice waarmee toegang tot deze dataset wordt geboden. Hiervoor wordt het element `wms:Layer`/`wms:DataURL` gebruikt.

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
Als een Layer meerdere regionale datasets visualiseert, of meerdere featuretypes (bijvoorbeeld lijnen en vlakken in 1 laag), dan beveelt de technical guidance viewservices aan om gebruik te maken van Category Layers. Een Category Layer is een Layer die zelf weer uit meerdere Layers is opgebouwd die ieder een eigen dataset visualiseren. Als een viewservice gebruik maakt van Category Layers dan wordt het element `wms:Layer`/`wms:Name` gebruikt om de INSPIRE-geharmoniseerde naam voor het thema weer te geven. Als er een metadatadoucment beschikbaar is dan wordt het element `wms:Layer`/`wms:MetadataURL` gebruikt om een verwijzing naar dat metadata document op te nemen.

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

### Meertaligheid in een capabilities-document
Een Capabilities-document kan maar in één taal worden opgesteld. Om meertaligheid te ondersteunen is het dus noodzakelijk om voor iedere ondersteunde taal één Capabilities-document aan te maken. In ieder Capabilities-document moeten de ondersteunde talen worden opgenomen in de `inspire_vs:ExtendedCapabilities`.

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

http://example.com/services/wms?request=GetCapabilities&service=WMS&version=1.3.0.

2. De service antwoordt met een Capabilities-document waarin de ondersteunde talen zijn weergegeven in de Extended Capabilities:

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

http://example.com/services/wms?request=GetCapabilities&service=WMS&version=1.3.0&language=eng.

4. De service antwoordt door een Capabilities-document te sturen in de gevraagde (ondersteunde) taal, waarbij de Title en Abstract elementen zijn weergegeven in de gevraagde taal. Voor de operaties wordt verwezen naar een voor die taal specifieke URL. Een client gebruikt vervolgens die taalspecifieke URL, hieronder bijvoorbeeld een URL voor een taalspecifiek GetMap-request:

<pre class="xml">
&lt;WMS_Capabilities&gt;[…]
    &lt;Capability&gt;
    &lt;Request&gt;[…]
        &lt;GetMap&gt;[…]
            &lt;DCPType&gt;
               &lt;HTTP&gt;
                   &lt;Get&gt;
                       &lt;OnlineResource xlink:href="http://example.com/services/wms/eng/GetMap?" /&gt;
                   &lt;/Get&gt;
               &lt;/HTTP&gt;
           &lt;/DCPType&gt;
        &lt;/GetMap&gt;[…]
     &lt;/Request&gt;[…]
   &lt;Capability&gt;[…]
&lt;/WMS_Capabilities&gt;
</pre>

### Voorbeeldbestand XML voor Capabilities
Hier zijn twee voorbeeldbestanden te vinden voor de Capibilities-documenten, volgens [scenario 1](https://wiki.geonovum.nl/index.php?title=File:WMS_Capabilities_Voorbeeld_Scenario1.zip) en [scenario 2](https://wiki.geonovum.nl/images/WMSCapabilities_Voorbeeld_Scenario2.zip).

### FAQ viewservices

**Vraag: Moeten voor een zogenaamde Category Layer de verplichte Layer metadata elementen (eg. Resource Abstract, Resource KeywordList, Unique Resource Identifier) ook aanwezig zijn?**

Volgens de TG 3.0 voor viewservices, moet een Category Layer een naam hebben (eis 49). Daarnaast gelden de algemene eisen van WMS, die INSPIRE overneemt. In de paragraaf "7.2.4.8 Inheritance of layer properties" van de WMS 1.3.0 specificatie is aangegeven per element wat wel en wat niet overgeorven kan worden. De ETF-tool voor het testen zal dit gaan volgen (controle en eventuele uitbreiding hierop in najaar 2013).

**Vraag: Kunnen Layer elementen die kinderen van een Category Layer zijn, de verplichten Layer metadata elementen vanuit de parent Category Layer overerven? Of moeten alle Layer metadata (verplichte) elementen herhaald worden voor elke Layer kind van de parent Category Layer?**

INSPIRE volgt de WMS 1.3.0 specificatie voor overerving van deze elementen. In de paragraaf "7.2.4.8 Inheritance of layer properties" van de WMS 1.3.0 specificatie is aangegeven per element wat wel en wat niet overgeorven kan worden. Zie ook het antwoord bij de vraag hierboven.

**Vraag: Is default styling verplicht voor de viewservice-deadline?**

Default styling is gedefinieerd in de viewservices TG (zie TG View service v3.0 paragraaf 4.2.3.3.4.8, eis 43 en 44). Dit is dus altijd verplicht voor viewservices, ook al is het nog niet vereist aan de dataspecificaties te voldoen. Zolang de portrayal zoals vastgelegd in de dataspecificaties (nog) niet verplicht is, moeten serviceproviders tenminste de default styling uit viewservices toepassen (requirement in de Technical Guidance voor View services).

**Vraag: Moet elke Layer een Style met naam (Style Unique Identifier) "inspire_common:DEFAULT" hebben of is "inspire_common:DEFAULT" alleen een placeholder voor een Style Unique Identifier van de INSPIRE default style en kan je ook een andere naam kiezen voor de (default) stijl?**

Navraag bij het JRC/INSPIRE levert het volgende antwoord op: het betreft inderdaad een placeholder, de naam van de Style hoeft dus niet per se "inspire_common:DEFAULT" te zijn.

**Vraag: Moeten service providers ook de in dataspecificaties gedefinieerde layer names en layer titles in de services opnemen?**

Layer names en layer titles zijn NIET verplicht voor de deadline van viewservices, omdat ze in de dataspecificaties gedefinieerd zijn. Zodra aan de dataspecificaties voldaan moet worden, zijn de layer names en layer titles wel verplicht conform de dataspecificaties. Zie de [INSPIRE Roadmap](https://inspire.ec.europa.eu/road-map-graphic/32443) voor de deadlines voor view/download services en dataharmonisatie per Annex.

**Vraag: Is de portrayal-specificatie uit de dataspecificaties verplicht als alleen een viewservice nog vereist is?**

Portrayal is onderdeel van de dataspecificaties en verplicht vanaf de deadline voor dataspecificaties. Als (alleen) een viewservice geleverd moet worden, is de portrayal-specificatie nog niet verplicht. Zie de [INSPIRE Roadmap](https://inspire.ec.europa.eu/road-map-graphic/32443) voor de deadlines per Annex, en het hoofdstuk [portrayal](#portrayal) in dit document.

**Vraag: Hoe ga ik om met wijzigingen in INSPIRE-netwerkdiensten die ik al aanbied?**

Wanneer u een wijziging doorvoert in uw dataset of service, kan dit gevolgen hebben voor bijvoorbeeld de metadata, atomfeeds en conformiteit van uw data en services. In het document [wijzigingen en INSPIRE](https://www.geonovum.nl/uploads/documents/inspire-en-wat-te-doen-bij-wijzigingen.pdf) vindt u een praktische handreiking van de punten die u kunt controleren na een wijziging van uw INSPIRE-datasets en -services.

## Download service

## Service-metadata

## Validatie services

## Spatial data services