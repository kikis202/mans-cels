import { type StaticImageData } from "next/image";
import { type ReactNode } from "react";

function TextArticle(props: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-col items-center bg-muted-foreground py-16 md:py-24 gap-8">
      {props.children}
    </div>
  );
}

function LeftImageArticle(props: {
  children: ReactNode;
  image: StaticImageData;
}) {
  return <div>Left Image Article</div>;
}

function RightImageArticle(props: {
  children: ReactNode;
  image: StaticImageData;
}) {
  return <div>Right Image Article</div>;
}

type BaseArticleProps = {
  children: ReactNode;
};

type TextArticleProps = BaseArticleProps & {
  type: "text";
};

type ImageArticleProps = BaseArticleProps & {
  type: "left-image" | "right-image";
  image: StaticImageData;
};

type ArticleProps = TextArticleProps | ImageArticleProps;

export default function Article(props: ArticleProps) {
  switch (props.type) {
    case "text":
      return <TextArticle>{props.children}</TextArticle>;
    case "left-image":
      return (
        <LeftImageArticle image={props.image}>
          {props.children}
        </LeftImageArticle>
      );
    case "right-image":
      return (
        <RightImageArticle image={props.image}>
          {props.children}
        </RightImageArticle>
      );
  }
}
