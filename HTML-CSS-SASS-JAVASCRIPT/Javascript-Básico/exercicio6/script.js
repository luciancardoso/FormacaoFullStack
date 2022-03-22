let listaAtores = [

    {
  
      nome: 'Keanu Reeves',
      personagem: 'Neo',
      filme: 'The Matrix',
  
    },
  
    {
  
      nome: 'David Prowse',
      personagem: 'Darth Vader',
      filme: 'Star Wars Episódios IV-VI',
  
    },
  
    {
  
      nome: 'Bruce Wayne',
      personagem: 'Batman',
      filme: 'Batman - O Início'
  
    },
  
]

let htmlListas = '';

for(ator of listaAtores){

    htmlListas += `
        <div>
            <h1>${ator.nome}</h1> <br>
            <p>Interpreta o ${ator.personagem} no filme ${ator.filme}</p>
        </div> <br>
    `;
}

document.querySelector('#filmes').innerHTML = htmlListas;