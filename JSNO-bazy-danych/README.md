# JSNO `bazy-danych`

## Jak uruchomić i używać przykłady?

1. Aby uruchomić wszystkie serwery, potrzebujesz zainstalować `docker`.
[Instrukcja instalacji](https://docs.docker.com/get-started/get-docker/).

2. Następnie uruchom polecenie:

   ```bash
   docker compose up -d
   ```

To polecenie uruchomi wszystkie serwery w tle.  
Postęp i prawidłowe działanie zobaczysz w swoim Docker Desktop.

3. Każda baza danych jest dostępna pod adresem `localhost` na portach: (`27017` dla MongoDB, `3366` dla MySQL oraz `6379` dla Redis).
4. Jednak aby sprawdzać ich zawartość, korzystamy z "przeglądarek baz danych", które są dostępne pod poniższymi adresami:

   - [Redis Commander](http://localhost:5070) - do Redis
   - [Mongo Express](http://localhost:5080) - do MongoDB
   - [Adminer](http://localhost:5090) - do MySQL
        - tam w polu "Serwer" wpisz `mysql` (to jest nazwa kontenera z MySQL)
        - Użytkownik `root` i hasło `1234!` (patrz niżej)
5. tam gdzie to wymagane, dane do logowania to:
 - username `root`
 - password `1234!`

6. Każdy z projektów trzeba zainstalować osobno, ponieważ każdy z nich ma swoje zależności.  
   W tym celu przejdź do każdego katalogu projektu i uruchom polecenie:

   ```bash
   npm install
   ```
