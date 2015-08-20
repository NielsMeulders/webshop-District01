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

Een klant hoeft niet ingelogd te zijn om de producten te bekijken. Hij kan eenvoudig doorheen de lijst scrollen en eventueel meer details van een product zien.
Wanneer er een product besteld dient te worden, is een account wel verplicht. Als er nog geen account geregistreerd is, kan de klant via het login-scherm een nieuwe account aanmaken.

Bij de bestelling van een product dient niet ingelogd te worden. Het systeem zal vragen naar de gebruikersnaam (die uniek is) en het adres. Als deze correct zijn ingevuld, kan het artikel besteld worden.

Alle bestellingen kan de klant terugvinden op het klantendashboard. Hiervoor dient ingelogd te worden waarna er meteen doorverwezen wordt naar dit dashboard. Daarop is in één oogopslag te zien welke bestellingen hij gedaan heeft. De laatste bestelling komt bovenaan de lijst.

De klantengegevens vinden we ook op dit dashboard (rechts voor desktop gebruikers en onderaan voor mobiele gebruikers).