const carrinho =[
    {nome: "Caneta", qtde: 10, preco: 7.99 , fragil: true},
    {nome: "Caderno", qtde: 5, preco: 27.10, fragil: false}
]

//Filter, map, reduce

//1. Frágil: true

//2. qtde: 4, preco: 27.10 -> total

//3. Media totais


const media = carrinho
.filter(item => item.fragil)
.map(item => item.qtde * item.preco)
.reduce((acc, el) => {
    const novaQtde = acc.qtde + 1
    const novoTotal = acc.total +el
    console.log(acc, el);
    return {
        qtde: novaQtde,
        total: novoTotal,
        media: novoTotal/novaQtde
    }
}, {qtde: 0, total: 0, media: 0})

console.log(media);