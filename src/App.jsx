import Colors from "./Colors";

const colorArray = [
  { id: 1, name: "Yellow" },
  { id: 2, name: "Blue" },
  { id: 3, name: "Black" },
];

function App() {
  return (
    <div>
      <Colors colors={colorArray} />
    </div>
  );
}

export default App;
