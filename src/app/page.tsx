import Swiiper from "@/container/Swiiper";
import Product from "@/components/Product/Product";
import Bime from "@/components/Bimeh/Bimeh";
import Soalat from "@/components/Soalat/Soalat";
import Didgah from "@/components/Didgah/Didgah";
import Footer from "@/components/Footer/Footer";
import MainHeader from "@/container/MainHeader/MainHeader";
import MainPoster from "@/container/MainHeader/MainPoster";
import DayofWork from "@/container/MainHeader/DayofWork";
import MovieContent from "@/container/MainHeader/MovieContent";
import PicofReserve from "@/container/MainHeader/PicofReserve";

function page() {
  return (
    <>
      <MainHeader />

      <MainPoster />

      <div className="flex flex-col mt-72  ">
        <DayofWork />
        <MovieContent />
        <Swiiper />
        <PicofReserve />
      </div>
      <Product />
      <Bime />
      <Soalat />
      <Didgah />
      <Footer />
    </>
  );
}

export default page;
