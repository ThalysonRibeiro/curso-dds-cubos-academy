# `Manipulação de coleção de recursos`

Numa requisição **HTTP** podemos definir **métodos(verbos)** para indicar a **ação** a ser realizada no **recurso.**

**GET /livros** Ultilizamos o verbo GET para listar os recursos contidos numa coleção.

**GET /livros/3** Também ultilizamos o verbo GET para acesar um recurso especifico.

**POST /livros/12** O verbo POST usamos para cadastrar um recurso numa coleção.

**PUT /livros/12** O verbo PUT usamos para alterar, por completo, um recurso numa coleção.

**PATCH livros/12** Ultilizamos o verbo PATCH para laterar uma parte do recurso numa coleção

**DELETE /livors/17** O verbo DETELE usamos pra excluir um recurso numa coleção.

# `API  da Biblioteca`
|||
| - | - |
GET /livros | GET /autores
GET /livros/:id | GET /autores/:id
POST /livros | POST /autores
PUT /livros/:id | PUT autores/:id
PATCH livros/:id | PATCH autores/:id
DELETE /livors/:id | DELETE autores/:id



|||
| - | - |
GET /autores/:idAutor/livros
GET /autores/:idAutor/livros/:id
POST /autores/:idAutor/livros
PUT /autores/:idAutor/livros/:id
PATCH /autores/:idAutor/livros/:id
DELETE /autores/:idAutor/livros/:id