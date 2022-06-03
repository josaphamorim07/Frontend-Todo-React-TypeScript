import React, { useState } from "react";
import * as style from "./styled";
import Header from "../../components/Header";
import ModalTask from "../../components/ModalTask";
import TaskForm from "../../components/TaskForm";
import { ITask } from "../../interfaces/Task";
import TaskList from "../../components/TaskList/index";
import Footer from "../../components/Footer";

function Home() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [tasktoUpdate, setTasktoUpdate] = useState<ITask | null>(null);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal");
    if (display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  };

  const editTask = (task: ITask): void => {
    hideOrShowModal(true);
    setTasktoUpdate(task);
  };

  const handleUpdate = (id: number, title: string, difficulty: number) => {
    const updatedTask: ITask = { id, title, difficulty };
    const updatedITems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    });
    setTaskList(updatedITems);
    hideOrShowModal(false);
  };

  return (
    <div>
      <ModalTask
        children={
          <TaskForm
            btnText="Editar Tarefa"
            taskList={taskList}
            task={tasktoUpdate}
            handleUpdate={handleUpdate}
          />
        }
      />

      <Header />
      <style.mainContainer>
        <div>
          <h2>o que voce vai fazer?</h2>
          <TaskForm
            btnText="Criar Tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
          <h2>Suas terefas</h2>
          <TaskList
            taskList={taskList}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        </div>
      </style.mainContainer>
      <Footer />
    </div>
  );
}

export default Home;
