import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --background-color: #ffffff;
    --foreground-color: #000000;
    --primary-text-color: #000000;
    --secondary-text-color: #ffffff;
    --toggle-bg: #ffffff;
    --toggle-fg: #000000;
  }:root {
  --background-color-light: #ffffff;
  --primary-text-color-light: #000000;
  --background-color-dark: #0a0a0a;
  --primary-text-color-dark: #f6f6f6;
}

[data-theme="light"] {
  --background-color: var(--background-color-light);
  --primary-text-color: var(--primary-text-color-light);
}

[data-theme="dark"] {
  --background-color: var(--background-color-dark);
  --primary-text-color: var(--primary-text-color-dark);
}


  * {
    margin: 0;
    box-sizing: border-box;
  }

  *::after,
  *::before {
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    font-family: 'Poppins', sans-serif;
    background: var(--background-color);
    color: var(--primary-text-color);
  }

  *, button, input {
    outline: 0;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`
