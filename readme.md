# Node.js webshop app District01

## Installeren


```sh
$ mongod
$ npm install
$ node app.js
```

De app draait nu op **<http://localhost:3003>**.

### Hoe te gebruiken

Binnen deze app zijn er twee soorten gebruikers: een manager en een klant.

#### Manager

De manager kan de hele webshop beheren. Er is reeds een standaard account aangemaakt met [username: manager; pass: pass]. Als deze gegevens correct ingegeven zijn, zal de gebruiker een dashboard krijgen met alle statistieken van de webshop. Hij kan het aantal bestellingen bekijken, het aantal gebruikers en het aantal producten.

Alle bestellingen kunnen bekeken worden. Er staat steeds een link naar het bestelde product, samen met de andere nuttige informatie. De manager kan ook de status van de bestelling aanpassen. Door uit de drop-down een status te kiezen en vervolgens op te slaan, zal de status aangepast worden.

Om een product toe te voegen, moeten we in de middelste rij kijken. Als we op de link klikken, kunnen we een nieuw product toevoegen door de gegevens in te vullen en op 'voeg toe' te klikken.
Producten aanpassen is een nieuwe mogelijkheid maar is momenteel nog niet beschikbaar.

Er kan ook een lijst van klanten opgevraagd worden wanneer er geklikt wordt op 'klanten bekijken'. Hier zien we de gegevens van elke klant, alsook het aantal bestellingen per klant.

#### Klant

