const TodoFilterButtons = ({ setFilter, filter }) => {
  return (
    <div className="flex justify-center gap-4 rounded-md bg-white p-3 transition-all duration-1000 dark:bg-gray-800">
      <button
        onClick={() => setFilter("all")}
        className={`font-bold hover:text-blue-600 ${filter === "all" ? "text-blue-400" : "text-gray-500"}`}
      >
        All
      </button>
      <button
        onClick={() => setFilter("active")}
        className={`font-bold hover:text-blue-600 ${filter === "active" ? "text-blue-400" : "text-gray-500"}`}
      >
        Active
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={`font-bold hover:text-blue-600 ${filter === "completed" ? "text-blue-400" : "text-gray-500"}`}
      >
        Completed
      </button>
    </div>
  );
};

export default TodoFilterButtons;
