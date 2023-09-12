import './globals.scss'
import { Inter } from 'next/font/google'

import Header from '@/components/header/header';
import ReactQueryProvider from './ReactQueryProvider';

import getQueryClient from '@/queryClient/components/getQueryClient';
import fetchData from './api/fetchData';
import { Hydrate, dehydrate } from "@tanstack/react-query"

const inter = Inter({subsets: ['latin']})

const Layout = async ({ children }) => {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(['countries'], () => fetchData('/all'))
  const dehydratedState = dehydrate(queryClient);
 
 
  return (
    <ReactQueryProvider>
      <Hydrate state={dehydratedState}>
        <html lang="en">
          <body className={inter.className}>
            <Header />
            <main>
              {children}
            </main>
          </body>
        </html>
      </Hydrate>
    </ReactQueryProvider>
  )
}

export default Layout