
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonCards = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {

        // - obter o id do pokemon clicado na listagem
        const idPokemonSelecionado = pokemon.attributes.id.value

        // - remover classe aberto do cartão atual
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        // - adicionar classe aberto no cartão correspondente ao id do clique
        const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')
        
        // - remover classe ativo do item da listagem atual
        const pokemonSelecionado = document.querySelector('.ativo')
        pokemonSelecionado.classList.remove('ativo')
        
        // - adicionar classe ativo no item da listagem clicado
        const pokemonParaSelecionar = document.getElementById(idPokemonSelecionado)
        pokemonParaSelecionar.classList.add('ativo')
        
        // - voltar a tela para o topo após o clique
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;
    })
})