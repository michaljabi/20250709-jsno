# Zadanie 5
           
> Napisz program, który odczytuje dane z pliku [guests.json](./guests.json).


2. Następnie formatuje `JSON.parse` i wyświetla na konsoli listę gości, którzy są zaproszeni na przyjęcie.
3. Do wyświetlenia listy gości użyj funkcji `console.table()`.

```
┌─────────┬────┬────────────────────────────────────────┬─────────┬──────────────┬─────────────┬────────────────────────┐
│ (index) │ id │ uuid                                   │ name    │ lastName     │ status      │ updatedAt              │
├─────────┼────┼────────────────────────────────────────┼─────────┼──────────────┼─────────────┼────────────────────────┤
│ 0       │ 1  │ '123e4567-e89b-12d3-a456-426614174000' │ 'Anna'  │ 'Nowak'      │ 'confirmed' │ '2025-07-08T12:00:00Z' │
│ 1       │ 2  │ '123e4567-e89b-12d3-a456-426614174001' │ 'Jan'   │ 'Kowalski'   │ 'invited'   │ '2025-07-08T13:00:00Z' │
│ 2       │ 3  │ '123e4567-e89b-12d3-a456-426614174002' │ 'Maria' │ 'Wiśniewska' │ 'declined'  │ '2025-07-08T14:00:00Z' │
└─────────┴────┴────────────────────────────────────────┴─────────┴──────────────┴─────────────┴────────────────────────┘
```
4. Dodaj osobną metodę do generowania nowego gościa, która przyjmuje imię i nazwisko, generuje unikalny identyfikator UUID i zwraca obiekt gościa.
5. Dodaj nowego gościa (np. "Barbara Gordon") do listy gości, używając wcześniej zdefiniowanej metody. Domyślnie gość powinien mieć status "invited" i aktualny czas aktualizacji.
6. Zapisz zmodyfikowaną listę gości z powrotem do pliku `guests.json` po dodaniu nowego gościa. Wykorzystaj `JSON.stringify()` do konwersji obiektu na format JSON.

----
Pomocna dłoń:
- [JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse), 
- [JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- [console.table()](https://developer.mozilla.org/en-US/docs/Web/API/Console/table)
- [fs.promises](https://nodejs.org/api/fs.html#fs_fs_promises_api)
- [await fs.readFile()](https://nodejs.org/api/fs.html#filehandlereadfileoptions)
- [await fs.writeFile()](https://nodejs.org/api/fs.html#filehandlewritefiledata-options)
- [randomUUID](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID)