import styled from "styled-components";
export const TakContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 400px;
  margin: 0 auto;
  border-bottom: 1px solid #ccc;
  padding: 1em;
`;

export const TaskDetails = styled.div`
  text-align: left;
  h4 {
    font-size: 1.2em;
    margin-bottom: 1em;
  }
`;

export const TaskActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  button {
    margin-bottom: 0.5em;
    font-size: 1.2em;
    cursor: pointer;
    background-color: #282c34;
    color: #fff;
    padding: 0.4em;
    transition: 0.5s;
  }
  button:houve {
    color: #61dafb;
  }
`;
