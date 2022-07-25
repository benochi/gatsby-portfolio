import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'
import { Link } from 'gatsby'

import ajax from '../images/logos/ajax.svg'
import aws from '../images/logos/aws.svg'
import bootstrap from '../images/logos/bootstrap.svg'
import css from '../images/logos/css.svg'
import express from '../images/logos/express.svg'
import flask from '../images/logos/flask.svg'
import git from '../images/logos/git.svg'
import github from '../images/logos/github.svg'
import html from '../images/logos/html.svg'
import jasmine from '../images/logos/jasmine.svg'
import jest from '../images/logos/jest.svg'
import jquery from '../images/logos/jquery.svg'
import js from '../images/logos/logo-javascript.svg'
import mongodb from '../images/logos/mongoDB.svg'
import node from '../images/logos/nodejs.svg'
import postgres from '../images/logos/postgresql.svg'
import python from '../images/logos/python.svg'
import react from '../images/logos/react.svg'
import reactNative from '../images/logos/react-native.svg'
import redis from '../images/logos/redis.svg'
import redux from '../images/logos/redux.svg'
import vscode from '../images/logos/vscode.svg'

import regurupic from '../images/projects/regurupic.jpg';
import recipepic from '../images/projects/recipeapp.jpg'


export default function Home() {
  return (
    <Layout>
      <section class="border-2 mb-5 p-5 border-lightest shadow-xl bg-darker">
        <div>
          <h2 class="text-3xl font-bold">Skills:</h2>
          <div class="grid grid-cols-3 gap-1 shadow-lg p-5 lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-4 xl:grid-cols-12 bg-lighter">
            <div>
              <h5 class="content-center text-center text-textcol"><strong>Ajax</strong></h5>
              <img className={styles.logo} alt="Ajax Icon" src={ajax}></img>
            </div>
            <div>
              <h5 class="content-center text-center font-bold">AWS</h5>
              <img className={styles.logo} alt="Amazon web services Icon" src={aws}></img>
            </div>
            <div>
              <h5 class="content-center text-center"><strong>Bootstrap</strong></h5>
              <img className={styles.logo} alt="Bootstrap Icon" src={bootstrap}></img>
            </div>
            <div>
              <h5 class="content-center text-center"><strong>CSS</strong></h5>
              <img className={styles.logo} alt="cascading style sheets Icon" src={css}></img>
            </div>
            <div>
              <h5 class="content-center text-center"><strong>Express</strong></h5>
              <img className={styles.logo} alt="express Icon" src={express}></img>
            </div>
            <div>
              <h5 class="content-center text-center"><strong>Flask</strong></h5>
              <img className={styles.logo} alt="flask Icon" src={flask}></img>
            </div>
            <div>
              <h5 class="content-center text-center"><strong>Git</strong></h5>
              <img className={styles.logo} alt="git Icon" src={git}></img>
            </div>
            <div>
              <h5 class="content-center text-center"><strong>Github</strong></h5>
              <img className={styles.logo} alt="Github Icon" src={github}></img>
            </div>
            <div>
              <h5 class="content-center text-center"><strong>HTML</strong></h5>
              <img className={styles.logo} alt="Hyper Text Markup Language Icon" src={html}></img>
            </div>
            <div>
              <h5 class="content-center text-center"><strong>Jasmine</strong></h5>
              <img className={styles.logo} alt="Jasmine Icon" src={jasmine}></img>
            </div>
            <div>
              <h5 class="content-center text-center"><strong>Jest</strong></h5>
              <img className={styles.logo} alt="Jest Icon" src={jest}></img>
            </div>
            <div>
              <h5 class="content-center text-center"><strong>jQuery</strong></h5>
              <img className={styles.logo} alt="jQuery Icon" src={jquery}></img>
            </div>
            <div>
              <h5 class="content-center text-center"><strong>JavaScript</strong></h5>
              <img className={styles.logo} alt="JavaScript Icon" src={js}></img>
            </div>
            <div>
              <h5 class="content-center text-center"><strong>Mongo DB</strong></h5>
              <img className={styles.logo} alt="Mongo Database Icon" src={mongodb}></img>
            </div>
            <div>
              <h5 class="content-center text-center"><strong>NodeJS</strong></h5>
              <img className={styles.logo} alt="NodeJS Icon" src={node}></img>
            </div>
            <div>
              <h5 class="content-center text-center"><strong>PostgreSQL</strong></h5>
              <img className={styles.logo} alt="PostgreSQL Icon" src={postgres}></img>
            </div>
            <div>
              <h5 class="content-center text-center"><strong>Python</strong></h5>
              <img className={styles.logo} alt="Python Icon" src={python}></img>
            </div>
            <div>
              <h5 class="content-center"><strong>React</strong></h5>
              <img className={styles.logo} alt="React Icon" src={react}></img>
            </div>
            <div>
              <h5 class="content-center"><strong>React Native</strong></h5>
              <img className={styles.logo} alt="React Native Icon" src={reactNative}></img>
            </div>
            <div>
              <h5 class="content-center"><strong>Redis</strong></h5>
              <img className={styles.logo} alt="Redis Icon" src={redis}></img>
            </div>
            <div>
              <h5 class="content-center"><strong>Redux</strong></h5>
              <img className={styles.logo} alt="Redux Icon" src={redux}></img>
            </div>
            <div>
              <h5 class="content-center"><strong>VSCode</strong></h5>
              <img className={styles.logo} alt="VSCode Icon" src={vscode}></img>
            </div>
          </div>
        </div>
      </section>
      <section class=" border-2 mb-5 p-1 border-lightest shadow-xl bg-darker">
        <h1 class="text-3xl font-bold p-5">PROJECTS:</h1>
        <div class="grid grid-cols-1 gap-1 p-5 lg:grid-cols-1 xl:grid-cols-1 ">
          <div class="grid-cols p-5 shadow-xl bg-lighter">
            <h1 class="content-center text-2xl font-bold">
              <Link className={styles.applink} target="_blank" to="http://reguru.herokuapp.com/">Go to REGURU - testuser/test1234</Link>
            </h1>
            <div class="shadow-xl content-center text-center">
              <img src={regurupic} alt="Reguru application" class="mt-2 object-cover h-480 w-960 border-2 border-lightest"></img>
            </div>
            <div class="grid-cols-1 bg-darkest p-2 border-2 shadow-xl mt-1 border-lightest">
              <h4 class="text-3xl font-bold">Description:</h4>
              <p class="pt-2">
                Reguru is a real estate application to help manage and source properties for investment purposes.  Reguru allows
                users to search for properties based on several query parameters with validation built in.  From these results a 
                user can add a property to a liked or managed column, or both.  <p><br></br>Users can then calculate expenses from their managed properties
                to see what net income could be expected by purchasing a property or from their curently managed properties. The frontend, backend
                and API were all built by myself and are hosted on heroku via Github. The database contains all real properties that were all
                obtained using a custom script and Octoparse.</p>
              </p>
            </div>
            <div class="grid-cols-1 bg-darkest p-2 border-2 shadow-xl border-lightest mt-1">
              <h4 class="text-3xl font-bold">Frontend - built by Dan</h4>
              <p class="pt-2"><strong>Technologies:</strong> React, JavaScript, HTML, CSS, React-Strap, Axios, Formik, Yup, JWT, graphJS</p>
              <p class="pt-2">Handles user Registration/Login calls to backend and graphJS call on dashboard.</p>
            </div>
            <div class="grid-cols-1 bg-darkest p-2 border-2 shadow-xl border-lightest mt-1">
              <h4 class="text-3xl font-bold">Backend - built by Dan</h4>
              <p class="pt-2"><strong>Technologies:</strong> NodeJS, Express, MongoDB, Mongoose, MongoDB Atlas, Hapi/joi, Axios, Bcrypt, Cors, Dotenv, Passport, JWT</p>
              <p class="pt-2">Handles user Registration/Login and user database as well as API calls for properties.</p>
            </div>
            <div class="grid-cols-1 bg-darkest p-2 border-2 shadow-xl border-lightest mt-1">
              <h4 class="text-3xl font-bold">API - built by Dan</h4>
              <p class="pt-2"><strong>Technologies:</strong> NodeJS, Express, MongoDB, Mongoose, MongoDB Atlas, body-parser</p>
              <p class="pt-2">Handles API response for property data to backend and property database </p>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-1 p-5 lg:grid-cols-1 xl:grid-cols-1 bg-gradient-to-t from-darker">
          <div class="grid-cols p-5 shadow-xl bg-lighter">
            <h1 class="content-center text-2xl font-bold">
              <Link className={styles.applink} target="_blank" to="http://recipelookup.herokuapp.com/">Go to Recipe Lookup - test-user/test1234</Link>
            </h1>
            <div class=" shadow-xl content-center text-center">
              <img src={recipepic} alt="Recipe application" class="mt-2 object-cover h-480 w-960 border-2 border-lightest"></img>
            </div>
            <div class="grid-cols-1 bg-darkest p-2 shadow-xl border-2 border-lightest mt-1">
              <h4 class="text-3xl font-bold">Description:</h4>
              <p class="pt-2">
                Recipe lookup is an application for finding what you can make out of specific ingredients.  This application was built because I enjoy cooking 
                and don't like wasting leftovers.  The application uses the Edamam API to find matching recipes, a quick ingredient list and cooking instructions.
              </p>
            </div>
            <div class="grid-cols-1 bg-darkest p-2 shadow-xl border-2 border-lightest mt-1">
              <h4 class="text-3xl font-bold">Frontend - built by Dan</h4>
              <p class="pt-2"><strong>Technologies:</strong> JavaScript, jQuery, HTML, CSS</p>
              <p class="pt-2">Handles user Registration/Login calls to backend and recipe ingredients.</p>
            </div>
            <div class="grid-cols-1 bg-darkest p-2 shadow-xl border-2 border-lightest mt-1">
              <h4 class="text-3xl font-bold">Backend - built by Dan</h4>
              <p class="pt-2"><strong>Technologies:</strong> Python, Flask, SQLAlchemy, PostgreSQL</p>
              <p class="pt-2">Handles user Registration/Login and user database as well as API calls for properties.</p>
            </div>
            <div class="grid-cols-1 bg-darkest p-2 shadow-xl border-2 border-lightest mt-1">
              <h4 class="text-3xl font-bold">API - Edamam</h4>
              <p class="pt-2">Handles API response for matching recipes based on ingredient query.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
