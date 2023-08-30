import './globals.css'
import { Inter } from 'next/font/google'

import Header from '@/components/header/header';

const inter = Inter({subsets: ['latin']})

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}

export default Layout