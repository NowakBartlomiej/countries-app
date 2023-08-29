import variables from './variables.module.scss'

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
      <h1 style={{ color: variables.primaryColor }}>Home Page</h1>
    </section>
  )
}

export default Page