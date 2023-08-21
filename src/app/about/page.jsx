import Header from "@/components/Header"
import HomeButton from "@/components/HomeButton"
import Pathname from "@/components/Pathname"
import Link from "next/link"


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