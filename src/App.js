
import './App.css';
let guest = 0;

function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}
function App() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}

export default App;
