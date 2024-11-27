import Didgah from "@/components/Didgah/Didgah";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import BlogBotton from "@/container/ReadBlog/BlogBotton";
import BlogCard from "@/container/ReadBlog/BlogCard";
import BlogContent from "@/container/ReadBlog/BlogContent";
import React from "react";

export default function readblog() {
  return (
    <>
      <Header />
      <BlogBotton />

      <div className="flex  w-full ">
        <BlogContent />
        <div className=" w-1/2 mt-10">
          <BlogCard />
        </div>
      </div>
      <Didgah/>
      <Footer/>
    </>
  );
}
