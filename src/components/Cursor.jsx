import { useEffect, useState } from "react";
import "../styles/cursor.css";

function Cursor() {
  const [pos, setPos] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const move = (e) => {
      setPos({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener(
        "mousemove",
        move
      );
  }, []);

  return (
    <>
      <div
        className="cursor-ring"
        style={{
          left: pos.x,
          top: pos.y
        }}
      />

      <div
        className="cursor-dot"
        style={{
          left: pos.x,
          top: pos.y
        }}
      />
    </>
  );
}

export default Cursor;