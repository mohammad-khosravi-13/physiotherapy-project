import Footer from '@/components/Footer/Footer'
import CardBlog from '@/container/Blog/CardBlog'
import PosterBlog from '@/container/Blog/PosterBlog'
import MainHeader from '@/container/MainHeader/MainHeader'
import React from 'react'

export default function blog() {
  return (
<>
<MainHeader/>
<PosterBlog/>
<CardBlog/>
<Footer/>
</>
  )
}
