import styled from "styled-components";
import { breakpoints } from "./Global";

export const StyledHeader = styled.header`
    background: ${({ theme }) => theme.colors.header};
    padding: 40px 0;
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.5rem;
`;

export const Logo = styled.img`
    width: 120px;

    @media screen and (${breakpoints.medium}) {
        width: 150px;
    }
`;

export const Hero = styled.section`
    display: flex;
    flex-direction: column;

    * + * {
        margin-top: 1rem;
    }

    h1 {
        font-size: clamp(1.8rem, 4vw, 2.3rem);
        max-width: 20ch;
    }

    h1, p {
        text-align: center;
    }

    button {
        width: fit-content;
        padding: .8em 2.5em;
        margin-inline: auto;
    }
    
    img {
        display: block;
        margin-top: 2rem;
        margin-inline: auto;
    }

    @media screen and (${breakpoints.small}) {
        img {
            max-width: 400px;
        }
    }

    @media screen and (${breakpoints.medium}) {
        flex-direction: row;
        gap: 3rem;

        h1, p {
            text-align: left;
        }

        p {
            max-width: 45ch;
        }

        button {
            padding: 1em 2.7em;
            margin: 1rem  auto 0 0;
        }

        img {
            margin-top: 0;
            max-width: 600px;
            /* outline: 1px solid red; */
        }
    }
`;