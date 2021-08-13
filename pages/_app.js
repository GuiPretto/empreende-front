import { ToastContainer } from 'react-toastify'
import Layout from '../src/components/Layout'
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css'
import '../styles/map.css'
import { ThemeProvider, createTheme } from '@material-ui/core';
import wrapper from '../src/store'

const MyApp = ({ Component, pageProps }) => {
  
  const theme = createTheme({
    palette: {
      primary: {
        light: '#8b6b61',
        main: '#5d4037',
        dark: '#321911',
        contrastText: '#fff',
      }
    }
  })

  
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </ThemeProvider>
  )
}

export default wrapper.withRedux(MyApp)
