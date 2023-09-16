"use client";
import styled from "styled-components";

const Heading = styled.h2`
    padding: 8px 16px;
    background-color: black;
    color: white;
    text-decoration: none;
    text-align: center;
`;

interface H2Props {
    label: string;
}

const H2 = (props: H2Props) => {
    return <Heading>{props.label}</Heading>;
};

export default H2;
