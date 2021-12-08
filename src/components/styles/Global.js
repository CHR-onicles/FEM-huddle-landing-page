import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

    *, ::before, ::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({theme}) => theme.colors.body};
        color: hsl(192, 100%, 9%);
        font-family: 'Poppins', sans-serif;
        font-size: 1.15em;
    }

    h1, h2 {
        line-height: 1.2;
    }

    p {
        color: ${({theme}) => theme.colors.text};
        line-height: 1.5;
    }

    img {
        max-width: 100%;
    }

    ul {
        list-style-type: none;
    }
`

export const breakpoints = {
    small: 'min-width: 48em', // 768px
    medium: 'min-width: 64em', // 1024px
    large: 'min-width: 75em', // 1200px
    xlarge: 'min-width: 90em', // 1440px
}