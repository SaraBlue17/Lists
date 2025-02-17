import Color from "./Color"; 

export default function Colors({ colors }) {
  return (
    <div>
      <h3>Colors</h3>
      <ul>
        {colors.map((color) => (
          <Color key={color.id} color={color} />
        ))}
      </ul>
    </div>
  );
}
