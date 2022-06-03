import React from 'react'
import { ITask } from "../../interfaces/Task";
import * as style from "./styled";

interface Props {
  taskList: ITask[];
  deleteTask(id: number): void;
  editTask(task:ITask):void
}

const TaskList = ({ taskList, deleteTask,editTask }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <style.TakContainer key={task.id}>
            <style.TaskDetails>
              <h4>{task.title}</h4>
              <p>Dificuldade:{task.difficulty}</p>
            </style.TaskDetails>
            <style.TaskActions>
              <button onClick={()=>editTask(task)}>Editar</button>
              <button onClick={() => deleteTask(task.id)}>Excluir</button>
            </style.TaskActions>
          </style.TakContainer>
        ))
      ) : (
        <p>Nao há tarefas cadastrdas!</p>
      )}
    </>
  );
};

export default TaskList;
