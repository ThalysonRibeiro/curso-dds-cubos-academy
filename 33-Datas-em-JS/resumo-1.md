## ` Como criar uma nova data`

- 1 `new Date()` - agora
- 2 `new Date(numero)` - cria a partir de timestamp (milissegundos desde 1970).
- 3 ` new Date('1995-12-17T03:24:00')` - cria data a partir de texto, no UTC (fica 17/12/95 às 00:24 no nosso fuso).
a) Dá pra criar assim com new Date('1995-12-17T03:24:00-0300').
b) Evitar ao máximo - tem inconsistência entre navegadores.