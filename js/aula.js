// const nome = 'José Geraldo'

// console.log(nome)

// const nav = document.querySelector('nav')
// const produtos = document.querySelector('.produtos a')
// const navu = nav.querySelector('ul')
// const nava = document.querySelector('a')

// console.log(nav)

// // somente o texto
// console.log(produtos)
// console.log(produtos.innerHTML)

// // removento o elemento
// produtos.remove()

// // estilizando o elemento
// nav.style.backgroundColor = 'black'
// nav.style.color = 'white'
// nav.style.padding = '10px 50px'
// navu.style.listStyle = 'none'
// nava.style.textDecoration = 'none'
// nava.style.color = 'white'

// //Utilizando JS para adicionar uma classe CSS
// nava.classList.add('ativo')

// // informa propriedades e métodos
// console.dir(nav)

// // tipos de dados:

// // String: guarda dados em forma de texto, geralmente colocados entre aspas simples ('texto'), ou aspas duplas("")
// //  quando utilizamos aspas simples para abrir e fechar o texto não é possível utilizar dentro do texto, somente dupla

// const empresaRua = 'Altino Arantes'
// console.log(empresaRua)
// // Number: é todo número utilizado, que não esteja entre aspas, pois vai ser considerado uma String
// //  é possível fazer expressões matemáticas com eles

// let num = 932

// let dobro = num * 2

// // Object : é uma forma de organizamos vários dados, de qualquer tipo, relacionados em um único lugar

// // sem object como seria feito
// const autor = 'Machado de Assis'
// const nomeDolivro = 'Dom Casmurro'
// const ano = 1899

// console.log('Sem utilizar o object\n',autor,',', nomeDolivro,',', ano)
// // com object como é feito
// const escritor ={
//   autor: 'Machado de Assis',
//   livro: 'Dom Casmurro',
//   ano: 1899
// }
// // os nomes colocados dentro do objecto são chamados de propriedades e colocamos dois pontos (:) para colocar os
// // valores dessas propriedades entre aspas simples, ou duplas, e vírgula para colocar outras propriedades.

// console.log('Utilizando object\n',escritor)

// // para acessar as propriedades do objeto escrevemos o obj e colocamos ponto (.) mais o nome da propriedade

// console.log('acessando o autor\n',escritor.autor,'\n acessando o nome do livro\n', escritor.livro)

// const texto = document.querySelector('.texto')

// console.log(texto.clientHeight)

// // funções: são blocos de código que podem ser exercutados

// function logCurso(){
//   const nome = 'JavaScript'
//   console.log(nome)
// }

// logCurso()

// // Eventos: são funções quando acontece algo na maior parte que o cliente faz, executa um bloco de código.

// const btn = document.querySelector('.btn')

// /** @param {MouseEvent} event */
// function backg(event){
// //  console.log(event.x)
// console.log(event.currentTarget)
// }
// btn.addEventListener('click', backg)

// mostrando e escondendo uma informação

// const botao = document.querySelector(".btn");

// function mostrar() {
//   const p = document.querySelector(".subtexto");  
//   p.classList.toggle("mostrar");  
// }

// botao.addEventListener("click", mostrar);

