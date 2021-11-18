# Services

In dit deel van de WIKI worden de verschillende elctronische diensten (services) behandeld die INSPIRE vraagt aan de INSPIRE plichtige dataproviders. Deze worden ook wel Network services genoemd. Algemene aspecten daaraan worden in het volgende hoofstuk behandeld. Er zijn verschillende soorten services die ieder afzonderlijk in hoofdstukken daarna behandeld worden.

Al deze services zijn technische componenten (entiteiten) die ook een onderlinge relatie hebben. Hun relaties, hun context en een use cases zijn beschreven in het [INSPIRE-Domain Model](https://inspire.jrc.ec.europa.eu/documents/Network_Services/INSPIRE%20Domain%20Model%20v0.9.1.pdf).

![Simple_INSPIRE_Domain_Model](media/DM_simple.png "Eenvoudig Domein model")

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
- De INSPIRE infrastructuur behelst een aantal elementen waarvoor een duidelijke beschrijving nodig is en de mogelijkheid om ernaar te verwijzen door middel van unieke identificatoren. Voorbeelden van dergelijke elementen zijn de INSPIRE themas, codelijsten, applicatie schemas of zoek diensten. Registers bieden een manier aan om identificatoren toe te wijzen aan deze elementen en aan hun labels, definities en beschrijvingen (in verschillende talen). Het [INSPIRE register](https://inspire.ec.europa.eu/registry/) biedt een centraal toegangspunt voor een aantal centraal beheerde INSPIRE registers. De inhoud van deze registers is gebaseerd op de INSPIRE richtlijn, de uitvoerings regels en de technische handleidingen.
- Voor Nederland is er een aanvullend register voor [codelijsten](#codelijsten) en [namespaces](#namespaces)

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

Er is geen Implementing Rule voor deze RM-layer dienst beschikbaar en deze wordt ook niet verwacht. Er wordt in de INSPIRE-documentatie verwezen naar GeoDRM (ISO 19153) als een kandidaat-standaard voor de RM-layer. [ISO 19153](https://www.iso.org/standard/32571.html) is in 2014 gepubliceerd.

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

Layer names en layer titles zijn verplicht voor de viewservices van geharmoniseerde datasets zoals ze in de dataspecificaties gedefinieerd zijn.

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

Default styling is gedefinieerd in de viewservices TG (zie TG View service v3.0 paragraaf 4.2.3.3.4.8, eis 43 en 44). Dit is dus altijd verplicht voor viewservices, ook al is het nog niet vereist aan de dataspecificaties te voldoen. Zolang de portrayal zoals vastgelegd in de dataspecificaties (nog) niet verplicht is, moeten serviceproviders tenminste de default styling uit viewservices toepassen (requirement in de Technical Guidance voor View services).

"inspire_common:DEFAULT" is een placeholder voor een Style Unique Identifier van de INSPIRE default style, maar je kan ook een andere naam kiezen voor de (default) stijl. De naam van de Style hoeft dus niet per se "inspire_common:DEFAULT" te zijn.

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
Als een Layer meerdere regionale datasets visualiseert, of meerdere featuretypes (bijvoorbeeld lijnen en vlakken in 1 laag), dan beveelt de technical guidance viewservices aan om gebruik te maken van Category Layers. Een Category Layer is een Layer die zelf weer uit meerdere Layers is opgebouwd die ieder een eigen dataset visualiseren. Als een viewservice gebruik maakt van Category Layers dan wordt het element `wms:Layer`/`wms:Name` gebruikt om de INSPIRE-geharmoniseerde naam voor het thema weer te geven. Als er een metadatadocument beschikbaar is dan wordt het element `wms:Layer`/`wms:MetadataURL` gebruikt om een verwijzing naar dat metadata document op te nemen.

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

Volgens de TG 3.0 voor viewservices, moet een Category Layer een naam hebben (eis 49). Daarnaast gelden de algemene eisen van WMS, die INSPIRE overneemt. In de paragraaf "7.2.4.8 Inheritance of layer properties" van de WMS 1.3.0 specificatie is aangegeven per element wat wel en wat niet overgeorven kan worden.
INSPIRE volgt de WMS 1.3.0 specificatie voor overerving van de layer elementen. In de paragraaf "7.2.4.8 Inheritance of layer properties" van de WMS 1.3.0 specificatie is aangegeven per element wat wel en wat niet overgeorven kan worden.

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
Hier zijn twee voorbeeldbestanden te vinden voor de Capibilities-documenten, volgens [scenario 1](https://github.com/Geonovum/inspire-wiki/blob/main/docs/WMS_Capabilities_Voorbeeld_Scenario1.zip) en [scenario 2](https://github.com/Geonovum/inspire-wiki/blob/main/docs/WMSCapabilities_Voorbeeld_Scenario2.zip).

## Download service

De downloadservice (of downloaddienst) heeft als functie de gegevens die via de Discovery Service van het Nationaal GeoRegister gevonden worden, te kunnen downloaden om ze daarna te kunnen analyseren en te gebruiken voor de gewenst toepassing. Hiertoe dient de dataprovider de INSPIRE-thema’s met een downloadservice te ontsluiten. Dat kan op verschillende manieren
1. AtomFeed
2. Web Feature Services (WFS)
	-  predefined
	-  Direct access
3. Web Coverage Service (WCS)
4. Sensor Observation Services (SOS)
5. OGC API Features (OAF)

In de volgende hoofdstukken worden eerst verschillende downloadservice implementaties kort beschreven en later nog weer apart in detail per paragraaf. 

### Downloadservice implementaties
De [Technical Guidances](#technische-richtlijnen) en de [Commission Regulation amending Regulation (EC) No 976/2009 as regards download services and transformation service](https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A02009R0976-20101228) zijn de huidig geldige documenten die downloadservices en de eisen eraan beschrijven. De Commission Regulation is de wettekst die aangeeft welke downloadservices moeten en mogen worden aangeboden binnen INSPIRE. De Technical Guidance geeft richtlijnen hoe deze services conform de Implementing Rule moeten worden toegepast.

Op 9 augustus 2013 is versie 3.1 van de Technical Guidance definitief gepubliceerd met de specificaties voor WFS- en ATOM-implementaties van een downloadservice. Op 16 december 2016 zijn specificaties gepubliceerd voor implementatie van een downloadservice via WCS (voor coverage-data) of via SOS (voor sensordata). Dit hoofdstuk geeft een korte toelichting per servicetype over de eisen.

#### Pre-defined en direct access
INSPIRE verlangt onder andere dat datasets te downloaden moeten zijn via een downloadservice. Indien relevant, moeten ook *delen* van datasets te downloaden zijn. Volgens de Implementing Rules bestaan er twee soorten downloadservices die mogen worden geïmplementeerd:

**Pre-defined dataset download services**

Dit is een volledige dataset of een deel van een volledige dataset, die als een enkele, vooraf gedefinieerde eenheid wordt aangeboden om te downloaden. Hierbij is het niet mogelijk om selecties te maken op basis van locatie of om inhoud te wijzigen, zoals bijvoorbeeld de codering of het coordinate reference system (CRS).

**Direct Access download services**

De direct access downloadservice kent een uitbreiding van de functionaliteit ten opzichte van de pre-defined dataset downloadservice. De direct access downloadservice geeft meer controle over de download door directe toegang te verlenen tot de inhoud van de dataset. Hierbij kan men denken aan het downloaden van selecties van de dataset door middel van een query. Zo'n query kan ruimtelijke criteria definiëren, maar kan ook een selectie doen op basis van bepaalde attributen van de ruimtelijke objecten in de dataset of waardes van een coverage.

#### Methoden uit technical guidance
Hieronder volgt voor verschillende soorten data een beknopte beschrijving van de Technical Guidances.

##### Vectordata
Versie 3.1 van de Technical Guidance voor Download Services onderscheidt drie methoden voor het implementeren van een Download Service voor vector data.

1. **Atom-implementatie van een Pre-defined Dataset Download Service**

Dit betreft een dataset die in zijn geheel (als één bestand) gedownload kan worden, zonder dat er een selectie van de dataset gemaakt wordt door de client. Met andere woorden: de data is van te voren klaargezet. Het bestand mag gecomprimeerd worden. Met *predefined part* van een dataset wordt bedoeld dat er met deze download een geografisch deel van een INSPIRE-thema geleverd kan worden. Het hoeft dus niet altijd een download van de dataset voor heel Nederland te zijn, maar het kan bijvoorbeeld ook een download per provincie of ander deelgebied zijn. De aanbieder bepaalt hoe de dataset opgedeeld wordt; de client kan geen eigen selecties / filters toepassen.

Kenmerken zijn:
- Meest simpele oplossing die toegang tot de data zelf oplevert.
- De Atomfeed beschrijft waar de data te downloaden is, op welke datum die gepubliceerd is en legt relaties met metadata-records.
- De pre-defined dataset kent een metadata-record dat via de discovery service gevonden kan worden.

Een nadere toelichting op deze methode is [hier te vinden](#atom-feed).

2. **Web Feature Service en Filter Encoding implementatie van een Pre-defined Dataset Download Service**

Een dataset kan ook via Web Feature Services in zijn geheel gedownload worden. De gebruiker (client) kan via het WFS-protocol gegevens downloaden, maar kan nog niet uitgebreid filters / eigen selecties toepassen. Voor deze methode hoeft een Web Feature Service maar een beperkt deel van de volledige WFS-standaard te ondersteunen. Deze vorm is een opstap naar een volledige Direct Access implementatie met Web Feature Services.

Kenmerken zijn:
- Een Web Feature Service (WFS) op basis van ISO DIS 19142 Geographic Information – Web Feature Service, ook wel WFS 2.0.
- Downloaden van gehele dataset of voorgedefinieerd deel ervan.
- Beperkte query-mogelijkheid.
- Requests via HTTP GET.

Een nadere toelichting op deze methode is [hier te vinden](#wfs-pre-defined).

![wfs](media/Wfs.png "Interactie tussen een client en een basic WFS.")

3. **Web Feature Service en Filter Encoding implementatie van Direct Access Download Service**

Met de direct access download is het mogelijk om meer controle over de download te krijgen, dan bij de pre-defined download het geval is. Zo kunnen er downloads samengesteld worden op basis van een ruimtelijke query, of op basis van een query naar attribuutinformatie.

Kenmerken zijn:
- Een Web Feature Service (WFS) op basis van ISO DIS 19142 Geographic Information – Web Feature Service, ook wel WFS 2.0.
- De functionaliteit van een Pre-defined dataset Download Service via WFS (zie hierboven), uitgebreid met ondersteuning voor:
	- "Ad Hoc Query" op basis van Filter encoding (ISO 19143, Filter encoding 2.0).
	- Standaard, ruimtelijke en temporele filters.
	- XPath.
	- Enkele Stored Queries, bijvoorbeeld om datasets in een ander Coördinaat Referentie Stelsel (CRS) op te vragen.

Een nadere toelichting op deze methode is [hier te vinden](#wfs-direct-access).

##### Rasterdata
Vanaf 16 december 2016 is er een [Technical Guidance](https://inspire.ec.europa.eu/id/document/tg/download-wcs) om coverage-data via Web Coverage Services te publiceren. Deze Technical Guidance neemt de OGC WCS 2.0 specificatie als basis voor een downloadservice. De INSPIRE-operaties worden gemapped op de WCS-operaties. Daarnaast worden aanvullende eisen gesteld, over onder andere:
- de te gebruiken (metadata) elementen in het Capabilities-document;
- ondersteuning van de INSPIRE Extended Capabilities, o.a. voor talen in de Capabilities;
- hoe Direct Access in te vullen via de processing extension van WCS;
- Quality of Service voor de verschillende operaties.

Een nadere toelichting op deze methode is [hier te vinden](#wcs).

##### Sensordata
Vanaf 16 december 2016 is er ook een [Technical Guidance](https://inspire.ec.europa.eu/id/document/tg/download-sos) om sensordata via Sensor Observation Services te publiceren. Deze Technical Guidance neemt de OGC specificaties voor Sensor Observation Service en ISO 19143 Filter Encoding als basis voor een downloadservice. De INSPIR- operaties worden gemapped op de SOS-operaties en de Filter encoding-classes. Daarnaast worden aanvullende eisen gesteld, over onder andere:
- de te gebruiken (metadata) elementen in het Capabilitiesdocument;
- ondersteuning van de INSPIRE Extended Capabilities, o.a. voor talen in de Capabilities;
- gebruik van de GetObservationByID opeartie om Direct Access in te vullen;
- Quality of Service voor de verschillende operaties.

Een nadere toelichting op deze methode is [hier te vinden](#sos).

### Atom feed
De [Atom-standaard](https://tools.ietf.org/html/rfc4287) is een (voorgestelde) standaard van IETF, the [Internet Engineering Task Force](https://www.ietf.org/). Atom is een XML-formaat om (op internet beschikbare) informatie te publiceren in feeds. Deze feeds bevatten vaak een algemeen deel en verscheidene items. Zo'n item (entry) bestaat uit elementen die de informatie beschrijven en ernaar verwijzen. Items kunnen bijvoorbeeld nieuwsberichten zijn, weblog-posts of gepubliceerde video's.

De [GeoRSS-specificatie](https://www.ogc.org/standards/georss) breidt feeds uit met elementen om de geografische eigenschappen van gegevens te publiceren. Dit is bijvoorbeeld een puntlocatie of bounding box van het gebied waar de gegevens betrekking op hebben.

Deze pagina beschrijft de eisen van INSPIRE aan Atom feeds en geeft enkele voorbeelden.

De Technical Guidance voor Download Services beschrijft hoe pre-defined datasets via Atom gepubliceerd kunnen worden, om te voldoen aan de Implementing Rule voor Download Services. Globaal komt het erop neer dat de downloadservice via enkele Atom-feeds wordt beschreven en de downloadlocaties aanbiedt van de bestanden om gehele datasets of delen daarvan te downloaden. Atom feeds van een Pre-defined dataset bevat daarvoor (onder andere):
1. gegevens over de aanbieder van de downloadservice. Deze gegevens staan in de *Atom Service feed*;
2. algemene gegevens over de downloadservice, zoals een id, locatie en de datum van laatste wijzigingen en copyrights en verwijzingen naar de Atom Dataset Feeds. Ook deze gegevens staan in de Atom Service feed.
3. per dataset, of deel van een dataset: beschrijvende gegevens, zoals een titel, beknopte samenvatting, copyrights en andere rechten, het CRS, het geografisch gebied van de data en verwijzingen (URL) naar de data zelf. Deze gegevens staan in de *Atom Dataset feed(s)*;
4. indien van toepassing: verwijzingen naar feeds in een andere taal (meertaligheid INSPIRE).
5. verwijzingen naar [OpenSearch-functionaliteit](http://www.opensearch.org/) om de feeds te kunnen doorzoeken. Deze gegevens staan in de Atom Service feed;

De afbeelding hieronder geeft de samenhang van de feeds weer voor pre-defined datasets, die als (statisch) bestand te downloaden zijn van een standaard webserver.

![atom](media/Atom_feeds_overview.png "Overview van atomfeeds.")

Een Atom service feed kan naar meerdere Atom Dataset feeds verwijzen. Een Dataset feed kan vervolgens per combinatie van CRS, taal en formaat naar meerdere bestanden wijzen. Zie de afbeeldingen hieronder.

![atom_structuur](media/Atom_feeds_structuur.png "Structuur van atomfeeds.")

Enkele genoemde voor- en nadelen van Atom zijn:

Voordelen:
- eenvoudig te gebruiken met standaard web technologie: browsers en newsreaders om te openen, code / programmeerbibliotheken om te verwerken en maken;
- te indexeren door zoekmachines (gebeurt bij ISO metadata meestal niet);
- relatief eenvoudig XML-formaat.

Nadelen:
- niet standaard ondersteuning voor in geo-software;
- zoals nu gebruikt in de TG: veel overlap met ISO-metadata;
- zoals nu beschreven: mogelijkerwijs zijn veel feeds nodig om op te stellen.

#### Elementen service feed

De onderstaande tabel bevat een overzicht van de elementen van een Atom-feed, zoals de Technical Guidance die beschrijft en die van toepassing zijn op de gehele feed. Het betreft geen volledige opsomming van alle details, zie daarvoor de Technical Guidance zelf.

| Element | Type | Belangrijkste extra attributen / elementen | Verplicht? | Omschrijving |
| ------- | ---- | ------------------------------------------ | ---------- | ------------ |
| title | | Taal (xml:lang) | Ja | Een voor mensen leesbare titel van de feed als geheel, m.a.w. van de Download Service, inclusief opgave van de taal van dit element. |
| subtitle | | Taal (xml:lang) | Nee | Een voor mensen leesbare subtitel, met extra toelichting over de feed als geheel, inclusief opgave van de taal van dit element. |
| link | service metadata | Soort link (rel="describedby"), Type (type="application/xml") | Ja | Link naar de metadata record van deze download service in de discovery service. | 
| link | zelf referentie | Soort link (rel="self"), Taal (hreflang="en"), Titel (title="Title of this document"), Type (type="application/atom+xml") | Ja | Verwijzing naar de URL van de feed zelf. Dit is een vereiste van Atom en is bijvoorbeeld handig als een feed lokaal wordt opgeslagen of gekopieerd, dan is de oorspronkelijke (online) locatie van de feed via deze link nog te achterhalen.
| link | alternatieve talen | Soort link (rel="alternate"), Type (bijv. type="text/html"), Alternatieve taal (bijv. hreflang="de"), Titel (bijv. title="An HTML version of this document in German") | Verplicht als er meerdere talen van de Download Service zijn | Als een Download Service ook in andere talen beschikbaar is, dient deze link opgenomen te worden en te verwijzen naar de feed in de andere talen.
| link | OpenSearch document | Soort link (rel="search"), Type (bijv. type="application/opensearchdescription+xml"), Taal (bijv. hreflang="en") | Verwijst naar een OpenSearch description van de Download Service. | |
| link | alternatieve formaten | Soort link (rel="alternate"), Type (bijv. type="text/html"), Titel (bijv. title="An HTML version of this document") | Nee | Dit gaat om alternatieve formaten van de feed zelf, dus niet van de datasets. Bijvoorbeeld als er een website is over de Download Service. |
| id | | | Ja | Dit is de identifier van de feed. De waarde dient een URI te zijn, aanbevolen is de URI van de feed te gebruiken. |
| rights | | | Ja | Informatie over de rechten en restricties die gelden voor de feed. Vaak komt dit overeen met de waarde voor 'accessConstraints' in de overeenkomstige service metadata record. Individuele entries in de feed kunnen ook hun eigen rechten en restricties hebben. |
| updated | | | Ja | Datum en tijd van de laatste wijzgingen van de feed. |
| author | | Contactinformatie over de feed, Name en email | Ja | Het kan contactinformatie zijn van een individu of een organisatie die verantwoordelijke is voor de feed. Tenminste moet een naam en e-mailadres worden verstrekt. |

#### Elementen entry service feed

Voor elke Dataset feed, dient de Atom Service feed een entry-element te bevatten. Voor elk entry-element zijn de volgende subelementen beschikbaar:

| Element | Type | Belangrijkste extra attributen / elementen | Verplicht? | Omschrijving |
| ------- | ---- | ------------------------------------------ | ---------- | ------------ |
| INSPIRE dataset identifier | INSPIRE elementen | INSPIRE custom elementen, spatial_dataset_identifier_code, spatial_dataset_identifier_namespace | Ja | Verwijzingen naar de INSPIRE dataset identifier code en namespace. De XML elementen zijn door INSPIRE specifiek voor Download Services gedefinieerd. |
| title | | Taal (xml:lang) | Ja | Een voor mensen leesbare titel van de entry, m.a.w. van de dataset (of deel daarvan), inclusief opgave van de taal van dit element |
| link | Metadata | Soort link (rel="describedby" en type="application/xml") | Ja | Link naar het metadata record van de dataset |
| link | Dataset feed | Soort link (rel="alternate" en type="application/atom+xml") | Ja | Link naar de Atom dataset feed horend bij de dataset van de entry. |
| subtitle | | Taal (xml:lang) | Nee | Een voor mensen leesbare subtitel, met extra toelichting over de entry, inclusief opgave van de taal van dit element |
| id | | | Ja | Dit is de identifier van de datasets. De waarde dient een URI te zijn, aanbevolen is de URL van de dataset te gebruiken, dus dezelfde URL als in het href-attribuut van de link van de dataset. |
| rights | | | Nee | Informatie over de rechten en restricties die gelden voor de entry. Indien dit niet opgegeven is, geldt de informatie zoals opgegeven bij de rights van de gehele feed. |
| updated | | | Ja | Datum en tijd van de laatste wijzgingen van de feed |
| author | | Contactinformatie over de dataset, Name en email | Nee | Gegevens voor contact over de datasets. Naam en emailadres zijn, op basis van de INSPIRE Metadata IR, minimaal vereist. Indien dit niet opgegeven is, geldt de informatie zoals opgegeven bij de rights van de gehele feed. |
| georss | | | Nee | Het gebied waar de dataset betrekking op heeft, uitgedrukt met bijvoorbeeld een boundingbox. De geometrie wordt opgegeven conform GeoRSS(-Simple). De coordinaten staan in latitude/longitude  conform WGS84. |
| category | CRSen | Well-known definitie van het CRS (attribuut term) en eventueel het label voor de leesbare toelichting. | Ja | CRSen waarin de dataset feed de data aanbiedt. |

#### Elementen dataset feed

Dataset feeds bevatten de informatie om de bestanden daadwerkelijk te kunnen downloaden. Dataset feeds bevatten de onderstaande elementen.

| Element | Type | Belangrijkste extra attributen / elementen | Verplicht? | Omschrijving |
| ------- | ---- | ------------------------------------------ | ---------- | ------------ |
| title | | Taal (xml:lang) | Ja | Een voor mensen leesbare titel van de dataset feed, inclusief opgave van de taal van dit element |
| subtitle | | Taal (xml:lang) | Nee | Een voor mensen leesbare subtitel, met extra toelichting over de dataset feed, inclusief opgave van de taal van dit element |
| id | | | Ja | Dit is de identifier van de dataset feed. De waarde dient een URI te zijn, de URL van de dataset feed zelf. |
| rights | | | Nee | Informatie over de rechten en restricties die gelden voor de dataset feed. |
| updated | | | Ja | Datum en tijd van de laatste wijzgingen van de feed |
| author | | Contactinformatie over de dataset feed, met naam en emailadres | Ja | Gegevens voor contact over de datasets. Naam en emailadres zijn, op basis van de INSPIRE Metadata IR, minimaal vereist. Indien dit niet opgegeven is, geldt de informatie zoals opgegeven bij de rights van de gehele feed. |
| link | | Spatial Object description, via een link met rel="describedby" en type="text/html", vindt verwijzing naar een (INSPIRE) Registry en/of een ander registry plaats | Ja | Een of meerdere elementen die aangeven welke Spatial Object Types die in de dataset zitten. De waardes hiervan komen uit de INSPIRE Registry in geval de data aan een Data specifictie voldoet, zie https://inspire.ec.europa.eu/featureconcept voor waardes (spatial object types). |
| link | Service feed | Soort link (rel="up"), Type link (type="application/atom+xml") | Nee | Link naar de Atom service feed ("omhoog" / terug verwijzing naar de service feed) |

#### Elementen entry dataset feed

Een dataset feed bevat tenminste een entry van een dataset om te downloaden. Elke entry in een Dataset feed beschrijft per combinatie van een formaat en CRS een te downloaden bestand. Per entry gelden de volgende regels.

| Element | Type | Belangrijkste extra attributen / elementen | Verplicht? | Omschrijving |
| ------- | ---- | ------------------------------------------ | ---------- | ------------ |
| link | Dataset | Soort link (rel="alternate"), Formaat / type (type), Groote in octetten  / bytes (length), Taal van het bestand  waarnaar verwezen is (hreflang), indien het een van de alternatieve talen betreft | Ja | Link naar de dataset of delen daarvan, bijvoorbeeld naar een GML document. Het type geeft het formaat aan, bijvoorbeeld "application/gml+xml;version=3.2" voor een ongecomprimeerd GML bestand. De dataset kan ook gecomprimeerd aangeboden worden of in een ander formaat. Dit is bijvoorbeeld bij rasterdata van Elevation te verwachten. *Voor datasets die in meerdere CRSen beschikbaar zijn, volgt nog een voorgestelde oplossing.* |
| georss | | | Nee | Het gebied waar de dataset betrekking op heeft, uitgedrukt met bijvoorbeeld een boundingbox. De geometrie wordt opgegeven conform GeoRSS(-Simple). De coordinaten staan in latitude/longitude conform WGS84. |
| category | CRSen | Well-known definitie van het CRS (attribuut term) en eventueel het label voor de leesbare toelichting. | Ja | CRSen waarin de dataset feed de data aanbiedt. |

#### Meertaligheid

Door gebruik te maken van de Atom-ondersteuning voor andere talen, wordt automatisch voldaan aan de eisen van INSPIRE voor meertaligheid van de service.

#### OpenSearch

Een INSPIRE-downloadservice met Atom-feeds dient een OpenSearch Description en zoekfunctionaliteit aan te bieden. Voor dergelijke OpenSearch-functionaliteit biedt het Nationaal GeoRegister nu een eenvoudige manier aan voor dataproviders die niet zelf de functionaliteit willen of kunnen bieden. Dataproviders hoeven hiermee (in de meeste gevallen) dus zelf geen implementatie van OpenSearch meer te doen, maar hoeven alleen hun Atom feeds en de metadata op orde te hebben. Hieronder volgt een gedetailleerde beschrijving hoe dit te implementeren.

Om gebruik te maken van een OpenSearch Description, dienen de feeds en metadata aan de volgende voorwaarden te voldoen:
1. **algemeen**: de Atom feeds dienen uiteraard, op de OpenSearch-vereisten na, aan alle INSPIRE-eisen te voldoen. Dus zorg voor de juiste links naar de dataset-feeds en de juiste metadata-verwijzingen en valide metadata. Het NGR kan anders wellicht geen OpenSearch Description genereren.
2. **servicemetadata**: het protocol van de ResourceLocator moet in het XML-bestand op "INSPIRE Atom" staan. In het NGR is dit eenvoudig te kiezen in de metadata-editor. Kies dan uit de keuzelijst Protocol de optie "Atom Service Feed". Dit is de enige wijziging die nodig is in service-metadata.
3. **datasetmetadata**: het protocol van de URL dient in het XML-bestand op "INSPIRE Atom" staan. In het NGR is dit eenvoudig te kiezen in de metadata-editor. Kies dan uit de keuzelijst Protocol de optie "Atom Service Feed". Dit moet voor alle dataset metadata waar de Atom feeds en de service naar verwijzen gedaan worden.
4. **in de Atom service-feed**: de URL van de OpenSearchDescription moet toegevoegd worden aan de service-feed. Het NGR gaat de OpenSearch Description genereren (let op: zie opmerking hieronder) op basis van de metadata-identifier (fileIdentifier) van de metadata van de service. Het format van de URL van de OpenSearch Description die het NGR gaat genereren is:

Bijvoorbeeld:

https://www.nationaalgeoregister.nl/geonetwork/opensearch/dut/ef2a7962-8bb4-483f-ac78-851b619f357f/OpenSearchDescription.xml

Hierbij is **ef2a7962-8bb4-483f-ac78-851b619f357f** de metadataidentifier van de ATOM Download service

De samenhang van de onderdelen van een ATOM Download Service is weergegeven in onderstaande afbeelding:

![atom_componenten](media/atom_componenten.png "Componenten van de ATOM downloadservice.")

##### Aandachtspunten

- **Let op met identifiers van de bron van de dataset**. Het NGR doet de aanname dat de identifier van de bron van de dataset uniek is in NGR voor de dataset-metadata-records (oftewel: beschreven is in één dataset-metadata-record). Dit heeft te maken met de interne werking en controles om tot een geldige OpenSearchDescription te komen. Als er meerdere dataset-metadata-records voorkomen in NGR met dezelfde dataset-identifier, dan kan het zijn dat de OpenSearchDescription niet volledig opgebouwd wordt. Een dataprovider dient dan zelf zorg te dragen voor de OpenSearchDescription.
- **Volgende dag beschikbaar**. Punten 1 t/m 3 hierboven zijn nodig voor NGR om een OpenSearch Description te kunnen genereren. Het NGR moet daarvoor de feeds en metadata ophalen en analyseren. Dit gebeurt dagelijks. Een OpenSearch Description is dus niet gelijk beschikbaar, maar doorgaans wel de volgende dag.
- **Hoofdlettergebruik**. Het is essentieel voor de werking dat links en identifiers exact kloppen en dat codes exact overeenkomen met codes uit de codelijsten. Dit is inclusief het gebruik van hoofdletters. Let daar dus op, vooral bij handmatige wijzigingen in XML bestanden.


### WFS pre-defined

De Technical Guidance beschrijft in hoofdstuk 6 hoe een Download service voor Pre-defined datasets geïmplementeerd kan worden met een Web Feature Service en Filter Encoding.
Het GetCapabilities request geeft een vergelijkbare Capabilities file op als bij de WMS, op enkele specifieke WMS onderdelen na. Het wordt daarom in deze paragraaf niet zo uitgebreid beschreven als in dat van de WMS.

#### WFS 2.0

De OGC standaard voor [Web Feature Service 2.0 (WFS 2.0)](https://www.ogc.org/standards/wfs) is in samenwerking met ISO opgesteld. Bij ISO heet deze standaard formeel ISO 19142. WFS 2.0 specificeert een webservice-interface om geografische gegevens te bevragen. Een WFS geeft standaard GML terug (3.2 voor WFS 2.0). Voor het bevragen maakt WFS gebruik van filters. Voorbeelden van filters zijn: gegevens selecteren op basis van een bepaald gebied en/of bepaalde attribuutwaarden. Deze filters dienen conform de [Filter Encoding 2.0 (FE 2.0)](https://www.ogc.org/standards/filter) gecodeerd te zijn. Deze standaard is ook in samenwerking met ISO opgesteld en heet daar ISO 19143.

#### Conformance classes

Om aan te geven welke delen van de WFS 2.0 en FE 2.0 standaard ondersteund zijn in een implementatie, zijn in de standaarden zogenaamde conformance classes gedefinieerd. Een conformance class groepeert een deel van de eisen uit de standaard. Als een implementatie claimt aan een bepaalde conformance class te voldoen, dan is voor een gebruiker duidelijk welke functionaliteit ondersteund wordt.

Voorbeelden van conformance classes uit WFS 2.0 en FE 2.0 zijn:
- HTTP GET: een WFS voldoet hiermee aan alle eisen die met HTTP GET te maken hebben, zoals de encoding van requests.
- HTTP POST: een WFS voldoet hiermee aan alle eisen die met HTTP POST te maken hebben, zoals de encoding van requests in XML.
- Minimum Spatial Filter: een WFS ondersteunt een set filters om ruimtelijke queries op te kunnen lossen.
- Basic WFS: een WFS ondersteunt de basis functies van de WFS standaard. De WFS ondersteunt onder andere de requests GetCapabilities, DescribeFeatureType en GetFeature en enkele ruimtelijke filters.
- Transactional WFS: een WFS biedt de functies die vereist zijn voor het bewerken van gegevens via WFS.

Meestal zullen implementaties meerdere conformance classes ondersteunen.

#### INSPIRE-eisen

Het aanbieden van Pre-defined datasets via een Web Feature Service is een methode om aan de eisen uit de Implementing Rule te kunnen voldoen. Een dergelijke WFS is in staat om van datasets een applicatie schema te geven en via GetFeature in zijn geheel op te halen of individuele objecten via hun identifier.

De Technical Guidance bevat de eisen die INSPIRE stelt aan een dergelijke WFS:
- voldoen aan de conformance class Simple WFS uit WFS 2.0. Dit is o.a. inclusief de operaties GetCapabilities, DescribeFeatureType, ListStoredQueries, DescribeStoredQueries, GetFeature en de stored query GetFeatureById. De WFS geeft GML 3.2 terug.
- voldoen aan de conformance class HTTP GET uit WFS 2.0: de WFS dient in ieder geval de HTTP GET vormen van de requests te ondersteunen.
- voldoen aan de conformance class Query uit FE 2.0. De WFS is in staat een query uit te voeren (zoals de stored query GetFeatureById).
- ondersteuning van Stored Queries om de pre-defined datasets om alle mogelijke combinaties van het CRS, een dataset (via de dataset ID) en de taal terug te geven. De WFS moet hiervoor Stored Queries aanbieden.

##### Stored queries

Stored Queries zijn een nieuw mechanisme in WFS 2.0. Hiermee worden een soort query-templates aangeboden, waarmee een client niet een geheel filter hoeft op te stellen, maar alleen enkele van te voren opgegeven parameters hoeft te specificeren. WFS-requests worden hier eenvoudiger van. Een service kan hiermee een soort FAQs aanbieden van WFS-requests, die voor een client makkelijk te gebruiken zijn. Bijvoorbeeld requests om op basis van een typering (categorie) een dataset te bevragen.

##### Meertaligheid

INSPIRE stelt via de Implementing Rules aan Netwerk Services, zoals View Services, Discovery Services en ook Download Services, eisen ten aanzien van ondersteuning van meerdere talen. WFS 2.0 biedt zelf geen mechanisme hiertoe. De Technical Guidance van Download Services stelt daarom de volgende aanvullende eisen aan een WFS-2.0-implementatie om meertaligheid te ondersteunen:
1. voor het GetCapabilities request via HTTP GET dient de WFS een extra parameter te ondersteunen waarmee de client de taal van de Capabilities kan opvragen. De parameter naam is LANGUAGE, de waardes komen uit de ISO 839-2/B apha 3 lijst. Voorbeelden van waardes zijn: "dut" voor Nederlands, "eng" voor Engels.
2. de Capabilities elementen Title en Abstract dienen in de gevraagde taal teruggegeven worden of in de standaard taal als de gevraagde taal niet ondersteund wordt.
3. De Capabilities bevatten een lijst van ondersteunde talen in de Extended Capabilities. Dit mechanisme is hetzelfde als bij View Services.

Handig om te weten is dat een WFS, als die maar één taal ondersteunt, de parameter LANGUAGE kan negeren als een client die verstuurt. Dit omdat een WFS de standaard taal mag teruggeven als de gevraagde taal niet ondersteund wordt. Dit betekent als een WFS maar één taal ondersteunt dat altijd de Capabilities in die taal teruggegeven zullen worden.

De andere operaties hoeven geen extra zaken te ondersteunen voor meertaligheid, omdat:
1. DescribeFeatureType een technische beschrijving teruggeeft, een schema, waarop een natuurlijke taal niet van toepassing is;
2. de GetFeature operation data teruggeeft conform de INSPIRE-applicatieschema's mits het een geharmoniseerde dataset betreft. Deze schema's bevatten al een mechanisme om waardes in meerdere talen op te geven. De Technical Guidance stelt daarom dat het niet van toepassing is om hier een aparte parameter voor op te geven.

Naast de eisen doet de Technical Guidance de volgende aanbevelingen, voor het geval een service provider meerdere talen wil aanbieden:
1. Gebruik aparte URLs voor verschillende talen, dus voor requests op Engelstalige data een andere URL dan voor requests op Nederlandstalige data. Dit houdt het overzichtelijk.
2. Geef foutmeldingen in de talen die de service aanbiedt.

#### Aandachtspunten

- Als er nog geen webservices draaien om een dataset aan te bieden en de dataset is niet erg dynamisch, dan is vaak een Atom feed het snelste en meest eenvoudige om te maken. Bij grote datasets kan het dataverkeer (over de netwerkverbinding) ook te veel gaan vragen en kan opsplitsen van het bestand nodig zijn. Dit vraagt om extra handelingen bij het inrichten. Is de dataset dynamischer van aard of is het niet gewenst om de data in verschillende CRSen op te slaan, dan kan een Download Service op basis van WFS (implementaties ondersteunen vaak on-the-fly herprojectie) handiger zijn. Webservices bieden ook voordelen voor gebruik van de data in andere processen.
- In INSPIRE komt het voor dat vanuit data verwezen wordt naar andere datasets, bijvoorbeeld om gebruik te maken van de geometrie van een andere dataset als de dat zelf geen geometrie bevat. Dit gebeurt bijvoorbeeld bij Human Health en Statistical Units of bij Transport Networks. Als een organisatie data aanbiedt waar een andere dataset naar verwijst, is het voor de technische werking van de links noodzakelijk dat de data per object te linken is. Bij datasets die alleen via Atom feeds als bestand worden aangeboden is dit technisch vaak lastig. Met WFS kan dit wel, door gebruik te maken van requests om 1 object op te halen. Het verdient daarom aanbeveling om data waar andere datasets naar (kunnen) verwijzen, aan te bieden via WFS.

### WFS direct access

De Technical Guidance beschrijft in hoofdstuk 7 hoe een Download service voor Direct Access geïmplementeerd kan worden met een Web Feature Service en Filter Encoding. Een dergelijke Web Feature Service biedt uitgebreide filtermogelijkheden op INSPIRE-datasets, zodat gebruikers de selecties kunnen maken en downloaden die ze zelf wensen.

Het aanbieden van Direct Access Download Service via een Web Feature Service is een methode om aan de eisen uit de Implementing Rule te kunnen voldoen. Een dergelijke WFS stelt een gebruiker in staat om, in aanvulling op alles wat een [Pre-defined datasets Download Service via WFS](#wfs-pre-defined) biedt, eigen selecties te maken van de data en dat direct te gebruiken (of downloaden). Bijvoorbeeld door selecties te maken met ruimtelijke, temporele en administratieve filters. Een dergelijke Download service biedt de meeste funtionaliteit aan een gebruiker en maakt het mogelijk om alleen die data op te vragen (en versturen) die nodig is, in plaats van gehele datasets. Dit kan vooral bij grote datasets en/of dynamische datasets erg belangrijk zijn.

De Technical Guidance bevat de eisen die INSPIRE stelt aan een dergelijke WFS:
1. voldoen aan alle eisen die gelden voor een Pre-defined datasets Download Service via WFS;
2. voldoen aan de conformance class Basic WFS uit WFS 2.0, zodat de WFS minimale filtering ondersteunt en de operatie GetPropertyValue;
3. voldoen aan de conformance class Ad hoc Query uit FE 2.0, zodat de WFS door de client gemaakte filters kan verwerken;
4. voldoen aan de conformance class Resource Identification uit FE 2.0, zodat de WFS met Resource Identifiers bevraagd kan worden. Het gebruik van Resource Identifiers ten opzichte van GetFeatureById is bijvoorbeeld handig bij gebruik van versiemechanismes van features, zodat alle versies van een resource opgevraagd kunnen worden;
5. voldoen aan de conformance class Minimum Standard Filter uit FE 2.0. Dit is met de filter operatoren PropertyIsEqualTo, PropertyIsNotEqualTo, PropertyIsLessThan, PropertyIsGreaterThan, PropertyIsLessThanOrEqualTo, PropertyIsGreaterThanOrEqualTo en alle logische operatoren (And, Or, Not).
6. voldoen aan de conformance class Minimum Spatial Filter uit FE 2.0. Dit betekent dat de filter operator BBOX ondersteund moet worden.
7. voldoen aan de conformance class Minimum Temporal Filter uit FE 2.0. Dit betekent dat de filter operator During ondersteund moet worden. Hiermee kunnen 8. objecten opgevraagd worden die wat betreft tijd (of tijsperiode) vallen in een bepaalde periode;
voldoen aan de conformance class Minimum XPath uit FE 2.0. Hiermee kunnen via XPath opgegeven waardes gebruikt worden in een filter. Er wordt een subset van XPath ondersteuning vereist. Deze is beschreven in paragraaf 7.4.4 van de [Filter Encoding standaard 2.0](https://www.ogc.org/standards/filter).

De eisen voor meertaligeheid zijn dezelfde als voor WFS pre-defined.

#### Verhouding tot Nederlands profiel

Het Nederlands profiel op ISO 19142 WFS 2.0 versie 1.1 stelt eisen aan Nederlandse WFS-implementaties. Het Nederlands profiel is afgestemd op de INSPIRE-specificaties. Per eis staat in het Nederlands profiel aangegeven of die van INSPIRE komt of dat het een specifieke aanvulling voor Nederland is. Een voorbeeld van dat laatste is ondersteuning voor het Rijksdriehoekstelsel.

Het profiel bevat ook een aparte bijlage met de zaken die INSPIRE nog extra vereist ten opzichte van het Nederlands profiel.

### WCS

Vanaf 16 december 2016 is er een [Technical Guidance](https://inspire.ec.europa.eu/id/document/tg/download-wcs) om coverage data via Web Coverage Services te publiceren. Deze Technical Guidance neemt als basis voor een Download service de OGC WCS 2.0 specificatie. De INSPIRE-operaties worden gemapped op de WCS-operaties. Daarnaast worden aanvullende eisen gesteld, over onder andere:
- de te gebruiken (metadata)-elementen in het Capabilities-document
- ondersteuning van de INSPIRE Extended Capabilities, o.a. voor talen in de Capabilities
- hoe Direct Access in te vullen via de processing extension van WCS
- Quality of Service voor de verschillende operaties.

### SOS

Vanaf 16 december 2016 is er ook een [Technical Guidance](http://inspire.ec.europa.eu/id/document/tg/download-sos) om sensor data via Sensor Observation Services te publiceren. Deze Technical Guidance neemt als basis voor een Download service de OGC specificaties voor Sensor Observation Service en ISO 19143 Filter Encoding. De INSPIRE operaties worden gemapped op de SOS operaties en de Filter encoding classes. Daarnaast worden aanvullende eisen gesteld, over onder andere:
- de te gebruiken (metadata) elementen in het Capabilitiesdocument
- ondersteuning van de INSPIRE Extended Capabilities, o.a. voor talen in de Capabilities
- gebruik van de GetObservationByID operatie om Direct Access in te vullen
- Quality of Service voor de verschillende operaties.

### FAQ downloadservices

**Vraag: Is WFS verplicht voor INSPIRE Download Services?**

Nee, WFS is niet verplicht. Bij de implementatie van een Download Service beschrijfven de Technical Guidances verschillende opties waaruit de dataprovider kan kiezen:
- Pre-defined dataset download services kunnen worden aangeboden als:
	- Atom (Atom Syndication Format) óf als:
	- ISO DIS 19142 – Web Feature Service, met beperkte filter mogelijkheid óf als:
	- Web Coverage Service óf als:
	- Sensor Observation Service
- Direct access download services mogen worden aangeboden als:
	- ISO DIS 19142 – Web Feature Service met ISO DIS 19143 – Filter Encoding voor aanvullende filtermogelijkheden.
	- Web Coverage Service met processing mogelijkheid óf
	- Sensor Observation Service met extra bevragingsmogelijkheden.

**Vraag: Is het nu al verplicht GML te leveren als (bestands)formaat voor (vector)gegevens via ATOM Download Services?**

Strikt genomen is GML pas verplicht voor INSPIRE zodra de dataspecificaties, inclusief de encodingregels per thema, verplicht zijn. Zie de [INSPIRE Roadmap](https://inspire.ec.europa.eu/road-map-graphic/32443) voor de deadlines per thema. INSPIRE heeft een lijst van te gebruiken [media-types](https://inspire.ec.europa.eu/media-types/) gepubliceerd. Deze lijst bevat naast GML ook types voor gecomprimeerde bestanden, zoals Shapefiles of MapInfo TAB files in een ZIP-betand, en types voor rasters (TIFF en ECW bijvoorbeeld).

Merk op: GML is voor Nederland als uitwisselingsformaat reeds verplicht voorgeschreven, zie de zogenaamde [Pas-toe-of-Leg-Uit-lijst van geo-standaarden](https://www.forumstandaardisatie.nl/open-standaarden). Bij een implementatie via WFS wordt standaard GML geboden.

**Vraag: Welke bestandsformaten zijn toegestaan bij Download Services?**

INSPIRE heeft een lijst van te gebruiken [media-types](https://inspire.ec.europa.eu/media-types/) gepubliceerd. Deze lijst bevat naast GML ook types voor gecomprimeerde bestanden, zoals Shapefiles of MapInfo TAB files in een ZIP betand, en types voor rasters (TIFF en ECW bijvoorbeeld).

## Wijzigingen doorvoeren

Wanneer u een wijziging doorvoert in uw dataset of service, kan dit gevolgen hebben voor bijvoorbeeld de metadata, atomfeeds en conformiteit van uw data en services. In het document [wijzigingen en INSPIRE](https://www.geonovum.nl/uploads/documents/inspire-en-wat-te-doen-bij-wijzigingen.pdf) vindt u een praktische handreiking van de punten die u kunt controleren na een wijziging van uw INSPIRE-datasets en -services.
