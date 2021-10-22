import styled from "@emotion/styled";

export const PrimaryTitle = styled.h1`
margin-left: 75px;
color: gray;
`;

export const SecondaryTitle = styled.h2`
  margin-left: 75px;
  color: gray;
`;

export const Button = styled.button`
  width: fit-content;
  padding: 10px;
  margin-top: 8px;
  font-size: 14px;
  background-color: #ebdc0e;
  border: none;
  border-radius: 10px;
  &:hover,
  &:active {
    cursor: pointer;
    background-color: #c2bc15;
  }
`;