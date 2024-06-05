import Article from "@/components/Article";
import Header from "@/components/header/Header";
import ImageCarousel from "@/components/landing-page/ImageCarousel";
import map from "@/public/images/homepage/map.png";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header title="Kristapa ceļš uz LU" active="/" />
      <main className="flex h-full w-full flex-col items-center ">
        <ImageCarousel />
        <div className="flex w-full flex-col items-center space-y-16">
          <Article type="text">
            <h2 className="mb-8 text-3xl md:px-12 md:text-4xl lg:px-16 lg:text-5xl xl:text-6xl">
              Par Mani
            </h2>
            <blockquote className="mx-8 max-w-screen-xl border-l-2 pl-6 text-lg italic md:px-12 md:text-xl lg:px-16 lg:text-2xl xl:text-3xl 2xl:mx-0">
              Es esmu Kristaps, Latvijas Universitātes students. Es studēju
              programmēšanu un apgūstu tīmekļa dizaina pamatus. Kursa ietvaros
              izveidoju šo mājaslapu, kurā aprakstu savu fizisko ceļu uz
              Latvijas Universitāti.
            </blockquote>
          </Article>
          <Link href="/posms/home" className="relative w-full max-w-screen-xl">
            <div className="absolute left-[15%] top-[10%]  flex select-none items-center gap-2 text-secondary-foreground md:left-[20%] md:top-[20%]">
              <ArrowRightIcon className="h-6 w-6 sm:h-8 sm:w-8 md:h-12 md:w-12" />
              <p className="text-2xl sm:text-4xl md:text-6xl">Sāc ceļu</p>
            </div>
            <Image src={map} alt="Map" className="w-full" />
          </Link>
        </div>
      </main>
    </>
  );
}
