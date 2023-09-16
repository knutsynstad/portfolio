"use client";
import styled from "styled-components";

const Group = styled.div`
    grid-column-start: 1;
    grid-column-end: 13;
    display: flex;
    gap: 30px;
    > * {
        flex-grow: 1;
        flex-basis: 0;
    }
`;

interface ButtonGroupProps {
    children: React.ReactNode | React.ReactNode[];
}

const ButtonGroup = ({ children }: ButtonGroupProps) => {
    return <Group>{children}</Group>;
};

export default ButtonGroup;
