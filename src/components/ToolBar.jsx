import { useRef } from "react";
import { useDispatch } from "react-redux";
import {
  ADD_TASK,
  RESET,
  TOGGLE_SORT_TASKS,
  UNDO_LAST_EVENT,
} from "../features/tasks/tasksSlice";
import { useSelector } from "react-redux";

const ToolBar = () => {
  const inputRef = useRef();

  const dispatch = useDispatch();

  const { lastState, sortTasks } = useSelector((store) => store.tasks);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(ADD_TASK({ name: inputRef.current.value, isDone: false }));
    inputRef.current.value = "";
  };

  return (
    <div className="vertical">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="newTask"
          id="newTask"
          ref={inputRef}
          required
        />
        <button>Register task</button>
      </form>
      <button
        onClick={() => {
          dispatch(RESET());
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          dispatch(TOGGLE_SORT_TASKS());
        }}
      >
        {sortTasks ? "Unsort" : "Sort"} my tasks
      </button>

      {lastState ? (
        <button
          onClick={() => {
            dispatch(UNDO_LAST_EVENT());
          }}
        >
          Undo last state
        </button>
      ) : null}
    </div>
  );
};

export default ToolBar;
