import { useEffect, useRef, useState } from "react";
import TodoFilterButtons from "./TodoFilterButtons";

const TodoActions = ({
  computedItemsLeft,
  clearCompleted,
  setFilter,
  filter,
}) => {
  const myRef = useRef(null);
  useEffect(() => {
    if (computedItemsLeft > 0) {
      myRef.current.classList.remove("rounded-t-md");
    } else {
      myRef.current.classList.add("rounded-t-md");
    }
  }, [computedItemsLeft]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Actualiza el ancho al redimensionar
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Tailwind breakpoints típicos:
  // sm: 640px, md: 768px
  const isSmall = windowWidth < 768; // menor a md

  return (
    <>
      <section
        className="flex content-center justify-between rounded-t-md rounded-b-md bg-white px-4 text-gray-400 transition-all duration-1000 max-md:py-4 dark:bg-gray-800"
        ref={myRef}
      >
        <span className="grid content-center">
          {computedItemsLeft} items left
        </span>
        {!isSmall && (
          <TodoFilterButtons setFilter={setFilter} filter={filter} />
        )}
        <button onClick={clearCompleted}>Clear Completed</button>
      </section>
      {isSmall && (
        <section className="container mx-auto mt-8">
          <TodoFilterButtons setFilter={setFilter} filter={filter} />
        </section>
      )}
    </>
  );
};

export default TodoActions;
