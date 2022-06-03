import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;

  input {
    padding: 8px 15px;
    margin-bottom: 1.5em;
    border-radius: 0;
    border: 1px solid;
  }

  input[type="submit"] {
    background-color: #61dafb;
    border: 1px solid #61dafb;
    color: #000;
    transition: 0.5s;
    cursor: pointer;
  }

  input[type="submit"]:houver {
    background-color: #fff;
    border-color: #282c34;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  label {
    font-weight: bold;
    margin-bottom: 0.4em;
  }
`;
