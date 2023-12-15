# Dashboard de Transações

Esse projeto foi feito com Angular 12 e PrimeNG para demonstrar minhas habilidades em Angular e também para aprender mais sobre esse maravilhoso ecossistema.

O objetivo aqui foi criar telas acessíveis e responsívas para gerar valor analítico referente à transações por cartões de crédito. 

Procurei usar em todo o projeto as melhores práticas em Angular quem venho estudando durante toda a minha carreira.

## Como Usar

1. Clone o projeto com `git clone https://github.com/myckwilliam/transaction-dashboard.git`
2. Vá até a pasta com `cd transaction-dashboard`
3. Instale as dependências com `npm install`
4. Certifique-se de usar o Node.js na versão 16 ou inferior (por conta da compatibilidade com essa versão do Angular)
5. Em uma aba do terminal rode `npm run server`

Esse comando vai instalar o JSON server na sua máquina e vai servir o arquivo `db.json` localmente na porta 3000, gerando uma api fake que é usada pela aplicação como fonte de dados

6. Em outra aba do terminal rode `npm start`

Esse comando vai servir o angular com uma configuração de proxy para prevenir erros de Cross-Origin Resource Sharing (CORS)

7. Agora e só acessar o link http://localhost:4200/

## Como Testar

1. Rode `npm run test`
2. Verifique que todos os testes passam
3. Também é possível verificar o code coverage com `ng test --no-watch --code-coverage`

![image](https://github.com/myckwilliam/transaction-dashboard/assets/75875219/af84a7f4-1f3d-422d-b387-153c3c932ba5)

# Explicando o Projeto

## Tela de Resumo

Essa tela:

* Mostra o resumo das transações como Valor Total e Quantidade de Transações
* É totalmente responsiva
* Mostra insights gráficos das transações com oa principal forma de pagamento e a bandeira de cartão de crédito mais usada
* Os gráficos são meramente estatísticos já que possuo uma pequena parte dos dados
* Os items para a plotagem dos gráficos foram obtidos a partir de mapeamento automático das transações
* Devido ao item acima, as cores são geradas aleatóriamente de acordo com a quantidade de items
* Sempre que a tela de resumo é renderizada, há uma nova geração das cores. É interessante ver as cores mudando, lembra o site do [Composer](https://getcomposer.org/)

![image](https://github.com/myckwilliam/transaction-dashboard/assets/75875219/1ea63d70-e886-4f65-9463-8b7c98039571)

## Tela de Transações

Essa tela:

* Mostra uma tabela que contém todas as transações disponíveis
* É possível reordenar todas as colunas
* Possui diferentes tags para diferentes status
* Apresenta as bandeiras dos cartões de crédito pela sua logo
* Em cada item é possível clicar no botão de detalhes que abre um modal com todas as informações das transações
* A tabela fica em formato de pilha quando a tela é pequena, garantindo responsividade

![image](https://github.com/myckwilliam/transaction-dashboard/assets/75875219/340658b1-8760-4656-a023-67d951011cb6)
![image](https://github.com/myckwilliam/transaction-dashboard/assets/75875219/5ab6180f-e1d2-499f-bfa6-b69a22740d41)
![image](https://github.com/myckwilliam/transaction-dashboard/assets/75875219/3a4767b1-9c2a-4a2b-ac1d-889b2d3ee479)

## Sidebar

Esse componente:

* Aparece de duas formas difentes
* Uma é a padrão, fixamente lateral
* A outra é mais responsiva, pois tem um auxiliar que fica no topo da página em forma de navmenu que, ao ter o botão de barras clicado, mostra a sidebar que conhecemos em forma de modal.

![image](https://github.com/myckwilliam/transaction-dashboard/assets/75875219/6fb67ac0-4e70-424f-bab5-964f50fdb231)
![image](https://github.com/myckwilliam/transaction-dashboard/assets/75875219/12198c60-92b8-4cf9-ad47-4881b20658ff)

## Serviços

A aplicação tem dois serviços

* O serviço de media query usa o matchMedia do objeto `window` para gerar Observables de Media Query. É usado para alternar o menu entre desktop e mobile/tablet.
* O serviço de transações é o coração da aplicação. Ele faz uma requisição à porta 3000 (onde o JSON está servido) e cacheia, pois os dados não vão mudar e evita fazer multiplas requisições sem necessidade.

## Estrutura de Pastas

Usei uma estrutura que acho bem escalável, ela consiste em:

* Pasta principal contém o `AppComponent` e seus componentes auxiliares, além da pasta shared, pages e models
* A pasta shared contém componentes, utils e services que serão compartilhados em toda a aplicação, ela tem seu próprio módulo
* A pasta models contém os tipos e interfaces da aplicação
* A pasta pages possui uma pasta pra cada página e seus respectivos componentes auxiliares
* Cada página contém um módulo principal e um de rotas. Essa estratégia de dividir páginas por módulos facilita bastante na hora de rotear com lazy loading.

![image](https://github.com/myckwilliam/transaction-dashboard/assets/75875219/0eec8c76-12b2-4e60-8f4b-c39b4153ca55)












