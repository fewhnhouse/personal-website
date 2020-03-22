import React from 'react'
import './App.css'
import { ThemeProvider } from 'styled-components'
import Routing from './Routing'

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
    <ThemeProvider theme={theme}>
      <div className='App' style={{ background: '#4834d4' }}>
        <Routing></Routing>
      </div>
    </ThemeProvider>
  )
}

export default App
