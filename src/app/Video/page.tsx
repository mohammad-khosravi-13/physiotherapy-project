"use client"
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import FrameFilm from '@/container/Video/FrameFilm'
import TitrVideo from '@/container/Video/TitrVideo'
import React from 'react'

export default function video() {

return (
    <>
      <Header />
      <TitrVideo/>
      <FrameFilm/>
      <Footer/>
    </>
  );
}
