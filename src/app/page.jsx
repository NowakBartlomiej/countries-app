import getQueryClient from "../queryClient/components/getQueryClient"
import fetchData from "./libs/fetchData"
import { Hydrate, dehydrate } from "@tanstack/react-query"
import Countries from "@/components/countries/countries"


export const metadata = {
  title: 'Home Page',
  description: 'This is the home page',
  category: 'education',
  keywords: ['geography', 'countries', 'country', 'map', 'education'],
  icons: {
    icon: 'logo.svg',
  }
}

const Page = async () => {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(['countries'], () => fetchData('/all'))
  const dehydratedState = dehydrate(queryClient);
  
  return (
    <section>
      <Hydrate state={dehydratedState}>
        <Countries />
      </Hydrate>
    </section>
  )
}

export default Page