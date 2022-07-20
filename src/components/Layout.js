import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

//children is anything nested inside <Layout></Layout>
export default function Layout({ children }) {
  return (
    <div class="container mx-auto rounded-xl shadow-lg md:mx-auto">
      <Navbar />
      <div className="content">
        { children }
      </div>
      <footer>
        <p>Copyright 2022 Dan Politica</p>
      </footer>
    </div>
  )
}
