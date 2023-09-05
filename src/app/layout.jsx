import './globals.scss'
import { Inter } from 'next/font/google'

import Header from '@/components/header/header';
import ReactQueryProvider from './ReactQueryProvider';

const inter = Inter({subsets: ['latin']})

const Layout = ({ children }) => {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <main>
            {children}
          </main>
        </body>
      </html>
    </ReactQueryProvider>
  )
}

export default Layout