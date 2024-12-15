"use client"
import Footer from '@/components/Footer/Footer'
import MainHeader from '@/container/MainHeader/MainHeader'
import FrameFilm from '@/container/Video/FrameFilm'
import TitrVideo from '@/container/Video/TitrVideo'
import React from 'react'

export default function video() {

return (
    <>
      <MainHeader/>
      <TitrVideo/>
      <FrameFilm/>
      <Footer/>
    </>
  );
}
