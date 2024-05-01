import { useDispatch } from "react-redux";
import { REMOVE_TASK, TOGGLE_TASK } from "../features/tasks/tasksSlice";

const Todo = ({ task, index }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="checkbox"
        name="done"
        id="done"
        checked={task.isDone ? true : false}
        onChange={() => {
          dispatch(TOGGLE_TASK({ task: task, index: index }));
        }}
      />
      <div>{task.name}</div>
      <button
        onClick={() => {
          dispatch(REMOVE_TASK(task));
        }}
      >
        X
      </button>
    </div>
  );
};

export default Todo;
