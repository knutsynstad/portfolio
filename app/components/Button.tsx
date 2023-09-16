"use client";
import styled from "styled-components";

const StyledButton = styled.a`
    padding: 8px 16px;
    background-color: black;
    color: white;
    text-decoration: none;
    text-align: center;
`;

interface ButtonProps {
    label: string;
    href: string;
}

const Button = ({ label, href }: ButtonProps) => {
    return <StyledButton href={href} target="_blank">{label}</StyledButton>;
};

export default Button;
