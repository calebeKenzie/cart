# CAPSTONE - PLANEJAMENTO

Style Guide:

# 1 - Fluxograma:

- Pagina Inicial com todos os produtos.
- Pesquisa produto por categoria(navbar) ou pelo campo de busca.
- Seleciona um produto.
- Adiciona o produto ao carrinho de compras.
- Remove produto do carrinho de compras.
- Finaliza a compra.



# 2 - Divisão de componentes:

- Container da aplicação (todo conteúdo).
- Header contendo h1 e navbar.
- navbar com divisão por categoria dos produtos.
- main com produtos, carrinho de compras e campo de busca.
- Card do produto contendo suas descrições e botão para adicioná-lo ao carrinho.
- campo de busca para procurar determinado produto e botão para pesquisar.
- carrinho de compras com os itens adicionados, valor total e quantidade de produtos.
- Se houver itens no carrinho também deve haver um botão para remover o mesmo do carrinho.

## ------------------------------------------------- Layout (Cores):
- h1 color = #000
- background-color e border (navbar, produtos e carrinho de compras)= #F5F5F5
- Nav item(selecionado); nome do produto; Escrita principal no div do carrinho(/* Title2 */) = #333
- Nav item(não selecionado); placeholder(search); Escrita secundária no div do carrinho(/* Small */) = #828282;
- Preço do produto; background da categoria(/* Frame 116 */) = #2E245E
- background button (Pesquisar); background (carrinho de compras) = #6B54DE;
- Produto border(on hover) = #2E245E
- 'adicionar ao carrinho'(on hover) = #6B54DE

Cores para o carrinho de compras quando com itens: 
- background do item adicionado = #fff
- Nome produto = #333 (mantém)
- Preço produto = #2E245E (mantém)
- background div com quantidade de itens e valor total = #333
- escritas dentro do div com total = #fff
- valores númericos (total e quantidade) dentro do div do carrinho e botao de remover produto do carrinho = #828282
 

## ------------------------------------------ font-family e font-size
- font-family: 'Inter', sans-serif; (<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
</style>)

- Title 1 = bold, 26px (h1)
- Title 2 = bold, 22px (h2)
- Title 3 = bold, 18px (h3) 
- paragraph = regular, 16px (p)
- small = regular, 14px (small)
- caption = regular, 12px (caption)


## ------------------------------------------- Distribuição (Margin e Padding)
Container Principal:
- Header com titulo e navbar ocupará toda width do browser e terá height de 70px. (pensar em % para tornar o site mobile friendly) 
- terá 115px de margin em cada lado e será composto de 12 colunas. (pensar em % para tornar o site mobile friendly) 
- Nesse espaço de 12 colunas serão exibidos 3 itens e o div do 'carrinho'. (pensar em % e utilizar flex-wrap para tornar o site mobile friendly)
- height dos divs que exibirão o produto aproximadamente 300px. width 215px.
- height do div do carrinho 390px; width 350px. 
- botao de pesquisa e input height 50px. width deve ser o mesmo do div carrinho.
- div que exibe numero de itens e total da compra height 130px. width deve ser o mesmo do div carrinho.


# ---------------------------- 3 - Javascript: Dinamizando DOM:

function procurar() => Função que procura um item pelo seu nome ou categoria através do botão procurar. 

function produtosListar(){} => Função que agrupará e exibirá os produtos de uma mesma classe.

function carrinhoAdicionar(){} => função que adiciona o item selecionado ao carrinho

function carrinhoExcluir(){} => função que remove algum item do carrinho.

function quantidade(){} => função que determina a quantidade de produtos estão no carrinho

function acrescentarProduto() => permitirá ao usuario acrescentar mais de um item do mesmo produto.

function calculaTotal() => função que atualizará e exibirá o total a ser pago pelo usuario.