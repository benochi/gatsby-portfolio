import React from 'react'
import Layout from '../components/Layout'

import resume1 from '../images/resume/resume1.png';
import resume2 from '../images/resume/resume2.png';
import cover from '../images/resume/cover.png';

export default function CV() {
  return (
    <div>
      <Layout>
      <section class="bg-lighter border-2 text-center mb-5 p-1 border-lightest shadow-xl bg-gradient-to-t from-darker">
      <h1 class="text-3xl font-bold p-5"><a class="hover:text-darkest hover:bg-lightest border-b-2 p-2" target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1VYDAdMhPidGNNfUiKf9HjVtQy8v7VLfffDsXlQrwOVk/edit?usp=sharing">
          Cover Letter</a></h1>
        <div class="grid grid-cols-1 gap-1 p-5 lg:grid-cols-2 xl:grid-cols-2 bg-gradient-to-t from-darker content-center">
          <div class="grid-cols p-5 shadow-xl content-center">
            <img src={cover} alt="Springboard certificate of completion" class="mt-2 object-cover h-480 w-960 border-2 border-lightest"></img>
          </div>
        </div>
        <h1 class="text-3xl font-bold p-5"><a class="hover:text-darkest hover:bg-lightest border-b-2 p-2" target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1OnhCmoynRi-KrBFdWeKF8A567LHn_cLD/edit?usp=sharing&ouid=105266601067052062633&rtpof=true&sd=true">
          Resume</a></h1>
        <div class="grid grid-cols-1 gap-1 p-5 lg:grid-cols-2 xl:grid-cols-2 bg-gradient-to-t from-darker content-center">
          <div class="grid-cols p-5 shadow-xl content-center">
            <img src={resume1} alt="Springboard certificate of completion" class="mt-2 object-cover h-480 w-960 border-2 border-lightest"></img>
          </div>
          <div class="grid-cols p-5 shadow-xl content-center">
            <img src={resume2} alt="Springboard certificate of completion" class="mt-2 object-cover h-480 w-960 border-2 border-lightest"></img>
          </div>
        </div>
      </section>
      </Layout>
    </div>
  )
}