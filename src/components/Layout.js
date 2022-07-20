import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

//children is anything nested inside <Layout></Layout>
export default function Layout({ children }) {
  return (
    <div class="max-w-sm mx-auto rounded-xl shadow-lg overflow-hidden md:max-w-7xl">
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
