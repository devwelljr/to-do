import React, { useState, useEffect, useContext } from "react";
import Context from "../context/Context";
import "../styles/userTasks.css";

function TaskForm() {
  const [newTask, setNewTask] = useState({
    description: "",
  });
  const [disable, setDisable] = useState(true);
  const { taskReqs, setTasks } = useContext(Context);

  /* A cada mudança nos inputs e feito a validação para liberação do butão */
  useEffect(() => {
    const { description } = newTask;
    const valid = description.length >= 4;

    if (valid) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [newTask]);

  /* Salva mudanças do input no estado local */
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewTask({ ...newTask, [name]: value });
  };

  /* Função responsável pela criação da task */
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await taskReqs.createSubmit(newTask);

      const {
        data: { tasks },
      } = await taskReqs.getAllTasks();

      setNewTask({ description: "" });
      setTasks(tasks);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='formProductsConteiner'>
      <h2 className='display-6 font-weight-normal'>
        Cadastre suas tarefas aqui:
      </h2>

      <br />

      <form className='' action='submit'>
        <label className='formLabel' htmlFor='name'>
          Descrição:
          <input
            type='text'
            name='description'
            className='form-control'
            placeholder='Digite a descrição da tarefa'
            value={newTask.description}
            onChange={handleChange}
          />
        </label>

        <br />

        <div className='row justify-content-center'>
          <button
            type='submit'
            className='btn btn-outline-light'
            disabled={disable}
            onClick={handleSubmit}
          >
            Novo Produto
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
