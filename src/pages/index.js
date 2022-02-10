import React from "react"
import Layout from "../components/layout"
import { PageTitle } from "../components/page-title"

export default function Home() {
  return (
    <Layout>
      <PageTitle>Home</PageTitle>
      <img src="https://source.unsplash.com/600x300/?house" alt="house" />
      <p className="py-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque quasi
        non facere ipsa totam architecto rem officia blanditiis corrupti,
        explicabo aliquam libero doloremque. Aut recusandae laborum odit illum
        doloribus adipisci. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Labore facere tenetur eaque fuga, odit quis accusamus ipsa
        ducimus, doloribus dicta quibusdam incidunt beatae distinctio neque
        molestias laborum! Tenetur, ipsum consequuntur.
      </p>
    </Layout>
  )
}
