import './globals.css'

import Navigation from "@/components/Navigation";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

export default RootLayout