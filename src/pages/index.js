import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"


import Layout from "../components/layout"
import SEO from "../components/seo"
import GithubIcon from '../assets/github.svg'
import GmailIcon from '../assets/gmail.svg'
import LinkedInIcon from '../assets/linkedin.svg'
import "../styles/main.scss"
import "../styles/index.scss"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div className="index-page">
      <div className="columns">
        <div className="column is-one-quarter user-profile">
          <h2 className="name">Jacky Chu</h2>
          <div className="thumbnail">
            <Img fluid={data.file.childImageSharp.fluid} />
          </div>
          <p className="intro">
            I am a full-stack software engineer working at <a href="https://hypebeast.com/">HYPEBEAST</a> who enjoys bringing ideas to life and aspires 
            to make an impact on society.
          </p>
          <div className="social-wrapper">
            <div className="social-item">
              <a href="https://github.com/chujacky" className="github links" target="_blank" rel="noopener noreferrer">
                <GithubIcon />
              </a>
            </div>
            <div className="social-item">
              <a href="https://www.linkedin.com/in/jacky-chu" className="linkedin links" rel="noopener noreferrer">
                <LinkedInIcon />
              </a>
            </div>
            <div className="social-item">
              <a href="mailto:jacky9407@gmail.com" className="gmail links">
                <GmailIcon />
              </a>
            </div>
          </div>
          <div className="skills-wrapper">
            <Link className="links">About</Link>
            <Link className="links">Experience</Link>
            <Link className="links">Projects</Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
query {
  file(relativePath: { eq: "jacky.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
