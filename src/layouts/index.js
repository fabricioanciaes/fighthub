import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/header'
import { ThemeProvider, injectGlobal } from 'styled-components'

injectGlobal`
* {
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body {
  font-family:'Roboto', sans-serif;
  background-color: #1a1c28;
}
`;

const theme = {
  background: "#1a1c28",
  backgroundLight: "#33374c",
  backgroundToday: "#0b94b3",
  backgroundHappening: "#37a57c",
  twitch: "#6441A4",
  text: "rgba(255,255,255,0.8)",
  xl: "2.5rem",
  lg: "2rem",
  md: "1.5rem",
  nm: "1rem",
  sm: "0.8rem",
  borderRadius: "0.2rem",
  shadow: "0 0.5rem 1.5rem rgba(0, 0, 0, 0.20)",
};

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet
        title="Fighthub"
        meta={[
          { name: 'description', content: 'Calendário de Eventos da FGC' },
          {
            name: 'keywords',
            content:
              'fgc, fighting games, street fighter, guilty gear, dragon ball fighter z, arcade, gaming, games',
          },
        ]}
      />

      <Header />
      <div>{children()}</div>
    </div>
  </ThemeProvider>
)

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
