import styled, { css } from 'styled-components';

// A single styled button baseline that changes style
// based on props of the component
const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: darkgray;
  border: none;

  ${props => props.id === "learning" && css`
    background: rgba(33, 2, 207, 0.40);
    filter: drop-shadow(3px 3px 3px black);
    ${props => props.toggled === true && css`
      filter: drop-shadow(1px 1px 1px black);;
      transform: translateY(3px) translateX(3px);
      color: whitesmoke;
      text-shadow: 0px 0px 18px lightblue;
    `}
  `}

  ${props => props.id === "creating" && css`
    background: rgba(108, 2, 207, 0.40);
    filter: drop-shadow(3px 3px 3px black);
    ${props => props.toggled === true && css`
      filter: drop-shadow(1px 1px 1px black);;
      transform: translateY(3px) translateX(3px);
      color: whitesmoke;
      text-shadow: 0px 0px 18px plum;
    `}
  `}
`;

export default Button;