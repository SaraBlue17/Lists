import Colors from "./Colors";

const colorArray = [
  { id: 1, name: "Yellow" },
  { id: 2, name: "Blue" },
  { id: 3, name: "Black" },
];

function App() {
  return <Colors colors={colorArray} />;
}

export default App;
