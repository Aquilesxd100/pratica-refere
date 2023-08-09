import styled from 'styled-components';

const ButtonStyled = styled.button`
  padding: 10px 15px;
  background-color: ${props => props.theme.colors.primary};
  border: none;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

export default ButtonStyled;
