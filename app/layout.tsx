import React from 'react'
import '../styles/globals.css'

import { Sidebar } from "./Sidebar"

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Next.js challenge</title>
      </head>
      <body>
        <Sidebar />
        <div  className="content">
        {children} 
        </div>
      </body>
    </html>
  )
}









