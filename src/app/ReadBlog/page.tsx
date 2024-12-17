import Didgah from "@/components/Didgah/Didgah";
import Footer from "@/components/Footer/Footer";
import BlogBotton from "@/container/ReadBlog/BlogBotton";
import BlogCard from "@/container/ReadBlog/BlogCard";
import BlogContent from "@/container/ReadBlog/BlogContent";
import MainHeader from "@/container/MainHeader/MainHeader";

export default function readblog() {
  return (
    <>
            <MainHeader />

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
