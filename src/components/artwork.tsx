import React from 'react';
import {StaticImage} from "gatsby-plugin-image";

type ArtworkProps = { title: string, publishedAt: string }

export default function Artwork({title, publishedAt}: ArtworkProps) {
  return (
    <div className="m-5 border border-solid border-gray-100">
      <StaticImage src="https://placekitten.com/400/400" alt="A kitten"/>
      <div className="m-2">
        <h4>{title}</h4>
        <p className="text-xs text-gray-300">{new Date(publishedAt).toLocaleDateString()}</p>
      </div>
    </div>)
}
