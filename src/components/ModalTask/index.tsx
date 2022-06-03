import React from 'react'
import * as style from "./styled";

interface Props {
  children: JSX.Element;
}

const ModalTask = ({ children }: Props) => {
  const closeModal = (e: React.MouseEvent): void => {
    const modal = document.querySelector("#modal");
    modal!.classList.add("hide");
  };

  return (
    <div id="modal" className="hide">
      <style.ModalFade onClick={closeModal}></style.ModalFade>
      <style.ModalShow>
        <h2>Texto Modal</h2>
        {children}
      </style.ModalShow>
    </div>
  );
};

export default ModalTask;
