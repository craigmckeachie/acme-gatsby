import React from "react"
import Footer from "./footer"
import Header from "./header"
import "../styles/global.css"

export default function Layout({ children }) {
  return (
    <div className="p-10">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
