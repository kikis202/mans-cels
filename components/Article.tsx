import Image, { type StaticImageData } from "next/image";
import { type ReactNode } from "react";

function TextArticle(props: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-col items-center gap-8 bg-secondary py-16 md:py-24">
      {props.children}
    </div>
  );
}

function LeftImageArticle(props: {
  title: string;
  description: string;
  image: StaticImageData;
}) {
  return (
    <div className="flex w-full flex-col items-center gap-8 bg-secondary py-16 md:py-24">
      <div className="flex w-full flex-col px-8 md:flex-row xl:px-0 max-w-screen-xl items-center gap-12">
        <Image
          src={props.image}
          alt={props.title}
          className="aspect-[3/4] max-h-[50vh] w-auto"
        />
        <div>
          <h2 className="mb-8 text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            {props.title}
          </h2>
          <p className="max-w-screen-xl text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:mx-0">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}

function RightImageArticle(props: {
  title: string;
  description: string;
  image: StaticImageData;
}) {
  return (
    <div className="flex w-full flex-col items-center gap-8 py-16 md:py-24">
      <div className="flex w-full flex-col px-8 md:flex-row xl:px-0 max-w-screen-xl items-center gap-12">
        <div>
          <h2 className="mb-8 text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            {props.title}
          </h2>
          <p className="max-w-screen-xl text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:mx-0">
            {props.description}
          </p>
        </div>
        <Image
          src={props.image}
          alt={props.title}
          className="aspect-[3/4] max-h-[50vh] w-auto"
        />
      </div>
    </div>
  );
}

type TextArticleProps = {
  type: "text";
  children: ReactNode;
};

type ImageArticleProps = {
  type: "left-image" | "right-image";
  title: string;
  description: string;
  image: StaticImageData;
};

type ArticleProps = TextArticleProps | ImageArticleProps;

export default function Article(props: ArticleProps) {
  switch (props.type) {
    case "text":
      return <TextArticle>{props.children}</TextArticle>;
    case "left-image":
      return (
        <LeftImageArticle
          image={props.image}
          title={props.title}
          description={props.description}
        />
      );
    case "right-image":
      return (
        <RightImageArticle
          image={props.image}
          title={props.title}
          description={props.description}
        />
      );
  }
}
