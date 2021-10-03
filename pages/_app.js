import { createGlobalStyle } from 'styled-components';
import Layout from 'src/components/Layout';

const GlobalStyle = createGlobalStyle`
html{
  box-sizing: border-box;
  font-size: 14px;

  --font-size-small: 1rem;
  --font-size-medium: 1.25rem;
  --font-size-large: 1.5rem;

  --color-text: hsl(206deg, 73%, 9%);
  --color-text-light: hsl(206deg, 73%, 99%);
  --color-background: hsl(260deg, 100%, 99%);
  --color-background-dark: hsl(239deg, 74%, 80%);
  --color-background-light: hsl(240deg, 77%, 90%);
  --color-blurred-background: hsla(260deg, 100%, 99%, 0.85);
  --color-primary: hsl(238deg, 35%, 19%);
  --color-secondary: hsl(349deg, 96%, 31%);
  --color-tertiary: hsl(201deg, 95%, 44%);
  --color-success: hsl(160deg, 100%, 40%);
  --color-success-background: hsla(160deg, 100%, 40%, 0.1);
  --color-error: hsl(340deg, 95%, 50%);
  --color-error-background: hsla(340deg, 95%, 43%, 0.1);
  --color-alert: hsl(37deg, 100%, 50%);
  --color-alert-background: hsla(52deg, 100%, 50%, 0.25);

  @media (min-width: 1024px) {
    --font-size-small: 1.25rem;
    --font-size-medium: 1.5rem;
    --font-size-large: 1.75rem;
  }
}

*, *:before, *:after {
  box-sizing: inherit;
  line-height: 1.6;
}

body {
  background-color: var(--color-background);
  min-height: 100vh;
  font-family: Roboto, sans-serif;
  margin: 0;
  display: flex;
  flex-direction: column;
}

#__next {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
