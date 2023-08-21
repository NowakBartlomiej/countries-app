import Link from "next/link"
import Pathname from "../components/Pathname"
import Header from "../components/header"
import HomeButton from "../components/HomeButton"

export const metadata = {
    title: 'About'
}

const page = () => {
  return (
    <div>
        <Pathname />
        
        <Header />
        <h1>About Page</h1>

        <Link href='/'>Home Page</Link>

        <HomeButton />
    </div>
  )
}

export default page