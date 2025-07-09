# Zadanie 9

> Wykonaj serwer w Express.js  
> Powinien on wystawić `API` do korzystania z przygotowanej przez nas wcześniej logiki do obsługiwania gości na przyjęciu (_#Zadanie 7_).
> 
> Jednak dla uproszczenia, nie będziemy korzystać z natywnej bazy danych, a z pliku [guest-in-memory-db.js](./db/quest-in-memory-db.js)  
> Dalej nasze akcje będą resolvowane asynchronicznie, więc będziemy korzystać z `async/await` lub `.then().catch()`. Podobnie jak w natywnym podejściu (z knex)
> 
> Tutaj zależy nam na skupieniu się na `express.js` i `API` oraz generalnie na pracy z `JSON` i `HTTP` (server-side).


## Wymagania:
- Na dobry początek zróbmy tylko wyświetlanie listy gości z odpowiednimi statusami - jako `JSON`.
- Endpoint `GET`:
    - `/guests` - pokazuje listę gości.
    - `/guests?status=confirmed` - lista gości z potwierdzonym przybyciem na przycięcie.
  - `/guests?status=uncofirmed` - lista gości niepotwierdzonych.
- W folderze [requests](./requests) utwórz odpowiedni plik `.http` z przykładowymi requestami do testowania.
- Zainstaluj `nodemon` do automatycznego restartowania serwera po zmianach w kodzie.
- Skorzystaj z `.env` do przechowywania zmiennej `PORT`. Załaduj zmienne do programu przy pomocy `--env-file` lub `dotenv` lub `env-cmd`.

----
Pomocna dłoń:

- [nodemon](https://www.npmjs.com/package/nodemon)
- [Express.js](https://expressjs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [env-cmd](https://www.npmjs.com/package/env-cmd)
- [Express.js - hello world example](https://expressjs.com/en/starter/hello-world.html)
- [req.query](https://expressjs.com/en/api.html#req.query)
- [Express.js - routing](https://expressjs.com/en/guide/routing.html)