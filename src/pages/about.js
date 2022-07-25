
import React from 'react'
import Layout from '../components/Layout'

export default function About() {
  return (
    <div>
      <Layout>
      <section class="bg-darker border-2 mb-5 p-1 border-lightest shadow-xl bg-gradient-to-t from-darker">
        <h1 class="text-3xl font-bold p-5">About:</h1>
        <div class="text-base  leading-relaxed mt-0 mb-4 pl-2 pr-2">
          <p>I am interested in all things tech, photography, gaming and MMA.  During my free time, I love to learn new skills.  I am a novice photographer, videographer, 
          and PC builder.  I like to think of new ways to solve problems which is why I'm pursuing software engineering and filing multiple patents.  I have also started a YouTube 
          and Rumble channel where I give coding tutorials(Links below) which keeps me highly motivated to learn new skills.
          </p>  <br></br>
          <p>
          Since completing 
          the <a target="_blank" rel="noreferrer" href="https://www.springboard.com/" class="font-bold text-springboard">Springboard</a> code camp, I have been taking AWS courses and focusing on Docker and Kubernetes.  I have also 
          completed 
          freelance websites and started a small company with another developer to pursue this.  My average week is dedicated  
          to coding, learning, making videos, and working on my fitness.  I also run 
          a <a target="_blank" rel="noreferrer" href="https://discord.gg/HB5PWsRK7E" class="font-bold text-discord">Discord</a> group for
           software engineers where we help 
          each other with the job search, DSNAs, and other tech questions.  We also work on projects together, and one of the other members 
          and I participated in 
          an <a target="_blank" rel="noreferrer" href="https://www.wsmv.com/2022/03/14/amazon-nashville-hosts-first-hack-tennessee-event/" class="text-amazon font-bold">Amazon</a> Hackathon. 
          </p> <br></br>
          <p>
          I am very interested in real estate investment and development, so I also build software catered to this when I have spare time.  
          My second capstone, Reguru, was created from a need I have as a real estate investor. Please, never hesitate to reach out for anything, as I am always willing to help
          people. <br></br>
          </p> <br></br>
             
        </div>
        <h1 class="border-b-2 border-lightest border-t-2 pt-1 pb-1 text-center font-bold bg-darkest">
          <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCcvDfBffmgsj4wh3JxtSgLQ" class="text-highlight">YouTube</a> and <a target="_blank" rel="noreferrer" href="https://rumble.com/register/EaterOfPlanets/" class="text-rumble">Rumble</a> channels
          </h1>
        <div class="grid grid-cols-1 gap-2 p-5 lg:grid-cols-2 xl:grid-cols-2 bg-gradient-to-t from-darker ">
          <div class="aspect-w-16 aspect-h-9"> 
            <iframe src="https://www.youtube.com/embed/T4ck92rDhSM" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
          </div>
          <div class="aspect-w-16 aspect-h-9">
            <iframe src="https://rumble.com/embed/v1ai709/?pub=mdo6d" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
          </div>
        </div>
      </section>
      </Layout>
    </div>
  )
}
