// function livro(nome, ano, autor, anoAtual){
//   nome.toUpperCase()
//   const tempo = `Livro escrito ${anoAtual - ano}` 
//   const frase = `${nome} por ${autor}`
//   const escritor ={
//     nome,
//     ano,
//     tempo,
//     frase,
//   }  
//   return escritor
// }

//  função com menos código

// function livro(nome, ano, autor, anoAtual){ 
//   const escritor ={
//     nome: nome.toUpperCase(),
//     ano,
//     tempo: `${anoAtual - ano}`,
//     frase:`Livro escrito ${nome} por ${autor}`,
//   }  
//   return escritor
// }

// retorno direto
function livro(nome, ano, autor, anoAtual){ 
  return {
    nome: nome.toUpperCase(),
    ano,
    tempo: `${anoAtual - ano}`,
    frase:`Livro ${nome} escrito por ${autor}`,
  }  
}

console.log(livro('O Senhor dos Anéis', 1954, 'J. R. R. Tolkien', 2023))
const retorno = livro('O Senhor dos Anéis', 1954, 'J. R. R. Tolkien')
console.log(retorno.frase)