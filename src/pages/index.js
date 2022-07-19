import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'
import { Link } from 'gatsby'
import headshot from '../images/headshot.jpg'
import js from '../images/logos/js.png'
import python from '../images/logos/python.png'
import react from '../images/logos/react.png'
import redux from '../images/logos/redux.png'
import jquery from '../images/logos/jquery.png'
import flask from '../images/logos/flask.png'
import bootstrap from '../images/logos/bootstrap.png'
import ajax from '../images/logos/ajax.png'
import jasmine from '../images/logos/jasmine.png'
import jest from '../images/logos/jest.png'
import mongoose from '../images/logos/mongoose.png'
import node from '../images/logos/node.png'

export default function Home() {
  return (
    <Layout>
      <section>
        <div className={styles.imgdiv}>
          <img src={headshot} alt="Dan Politica picture" className={styles.img}></img>
          <section className={styles.header}>
            <div>
              <h2>Dan Politica</h2>
              <h3>Software Engineer</h3>
              <p>
              <Link to="mailto:someone@yoursite.com" className={styles.btn}>Email me</Link>
              <Link to="tel:7202069074" className={styles.btn}>Call me</Link>
              <Link to="https://github.com/benochi" target="_blank" className={styles.btn}>Github</Link>
              <Link to="https://www.linkedin.com/in/dan-p-eop/" target="_blank" className={styles.btn}>LinkedIn</Link>
              </p>
            </div>
          </section>
        </div>
      </section>
      
      <section>
        <div className={styles.skills}>
          <h2 class="text-3xl font-bold">Skills:</h2>
          <div class="grid grid-cols-3 lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-4 xl:grid-cols-12">
            <div>
              <h5 class="content-center"><strong>Javascript</strong></h5>
              <img className={styles.logo} src={js}></img>
            </div>
            <div>
              <h5 class="content-center"><strong>Python</strong></h5>
              <img className={styles.logo} src={python}></img>
            </div>
            <div>
              <h5 class="content-center"><strong>React</strong></h5>
              <img className={styles.logo} src={react}></img>
            </div>
            <div>
              <h5 class="content-center"><strong>Redux</strong></h5>
              <img className={styles.logo} src={redux}></img>
            </div>
            <div>
              <h5 class="content-center"><strong>jQuery</strong></h5>
              <img className={styles.logo} src={jquery}></img>
            </div>
            <div>
              <h5 class="content-center"><strong>NodeJS</strong></h5>
              <img className={styles.logo} src={node}></img>
            </div>
            <div>
              <h5 class="content-center"><strong>Flask</strong></h5>
              <img className={styles.logo} src={flask}></img>
            </div>
            <div>
              <h5 class="content-center"><strong>Bootstrap</strong></h5>
              <img className={styles.logo} src={bootstrap}></img>
            </div>
            <div>
              <h5 class="content-center"><strong>AJAX</strong></h5>
              <img className={styles.logo} src={ajax}></img>
            </div>
            <div>
              <h5 class="content-center"><strong>Mongoose</strong></h5>
              <img className={styles.logo} src={mongoose}></img>
            </div>
            <div>
              <h5 class="content-center"><strong>Jasmine</strong></h5>
              <img className={styles.logo} src={jasmine}></img>
            </div>
            <div>
              <h5 class="content-center"><strong>Jest</strong></h5>
              <img className={styles.logo} src={jest}></img>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
