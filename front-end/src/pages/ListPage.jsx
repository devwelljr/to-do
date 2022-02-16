import React, { useContext, useEffect, useState } from "react";
import TaskLi from "../components/TaskLi";
import Context from "../context/Context";

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
      <h1>To do List</h1>
      <div>
        {loading ? (
          <span className='display-6 font-weight-normal'>Nenhuma Task</span>
        ) : (
          <ul>
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
