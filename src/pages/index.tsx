import * as React from "react"
import Artwork from "../components/artwork";
import {graphql} from "gatsby";

type Tool = "kirta" | "vectornator" | "gimp" | "inkscape" | "paper"


type IndexPageProps = {
  data: {
    allArtwork: {
      nodes: {
        name: string,
        publishedAt: string,
        tools: Tool[]
      }[]
    }
  }
}


// markup
const IndexPage = ({data: {allArtwork: {nodes: artwork}}}: IndexPageProps) => {
  return (
    <>
      <header className="py-16">
        <div className="container mx-auto">
          <h1 className="text-3xl text-center">Amitosh Swain Mahapatra</h1>
        </div>
      </header>
      <main className="bg-gray-50 py-10">
        <div className="md:container mx-auto">
          <div className="grid grid-cols-3">
            {artwork.map(art => (
              <Artwork title={art.name} publishedAt={art.publishedAt}/>
            ))}
          </div>
        </div>
      </main>
      <footer className="bg-gray-100 py-20">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Amitosh Swain Mahapatra
        </p>
      </footer>
    </>
  )
}

export default IndexPage

export const query = graphql`
    query allArtwork {
      allArtwork(sort: {fields: publishedAt, order: DESC}) {
        nodes {
          name
          publishedAt
          tools
        }
      }
    }`
