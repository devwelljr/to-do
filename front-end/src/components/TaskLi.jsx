import React, { useContext, useState } from "react";
import Context from "../context/Context";

function TaskLi(task) {
  const { taskReqs, setTasks } = useContext(Context);
  const [updatedTask, setUpdatedTask] = useState({ newDescription: "" });
  const { description, _id } = task.task;

  /* update submit */
  const updateT = async (e) => {
    e.preventDefault();

    try {
      console.log(updatedTask)
      await taskReqs.updateSubmit(_id, updatedTask);

      const {
        data: { tasks },
      } = await taskReqs.getAllTasks();

      setTasks(tasks);
    } catch (error) {
      console.log(error);
    }
  };

  /* delete submit */
  const deleteSubmit = async (e) => {
    e.preventDefault();

    try {
      await taskReqs.deleteSubmit(_id);

      const {
        data: { tasks },
      } = await taskReqs.getAllTasks();

      setTasks(tasks);
    } catch (error) {
      console.log(error);
    }
  };

  /* Atualiza o produto */
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUpdatedTask({ ...updatedTask, [name]: value });
  };

  return (
    <div className='d-flex justify-content-around'>
      <li className='task'>{description}</li>

      <button onClick={(e) => deleteSubmit(e)}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          className='bi bi-trash'
          viewBox='0 0 16 16'
        >
          <path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z' />
          <path
            fillRule='evenodd'
            d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'
          />
        </svg>
      </button>
      <div>
        <input
          className='form-control'
          type='text'
          name='newDescription'
          placeholder='Nova tarefa'
          onChange={handleChange}
        />
        <button onClick={(e) => updateT(e)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-pencil-fill'
            viewBox='0 0 16 16'
          >
            <path d='M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z' />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default TaskLi;
