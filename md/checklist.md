# Checklist voor dataprovider

Hieronder staat een korte checklist van alle stappen die een dataprovider moet doorlopen om een INSPIRE conforme dataset inclusief services te publiceren:

1. Ontwerp je [transformatie](#fasen) van as-is datamodel naar de INSPIRE dataspecificaties.
2. Beslis of er een [extensie](#extensies) gemaakt moet worden.
3. Registreer de [namespaces](#namespace) via het [INSPIRE namespaceregister](#inspire-namespaceregister).
4. Registreer [codelijsten](#codelijsten) als er codes gebruikt worden naast die al in bestaande INSPIRE codelijsten voorkomen.
5. Valideer de datasets tussentijds met de [INSPIRE-validators](#te-gebruiken-validators), zodat vroegtijdig eventuele fouten opgelost kunnen worden. Informatie over data validatie is [hier](#conformance-classes-datavalidatie) te vinden.
6. Publiceer dataset metadata van de geharmoniseerde dataset in het NGR. Voor geharmoniseerde data zijn er drie extra metadata-elementen die ingevuld dienen te worden; zie de [invulinstructies voor de dataset metadata](#invulinstructie-dataset-metadata). Contoleer in het NGR of de categorie `inspire` is geactiveerd, anders verschijnt de metadata niet in de INSPIRE Discovery Service. [Valideer daarna de dataset metadata](#metadata-validatie). 
7. Zorg dat de view service van de geharmoniseerde dataset voldoet aan de eisen die INSPIRE stelt voor geharmoniseerde data. Zie in de betreffende dataspecificatie het hoofdstuk [Portrayal](#portrayal). 
8. [Valideer de services](#service-validatie) van de geharmoniseerde dataset. Let er daarbij op dat de output van de downloadservices ook conform de dataspecificaties is net als dat met de input is gedaan in stap 5.
9. Publiceer metadata van de services van de geharmoniseerde dataset in het NGR, zie hiervoor de verschillende invulinstructies onder [Service metadata](#service-metadata). Contoleer in het NGR of de categorie `inspire` is geactiveerd, anders verschijnt de metadata niet in de INSPIRE Discovery Service. [Valideer daarna de metadata van de services](#service-validatie). 
10. Check of er in de metadata van de data en services goed naar elkaar is verwezen middels de juiste links via de [Link checker](#link-checker).
13. Check in het [Europese INSPIRE Geoportal](#europese-inspire-geoportal) of de data daadwerkelijk te bekijken en te downloaden is en onder het correcte thema te vinden is. N.B. Elke eerste maandag van de maand wordt er geharvest naar het INSPIRE geoportal.
11. Tot slot voer de verwijzing naar de metadata (de UUID) van de geharmoniseerde dataset op in [het INSPIRE aanmerkingsregister](#aanmerkingsregister), zodat bekend is voor welke aangemerkte dataset daadwerkelijk data gepubliceerd is conform de eisen van INSPIRE.
