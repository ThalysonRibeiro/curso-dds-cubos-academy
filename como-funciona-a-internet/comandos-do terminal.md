comando de exemplo de tesete internet
ifconfig - mostra a configuração do pc atual no linux
ipconfig - mostra a configuração do pc atual no windonws
curl ipconfig.sh

tracert - pode ser usado para rastrear o caminho que um pacote IP (Internet Protocol) faz até o seu destino.

**Requisição HTTP**

- Verbo Ação que deseja realizar: GET, HEAD, POST, PUT, PATCH, DELETE ou OPTIONS
- Recurso A partir de URL que vem depois do dominio: /livro/84/capitulo/2?lang=pt
- Cabeçalhos Conjunto de características do cliente, para o servirdor se contextualizar
- Conteúdo Dados enviados.

|Verbos HTTP | |
| ------- | -------- |
|GET |O cliente quer obter este recurso (ler ou baixar)|
|HEAD| O cliente quer ver apenas as características deste recurso, mas não quer ver o recurso em si.|
|POST| O cliente quer enviar um novo recurso para o servirdor|
|PUT| O cliente quer substituir um recurso que talvez já exista|
|PATCH| O cliente quer editar um recurso que já exista|
|DELETE| O cliente quer deletar um recurso|
|OPTIONS| O cliente quer saber o quer ele pode fazer com um recurso|

 


| RResposta HTTP |  |
| ------- | -------- |
| Código de status   | Código que inidca se deu certo ou não, e o motivo.   |
| Cabeçalho   | Conjunto de características desse recurso, para o cliente se contextualizar.    |
|Conteúdo | Dados recebidos. |

| 1 |  2 |
| ------- | -------- |
| 2xx| Representa sucesso. Por exemplo </br>200 - Ok, deu certo. Segue o conteúdo. </br> 201 - ok, criei o que você pediu. </br> 204 - ok, deu certi, mas não tenho nada para te enviar |
| 3xx| Representa que o recurso está em outro lugar. Por exemplo. </br> 301 - Recurso foi movido permanentimente. segue nova URL. </br> 302 - Recurso não está aqui temprariamente. Segue nova URL.|
| 4xx| Representa um erro por conta do cliente. Por exemplo </br> 401 - Você não tem autorização para fazer isso. </br> 404 - O recurso que você pediu não existe. </br> 429 - Você está enviando um número excessivo de requisições.|
| 5xx| Representa um erri por conta do servidor. Por exemplo </br> 500 - Deu ruim. Não sei nem explicar o que houve. </br> 503 - Estou com um problema técnico e não consigo operar. </br> 507 - Não tenho espaço suficiente para armazenar estes dados.|


