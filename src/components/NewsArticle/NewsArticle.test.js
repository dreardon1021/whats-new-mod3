import React from 'react'
import  { render } from '@testing-library/react';
import NewsArticle from './NewsArticle.js';
import '@testing-library/jest-dom'

describe('NewsArticle', () => {
  it('renders text that we expect', () => {
    const { getByText } = render(<NewsArticle
      id={1}
      headline={"Spider-Man Will Remain in the Marvel Cinematic Universe"}
      description={"The web slinger will be the only superhero with the ability to cross between Disney and Sony’s cinematic universes, according to Marvel Studios."}
      url={'https://www.nytimes.com/2019/09/27/business/media/spiderman-mcu-sony-marvel.html'}
      />);

    const headlineElement = getByText("Spider-Man Will Remain in the Marvel Cinematic Universe")
    const descriptionElement = getByText("The web slinger will be the only superhero with the ability to cross between Disney and Sony’s cinematic universes, according to Marvel Studios.")
    const anchorElement = getByText("Click here to view Article")

    expect(headlineElement).toBeInTheDocument()
    expect(descriptionElement).toBeInTheDocument()
    expect(anchorElement).toBeInTheDocument()
  })

  it('renders an image alt text that we expect', () => {
    const { getByAltText } = render(<NewsArticle />)

    const articleImage = getByAltText("article")

    expect(articleImage).toBeInTheDocument()
  })
})