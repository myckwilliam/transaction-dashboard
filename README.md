# Dashboard de Transações

Esse projeto foi feito com Angular 12 e PrimeNG para demonstrar minhas habilidades em Angular e também para aprender mais sobre esse maravilhoso ecossistema.

O objetivo aqui foi criar telas acessíveis e responsívas para gerar valor analítico referente à transações por cartões de crédito. 

Procurei usar em todo o projeto as melhores práticas em Angular quem venho estudando durante toda a minha carreira.

## Como Usar

1. Clone o projeto com `git clone https://github.com/myckwilliam/transaction-dashboard.git`
2. Instale as dependências com `npm install`
3. Certifique-se de usar o Node.js na versão 16 ou inferior (por conta da compatibilidade com essa versão do Angular)
4. Em uma aba do terminal rode `npm run server`

Esse comando vai instalar o JSON server na sua máquina e vai servir o arquivo `db.json` localmente na porta 3000, gerando uma api fake que é usada pela aplicação como fonte de dados

5. Em outra aba do terminal rode `npm start`

Esse comando vai servir o angular com uma configuração de proxy para prevenir erros de Cross-Origin Resource Sharing (CORS)

6. Agora e só acessar o link http://localhost:4200/

## Como Testar

1. Rode `npm run test`
2. Verifique que todos os testes passam
3. Também é possível verificar o code coverage com `ng test --no-watch --code-coverage`

![image](https://github.com/myckwilliam/transaction-dashboard/assets/75875219/af84a7f4-1f3d-422d-b387-153c3c932ba5)

# Explicando o Projeto

## Tela de Resumo

Essa tela:

* Mostra o resumo das transações como Valor Total e Quantidade de Transações
* Mostra insights gráficos das transações com oa principal forma de pagamento e a bandeira de cartão de crédito mais usada
* Os gráficos são meramente estatísticos já que possuo uma pequena parte dos dados
* Os items para a plotagem dos gráficos foram obtidos a partir de mapeamento automático das transações
* Devido ao item acima, as cores são geradas aleatóriamente de acordo com a quantidade de items
* Sempre que a tela de resumo é renderizada, há uma nova geração das cores. É interessante ver as cores mudando, lembra o site do [Composer](https://getcomposer.org/)

![image](https://github.com/myckwilliam/transaction-dashboard/assets/75875219/1ea63d70-e886-4f65-9463-8b7c98039571)








