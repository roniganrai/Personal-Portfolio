import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const cursorDot = document.querySelector(".cursor-dot");
    const cursorOutline = document.querySelector(".cursor-outline");

    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      cursorDot.style.left = `${clientX}px`;
      cursorDot.style.top = `${clientY}px`;

      cursorOutline.style.left = `${clientX}px`;
      cursorOutline.style.top = `${clientY}px`;
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <div className="cursor-dot"></div>
      <div className="cursor-outline"></div>
    </>
  );
}
