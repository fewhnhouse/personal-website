import React from 'react'
import './App.css'
import { ThemeProvider } from 'styled-components'
import Routing from './Routing'
import { ApolloProvider } from '@apollo/react-hooks'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

const App: React.FC = () => {
  const theme = {
    colors: {
      primary: '#4834d4',
      secondary: '',
      default: '',
    },
    fonts: {
      big: '32px',
      medium: '20px',
      small: '14px',
      tiny: '12px',
    },
    paddings: {
      small: '4px',
      medium: '10px',
      large: '20px',
    },
  }

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <div className='App' style={{ background: '#4834d4' }}>
          <Routing></Routing>
        </div>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
