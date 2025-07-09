# Zadanie 7

> Tym razem nasza lista gości na przyjęciu, będzie przechowywana w bazie danych.
> Dla uproszczenia użyjemy formatu `.sqlite` i biblioteki `knex` do komunikacji z bazą danych.
> 
> Format `SQL` jest bardziej "wymagający" ponieważ potrzebuje "schematu" tabel w bazie. Nie wystarczą same dane. Potrzebujemy mieć informację na temat struktury tabeli, czyli jakie kolumny będą w niej zawarte, jakie będą ich typy, czy są unikalne, czy mogą być puste itp. itd.

Twoim zadaniem jest:
1. Zainstalować wszystkie zależności projektu
2. Zmigrować bazę danych, tworząc tabelę `guests` z kolumnami za pomocą skryptu `migrate:latest`
3. Dodać przykładowe dane do tabeli `guests` za pomocą skryptu `seed:run`
4. Połączyć się z bazą danych i pobrać listę gości, a następnie wyświetlić ją na konsoli w formie tabeli.
    - wykorzystaj plik [knex-client.js](./src/knex-client.js) do połączenia z bazą danych
    - połączenie wykonaj w pliku [main.js](./src/main.js)
    - połączenie powinno być asynchroniczne, więc użyj `async/await` lub `.then().catch()`
    - wykorzystaj `console.table()` do wyświetlenia listy gości w formie tabeli

----
Pomocna dłoń:

- [knex](https://knexjs.org/) - biblioteka do komunikacji z bazą danych
- [knex migration](https://knexjs.org/guide/migrations.html) - migracje bazy danych
- [knex seed](https://knexjs.org/guide/migrations.html#seed-files) - seed bazy danych
- [knex query builder](https://knexjs.org/guide/query-builder.html#knex) - budowanie zapytań do bazy danych