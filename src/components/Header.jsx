import { useSelector } from "react-redux";

const Header = () => {
  const { tasks, numberOfDoneTasks, numberOfUndoneTasks } = useSelector(
    (store) => store.tasks
  );
  return (
    <header>
      <h1>My todo list</h1>
      <div>
        <div>Total tasks: {tasks.length}</div>
        <div>Open tasks: {numberOfUndoneTasks}</div>
        <div>Closed tasks : {numberOfDoneTasks} </div>
      </div>
    </header>
  );
};

export default Header;
