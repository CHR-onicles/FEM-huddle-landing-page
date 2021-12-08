import styled from "styled-components";
import { breakpoints } from "./Global";

export const Button = styled.button`
    display: block;
    padding: .5em 1em;
    font-size: .9rem;
    font-weight: 700;
    background-color: ${({ bg }) => bg || '#fff'};
    color: ${({ color }) => color || '#333'};
    border: none;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0,0,0,.15);
    transition: transform .2s;

    &:hover {
        opacity: 0.8;
        transform: scale(.95);
    }

    @media screen and (${breakpoints.medium}) {
        padding: .8em 2.5em;
    }
`;