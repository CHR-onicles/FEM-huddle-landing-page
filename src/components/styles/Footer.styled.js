import styled from "styled-components";
import { breakpoints } from "./Global";

export const StyledFooter = styled.section`
    position: relative;
    padding: 8rem 1rem 2.5rem;
    margin-top: 10rem;
    font-size: clamp(.9rem, 4vw, 1rem);
    background-color: ${({theme}) => theme.colors.footer};
    
    &, p {
        color: ${({theme}) => theme.colors.footerText};
    }

    .footer-info {
        & > * + * {
            margin-top: 1rem;
        }

        li {
            display: flex;
            align-items: center;
            gap: .8rem;
            
            img {
                width: 15px;
                height: 14px;
            }
        }
        
        li:nth-child(2) {
            align-items: baseline;
        }
    }
    
    .footer-nav:nth-child(2) {
        margin-top: 2rem;
    }
    
    .footer-nav:nth-child(3) {
        margin-top: .8rem;
    }

    .footer-nav {
        & > * + * {
            margin-top: .8rem;
        }
        
        li:hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }
    .social-icons {
        display: flex;
        gap: .7rem;
        margin-top: 3rem;
        width: fit-content;
        margin-inline: auto;
    }

    .copyright {
        text-align: center;
        margin-top: 1rem;
        font-size: .7rem;
    }

    @media screen and (${breakpoints.small}) {
        .wrapper {
            display: grid;
            column-gap: 2rem;
            grid-template-columns: 1fr .7fr .7fr;
            grid-template-rows: 1fr .3fr .1fr;
        }

        .footer-info {
            grid-column: 1 / 2;
            grid-row: 1 / 2;
            /* outline: 1px solid; */
        }

        .footer-nav:nth-child(2),
        .footer-nav:nth-child(3) {
            margin-top: 2.8rem;
            justify-self: center;
        }
        
        .footer-nav:nth-child(2) {
            grid-column: 2 / 3;
            grid-row: 1 / 2;
            /* outline: 1px solid; */
        }
        
        .footer-nav:nth-child(3) {
            grid-column: 3 / 4;
            grid-row: 1 / 2;
            /* outline: 1px solid; */
        }

        .social-icons {
            grid-column: 1 / -1;
            grid-row: 2 / 3;
        }

        .copyright {
            grid-column: 1 / -1;
            grid-row: 3 / 4;
        }
    }

    @media screen and (${breakpoints.large}) {
        .wrapper {
            grid-template-columns: 1fr .7fr .7fr .5fr;
            grid-template-rows: 1fr .2fr;
        }

        .social-icons {
            grid-column: 4 / 5;
            grid-row: 1 / 2;
        }

        .copyright { 
            grid-column: 3 / 5;
            grid-row: 2 / 3;
            justify-self: flex-end;
        }
    }
`;

export const FooterLogo = styled.img`
    width: 150px;
`;

export const SocialIcon = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,.8);
    cursor: pointer;
    transition: border-color .2s, color .2s;

    &:hover {
        border-color: ${({theme}) => theme.colors.active};
        color: ${({theme}) => theme.colors.active};
    }

    & > * {
        font-size: 1rem;
    }
`;

export const FooterCTA = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    width: min(95%, 500px);
    padding: 2.2rem 0 1.5rem;
    margin: 0 auto;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,.1);
    z-index: 1;

    h2 {
        color: hsl(192, 100%, 9%);
        font-size: clamp(.9rem, 5vw, 1.5rem);
        text-align: center;
    }
    button {
        padding: .8em 2em;
        width: fit-content;
        margin: 1rem auto 0;
    }
    
    @media screen and (${breakpoints.medium}) {
        button {
            padding: 1.2em 4em;
        }
    }
`;