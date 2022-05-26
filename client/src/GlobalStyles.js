//Global styles for the app

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --color-main: #6F8CFB; 
        --color-secondary: RGBA(111,140,251,0.6);
        --color-text: #424952; 
        --font-heading: 'Montserrat', Arial, Helvetica, sans-serif;
        --font-subheading: 'Ubuntu', Arial, Helvetica, sans-serif;
        --font-body: 'Abel', Arial, Helvetica, sans-serif;
    }

    /* http://meyerweb.com/eric/tools/css/reset/
        v2.0 | 20110126
        License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-size: 100%;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    button {
        border: none;
        color: var(--color-main);
        background-color: white;
        cursor: pointer;
        border-radius: 50px;
        transition: 0.1s ease-in-out;
        font-family: var(--font-heading);

        &:hover {
            transform: scale(1.05);
        }
    }
    
    h1, h2, h3, h4 {
        font-family: var(--font-heading);
        font-weight: bold;
        color: var(--color-text);
    }

    h5 {
        font-family: var(--font-body);
        font-weight: lighter;
        color: var(--color-text);
    }

    p, span {
        font-family: var(--font-body);
        color: var(--color-text);
    }

    h1 {
        font-size: 50px;
        letter-spacing: 4px;
        font-weight: bold;
    }

    h2 {
        font-size: 40px;
        font-family: var(--font-body);
    }

    h3 { 
        font-size: 30px;
    }

    h4 { 
        font-size: 24px;
    }

    h5 { 
        font-size: 20px;
    }

    p {
        font-size: 18px;
    }

`;
