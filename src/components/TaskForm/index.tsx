import React from 'react'
import { FormEvent, useEffect, useState } from "react";
import * as style from "./styled";
import { ITask } from "../../interfaces/Task";

interface Props {
  btnText: string;
  task?: ITask | null;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  handleUpdate?(id: number, title: string, difficulty: number): void;
}

const TaskForm = ({
  taskList,
  setTaskList,
  task,
  btnText,
  handleUpdate,
}: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  const addTaskHnadle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (handleUpdate) {
      handleUpdate(id, title, difficulty);
    } else {
      const id = Math.floor(Math.random() * 1000);
      const newTask: ITask = { id, title, difficulty };
      setTaskList!([...taskList, newTask]);
      setTitle("");
      setDifficulty(0);
      console.log(taskList);
    }
  };
  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setDifficulty(task.difficulty);
    }
  }, [task]);

  return (
    <style.FormContainer onSubmit={addTaskHnadle}>
      <style.InputContainer>
        <label htmlFor="title">Titulo:</label>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="titulo da tarefa"
          onChange={(e) => setTitle(e.target.value)}
        />
      </style.InputContainer>
      <style.InputContainer>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input
          type="text"
          value={difficulty}
          name="difficulty"
          placeholder="Dificuldade da tarefa"
          onChange={(e) => setDifficulty(parseInt(e.target.value))}
        />
      </style.InputContainer>
      <input type="submit" value={btnText} />
    </style.FormContainer>
  );
};

export default TaskForm;
