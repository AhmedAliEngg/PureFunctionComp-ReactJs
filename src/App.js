
import './App.css';
function Recipe({ drinkers }) {
  return (
    <ol>    
      <li>Boil {drinkers} cups of milk.</li>
      <li>Add {2 * drinkers} spoons of masala spices.</li>
      <li>Remove from heat, and add {drinkers} spoons of tea.</li>
    </ol>
  );
}
function App() {
  return (
    <section>
      <h1>Spiced Chai Recipe</h1>
      <h2>For one</h2> 
      <Recipe drinkers={1} />
      <h2>For a gathering</h2>
      <Recipe drinkers={4} />
    </section>
  );
}

export default App;
