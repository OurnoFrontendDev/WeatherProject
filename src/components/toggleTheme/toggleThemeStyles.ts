import styled from "styled-components";

export const SwitchLabelThemeToggle = styled.label`
    display: block;
    position: relative;
    height: 2rem;
    width: 4rem;
    cursor: pointer;
    border-radius: 30px;
    border: 2px solid transparent;
    background-color: #e0e7ff;
`;

export const HiddenInputThemeToggle = styled.input`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
`;

export const ToggleThumbThemeToggle = styled.div<{ checked: boolean }>`
    position: absolute;
    top: 50%;
    left: ${(props) => (props.checked ? 'calc(100% - 1.75rem - 2px)' : '1px')};
    height: 1.75rem;
    width: 1.75rem;
    background-color: #4f46e5;
    border-radius: 50%;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    transform: translateY(-50%);
    transition: left 0.2s ease-in-out;
`;

export const LabelImageThemeToggle = styled.span<{ active: boolean; position: 'left' | 'right' }>`
    position: absolute;
    display: flex;
    top: 50%;
    transform: translateY(-50%);
    user-select: none;
    color: ${(props) => (props.active ? '#ffffff' : '#1f2937')};
    ${(props) => props.position === 'left' && `left: 6.5px;`}
    ${(props) => props.position === 'right' && `right: 7px;`}
`;
