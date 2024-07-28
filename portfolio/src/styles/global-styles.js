import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
 
    box-sizing: border-box;

  }


  html, body, #root {
    width:100%;
  
    font-family: 'Poppins', sans-serif;



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
