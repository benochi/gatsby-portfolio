import React from 'react'
import Layout from '../components/Layout'

export default function NotFound() {
  return (
    <Layout>
      <div>
        <h2><strong>404</strong></h2>
        <p>Sorry, that page doesn't exist<br></br>
        <a href="/">Return home</a>
        </p>
      </div>
    </Layout>
  )
}
