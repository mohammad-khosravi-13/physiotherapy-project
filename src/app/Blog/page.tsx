import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import CardBlog from '@/container/Blog/CardBlog'
import PosterBlog from '@/container/Blog/PosterBlog'
import React from 'react'

export default function blog() {
  return (
<>

<Header/>
<PosterBlog/>
<CardBlog/>
<Footer/>
</>
  )
}
