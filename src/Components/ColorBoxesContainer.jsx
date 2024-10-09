import ColorBox from "./ColorBox";
import colors from "../data/data";

export default function ColorBoxesContainer() {
  const boxes = [];
  for (let i = 0; i < 25; i++) {
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    boxes.push(<ColorBox key={i} initialColor={newColor} />);
  }
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
      }}
    >
      {boxes}
    </div>
  );
}