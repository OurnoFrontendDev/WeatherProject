import styled from "styled-components";
import { fonts } from "../../fonts/fontStyles";

export const InputSearchBar = styled.input`
  &::placeholder {
    padding-left: 6px;
    padding-top: 20px;
    letter-spacing: 0.15px;
    font-family: ${fonts.Body};

    @media screen and (min-width: 320px) and (max-width: 768px) {
      padding-left: 2px;
    }
  }

  background-color: ${({ theme }) => theme["input-background-color"]};
  width: 100%;
  height: 35px;
  box-sizing: border-box;
  border-radius: 8px;
  border: none;
  outline: none;
  padding-left: 30px;

  @media screen and (min-width: 599px) and (max-width: 768px) {
    width: 100%;
  }
    
  @media screen and (min-width: 320px) and (max-width: 599px) {
    padding-left: 10px;
  }
`;
export const SearchCitiesList = styled.ul`
  position: absolute;
  width: 100%;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  z-index: 100;
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 200px;
  overflow-y: auto;
`;

export const SearchCitiesListTownItem = styled.li`
    cursor: pointer;
    padding: 10px;
    
    &:hover{
        background-color: aqua;
    }
`;


