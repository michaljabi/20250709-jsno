# Zadanie 8

> Wykonaj serwer, który będzie uruchamiał się na porcie zależnym od zmiennej środowiskowej `PORT` z pliku [.env](./.env).  
> Powinien on prezentować zawartość danych z pliku [data.json](./src/data.json) na ścieżce `/data`.  


Po wystawieniu serwera użyj pliku: 
[test-data-endpoint.http](requests/test-data-endpoint.http) do testowania jego działania.


## Wymagania:
- wykonaj endpoint: `/data` pokazujący zawartość pliku `data.json` - jako typ: `JSON`
- każdy inny endpoint powinien pokazywać błąd: `{ "error": "404 - nie znam ścieżki N" }`, gdzie `N` - to faktyczny adres `url` na który wszedł użytkownik
- zadbaj o poprawny nagłówek `Content-Type` dla odpowiedzi
- zadbaj o poprawny `kod` odpowiedzi `HTTP` dla zapytania
  - poprawny kod dla `/data` to `200`
  - poprawny kod dla błędnych zapytań to `404`

----
Pomocna dłoń:

- [http.createServer](https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener)
- [node --env-file](https://nodejs.org/api/cli.html#--env-fileconfig)
- [node env](https://nodejs.org/api/process.html#process_process_env)
- [HTTP status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
- [HTTP header - Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type)
- [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)