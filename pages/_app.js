import '../styles/globals.css'
import { ChakraProvider, Container } from '@chakra-ui/react'
import Navbar from '../src/Navbar'

function MyApp({ Component, pageProps }) {
  return <ChakraProvider><Navbar /> <Container><Component {...pageProps} /> </Container></ChakraProvider>
}

export default MyApp
