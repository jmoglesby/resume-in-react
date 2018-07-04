import styled, { css } from 'styled-components'

const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;

  ${props => props.learning && css`
    background: blue;
    color: white;
  `}

  ${props => props.creating && css`
    background: green;
    color: white;
  `}
`;

export default Button