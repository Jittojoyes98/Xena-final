import '../styles/globals.css'
import Layout from '../components/Layout'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  )
}

export default MyApp

