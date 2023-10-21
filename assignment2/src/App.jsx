import DataTable from "./components/DataTable";


function App() {
  const pokemons = [
    { id: 36, name: 'Caterpie', type: 'Bug', experience: 3 },
    { id: 19, name: 'Ekans', type: 'Poison', experience: 85 },
    { id: 61, name: 'Eevee', type: 'Normal', experience: 22 },
    { id: 68, name: 'Pikachu', type: 'Electric', experience: 93 },
    { id: 5, name: 'Pidgey', type: 'Flying', experience: 88 },
    { id: 27, name: 'Bulbasaur', type: 'Grass', experience: 243 },
    { id: 67, name: 'Charmander', type: 'Fire', experience: 71 },
    { id: 96, name: 'Squirtle', type: 'Water', experience: 63 },
    { id: 3, name: 'Meowth', type: 'Normal', experience: 176 },
    { id: 2, name: 'Snorlax', type: 'Normal', experience: 14 },
    { id: 41, name: 'Psyduck', type: 'Water', experience: 34 },
    { id: 5, name: 'Pidgeot', type: 'Water', experience: 34 },
  ];

  return (
    <div className="App">
      <DataTable  data={pokemons} ></DataTable>
    </div>
  );
}

export default App;