// precisamos vaiaveis no JS para trabalhar com elementos da Tela

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')

// preciso trabalhar com evento de clique feito pelo usuario na listagem

listaSelecaoPokemons.forEach(function(pokemon){
    pokemon.addEventListener('click', function(){

    //  -remover a classe ativo do cartão pokemon ativo

        const cartaoPokemonAberto = document.querySelector(".ativo")

        if(cartaoPokemonAberto){
        cartaoPokemonAberto.classList.remove("ativo")
        }

    //-ao clicar em um pokemon da listagem pegamos o id do selecionado para identificar qual cartão clicado.
    //-adicionar a classe ativo via ID no pokemon selecionado.

        const idPokemonSelecionado = pokemon.attributes.id.value       
        const idDoCartaoPokemonParaAbrir = 'card-' + idPokemonSelecionado
        const cardPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)

        cardPokemonParaAbrir.classList.add("ativo")


    //- remover a classe selecionado que marca o pokemon na listagem
    //-adicionar a classe selecionado no pokemon da listagem selecionado.

        const pokemonSelecionadoNaListagem = document.querySelector(".selecionado")

        if(pokemonSelecionadoNaListagem){
            pokemonSelecionadoNaListagem.classList.remove("selecionado");
        }
        pokemon.classList.add("selecionado")
    })

})