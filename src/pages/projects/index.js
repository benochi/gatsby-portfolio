import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import Layout from '../../components/Layout'

export default function Projects() {

  const Reguru = {
    name: "Reguru",
    description: "",
    imageSrc: "blah" 
  }

  return (
    <Layout>
      <div>
        <ProjectCard/>
        <ProjectCard/>
      </div>
    </Layout>
  )
}
