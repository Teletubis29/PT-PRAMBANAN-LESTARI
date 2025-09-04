import React from 'react'
import HeroGallery from '../components/Gallery/HeroGallery'
import GallerySection from '../components/Gallery/GallerySection'
import GalleryContent from '../components/Gallery/GalleryContent'

const Gallery = () => {
  return (
    <div>
      <HeroGallery/>
      <GallerySection/>
      <GalleryContent/>
    </div>
  )
}

export default Gallery