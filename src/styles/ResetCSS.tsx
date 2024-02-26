import { createGlobalStyle } from "styled-components";

const ResetCSS = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

p,
h1,
h2,
h3,
h4,
h5,
h6,
a,
span,
div {
  text-size-adjust: auto;
  overflow-wrap: break-word;
  font-family: "Roboto", sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
}
`

export default ResetCSS;