# Zadanie 4

> Rozwiń program z zadania 3, tak aby obsługiwał moduły (osobne pliki) i spełniał dodatkowe wymagania, opisane poniżej.
> Wróć do zadania 3, przenieś kod "rysujący banner" do osobnego modułu, a następnie zaimportuj go do głównego pliku aplikacji.
> Wykorzystaj do tego celu `import` i `export` (ESM) lub `module.exports` i `require` (CommonJS).

Hint:
> 💡 możesz skopiować kod z zadania 3, tutaj aby widzieć jak się zmienia sposób pisania programu w czasie.  
> Z jakiego punktu zaczynaliśmy i jak zmienia się on po refaktoryzacji.


## Wymagania:
- po wpisaniu komendy `npm run banner` program powinien się uruchomić
- program POWINIEN być napisany w kilku plikach/modułach (nie tylko w jednym), separując logikę sposobu działania od wyświetlania akcji dla _EndUser_.
- Program powinien działać tak jak do tej pory — to znaczy:
```
****************************************
*   WITAJ W GENERATORZE BANNERÓW [!]   *
****************************************

Podaj zdanie jakie chcesz zamienić w banner:
Witaj w moim świecie

*********
* WITAJ *
*********
*****
* W *
*****
********
* MOIM *
********
***********
* ŚWIECIE *
***********
```
- jednak na końcu powinien napisać:
```
Co robimy dalej - wpisz odpowiednią literę:
[k]oniec
[n]astępny banner
_
```
- Happy Path:
    - po wpisaniu przez _EndUser_ litery `k` lub `n` i zatwierdzeniu `[enter]` podejmujemy akcję:
    - `k` - koniec działania programu i infromacja
    ```
    Kończę działanie, żegnam...
    ```                        
    - `n` - spowoduje "zapętlenie" programu i ponownie wyświetli komunikat i opcje:
    ```
    Podaj zdanie jakie chcesz zamienić w banner:
  
    (...)
    ```
- Sad Path:
    - po wybraniu innej "nieznanej" litery, powinna pojawić się infromacja - na przykład: 
    ```
    Co robimy dalej - wpisz odpowiednią literę:
    [k]oniec
    [n]astępny banner 
    o
    
    Nieobsługiwany wybór "o"!       
    ----
    Co robimy dalej - wpisz odpowiednią literę:
    [k]oniec
    [n]astępny banner 
    ```

----
Pomocna dłoń:

- [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
- [export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
- [node "type": "module"](https://nodejs.org/api/packages.html#type)

lub

- [CommonJS](https://nodejs.org/api/modules.html#modules-commonjs-modules)