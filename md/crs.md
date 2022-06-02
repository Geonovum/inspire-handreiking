## CRS

Geo-informatie is direct gekoppeld aan een locatie op aarde. De wijze waarop die koppeling wordt gelegd, wordt beschreven in het coördinaatreferentiesysteem (CRS) waarin coördinaten van een locatie worden vastgelegd. 
RD, ETRS89 en WGS 84 zijn bekende voorbeelden van CRS-en.

De CRS-en die voor geharmoniseerde datasets ondersteund moeten worden kunnen verschillen per INSPIRE thema en staan meestal vermeld in hoofdstuk 6 van de technical guidance behorende bij het thema.
Naast de verplichte CRS-en is het voor Nederlandse datasets ook van belang om de <a href="https://docs.geostandaarden.nl/crs/crs/" target="_blank">handreiking gebruik coördinaatreferentiesystemen</a> te volgen.
Daarin staat een <a href="https://docs.geostandaarden.nl/crs/crs/#mogelijke-crs-en-binnen-inspire" target="_blank">apart hoofdstuk over INSPIRE</a>.
  
Voor Nederlandse 2D data wordt geadviseerd INSPIRE data te publiceren met ETRS89 en daarnaast RD.
Voor Nederlandse 3D data wordt geadviseerd INSPIRE data te publiceren met ETRS89 + EVRS en daarnaast RD + NAP

CRS-en worden geidentificeerd met zogenaamde <a href="https://docs.geostandaarden.nl/crs/crs/#bijlage-a-crs-overzicht-tabel" target="_blank">EPSG-codes</a>. 

### Hoogtereferentie systeem

In Nederland worden hoogtes meestal vastgesteld t.o.v. NAP. Deze hoogtes zijn middels waterpassing vastgesteld. Dat betekent dat ze het zwaartekrachtveld volgen. 
Het EVRS is het Europese referentiesysteem voor de hoogte. Het EVRS wordt gerealiseerd door een geodetische vereffening van waterpasnetwerken van Europese landen, waarmee uniforme hoogten voor de punten in de waterpasnetwerken worden berekend.
Wanneer de nauwkeurigheid van de data beter is dan 5 cm, is het noodzakelijk dat er een transformatie plaatsvindt van NAP naar EVRS. Anders kunnen de hoogtes gelijk gesteld worden en is een transformatie dus niet echt noodzakelijk. 

Omdat het EVRS regelmatig wordt aangepast verschijnen er regelmatig nieuwe realisaties van EVRS met nieuwe EPSG-codes die daarna ook weer opgenomen moeten worden in de lijst met toegestane verticale referentiesystemen.
Dat hier behoefte aan is blijkt ook uit dit <a href="https://github.com/INSPIRE-MIF/technical-guidelines/issues/27" target="_blank">issue</a> dat aangemaakt is vanuit RWS.



 

