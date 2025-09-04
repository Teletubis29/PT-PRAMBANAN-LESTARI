import React from 'react'
import HeroGallery from '../components/Gallery/HeroGallery'
import GallerySection from '../components/Gallery/GallerySection'
import GalleryContent from '../components/Gallery/GalleryContent'
import PortfolioSlider from '../components/Gallery/PortfolioSlider'

const Gallery = () => {
  return (
    <div>
      <HeroGallery/>
      <GallerySection/>
      <GalleryContent/>
      <PortfolioSlider/>
    </div>
  )
}

export default Gallery