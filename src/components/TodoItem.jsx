import IconCross from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const { id, title, completed } = todo;
  return (
    <article className="flex gap-4 border-b border-b-gray-500">
      {/* <button className=" h-5 w-5 flex-none rounded-full border-2 text-gray-400">
        <IconCheck />
      </button> */}
      <button
        onClick={() => updateTodo(id)}
        className={`h-5 w-5 flex-none rounded-full border-2 text-gray-400 ${completed ? "grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-gray-200" : "inline-block"}`}
      >
        {completed && <IconCheck />}
      </button>
      <p
        className={`grow ${completed ? "text-gray-400 line-through dark:text-gray-600" : "text-gray-600 dark:text-gray-300"}`}
      >
        {title}
      </p>
      <button onClick={() => deleteTodo(id)} className="flex-none">
        <IconCross />
      </button>
    </article>
  );
};

export default TodoItem;
