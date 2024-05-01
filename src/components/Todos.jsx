import { useSelector } from "react-redux";
import Todo from "./Todo";

const Todos = () => {
  const { tasks, sortTasks } = useSelector((store) => store.tasks);

  console.log(tasks);

  return sortTasks ? (
    <div className="vertical">
      <h2>Todos</h2>
      <div className="vertical">
        {tasks.map((task, index) => {
          if (!task.isDone) {
            return <Todo key={task.name} task={task} index={index} />;
          } else {
            return null;
          }
        })}
      </div>
      <h2>Done</h2>
      <div className="vertical">
        {tasks.map((task, index) => {
          if (task.isDone) {
            return <Todo key={task.name} task={task} index={index} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  ) : (
    <div className="vertical">
      <h2>Todos</h2>
      <div className="vertical">
        {tasks.map((task, index) => {
          return <Todo key={task.name} task={task} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Todos;
