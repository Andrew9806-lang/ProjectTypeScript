import styled from "@emotion/styled";
import { css } from "@emotion/react";

const boxBasicStyles = css`
  display: flex;
  flex-direction: column;
`;

export const FormWrapper= styled.form`
${boxBasicStyles}
background-color: white;
width: 400px;
padding: 50px;
gap: 4px;
`

export const CheckBox= styled.label`
 display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    accent-color: #4caf50; // цвет галочки
  }
`



