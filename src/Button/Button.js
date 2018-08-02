import styled, { css } from 'styled-components';

const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: none;

  ${props => props.id === "learning" && css`
    background: blue;
    ${props => props.toggled === true && css`
      background: transparent;
      text-shadow: 4px 4px 14px #4444dd;
    `}
  `}

  ${props => props.id === "creating" && css`
    background: green;
    ${props => props.toggled === true && css`
      background: transparent;
      text-shadow: 4px 4px 14px #4444dd;
    `}
  `}
`;

export default Button;