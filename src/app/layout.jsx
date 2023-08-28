import './globals.css'
import { Inter } from 'next/font/google'

import Navigation from "@/components/Navigation";
import Header from '@/components/Header';

const inter = Inter({subsets: ['latin']})

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Header/>
        </header>
        
        <main>
          {children}
        </main>

        <footer></footer>
      </body>
    </html>
  )
}

export default Layout