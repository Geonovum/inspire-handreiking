# Metadata

Datasets die voor INSPIRE zijn aangemerkt, worden van een beschrijving (metadata) voorzien, zodat zij door anderen te vinden en te gebruiken is. Deze metadata moet voldoen aan de INSPIRE vereisten, zodat daarmee alle data in Europa op dezelfde manier beschreven is, bijvoorbeeld door eenduidige gebruiksvoorwaarden. Dit maakt het onder andere mogelijk om de metadata op bepaalde trefwoorden te doorzoeken en te gebruiken. In volgende paragrafen wordt aangegeven hoe er aan deze vereisten kan worden voldaan.

## Metadata aanmaken en publiceren
Metadata dient ter beschikking worden gesteld voor:
- Datasets en dataset series
- Services (o.a. view en download services).

In de meeste gevallen zal de dataprovider metadata aanmaken als onderdeel van het beheer van de data en services. De dataprovider heeft daarbij ook de verantwoordelijkheid dat deze metadatabestanden (XML-bestanden) voldoen aan de INSPIRE-richtlijnen. 
De metadata wordt vervolgens in het <a href="https://www.nationaalgeoregister.nl/geonetwork/srv/dut/catalog.search#/home" target="_blank"> Nationaal Georegister (NGR)</a> gepubliceerd.

In het figuur hieronder zie je een screenshot van het Nationaal Georegister (NGR), dat voor INSPIRE-metadata dienst doet als *Discovery Service*. Het NGR wordt echter niet alleen met INSPIRE-conforme metadata gevuld; ook andere metadata kan toegevoegd worden. INSPIRE-metadata kan gevonden worden door in het tabblad 'Zoeken' te filteren op de categorie 'Inspire'.

![NGR met categorie INSPIRE ](media/NGR-categorie-INSPIRE.png "Gebruik in het NGR het filter 'Inspire' om alle beschikbare INSPIRE-compliant datasets te vinden.")


### Eisen metadata
De metadata-elementen die voor INSPIRE, vanuit verschillende implementing rules (IR), beschreven moeten worden, en zijn opgenomen in <a href="https://github.com/INSPIRE-MIF/technical-guidelines/blob/main/metadata/metadata-iso19139/metadata-iso19139.adoc" target="_blank">Technical Guidance for INSPIRE metadata for datasets and services, versie 2.1.0</a>  zijn opgenomen in de Nederlandse profielen. Deze Nederlandse profielen, één voor datasets en dataset series en één voor services, zijn conform de INSPIRE-richtlijn. In de profielen zijn verplichte en door conditie verplichte elementen opgenomen. Als er aan de conditie wordt voldaan, is dat element verplicht. Voor een aantal door conditie verplichte elementen, heeft de conditie te maken met INSPIRE. Als de te beschrijven bron een aangemerkte INSPIRE dataset of bijbehorende service is, dan worden er meer metadata-elementen vereist om in te vullen. Het komt ook voor dat er alleen specifieke waardes voor INSPIRE zijn toegestaan, terwijl voor niet INSPIRE-data meer waardes toegestaan zijn.  Om te voldoen aan de INSPIRE-vereisten, moeten de conditionele elementen en aanvullende vereisten voor INSPIRE uit de Nederlandse profielen worden gevolgd. Metadata die volledig conform ISO 19115 is voldoet dus niet persee aan de INSPIRE vereisten. 

Voor datasets en dataset series geldt het <a href="https://docs.geostandaarden.nl/md/mdprofiel-iso19115/" target="_blank">Nederlands metadata profiel op ISO 19115</a>.

Voor services geldt het <a href="https://docs.geostandaarden.nl/md/mdprofiel-iso19119/" target="_blank">Nederlands metadata profiel op ISO 19119</a>.

INSPIRE specifiek zijn de aanvullende [invulinstructie dataset metadata](#invulinstructie-dataset-metadata) en [invulinstructie service metadata](#invulinstructie-service-metadata) beschikbaar. Deze invulinstructies staan verderop in de handreiking beschreven.

Op dit moment is voor INSPIRE de metadata gebaseerd op ISO 19115 en ISO 19119 standaard. DCAT is een standaard in opkomst, die veel in open data portalen wordt gebruikt. Het is mogelijk om de INSPIRE / ISO metadata te transformeneren naar DCAT-AP, zodat de metadata voor een bredere community beschikbaar is. Deze transformatie is uitgewerkt in de [INSPIRE good practice](#good-practices): <a href="https://inspire.ec.europa.eu/good-practice/geodcat-ap" target="_blank">GeoDCAT-AP</a>.

Zie voor meer informatie over metadata in het algemeen, het  <a href="https://www.geonovum.nl/geo-standaarden/metadata" target="_blank">dossier Metadata</a> op de Geonovum-website.

### Metadata van prioritaire datasets
Voor de prioritaire datasets zijn er aanvullende vereisten voor de metadata. Voor elke *directive* waar de data voor gebruikt wordt, wordt een trefwoord toegevoegd. Deze trefwoorden komen uit de Europese [INSPIRE registry](#inspire-registry)</a> en staan daar beschreven in het <a href="https://inspire.ec.europa.eu/metadata-codelist" target="_blank">INSPIRE metadata codelijstregister</a>. Op dit moment dienen voor twee soorten [prioritaire datasets](#prioritaire-datasets) deze trefwoorden worden opgenomen, namelijk voor de prioritaire datasets voor eReporting en voor de IACS-datasets.

De trefwoorden en thesaurus worden toegevoegd met *anchors* en *URI's*. Hoe dit moet worden opgenomen in de metadata staat [hier](#hoe-om-te-gaan-met-anchor-en-uri).

### Metadata en taal
In de invoeringsregels van INSPIRE voor metadata, is niet vastgelegd in welke taal metadata (en data) beschikbaar moet worden gesteld, wel dat het één van de officiele talen van de Europese Unie moet zijn. Deze in de bron (dataset en service) gebruikte taal en de metadata-taal worden in de metadata vastgelegd. 
Nederland heeft ervoor gekozen om de metadata in het Nederlands op te voeren. Als er aanvullend voor een extra taal wordt gekozen, dient deze consequent gehanteerd te worden. Stel je bijvoorbeeld de metadata ook in het Engels beschikbaar, dan dienen alle vrije tekstvelden in de metadata vertaald te worden. Denk daarbij ook aan de licentie. In het <a href="https://docs.geostandaarden.nl/md/mdprofiel-iso19115/#meertaligheid-metadata" target="_blank">Nederlands metadata profiel op ISO 19115</a> staat in een apart hoofdstuk beschreven hoe vrije tekstvelden in meerdere talen kunnen worden opgenomen.

De taalkeuze werkt ook door naar de services, daar wordt ook een deel van de metadata vastgelegd, bijvoorbeeld in de capabilities van een WMS. De services zijn echter in tegenstelling tot de metadata, mono-linguïstisch, voor elke ondersteunde taal zal er een ander document moeten zijn. Alle gerelateerde INSPIRE-servicesdocumenten, zoals  de legendatekst, de capability-documenten en de foutmeldingen, zullen eveneens in het Engels beschikbaar moeten zijn.

Als er met meertaligheid wordt gewerkt, hou dan rekening met het volgende:
- De metadata-taal is dezelfde als de default-taal van de services, in ons geval Nederlands.
- Als je de metadata gaat vertalen, zal dat voor alle vrijetekst-elementen moeten gebeuren. Denk daarbij ook aan de licenties van toegangsrestricties, etc.
- Voor elke ondersteunde taal in de service, moet ook een vertaling in de metadata aanwezig zijn.
- Voor elke ondersteunde taal in de service, zijn aparte capabilities-, legenda- en foutmeldingsdocumenten nodig.

### Gebruiksvoorwaarden
De gebruiksvoorwaarden worden opgenomen in de metadata. Wie geo-informatie van een ander gebruikt, moet weten of daarvoor voorwaarden gelden en zo ja, welke voorwaarden dat zijn. De Nederlandse overheid wil overheidsinformatie zoveel mogelijk gratis en zonder gebruiksvoorwaarden beschikbaar stellen. Dat kan met behulp van de ***Public Domain Mark*** of met de ***Creative Commons Zero (CC0)***-verklaring. Met beide gebruiksvoorwaarden zijn de gegevens door iedereen voor ieder doeleind te gebruiken. Het verschil is dat op gegevens met een Creative Commons-verklaring een auteurs-, databank- of ander recht van kracht is. Met de Creative Commons Zero (CC0) verklaring wordt afstand gedaan van deze rechten. Het ministerie van BZK hanteert Creative Commons Zero (CC0) als de voorkeurslicentie voor data van haar ministerie.

**Public Domain Mark**

Gegevens die met de Public Domain Mark beschikbaar zijn gesteld, kunnen door iedereen voor alle doeleinden worden gebruikt. Ook naamsvermelding kan niet geëist worden. Je vindt de tekst die bij de Public Domain Mark hoort op de <a href="https://creativecommons.org/publicdomain/mark/1.0/deed.nl" target="_blank">website van Creative Commons</a>.

**Creative Commons Zero**

Als er auteursrecht en/of databankenrecht rust op gegevens, of als bij wet, besluit of verordening het openbaarmaken van gegevens uitdrukkelijk is voorbehouden, is de Public Domain Mark niet mogelijk. Om ook in dit geval gegevens zonder verdere vereisten beschikbaar te stellen, kan de Creative Commons Zero (CC0) verklaring worden gebruikt. Met deze verklaring geeft de eigenaar aan de geldende rechten niet te zullen uitoefenen. Je vindt de tekst die bij de CC0-verklaring hoort op de <a href="https://creativecommons.org/publicdomain/zero/1.0/deed.nl" target="_blank">website van Creative Commons</a>.

**Gebruiksvoorwaarden in Nederland**

In Nederland is afgesproken om voor geo-informatie gebruik te maken van de gebruiksvoorwaarden van Creative Commons, tenzij dat niet mogelijk is. Dit “Creative Commons, tenzij”-beleid is in 2014 vastgesteld door het GI-beraad. <a href="https://creativecommons.org/choose/?lang=nl" target="_blank">Deze tool</a> kan gebruikt worden om een CC-licentie samen te stellen.

In sommige gevallen is het toch noodzakelijk om gebruiksvoorwaarden te handhaven, bijvoorbeeld door wetgeving. 

De gebruiksvoorwaarden, ook als daarvan wordt afgezien in Public Domain Mark of CC0-verklaring, worden opgenomen in de metadata. De instructie hiervoor is te vinden in de paragraaf [Invulinstructie dataset metadata](#invulinstructie-dataset-metadata).

## Dataset metadata

In de [Invulinstructie dataset metadata](#invulinstructie-dataset-metadata) zijn de INSPIRE specifieke instructies opgenomen, die als aanvulling gelden op <a href="https://docs.geostandaarden.nl/md/mdprofiel-iso19115/" target="_blank">Nederlands metadata profiel op ISO 19115</a>. Daarnaast zijn twee voorbeeld metadatabestanden beschikbaar, een [algemeen voorbeeldbestand](#voorbeeld-metadatabestand-xml-voor-inspire-dataset) en een [voorbeeldbestand voor de prioritaire datasets](#voorbeeld-metadatabestand-xml-voor-inspire-prioritaire-dataset).

### Invulinstructie dataset metadata
De onderstaande tabel geeft invulinstructies die van belang zijn bij INSPIRE-metadata-elementen. Let erop, dat er zowel verplichte ('Ja') als conditionele ('C') elementen in voorkomen. Zo kan bijvoorbeeld een aantal elementen pas worden ingevuld wanneer de dataharmonisatie is voltooid. Voor [prioritaire datasets](#prioritaire-datasets) is de aanvullende instructie over het gebruik van [*anchors*](#hoe-om-te-gaan-met-anchor-en-uri) bij het opnemen van de trefwoorden in de metadata ook in de invulinstructies meegenomen.


| Metadata-element 									| Longname 		| INSPIRE-verplicht | Omschrijving 	| Voorbeeldwaarde |
|------------										|-------------	|-------------		|------------	|-------|
| **URL**  											| MD_Metadata.distributionInfo> MD_Distribution.transferOptions> MD_DigitalTransferOptions.onLine> CI_OnlineResource.linkage | Ja | Voor INSPIRE wordt hier ten minste de URL van de view- en de downloadservice opgenomen naar het accesspoint (voor WMS en WFS is dat de capabilities). Als er meerdere datasets in één service worden ontsloten wordt hier ook het endpoint van elke dataset (zowel view als download) opgenomen. | http://inspirelab.geonovum.nl/test/rws/wms?request=GetCapabilities |
| **Protocol**  									| MD_Metadata.distributionInfo> MD_Distribution.transferOptions> MD_DigitalTransferOptions.onLine> CI_OnlineResource.protocol| Ja | Verplicht als er een URL is opgegeven. | xlink:href="http://www.opengis.net/def/serviceType/ogc/wms" OGC:WMS |
| **Applicatieprofiel**  							| MD_Metadata.distributionInfo> MD_Distribution.transferOptions> MD_DigitalTransferOptions.onLine> CI_OnlineResource.applicationProfile | Ja | Aanbevolen voor eenvoudigere dataservice-koppeling INSPIRE, hiermee wordt aangegeven dat aan betreffende technische specificatie wordt voldaan. Dit alleen opnemen voor het accesspoint (voor WMS en WFS is dat de capabilities). Kies een waarde uit http://inspire.ec.europa.eu/metadata-codelist/SpatialDataServiceType in een [anchor](#hoe-om-te-gaan-met-anchor-en-uri). | xlink:href="http://inspire.ec.europa.eu/metadata-codelist/SpatialDataServiceType/download Downloaddienst|
| **Naam**  										| MD_Metadata.distributionInfo> MD_Distribution.transferOptions> MD_DigitalTransferOptions.onLine> CI_OnlineResource.name| Ja | Het is verplicht als het protocol één van de volgende waardes heeft: OGC:WMS, OGC:WFS, OGC:WMTS, OGC:WCS en INSPIRE:Atom.| Gemeentegrenzen |
| **Omschrijving**  								| MD_Metadata.distributionInfo> MD_Distribution.transferOptions> MD_DigitalTransferOptions.onLine> CI_OnlineResource.description | | Aanbevolen dit zowel voor endPoints als ook voor accessPoints op te nemen. Kies een waarde uit http://inspire.ec.europa.eu/metadata-codelist/OnLineDescriptionCode/| xlink:href="http://inspire.ec.europa.eu/metadata-codelist/OnLineDescriptionCode/accessPoint accessPoint|
| **Trefwoord** 									| MD_Metadata.identificationInfo> MD_DataIdentification.descriptiveKeywords> MD_Keywords.keyword| Ja | INSPIRE vereist dat de naam van het thema als trefwoord wordt opgenomen uit de GEMET INSPIRE themes thesaurus | Hydrografie |
| **Naam van Thesaurus**  							| MD_Metadata.identificationInfo> MD_DataIdentification.descriptiveKeywords> MD_Keywords.thesaurusName> CI_Citation.title| Ja |Verplichte thesaurus voor INSPIRE | GEMET - INSPIRE themes, version 1.0|
| **Thesaurusdatum**  								| MD_Metadata.identificationInfo> MD_DataIdentification.descriptiveKeywords> MD_Keywords.thesaurusName> CI_Citation.date> CI_Date.date| Ja | De datum van publicatie van de INSPIRE thema thesaurus | 2008-06-01 |
| **Thesaurus-datumtype** 							| MD_Metadata.identificationInfo> MD_DataIdentification.descriptiveKeywords> MD_Keywords.thesaurusName> CI_Citation.date> CI_Date.dateType| Ja | Het datumtype | publicatie |
| **Trefwoord** 									| MD_Metadata.identificationInfo> MD_DataIdentification.descriptiveKeywords> MD_Keywords.keyword| Ja | INSPIRE vereist voor monitoring dat een trefwoord met de waarde *nationaal*, *regionaal* of *lokaal* voor ruimtelijke dekking wordt opgenomen uit de de codelijst http://inspire.ec.europa.eu/metadata-codelist/SpatialScope/ | xlink:href="http://inspire.ec.europa.eu/metadata-codelist/SpatialScope/national Nationaal |
| **Naam van Thesaurus**  							| MD_Metadata.identificationInfo> MD_DataIdentification.descriptiveKeywords> MD_Keywords.thesaurusName> CI_Citation.title| Ja | Verplichte thesaurus voor ruimtelijke dekking van datasets INSPIRE. | xlink:href="http://inspire.ec.europa.eu/metadata-codelist/SpatialScope Ruimtelijke dekking |
| **Thesaurusdatum**  								| MD_Metadata.identificationInfo> MD_DataIdentification.descriptiveKeywords> MD_Keywords.thesaurusName> CI_Citation.date> CI_Date.date| Ja | De datum van publicatie van de codelijst.| 2019-05-22 |
| **Thesaurus-datumtype** 							| MD_Metadata.identificationInfo> MD_DataIdentification.descriptiveKeywords> MD_Keywords.thesaurusName> CI_Citation.date> CI_Date.dateType| Ja | Het datumtype | publicatie |
| **Trefwoord** 									| MD_Metadata.identificationInfo> MD_DataIdentification.descriptiveKeywords> MD_Keywords.keyword| Ja | INSPIRE vereist voor prioritaire datasets dat een trefwoord wordt opgenomen uit de de codelijst http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset in een [anchor](#hoe-om-te-gaan-met-anchor-en-uri) | xlink:href="http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/AirQualityMonitoringStationsData-dir-2008-50 Monitoring stations (Richtlijn Luchtkwaliteit)|
| **Naam van Thesaurus**  							| MD_Metadata.identificationInfo> MD_DataIdentification.descriptiveKeywords> MD_Keywords.thesaurusName> CI_Citation.title| Ja | Verplichte thesaurus voor prioritaire datasets INSPIRE.| xlink:href="http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset INSPIRE prioritaire dataset|
| **Thesaurusdatum**  								| MD_Metadata.identificationInfo> MD_DataIdentification.descriptiveKeywords> MD_Keywords.thesaurusName> CI_Citation.date> CI_Date.date| Ja | De datum van publicatie van de codelijst.| 2018-04-04 |
| **Thesaurus-datumtype** 							| MD_Metadata.identificationInfo> MD_DataIdentification.descriptiveKeywords> MD_Keywords.thesaurusName> CI_Citation.date> CI_Date.dateType| Ja | Het datumtype | publicatie |
| **Overige beperkingen**  							| MD_Metadata.identificationInfo[1]/\*/resourceConstraints/\*/otherConstraint | Ja | Voor INSPIRE moet een waarde uit codelijst [ConditionsApplyingToAccessAndUse](http://inspire.ec.europa.eu/metadata-codelist/ConditionsApplyingToAccessAndUse/) worden opgegeven in een [anchor](#hoe-om-te-gaan-met-anchor-en-uri) | xlink:href="http://inspire.ec.europa.eu/metadata-codelist/ConditionsApplyingToAccessAndUse/noConditionsApply Geen beperkingen|
| **Overige beperkingen**  							| MD_Metadata.identificationInfo[1]/\*/resourceConstraints/\*/otherConstraint | Ja | Voor INSPIRE moet ook een waarde uit codelijst [LimitationsOnPublicAccess](http://inspire.ec.europa.eu/metadata-codelist/LimitationsOnPublicAccess/) worden opgegeven in een [anchor](#hoe-om-te-gaan-met-anchor-en-uri) | xlink:href="http://inspire.ec.europa.eu/metadata-codelist/LimitationsOnPublicAccess/noLimitations Geen beperkingen|
| **Ruimtelijk schema** 							| MD_Metadata.identificationInfo[1]/*/spatialRepresentationType | Ja | Voor INSPIRE moet dit element opgenomen worden. | vector |
| **Naam distributieformaat**  						| MD_Metadata.distributionInfo> MD_Distribution.distributionFormat> MD_Format.name| Ja| Het element invullen is verplicht als de dataset een INSPIRE dataset is. | xlink:href="http://inspire.ec.europa.eu/schemas/hy/4.0/HydroBase.xsd Hydrography GML application schema|
| **Versie distributieformaat**  					| MD_Metadata.distributionInfo> MD_Distribution.distributionFormat> MD_Format.version| Ja| Het element invullen is verplicht als de dataset een INSPIRE dataset is. | version 3.0; GML, version 3.2. |
| **Specificatie distributieformaat**  				| MD_Metadata.distributionInfo> MD_Distribution.distributionFormat> MD_Format.specification| Ja | Het element invullen is verplicht als de dataset een  INSPIRE dataset is. | xlink:href=http://inspire.ec.europa.eu/id/document/tg/hy Dataspecificatie hydrografie|
| **Specificatie titel** 							| MD_Metadata.dataQualityInfo> DQ_DataQuality.report[1]> DQ_DomainConsistency.result> DQ_ConformanceResult.specification> CI_Citation.title| Ja | Hiermee word aangegeven dat de data volgens de INSPIRE-verordening is. Voor as-is datasets op false zetten. Voor alle thema's is dit verplicht om op te nemen. | VERORDENING (EU) Nr. 1089/2010 VAN DE COMMISSIE van 23 november 2010 ter uitvoering van Richtlijn 2007/2/EG van het Europees Parlement en de Raad betreffende de interoperabiliteit van verzamelingen ruimtelijke gegevens en van diensten met betrekking tot ruimtelijke gegevens |
| **Specificatie datum**  							| MD_Metadata.dataQualityInfo> DQ_DataQuality.report[1]> DQ_DomainConsistency.result> DQ_ConformanceResult.specification> CI_Citation.date> CI_Date.date| Ja | Publicatiedatum van de Inspire-verordening | 2010-12-08 |
| **Specificatie datumtype**  						| MD_Metadata.dataQualityInfo> DQ_DataQuality.report[*]> DQ_DomainConsistency.result> DQ_ConformanceResult.specification> CI_Citation.date> CI_Date.dateType| Ja | | publicatie |
| **Verklaring**  									| MD_Metadata.dataQualityInfo> DQ_DataQuality.report[*]> DQ_DomainConsistency.result> DQ_ConformanceResult.explanation| Ja | | data is volledig conform de vereisten van de Verordening|
| **Indicatie van conformiteit met de specificatie**| MD_Metadata.dataQualityInfo> DQ_DataQuality.report[*]> DQ_DomainConsistency.result> DQ_ConformanceResult.pass| Ja |  | vinkje true / false |
| **Specificatie titel** 							| MD_Metadata.dataQualityInfo> DQ_DataQuality.report[2]> DQ_DomainConsistency.result> DQ_ConformanceResult.specification> CI_Citation.title| Ja | Hiermee kan de conformiteit met de technische specificaties worden aangegeven | xlink:href="http://inspire.ec.europa.eu/id/document/tg/au Data specificatie administratieve eenheden|
| **Specificatie datum**  							| MD_Metadata.dataQualityInfo> DQ_DataQuality.report[2]> DQ_DomainConsistency.result> DQ_ConformanceResult.specification> CI_Citation.date> CI_Date.date| Ja | Publicatiedatum van de versie van de INSPIRE-dataspecificatie die gebruikt is.| 2010-05-03 |
| **Specificatie datumtype**  						| MD_Metadata.dataQualityInfo> DQ_DataQuality.report[*]> DQ_DomainConsistency.result> DQ_ConformanceResult.specification> CI_Citation.date> CI_Date.dateType| Ja | | publicatie |
| **Verklaring**  									| MD_Metadata.dataQualityInfo> DQ_DataQuality.report[*]> DQ_DomainConsistency.result> DQ_ConformanceResult.explanation| Ja | | De data is valide volgens de EU INSPIRE validator |
| **Indicatie van conformiteit met de specificatie**| MD_Metadata.dataQualityInfo> DQ_DataQuality.report[*]> DQ_DomainConsistency.result> DQ_ConformanceResult.pass| Ja | Resultaat van de validatie met de EU INSPIRE validator | vinkje true / false |
| **Type waarde**  									| MD_Metadata.dataQualityInfo> DQ_DataQuality.report> DQ_TopologicalConsistency.result> DQ_QuantitativeResult.valueUnit| C | Verplicht voor INSPIRE-datasets als voor netwerken de aansluiting van hartlijnen niet is verzekerd.| cm |
| **Topologische samenhang**  						| MD_Metadata.dataQualityInfo> DQ_DataQuality.report> DQ_TopologicalConsistency.result> DQ_QuantitativeResult.value| C | Verplicht voor INSPIRE-datasets als voor netwerken de aansluiting van hartlijnen niet is verzekerd.| 3 |
| **Rol organisatie metadata** 						| MD_Metadata.contact> CI_ResponsibleParty.role| Ja | Het betreft de rol van de organisatie. Inspire verplicht hier om *contactpunt* in te vullen. | contactpunt |


**Aandachtspunten**

De conformiteit van datasets en services wordt in de metadata opgenomen. Gebruik voor het checken van de conformiteit de validators, zoals genoemd bij [validatie](#validatie). Op basis daarvan wordt het metadata element Indicatie van conformiteit met de specificatie in de metadata ingevuld.
Conformiteit kan opgenomen worden voor meerdere specificaties. De elementengroep Specificatie (titel, datum, verklaring en conformiteit) waar de conformiteit wordt opgegegeven komt daardoor meerdere keren voor, telkens met een andere specificatie.  
Ook voor "as-is" data is het opgeven van de conformiteit met de verordening verplicht. 


Voor datasets en dataset-series die onder INSPIRE vallen, dient men de thema’s waar de data onder valt op te nemen als trefwoord. Deze INSPIRE-thema’s zijn te vinden in de <a href="http://www.eionet.europa.eu/gemet/inspire_themes" target="_blank">GEMET INSPIRE themes thesaurus</a>. Voor INSPIRE datasets moet tenminste één trefwoord uit deze thesaurus in de metadata worden opgenomen. Als een trefwoord uit de GEMET INSPIRE themes thesaurus ontbreekt, kan de metadata niet getoond worden in het Europese INSPIRE geoportal.
Het is ook mogelijk daarnaast zelfgedefinieerde trefwoorden, of trefwoorden uit een andere thesaurus op te nemen. Het element trefwoord, in combinatie met de thesaurus komt dan meerdere keren voor in de metadata. 




### Hoe om te gaan met anchor en URI
Voor INSPIRE is het gebruik van een *anchor* in plaats van vrije tekst in een characterstring in een aantal metadata elementen verplicht. In een anchor wordt een URI en een label opgenomen. De URI is machine leesbaar; het label is voor mensen leesbaar en wordt in de taal waarin de metadata is beschreven opgenomen. Voordeel van URI's is dat deze altijd hetzelfde zijn onafhankelijk van de gehanteerde taal. Dat maakt het dat op Europees niveau bijvoorbeeld de trefwoorden voor prioriaire datasets doorzoekbaar zijn. Als ieder het trefwoord alleen in zijn eigen taal opneemt, is dat een stuk lastiger. 

Maak waar mogelijk gebruik van een anchor, ook waar het niet verplicht is, bijvoorbeeld ook bij het opgeven van de specificatie (Verordening en INSPIRE TG) bij de conformiteit. Als dit in een string element wordt opgegeven, moet de titel exact worden overgenomen.


**Het toevoegen van trefwoorden met URI's in een anchor**

De volgende acties zijn nodig wanneer trefwoord en thesaurus worden toegevoegd met een anchor en URI (uitgewerkt voor een prioritaire dataset):
1. Ga naar de <a href="http://inspire.ec.europa.eu/registry" target="_blank">INSPIRE Registry</a> (http://inspire.ec.europa.eu/registry).
2. Ga naar de <a href="http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset" target="_blank">INSPIRE prioritaire dataset metadata codelijst</a>  (http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset).
3. Ga naar de betreffende prioritaire dataset.
4. Kopieer de URI en het Nederlands label.
5. Voeg deze als trefwoord toe aan de metadata samen met de verwijzing naar de thesaurus met *titel*, *datum* en *type datum*. Hiervoor kan onderstaande XML-voorbeeld in de XML worden gekopieerd.
6. Als de dataset voor meerdere rapportageverplichtingen wordt gebruikt, voor elke verplichting de juiste trefwoorden zoeken en toevoegen.
7. Bewaar de aanpassingen en [valideer je metadata](#validatie).

**Voorbeeld**

<pre class="xml">
&lt;!-- Trefwoord voor reporting verplichting voor INSPIRE --&gt;
&lt;gmd:descriptiveKeywords&gt;
  &lt;gmd:MD_Keywords&gt;
    &lt;gmd:keyword&gt;
      &lt;gmx:Anchor xlink:href="http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/AirQualityMonitoringStationsData-dir-2008-50"&gt;Monitoring stations (Richtlijn Luchtkwaliteit)&lt;/gmx:Anchor&gt;
    &lt;/gmd:keyword&gt;
&lt;!-- Eventueel hier een tweede trefwoord voor tweede reporting verplichting voor INSPIRE --&gt;
    &lt;gmd:thesaurusName&gt;
      &lt;gmd:CI_Citation&gt;
        &lt;gmd:title&gt;
          &lt;gmx:Anchor xlink:href="http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset"&gt;INSPIRE prioritaire dataset&lt;/gmx:Anchor&gt;
        &lt;/gmd:title&gt;
        &lt;gmd:date&gt;
          &lt;gmd:CI_Date&gt;
            &lt;gmd:date&gt;
              &lt;gco:Date&gt;2018-04-04&lt;/gco:Date&gt;
            &lt;/gmd:date&gt;
            &lt;gmd:dateType&gt;
              &lt;gmd:CI_DateTypeCode codeList="http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode" codeListValue="publication"/&gt;
            &lt;/gmd:dateType&gt;
          &lt;/gmd:CI_Date&gt;
        &lt;/gmd:date&gt;
      &lt;/gmd:CI_Citation&gt;
    &lt;/gmd:thesaurusName&gt; 
  &lt;/gmd:MD_Keywords&gt;
&lt;/gmd:descriptiveKeywords&gt;
</pre>

**Voorbeeld INSPIRE thema uit thesaurus**
<pre class="xml">
&lt;gmd:MD_Keywords&gt;
 &lt;gmd:keyword&gt;
    &lt;gmx:Anchor xlink:href="http://www.eionet.europa.eu/gemet/nl/inspire-theme/ps"&gt;Beschermde gebieden&lt;/gmx:Anchor&gt;
 &lt;/gmd:keyword&gt;
 &lt;gmd:thesaurusName&gt;
   &lt;gmd:CI_Citation&gt;
      &lt;gmd:title&gt;
         &lt;gmx:Anchor xlink:href="http://www.eionet.europa.eu/gemet/nl/inspire-themes/"&gt;GEMET - INSPIRE themes, version 1.0 &lt;/gmx:Anchor>&gt;
      &lt;/gmd:title&gt;
      &lt;gmd:date&gt;
         &lt;gmd:CI_Date&gt;
             &lt;gmd:date&gt;
                  &lt;gco:Date&gt;2008-06-01&lt;/gco:Date&gt;
             &lt;/gmd:date&gt;
             &lt;gmd:dateType&gt;
                 &lt;gmd:CI_DateTypeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/Codelist/ML_gmxCodelists.xml#CI_DateTypeCode" codeListValue="publication"&gt;publication&lt;/gmd:CI_DateTypeCode&gt;
             &lt;/gmd:dateType&gt;
         &lt;/gmd:CI_Date&gt;
      &lt;/gmd:date&gt;
   &lt;/gmd:CI_Citation&gt;
&lt;/gmd:thesaurusName&gt;
</pre>


### Voorbeeld metadatabestand (XML) voor INSPIRE dataset

Hier is een <a href="https:docs/Voorbeeld_Metadata_Dataset_2022.xml" target="_blank">voorbeeld-metadatabestand voor een dataset</a> met trefwoorden voor een prioritaire dataset te vinden.


## Service metadata

De meeste OGC-services, zoals WMS en WFS hebben een capabilities-document dat tijdens het ontwikkelen van de service aangemaakt wordt. Het is een beschrijving van de informatie-inhoud van de dienst. Buiten de informatie over de service zelf, bijvoorbeeld de mogelijke request parameters, bevatten de capabilities ook metadata zoals trefwoorden en verantwoordelijke organisatie. Het is dit XML-document dat als antwoord op het GetCapabilities-request door de server terug aan de client gegeven wordt. In dit capabilities-document worden automatisch enkele, maar niet alle voor INSPIRE verplichte, metadata elementen toegevoegd. Het automatisch gegenereerde document is dus niet volledig en dient aangevuld te worden met de voor INSPIRE verplichte en conditionele velden, alvorens het ‘gepubliceerd’ wordt. Het aanvullen kan door de capabilities uit te breiden met de verplichtte elementen, of door te verwijzen naar het ISO 19119 conforme XML-bestand waar alle metadata-elementen in beschreven zijn. Daarbij is het van belang dat de metadata beschrijvingen die in de capabilities zijn opgenomen, inhoudelijk overeenkomen met de corresponderende metadata die beschreven is in het volledige metadata, ISO 19119 conforme XML, bestand.

Er zijn verschillende soorten *spatial data services (SDS)*, naast de netwerk services, zoals de view en download services, zijn er ook de invocable, interoperable en harmonised spatial data services. In het hoofdstuk over [Services](#services) staat in de paragraaf [Spatial Data Services (SDS)](#spatial-data-services-sds) beschreven welke soorten SDS-sen er zijn. Aan de hand van het stroomschema in deze paragraaf kan bepaald worden tot welke categorie een service behoord. Alle services dienen in ieder geval van service metadata te worden voorzien. In de [Invulinstructie service metadata](#invulinstructie-service-metadata) zijn daarvoor de INSPIRE specifieke instructies opgenomen, die als aanvulling gelden op <a href="https://docs.geostandaarden.nl/md/mdprofiel-iso19119/" target="_blank"> Nederlands metadata profiel op ISO 19119</a>. Voor de invocable, interoperable en harmonised spatial data services gelden aanvullende vereisten. 

Per soort spatial data service (SDS), staat in de volgende paragraven beschreven wat de metadata eisen zijn.


### Invulinstructie service metadata

De onderstaande tabel geeft invulinstructies die van belang zijn bij INSPIRE-metadata-elementen voor alle INSPIRE services. Hiermee kan aan de metadata vereisten voor netwerkservices, zoals de view en download services, worden voldaan. Voor de overige INSPIRE Spatial Data Services (SDS) geldt onderstaande ook behalve de instructies voor de conformiteit. De aanvullende instructies daarvoor staan in de volgende paragrafen.

De elementen Specificatie Titel, Specificatie Datum, Specificatie Datum Type, Verklaring en Indicatie van conformiteit worden meerdere keren opgenomen. Voor alle netwerk services is het opgeven van de conformiteit met de Verordening netwerkdiensten verplicht. Aanbevolen wordt om ook de conformiteit met de technische specificaties,voor view en download etc. op te nemen.

| Metadata-element | Longname | INSPIRE-verplicht | Omschrijving | Voorbeeldwaarde |
| ---------------- | -------- | ----------------- | ------------ | --------------- |
| **Trefwoord**	| MD_Metadata.identificationInfo> SV_ServiceIdentification.descriptiveKeywords> MD_Keywords.keyword | Ja | Voor INSPIRE-services dient er op z’n minst één keyword de categorie of subcategorie te bevatten uit deel D.4 van de commissie regulation 1205/2008 | infoMapAccessService |
| **Trefwoord**	| MD_Metadata.identificationInfo> SV_ServiceIdentification.descriptiveKeywords> MD_Keywords.keyword | Ja | Voor INSPIRE-services wordt ook het thema als trefwoord opgenomen uit de GEMET INSPIRE themes thesaurus | Hydrografie |
| **Naam van Thesaurus** | MD_Metadata.identificationInfo> SV_ServiceIdentification.descriptiveKeywords> MD_Keywords.thesaurusName> CI_Citation.title | C | Verplichte thesaurus voor INSPIRE. | GEMET - INSPIRE themes, version 1.0 |
| **Thesaurus Datum** | MD_Metadata.identificationInfo> SV_ServiceIdentification.descriptiveKeywords> MD_Keywords.thesaurusName> CI_Citation.date> CI_Date.date | C | De datum van publicatie | 2008-06-01 |
| **Thesaurus Datum Type** | MD_Metadata.identificationInfo> SV_ServiceIdentification.descriptiveKeywords> MD_Keywords.thesaurusName> CI_Citation.date> CI_Date.dateType | C | Het datumtype | publicatie |
| **Overige beperkingen** | MD_Metadata.identificationInfo> SV_ServiceIdentification.resourceConstraints> MD_LegalConstraints.otherConstraint | Ja | Voor INSPIRE moet een waarde uit codelijst [ConditionsApplyingToAccessAndUse](http://inspire.ec.europa.eu/metadata-codelist/ConditionsApplyingToAccessAndUse/) worden opgegeven in een [anchor](#hoe-om-te-gaan-met-anchor-en-uri) | xlink:href="http://inspire.ec.europa.eu/metadata-codelist/ConditionsApplyingToAccessAndUse/noConditionsApply Geen beperkingen|
| **Overige beperkingen**| MD_Metadata.identificationInfo> SV_ServiceIdentification.resourceConstraints> MD_LegalConstraints.otherConstraint | Ja | Voor INSPIRE moet ook een waarde uit codelijst [LimitationsOnPublicAccess](http://inspire.ec.europa.eu/metadata-codelist/LimitationsOnPublicAccess/) worden opgegeven in een [anchor](#hoe-om-te-gaan-met-anchor-en-uri) | xlink:href="http://inspire.ec.europa.eu/metadata-codelist/LimitationsOnPublicAccess/noLimitations Geen beperkingen|
| **Specificatie Titel** | MD_Metadata.dataQualityInfo> DQ_DataQuality.report> DQ_DomainConsistency.result> DQ_ConformanceResult.specification> CI_Citation.title | ja | Voor INSPIRE netwerk services dient de conformiteit met de verordening  netwerk diensten opgenomen te worden | VERORDENING (EG) Nr. 976/2009 VAN DE COMMISSIE van 19 oktober 2009 tot uitvoering van Richtlijn 2007/2/EG van het Europees Parlement en de Raad wat betreft de netwerkdiensten |
| **Specificatie Datum** | MD_Metadata.dataQualityInfo> DQ_DataQuality.report> DQ_DomainConsistency.result> DQ_ConformanceResult.specification> CI_Citation.date> CI_Date.date | ja | Publicatiedatum van de Inspire verordening | 2009-10-19 |
| **SpecificatieDatum Type** | MD_Metadata.dataQualityInfo> DQ_DataQuality.report> DQ_DomainConsistency.result> DQ_ConformanceResult.specification> CI_Citation.date> CI_Date.dateType | ja | | Publication |
| **Verklaring** | MD_Metadata.dataQualityInfo> DQ_DataQuality.report> DQ_DomainConsistency.result> DQ_ConformanceResult.explanation | ja | |Service voldoet aan de vereisten in de Verordening|
| **Indicatie van conformiteit met de specificatie** | MD_Metadata.dataQualityInfo> DQ_DataQuality.report> DQ_DomainConsistency.result> DQ_ConformanceResult.pass | ja | | true |
| **Specificatie Titel** | MD_Metadata.dataQualityInfo> DQ_DataQuality.report> DQ_DomainConsistency.result> DQ_ConformanceResult.specification> CI_Citation.title | ja | Voor INSPIRE netwerk services dient de conformiteit met de technische specificaties  (view, download etc) opgenomen te worden | Technical Guidance for the implementation of INSPIRE View Services |
| **Specificatie Datum** | MD_Metadata.dataQualityInfo> DQ_DataQuality.report> DQ_DomainConsistency.result> DQ_ConformanceResult.specification> CI_Citation.date> CI_Date.date | ja | Publicatiedatum van de Inspire technische specificatie | 2013-04-04 |
| **SpecificatieDatum Type** | MD_Metadata.dataQualityInfo> DQ_DataQuality.report> DQ_DomainConsistency.result> DQ_ConformanceResult.specification> CI_Citation.date> CI_Date.dateType | ja | | Publication |
| **Verklaring** | MD_Metadata.dataQualityInfo> DQ_DataQuality.report> DQ_DomainConsistency.result> DQ_ConformanceResult.explanation | ja | |Service valide volgens de EU INSPIRE validator |
| **Indicatie van conformiteit met de specificatie** | MD_Metadata.dataQualityInfo> DQ_DataQuality.report> DQ_DomainConsistency.result> DQ_ConformanceResult.pass | ja | Resultaat van validatie met de EU INSPIRE validator| true |
| **Rol organisatie metadata** | MD_Metadata.contact> CI_ResponsibleParty.role | Ja | Het betreft de rol van de organisatie. Inspire verplicht hier om contactpunt in te vullen. | pointOfContact |

### Voorbeeldbestand XML voor INSPIRE service-metadata

Hier is een <a href="https:docs/Voorbeeld_Metadata_Services_2022.xml" target="_blank">voorbeeld-metadatabestand voor een fictieve service</a> te vinden.


## Spatial data services (SDS) metadata

### Invulinstructie invocable SDS metadata

Alle services dienen van service metadata te worden voorzien. In de [Invulinstructie service metadata](#invulinstructie-service-metadata) zijn daarvoor de INSPIRE specifieke instructies voor alle SDS soorten opgenomen, die als aanvulling gelden op <a href="https://docs.geostandaarden.nl/md/mdprofiel-iso19119/" target="_blank"> Nederlands metadata profiel op ISO 19119</a>.

Spatial Data Services van de categorie *invocable* wordt aanvullend voorzien van metadata over de conformiteit met verschillende specificaties.  
In plaats van de conformiteit met de netwerk verordening (VERORDENING (EG) Nr. 976/2009 VAN DE COMMISSIE van 19 oktober 2009 tot uitvoering van Richtlijn 2007/2/EG van het Europees Parlement en de Raad wat betreft de netwerkdiensten), wordt de conformiteit met de 'VERORDENING (EU) Nr. 1089/2010 VAN DE COMMISSIE van 23 november 2010 ter uitvoering van Richtlijn 2007/2/EG van het Europees Parlement en de Raad betreffende de interoperabiliteit van verzamelingen ruimtelijke gegevens en van diensten met betrekking tot ruimtelijke gegevens' opgenomen. Deze verordening bevat naast de specificaties voor geharmoniseerde datasets, ook een deel over de diensten (services) daarop. Daarnaast wordt ook middels de conformiteit opgegeven, tot welke categorie de Spatial Data Service behoort en volgens welke technische specificatie de service is gemaakt.

 In onderstaande tabel zijn de aanvullende instructies voor conformiteit van de invocable spatial data services opgenomen.
 
 | Metadata-element | Longname | Inhoud over | Omschrijving | Waarde |
| ---------------- | -------- | ----------------- | ------------ | --------------- |
| **Specificatie titel** 							| MD_Metadata.dataQualityInfo> DQ_DataQuality.report[1]> DQ_DomainConsistency.result> DQ_ConformanceResult.specification> CI_Citation.title| VERORDENING | Hiermee word aangegeven dat het een spatial data service volgens de INSPIRE-verordening is.| VERORDENING (EU) Nr. 1089/2010 VAN DE COMMISSIE van 23 november 2010 ter uitvoering van Richtlijn 2007/2/EG van het Europees Parlement en de Raad betreffende de interoperabiliteit van verzamelingen ruimtelijke gegevens en van diensten met betrekking tot ruimtelijke gegevens |
| **Specificatie datum**  							| MD_Metadata.dataQualityInfo> DQ_DataQuality.report[1]> DQ_DomainConsistency.result> DQ_ConformanceResult.specification> CI_Citation.date> CI_Date.date| VERORDENING | Publicatiedatum van de Inspire-verordening | 2010-12-08 |
| **Specificatie datumtype**  						| MD_Metadata.dataQualityInfo> DQ_DataQuality.report[*]> DQ_DomainConsistency.result> DQ_ConformanceResult.specification> CI_Citation.date> CI_Date.dateType| VERORDENING | | publicatie |
| **Verklaring**  									| MD_Metadata.dataQualityInfo> DQ_DataQuality.report[*]> DQ_DomainConsistency.result> DQ_ConformanceResult.explanation| VERORDENING | |Deze service voldoet aan de vereisten voor invocable spatial data services |
| **Indicatie van conformiteit met de specificatie**| MD_Metadata.dataQualityInfo> DQ_DataQuality.report[*]> DQ_DomainConsistency.result> DQ_ConformanceResult.pass| VERORDENING | zie stroomschema | vinkje true |
| **Specificatie titel** | MD_Metadata.dataQualityInfo> DQ_DataQuality.report> DQ_DomainConsistency.result> DQ_ConformanceResult.specification> CI_Citation.title | Technische specificatie | Voor INSPIRE spatial data services dient de conformiteit met de technische specificatie waaraan de service voldoet opgenomen te worden |bijvoorbeeld OpenGIS Web Feature Service 2.0 Interface Standard|
| **Specificatie Datum** | MD_Metadata.dataQualityInfo> DQ_DataQuality.report> DQ_DomainConsistency.result> DQ_ConformanceResult.specification> CI_Citation.date> CI_Date.date | Technische specificatie | Publicatiedatum van de technische specificatie | 2010-11-02 |
|**SpecificatieDatum Type** | MD_Metadata.dataQualityInfo> DQ_DataQuality.report> DQ_DomainConsistency.result> DQ_ConformanceResult.specification> CI_Citation.date> CI_Date.dateType | Technische specificatie | | Publication |
| **Verklaring**| MD_Metadata.dataQualityInfo> DQ_DataQuality.report> DQ_DomainConsistency.result> DQ_ConformanceResult.explanation | Technische specificatie | | is conform OGC WFS 2.0 specificatie|
| **Indicatie van conformiteit met de specificatie** | MD_Metadata.dataQualityInfo> DQ_DataQuality.report> DQ_DomainConsistency.result> DQ_ConformanceResult.pass | Technische specificatie | | true |
|**Specificatie Titel** | MD_Metadata.dataQualityInfo> DQ_DataQuality.report> DQ_DomainConsistency.result> DQ_ConformanceResult.specification> CI_Citation.title | Categorie SDS | Voor INSPIRE spatial data services dient de conformiteit met de categorie  opgenomen te worden in een [anchor](#hoe-om-te-gaan-met-anchor-en-uri) | http://inspire.ec.europa.eu/id/ats/metadata/2.0/sds-invocable met label invocable |
| **Specificatie Datum** | MD_Metadata.dataQualityInfo> DQ_DataQuality.report> DQ_DomainConsistency.result> DQ_ConformanceResult.specification> CI_Citation.date> CI_Date.date | Categorie SDS | Publicatiedatum van de Inspire technische specificatie | 2014-11-12 |
| **SpecificatieDatum Type** | MD_Metadata.dataQualityInfo> DQ_DataQuality.report> DQ_DomainConsistency.result> DQ_ConformanceResult.specification> CI_Citation.date> CI_Date.dateType | Categorie SDS | | Publication |
| **Verklaring** | MD_Metadata.dataQualityInfo> DQ_DataQuality.report> DQ_DomainConsistency.result> DQ_ConformanceResult.explanation | Categorie SDS | | invocable service |
| **Indicatie van conformiteit met de specificatie** | MD_Metadata.dataQualityInfo> DQ_DataQuality.report> DQ_DomainConsistency.result> DQ_ConformanceResult.pass | Categorie SDS | | true |
| **servicetype** | MD_Metadata.identificationInfo[1]/*/serviceType |  | Het betreft het servicetype | other |


### Invulinstructie interoperable SDS metadata

Alle services dienen van service metadata te worden voorzien. In de [Invulinstructie service metadata](#invulinstructie-service-metadata) zijn daarvoor de INSPIRE specifieke instructies voor alle SDS soorten opgenomen, die als aanvulling gelden op <a href="https://docs.geostandaarden.nl/md/mdprofiel-iso19119/" target="_blank"> Nederlands metadata profiel op ISO 19119</a>.

Spatial Data Services van de categorie interoperable moeten daarnaast zowel voldoen aan de [Invocable SDS](#invulinstructie-invocable-sds-metadata) instructies en de onderstaande instructies:

1. **Coördinaat referentie systeem**: alle CRS waarin een service beschikbaar is moeten worden opgegeven middels een URI. Gebruik voor elke URI een apart metadata element. Bijvoorbeeld:

  - http://www.opengis.net/def/crs/EPSG/0/4937 (ETRS 89) 
  - http://www.opengis.net/def/crs/EPSG/0/4326 (WGS84) 
  - http://www.opengis.net/def/crs/EPSG/0/28992 (RD)


2. **Kwaliteit van de service**. Dit is de minimum kwaliteit van de service die wordt bepaald door de verantwoordelijke partij voor die service met een verwachtte geldigheid gedurende een langere periode. De kwaliteit van de service moet voor drie criteria worden opgenomen:
	- *Beschikbaarheid*: Ondergrens van het geraamde percentage van de tijd die de dienst beschikbaar is op jaarbasis.
	- *Performance*: De maximale responstijd waarbinnen een typisch verzoek aan de service kan worden uitgevoerd in een normale situatie.
	- *Capaciteit*: Ondergrens van het maximum aantal gelijktijdige verzoeken dat kan worden voltooid binnen de grenzen van de gedeclareerde performance.

In onderstaande tabel zijn de invulinstructies voor de kwaliteit van service opgenomen.

 | Metadata-element | Longname | Inhoud over | Omschrijving | Waarde |
| ---------------- | -------- | ----------------- | ------------ | --------------- |
| **Name of measure**|MD_Metadata.dataQualityInfo> DQ_DataQuality.report> DQ_ConceptualConsistency.nameOfMeasure| Performance | Hiermee word aangegeven welk criterium hier beschreven wordt, de waarde wordt opgenomen in en  [anchor](#hoe-om-te-gaan-met-anchor-en-uri) | http://inspire.ec.europa.eu/metadata-codelist/QualityOfServiceCriteria/performance |
| **Measure description**|MD_Metadata.dataQualityInfo> DQ_DataQuality.report> DQ_ConceptualConsistency.measureDescription| Performance | | De tijd waarbinnen een verzoek aan de service kan worden uitgevoerd, uitgedrukt in seconden |
| **Eenheid**| MD_Metadata.dataQualityInfo> DQ_DataQuality.report> DQ_ConceptualConsistency.result> DQ_QuantitativeResult.valueUnit| Performance | |http://www.opengis.net/def/uom/SI/second|
| **Waarde**| DQ_DataQuality.report> DQ_ConceptualConsistency.result> DQ_QuantitativeResult.value| Performance |  | 2|
| **Name of measure**|MD_Metadata.dataQualityInfo> DQ_DataQuality.report> DQ_ConceptualConsistency.nameOfMeasure| Availability | Hiermee word aangegeven welk criterium hier beschreven wordt, de waarde wordt opgenomen in en  [anchor](#hoe-om-te-gaan-met-anchor-en-uri) | http://inspire.ec.europa.eu/metadata-codelist/QualityOfServiceCriteria/availability |
| **Measure description**| MD_Metadata.dataQualityInfo> DQ_DataQuality.report> DQ_ConceptualConsistency.measureDescription| Availability | | Het percentage van de tijd dat de dienst beschikbaar is op jaarbasis|
| **Eenheid**| MD_Metadata.dataQualityInfo> DQ_DataQuality.report> DQ_ConceptualConsistency.result> DQ_QuantitativeResult.valueUnit| Availability | |urn:ogc:def:uom:OGC::percent|
| **Waarde**| DQ_DataQuality.report> DQ_ConceptualConsistency.result> DQ_QuantitativeResult.value| Availability | waarde tussen 0 en 100 | 80|
| **Name of measure**|MD_Metadata.dataQualityInfo> DQ_DataQuality.report> DQ_ConceptualConsistency.nameOfMeasure| Capacity | Hiermee word aangegeven welk criterium hier beschreven wordt, de waarde wordt opgenomen in en  [anchor](#hoe-om-te-gaan-met-anchor-en-uri) | http://inspire.ec.europa.eu/metadata-codelist/QualityOfServiceCriteria/capacity |
| **Measure description**| MD_Metadata.dataQualityInfo> DQ_DataQuality.report> DQ_ConceptualConsistency.measureDescription| Capacity | | Het maximum aantal gelijktijdige verzoeken dat kan worden voltooid met de vermelde performance |
| **Eenheid**| MD_Metadata.dataQualityInfo> DQ_DataQuality.report> DQ_ConceptualConsistency.result> DQ_QuantitativeResult.valueUnit| Capacity | |http://www.opengis.net/def/uom/OGC/1.0/unity|
| **Waarde**| DQ_DataQuality.report> DQ_ConceptualConsistency.result> DQ_QuantitativeResult.value| Capacity | integer | 2|


3. **Categorie van de Spatial data service**.
Middels de conformiteit wordt opgegeven tot welke categorie de Spatial Data Service behoort.

 | Metadata-element | Longname | Inhoud over | Omschrijving | Waarde |
| ---------------- | -------- | ----------------- | ------------ | --------------- |
|**Specificatie Titel** | MD_Metadata.dataQualityInfo> DQ_DataQuality.report> DQ_DomainConsistency.result> DQ_ConformanceResult.specification> CI_Citation.title | Categorie SDS | Voor INSPIRE spatial data services dient de conformiteit met de categorie  opgenomen te worden in een [anchor](#hoe-om-te-gaan-met-anchor-en-uri) | http://inspire.ec.europa.eu/id/ats/metadata/2.0/sds-interoperable met label interoperable |
| **Specificatie Datum** | MD_Metadata.dataQualityInfo> DQ_DataQuality.report> DQ_DomainConsistency.result> DQ_ConformanceResult.specification> CI_Citation.date> CI_Date.date | Categorie SDS | Publicatiedatum van de Inspire technische specificatie | 2014-11-12 |
| **SpecificatieDatum Type** | MD_Metadata.dataQualityInfo> DQ_DataQuality.report> DQ_DomainConsistency.result> DQ_ConformanceResult.specification> CI_Citation.date> CI_Date.dateType | Categorie SDS | | Publication |
| **Verklaring** | MD_Metadata.dataQualityInfo> DQ_DataQuality.report> DQ_DomainConsistency.result> DQ_ConformanceResult.explanation | Categorie SDS | | interoperablee service |
| **Indicatie van conformiteit met de specificatie** | MD_Metadata.dataQualityInfo> DQ_DataQuality.report> DQ_DomainConsistency.result> DQ_ConformanceResult.pass | Categorie SDS | | true |



4. Er zijn aanvullende vereisten voor **verantwoordelijke organisatie**, deze zal in ieder geval de beschrijving bevatten van de organisatie die de verantwoordelijkheid heeft geaccepteerd en de zorg draagt voor het beheer van de service. De rol van de organisatie is beheerder.

5. Er zijn aanvullende vereisten voor **restricties voor toegang en gebruik**. Hier moeten ook de "technische restricties" worden aangegeven, in één instantie van accessConstraints of useConstraints. Dit komt grotendeels overeen met de huidige invulling van [toegangsrestricties](#gebruiksvoorwaarden), de URL naar de Creative Commons licenties worden als technische restricties gezien.


### Invulinstructie harmonised SDS metadata

Alle services dienen van service metadata te worden voorzien. In de [Invulinstructie service metadata](#invulinstructie-service-metadata) zijn daarvoor de INSPIRE specifieke instructies voor alle SDS soorten opgenomen, die als aanvulling gelden op <a href="https://docs.geostandaarden.nl/md/mdprofiel-iso19119/" target="_blank"> Nederlands metadata profiel op ISO 19119</a>.

Spatial Data Services van de categorie Harmonised moeten daarnaast zowel voldoen aan de de [Interoperable SDS](#invulinstructie-interoperable-sds-metadata) instructies en de onderstaande instructies.

In de harmonised service metadata wordt informatie over de operaties die een service kan uitvoeren opgenomen. Deze informatie kan op twee verschillende manieren beschikbaar worden gesteld.

- *Optie 1*: Alle operaties en de lijst van connectpunten voor die operaties, samen met de informatie over de vereiste en optionele parameters voor elke operatie wordt geleverd door het access point van de dienst. Dit acces point wordt ook in de SV_OperationMetadata opgenomen. De operaties die mogelijk zijn, worden dan niet apart in de metadata beschreven.
- *Optie 2*: Alle operaties en de lijst van connectpunten voor die operaties, samen met de informatie over de vereiste en optionele parameters voor elke operatie wordt in de metadata beschreven via een SV_OperationMetadata element voor elke operatie.

De invulinstrucies voor *optie 1* staan in onderstaande tabel.

 | Metadata-element | Longname | Omschrijving | Waarde |
| ---------------- | -------- |  ------------ | --------------- |
| **Operatie naam**	| MD_Metadata.identificationInfo> SV_ServiceIdentification.containsOperations> SV_OperationMetadata.operationName | Naam van de operatie die toegang geeft tot de beschrijving van operaties en endpoints | getCapabilities |
| **DCP**	| MD_Metadata.identificationInfo> SV_ServiceIdentification.containsOperations> SV_OperationMetadata.DCP | Dit element bevat het Distributed Computing Platforms waarop de operatie is geïmplementeerd. INSPIRE gaat van de default waarde WebServices uit. | WebServices |
| **Connectie URL**	| MD_Metadata.identificationInfo> SV_ServiceIdentification.containsOperations> SV_OperationMetadata.connectPoint> CI_OnlineResource.linkage | Netwerkadres van de service | http://www.url_naar_de_capabilities_van_de_service |


De invulinstrucies voor *optie 2* staan in onderstaande tabel.

 | Metadata-element | Longname | Omschrijving | Waarde |
| ---------------- | -------- |  ------------ | --------------- |
| **Operatie naam**	| MD_Metadata.identificationInfo> SV_ServiceIdentification.containsOperations> SV_OperationMetadata.operationName | Naam van de operatie die toegang geeft tot de beschrijving van operaties en endpoints | getCapabilities |
| **DCP**	| MD_Metadata.identificationInfo> SV_ServiceIdentification.containsOperations> SV_OperationMetadata.DCP | Dit element bevat het Distributed Computing Platforms waarop de operatie is geïmplementeerd. INSPIRE gaat van de default waarde WebServices uit. | WebServices |
| **Parameter naam**	| MD_Metadata.identificationInfo> SV_ServiceIdentification.containsOperations> SV_OperationMetadata.parameters> SV_Parameter.name | Naam van de parameter zoals in de service voorkomt | Borehole |
| **Parameter optionaliteit**	| MD_Metadata.identificationInfo> SV_ServiceIdentification.containsOperations> SV_OperationMetadata.parameters> SV_Parameter.optionality | Geeft aan of de parameter optioneel of verplicht is  | Verplicht |
| **Parameter herhaalbaarheid**	| MD_Metadata.identificationInfo> SV_ServiceIdentification.containsOperations> SV_OperationMetadata.parameters> SV_Parameter.repeatability | Geeft aan of de parameter meerdere keren kan voorkomen | true |
| **Connectie URL**	| MD_Metadata.identificationInfo> SV_ServiceIdentification.containsOperations> SV_OperationMetadata.connectPoint> CI_OnlineResource.linkage | Netwerkadres van de service | http://www.url_naar_de_capabilities_van_de_service |




### Voorbeeld metadatabestand (XML) voor INSPIRE Spatial Data Service (SDS)

Voor het aanmaken voor metadata voor de Spatial Data Service (SDS) is een voorbeeld beschikbaar; 

- <a href="docs/Voorbeeld_Metadata_Services_2022_max.xml" target="_blank">Voorbeeld metadata van een harmonised SDS</a>


## Metadata validatie
Validatie is een mechanisme om te controleren of een bepaalde metadatabeschrijving aan de INSPIRE specificaties voldoet. Het is een onmisbaar hulpmiddel om tot een correcte implementatie te komen. Er zijn verschillende validatietools beschikbaar om (verschillende onderdelen van) INSPIRE-metadata te valideren. Zie voor meerinformatie hierover het hoofdstuk [validatie](#validatie).


## Metadata publiceren
INSPIRE verplicht het ontsluiten van de metadatabestanden in een *Discovery Service*. In Nederland dient het <a href="https://www.nationaalgeoregister.nl/geonetwork/srv/dut/catalog.search#/home" target="_blank"> Nationaal Georegister (NGR)</a> als de Discovery Service voor INSPIRE.

Het publiceren in het NGR is de laatste stap die een dataprovider moet doorlopen. In de praktijk houdt dit niets anders in dan de metadata van de dataprovider aanbieden aan het NGR, waardoor ze doorzoekbaar en vindbaar (en bindbaar) wordt. Je hebt hier als dataprovider een account voor nodig, die via het <a href="https://www.pdok.nl/contact" target="_blank"> PDOK Klantcontactcenter</a> kosteloos aan te vragen is. Met het account krijg je toegang tot de beheeromgeving van het NGR-portaal. Op het portaal zelf is documentatie te vinden die de dataproviders uitleggen hoe het publiceren in zijn werk gaat. In de beheeromgeving kan men nieuwe metadata aanmaken of metadata uploaden of harvesten. Het is ook mogelijk om bestaande metadata aan te passen of te verwijderen.

Voor het aanmaken van metadata kan gebruik worden gemaakt van de metadata-editor, die is opgenomen in het NGR. Hiermee kan metadata INSPIRE conform volgens het <a href="https://docs.geostandaarden.nl/md/mdprofiel-iso19115/" target="_blank">Nederlands metadata profiel op ISO 19115</a>  worden ingevuld, of metadata voor services volgens het <a href="https://docs.geostandaarden.nl/md/mdprofiel-iso19119/" target="_blank">Nederlands metadata profiel op ISO 19119</a>.

INSPIRE specifiek zijn de aanvullende [invulinstructie dataset metadata](#invulinstructie-dataset-metadata) en [invulinstructie service metadata](#invulinstructie-service-metadata) beschikbaar. Deze invulinstructies staan in deze handreiking beschreven.

Een meer geavanceerde manier om metadata op te nemen in het NGR is door het uploaden van een XML-bestand. Deze methode is vooral geschikt voor gebruikers die met behulp van een eigen tool metadata hebben aangemaakt en deze in XML-formaat kunnen wegschrijven.

Als een organisatie een eigen catalogue heeft, kan van deze catalogue informatie automatisch met een bepaalde interval, bijvoorbeeld wekelijks, overgenomen worden waarbij de metadata-records worden gekopieerd naar het NGR. Dit noemt met *harvesten*. De harvest-operatie van de catalogue-service is erop gericht om records in het NGR te creëren of te updaten. Hiervoor wordt de CSW-standaard gebruikt. CSW staat voor Catalogue Services for the Web en is een zoek-interface voor catalogues ontwikkeld door het [Open Geospatial Consortium (OGC)](#iso-en-ogc-standaarden). Het NGR ondersteunt versie 2.0.2 ISO AP van deze standaard.


### Publiceren INSPIRE-aanduiding

De selectie voor het [Europese INSPIRE geoportal](#europese-inspire-geoportal) uit het NGR vindt plaats op basis van de categorie-aanduiding INSPIRE. Via de user interface van het NGR kan men dezelfde resultaten krijgen door het filter categorie INSPIRE toe te passen.

![NGR met categorie INSPIRE ](media/NGR-categorie-INSPIRE.png "Gebruik in het NGR het filter 'Inspire' om alle beschikbare INSPIRE-compliant datasets te vinden.")

Als dataprovider kan de categorie INSPIRE aan de metadata worden toegevoegd/verwijderd door in de publiceer omgeving van het NGR in te loggen, het juiste bestand te kiezen, met rechter muisknop op de titel te klikken, naar categorieën te gaan en bij categorie het INSPIRE vinkje te zetten/verwijderen.

