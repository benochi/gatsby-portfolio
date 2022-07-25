import React from 'react'
import Layout from '../components/Layout'

import springcert from '../images/certificates/springboard certificate.jpg';
import awsbcm from '../images/certificates/awsBCM.png';
import awssrm from '../images/certificates/awsSRM.png';
import hacktn from '../images/certificates/hackathon.png';


export default function Certificates() {
  return (
    <div>
      <Layout>
      <section class="bg-lighter border-2 mb-5 p-1 border-lightest shadow-xl bg-gradient-to-t from-darker">
        <h1 class="text-3xl font-bold p-5">Certificates:</h1>
        <div class="grid grid-cols-1 gap-1 p-5 lg:grid-cols-2 xl:grid-cols-2 bg-gradient-to-t from-darker content-center">
          <div class="grid-cols p-5 shadow-xl content-center">
            <img src={springcert} alt="Springboard certificate of completion" class="mt-2 object-cover h-480 w-960 border-2 border-lightest"></img>
          </div>
          
        </div>
        <div class="grid grid-cols-1 gap-1 p-5 lg:grid-cols-2 xl:grid-cols-2 bg-gradient-to-t from-darker">
          <div class="grid-cols p-5 shadow-xl">
            <img src={awsbcm} alt="AWS billing and cost management" class="mt-2 object-cover h-480 w-960 border-2 border-lightest"></img>
          </div>
          <div class="grid-cols p-5 shadow-xl">
            <img src={awssrm} alt="AWS shared responsiblity model" class="mt-2 object-cover h-480 w-960 border-2 border-lightest"></img>
          </div>
          <div class="grid-cols p-5 shadow-xl">
            <img src={hacktn} alt="Hackathon Tennessee certificate of completion" class="mt-2 object-cover h-480 w-960 border-2 border-lightest"></img>
          </div>
        </div>
      </section>
      </Layout>
    </div>
  )
}
