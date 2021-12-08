import styled from "styled-components";
import { breakpoints } from "./Global";

export const StyledCard = styled.article`
    display: flex;
    flex-flow: column-reverse;
    padding: 3rem 1.5rem  2rem;
    margin: 2.5rem 0;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 15px rgba(0,0,0,.08);

    h2 {
        margin-top: 2.5rem;
        font-size: clamp(1.3rem, 5vw, 1.5rem);
    }

    p {
        margin-top: 1rem;
        font-size: clamp(.85rem, 4vw, 1rem);
    }

    h2, p {
        text-align: center;
    }
    
    .img-wrapper {
        max-width: 400px;
        margin: 0 auto;
    }
    
    @media screen and (${breakpoints.small}) {
        h2, p {
            max-width: 70%;
            margin-inline: auto;
        }
    }
    
    @media screen and (${breakpoints.medium}) {
        flex-flow: row;
        align-items: center;
        
        &:nth-child(2) {
            flex-flow: row-reverse;
            padding-left: 10%;
        }

        h2 {
            margin-top: 0;
        }

        h2, p {
            text-align: left;
        }
    }
`;