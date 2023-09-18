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

const Page = () => {
  return (
    <section>
      <Countries />
    </section>
  )
}

export default Page