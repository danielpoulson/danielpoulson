import React from "react"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./styles.css"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" />
      <div className="dp__Container">
        <h1>React/Node Full Stack Developer</h1>
        <div className="dp__hero-text">
          Hello, my name is Dan. I am a Full Stack Developer living in Sydney,
          Australia.
        </div>
        <div className="dp__hero-text">
          I love working with Javascript and Node.
        </div>
      </div>
      <div className="dp__herodiv">
        <Image />
      </div>
    </Layout>
  </>
)

export default IndexPage
