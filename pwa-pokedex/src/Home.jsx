import Nullstack from 'nullstack';
import './Home.css';
import { Pokedex } from './icon/pokedex';

class Home extends Nullstack {
  pokemon = [];

  prepare({ project, page, greeting }) {
    page.title = `${project.name} - ${greeting}`;
    page.description = `${project.name} foi feito com Nullstack`;
  }

  async hydrate(){
    
    this.pokemon = await Promise.all([
      fetch('https://pokeapi.co/api/v2/pokemon/1').then(response => response.json())
    ])
  }

  renderCard({ pokemon }){
    return(
      <div className='card'>
        {pokemon.name}
      </div>
    )
  }



  render({ project, greeting }) {
    return (
      <section>
       
        <title>Pokédex</title>

        <link rel="stylesheet" href="style.css" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet"/>
        {/* <script src="index.js" defer> </script> */}
        

          <div class="pokedex">
            <header>
              <Pokedex />
              {/* <section id="simbol1"><img src="images/pokedex.svg"></section> */}
              {/* <section id="simbol4"><h1>Pokédex</h1></section> */}
              {/* <section id="simbol2"><img id="rash" src="images/rash.svg"></section> */}
              {/* <section id="simbol3"><img src="images/arrow.svg"></section> */}
            

            </header>
          </div>
          <div id="seach">
            <input id="search" type="search" placeholder="🔎 Procurar"> </input>
          </div>
            
            <section>
              <h1>Pokemon</h1>
              <pokeball />
              {this.pokemon.map((poke) => (
                <Card pokemon={poke} />
              ))}

            </section>
          
        
      </section>
    )
  }

}

export default Home;