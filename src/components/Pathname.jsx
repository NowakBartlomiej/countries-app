'use client'
import { usePathname } from 'next/navigation'

const Pathname = () => {
  const pathname = usePathname();
  
   return (
    <div>Pathname: {pathname}</div>
  )
}

export default Pathname