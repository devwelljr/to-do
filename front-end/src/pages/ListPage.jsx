import React, { useContext, useEffect, useState } from "react";
import TaskLi from "../components/TaskLi";
import TaskForm from "../components/TaskForm";
import Context from "../context/Context";
import "../styles/userTasks.css";

function ListPage() {
  const { tasks, taskReqs, setTasks } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tasksExec = async () => {
      const {
        data: { tasks },
      } = await taskReqs.getAllTasks();

      setTasks(tasks);
    };

    tasksExec();
  }, []);

  /* Elemento loading */
  useEffect(() => {
    setLoading(true);
    if (tasks.length) {
      setLoading(false);
    }
  }, [tasks]);

  return (
    <main>
      <div className='productsContainer'>
      <TaskForm />
        {loading ? (
          <span className='display-6 font-weight-normal'>Nenhuma Task</span>
        ) : (
          <ul className="list">
            {tasks.map((task, index) => (
              <TaskLi task={task} key={index} />
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}

export default ListPage;
