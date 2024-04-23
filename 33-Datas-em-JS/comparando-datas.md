### `Comparando datas`

- Datas são objetos, portanto são comparados por referência.
• Ou seja, new Date(0)!== new Date(0)
- Ou seja, caso queira comparar se é o mesmo momento, use timestamps.
• +(new Date(0)) === + (new Date(0))
- Caso queira comparar anterioridade ouposterioridade, use timestamps e os operadores tradicionais >, <, >=, e <=.