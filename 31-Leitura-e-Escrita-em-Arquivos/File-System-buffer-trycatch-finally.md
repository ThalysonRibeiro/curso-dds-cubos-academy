### `file system`
- https://nodejs.reativa.dev/0046-node-module-fs/index
É uma **biblioteca nativa** do **Node.js** que permite interagir com arquibos do sistema, como por exemplo, **ler, criar, escrever e ler.**

É possível trabalhar com assicronicidade usando o **fs** que utiliza o conceito de **callbacks.**

Para trabalhar com **assicronicidade usando o promises,** a biblioteca fs implementou um **módulo esprecífico.**

**fs/promises**


### `Buffer`

Um ** buffer** é um espaço de memória que armazena deados binários que são representados por uma sequência de números inteiros.

<Buffer 74 65 73 74 65 0a>


### `try - catch`

O **try** maraca um **bloco de declarações** onde tood código inserido neste bloco será **executado/testado.**

Caso algum **erro aconteça** em alguma declaração no bloco **try,** a execução do código é interrompida imediatamente e o erro é capturado oelo catch.

### `finally`

O **finally** é executado sempre **depois da execução** de todo bloco **try** ou **catch.**

```javaScript
try {
    const arquivo = await fs.readFile('arquivo.txt');
    console.log(arquivo);
} catch (erro) {
    console.log(erro.message);
}

```

```javaScript
try {
    const arquivo = await fs.readFile('arquivo.txt');
    console.log(arquivo);
} catch (erro) {
    console.log(erro.message);
}  finally {
    console.log('Essa mensagem sempre será exibida.');
}

```