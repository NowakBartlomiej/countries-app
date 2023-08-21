'use client'

import { useRouter } from "next/navigation"

const HomeButton = () => {
  const router = useRouter();
  
    return (
    <div>
        <button 
            type="button"
            onClick={() => router.push('/')}
        >
            Home Button
        </button>
    </div>
  )
}

export default HomeButton