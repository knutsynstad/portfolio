"use client";
import { ReactElement } from "react";
import styled from "styled-components";

const Container = styled.div<{
    gap?: number;
    color?: string;
    rounded?: string;
}>`
    grid-column-start: 1;
    grid-column-end: 13;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: ${(props) => props.gap}px;
    padding: ${(props) => (props.color !== undefined ? "100px 0px" : 0)};
    background-color: ${(props) => props.color};
    margin-bottom: 30px;
    border-radius: ${(props) => (props.rounded === "true" ? 24 : 0)}px;
    position: relative;
    &:after, &:before {
        content: "";
        position: absolute;
        top: 0px;
        width: 9000px;
        height: 100%;
        background-color: ${(props) => props.color};
    }
    &:after {
        right: -9000px;
    }
    &:before {
        left: -9000px;
    }
`;

interface RowProps {
    children: ReactElement[];
    gap?: number;
    color?: string;
    rounded?: boolean;
}

const Row = ({ children, gap = 32, color, rounded = false }: RowProps) => {
    return (
        <Container
            gap={gap}
            color={color}
            rounded={rounded ? "true" : undefined}
        >
            {children}
        </Container>
    );
};

export default Row;
