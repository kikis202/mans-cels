import Header from "@/components/header/Header";
import ImageCarousel from "@/components/landing-page/ImageCarousel";

export default function Home() {
  return (
    <div>
      <Header title="Kristapa ceļš uz LU" />
      <main className="flex h-full w-full items-center justify-center">
        <ImageCarousel />
      </main>
      <footer></footer>
    </div>
  );
}
