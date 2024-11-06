import styled from "styled-components";

export const SwitchLabel = styled.label`
  display: block;
  position: relative;
  height: 2rem;
  width: 4rem;
  cursor: pointer;
  border-radius: 30px;
  border: 2px solid transparent;
  background-color: #e0e7ff;

  //@media screen and (max-width: 499px) {
  //  width: 52px;
  //}
  //@media screen and (min-width: 300px) and (max-width: 399px) {
  //  width: 35px;
  //}
`;

export const HiddenInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

export const ToggleThumb = styled.div<{ checked: boolean }>`
  position: absolute;
  top: 50%;
  left: ${(props) => (props.checked ? "calc(100% - 1.75rem - 2px)" : "1px")};
  height: 1.75rem;
  width: 1.75rem;
  background-color: #4f46e5;
  border-radius: 50%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  transform: translateY(-50%);
  transition: left 0.2s ease-in-out;

  // @media screen and (min-width: 300px) and (max-width: 399px) {
  //   height: 12px;
  //   width: 12px;
  //   left: ${(props) => (props.checked ? "calc(100% - 10px - 2px)" : "6px")};
  // }
`;

export interface LabelTextProps {
  readonly $isActive: boolean;
  $position: "left" | "right";
}

export const LabelText = styled.span<LabelTextProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  user-select: none;
  color: ${(props) => (props.$isActive ? "#ffffff" : "#1f2937")};
  ${(props) => props.$position === "left" && `left: 6.5px;`}
  ${(props) => props.$position === "right" && `right: 7px;`} 
  
  // @media screen and ( max-width: 499px) {
  //   ${(props) => props.$position === "left" && `left: 6.5px;`}
  //   ${(props) => props.$position === "right" && `right: 2px;`}
  //   font-size: 10px;
  // }
`;
