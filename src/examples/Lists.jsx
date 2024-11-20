import './App.css'
import { yesPokemonAgain, eeveeEvolutions } from '../data/pokemon'

function PokemonCard({ name, sprite }) {
  return (
    <div className='bg-yellow-50 rounded-xl text-neutral-800 p-2 flex flex-col items-center justify-end'>
      <img src={sprite} alt={name} />
      <h3>{name}</h3>
    </div>
  )
}

function App() {

  return (
    <>
      <h1>Pokemon</h1>
      <div className="grid grid-cols-2 gap-2">
      {yesPokemonAgain.map(({id, name, sprite}) => <PokemonCard key={`pokemon-${id}`} name={name} sprite={sprite}/>)}
      </div>
      
      <h1 className='mt-8'>Eevee evolutions</h1>
      <div className="grid grid-cols-2 gap-2">
      {eeveeEvolutions.map(({id, name, sprite}) => <PokemonCard key={`evee-${id}`} name={name} sprite={sprite}/>)}
      </div>
    </>
  )
}

export default App
