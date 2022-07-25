import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'
import * as styles from '../styles/home.module.css'
import headshot from '../images/headshot.jpg'

//children is anything nested inside <Layout></Layout>
export default function Layout({ children }) {
  return (
    <div class="container mx-auto rounded-xl shadow-lg md:mx-auto">
      <Navbar />
      <section class="bg-lighter border-2 mb-5 border-lightest shadow-2xl">
        <div class="flex flex-col md:flex-row p-2 shadow-xl bg-gradient-to-t from-db2">
          <div class="p-2 mx-auto bg-contain bg-no-repeat bg-center ">
            <img class="items-center "src={headshot} alt="Dan headshot"></img>
          </div>
          <div class="flex shadow-xl content-center p-2 bg-color-red-500">
            <p class="text-3xl">
            Dan Politica<br></br>
            Software Engineer
            </p>
            <div class="flex flex-col content-center ">
              <div class="flex-auto">
                <div class="flex flex-col pl-2">
                  <a href="mailto:benochi82@gmail.com" rel="noreferrer" className={styles.btn}>Email me</a>
                  <a href="tel:7202069074" rel="noreferrer" className={styles.btn}>Call me</a>
                  <a href="https://github.com/benochi" target="_blank" rel="noreferrer" className={styles.btn}>Github</a>
                  <a href="https://www.linkedin.com/in/dan-p-eop/" target="_blank" rel="noreferrer" className={styles.btn}>LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
          <div class="p-2 flex content-center  font-medium">
            <p>Full stack Software Engineer with skills in JavaScript, Python, Node, PostgreSQL, MongoDB, and Redis.  16 years of background in law enforcement, 
              with promotion to Sergeant in 2019.  
              Dedicated to problem solving with a strong work ethic and drive to constantly improve.  Prior experience required a high attention to detail, 
              collaborating with diverse teams, excellent verbal communication skills, organizational skills, flexibility, and customer service.
            </p>
          </div>
        </div>
      </section>
      <div className="content">
        { children }
      </div>
      <footer>
        <p>Copyright 2022 Dan Politica</p>
      </footer>
    </div>
  )
}
