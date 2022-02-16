import React from 'react';

function TaskLi(task) {
  const { description } = task.task;

  return (
      <li className='task'>
        { description }
      </li>
  )
}

export default TaskLi;
