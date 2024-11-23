import React from "react";
import Didgah from "@/components/Didgah/Didgah";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import BlogContent from "../container/ReadBlog/BlogContent";
import BlogBotton from "../container/ReadBlog/BlogBotton";
import BlogCard from "../container/ReadBlog/BlogCard";

export default function ReadBlog() {
  return (
    <>
      <Header />

      <BlogBotton />
      <div className="flex w-full">
        <BlogContent />

        <div className="w-1/2 mt-10">
          <BlogCard />
        </div>
      </div>
      <Didgah />
      <Footer />
    </>
  );
}
