import styled from 'styled-components';

const DefaultButton = styled.a`{
  box-shadow: inset 0 1px 0 0 #fff;
  background: linear-gradient(to bottom, #fff 5%, #f6f6f6 100%);
  background-color: #fff;
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  display: inline-block;
  cursor: pointer;
  color: #666;
  font-family: Arial;
  font-size: 14px;
  font-weight: bold;
  padding: 9px 27px;
  text-decoration: none;
  text-shadow: 0 1px 0 #fff;
  &:hover{
    background: linear-gradient(to bottom, #f6f6f6 5%, #fff 100%);
    background-color: #f6f6f6;
  }
}`;

export default DefaultButton;