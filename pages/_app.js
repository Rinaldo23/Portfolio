import Navbar from '@/components/NavBar'
import '@/styles/globals.css'
import { useState } from 'react';

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Component {...pageProps} />
    </div>
  )
}
