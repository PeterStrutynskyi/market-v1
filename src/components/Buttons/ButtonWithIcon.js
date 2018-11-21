import styled from 'styled-components';

export const ButtonWithIcon = styled.button`
  background: ${({ buttonBackgroundColor }) => buttonBackgroundColor};
  color: #fff;
  position: relative;
  font-size: 14px;
  cursor: pointer;
  padding: 7px 10px 9px 40px;
  display: inline-block;
  border: none;

  &:after {
    content: '';
    background-image: url(${({ iconUrl }) => iconUrl});
    background-size: contain;
    background-repeat: no-repeat;
    margin: 0 5px;
    left: 5px;
    top: 7px;
    position: absolute;
    width: 18px;
    height: 18px;
    display: inline-block;
  }
`;

