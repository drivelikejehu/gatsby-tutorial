import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/img4.jpeg"
import Image from "gatsby-image"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "img3.jpeg" }) {
      childImageSharp {
        fixed(width: 300, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "img4.jpeg" }) { 
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  console.log(data)

  return (
    <section className="images">
      <article className="single-image">
        <h3>
          <img src={img} width="100%"/>
        </h3>
      </article>
      <article className="single-image">
        <h3>fixed image/blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed}/>
      </article>
      <article className="single-image">
        <h3>fluid image/svg</h3>
      </article>
    </section>
  )
}

export default Images
