import Header from "@/components/header/Header";
import Article from "@/components/Article";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { type StaticImageData } from "next/image";

import { content as contentHome } from "./home";
import { content as contentJurmala } from "./jurmala";
import { content as contentTraffic } from "./traffic";
import { content as contentParking } from "./parking";
import { content as contentUniversity } from "./university";

interface PageItem {
  title: string;
  next: {
    href: string;
    title: string;
  };
  content: {
    image: StaticImageData;
    title: string;
    description: string;
  }[];
}

const pages: Record<string, PageItem> = {
  home: {
    title: "Mājas",
    next: {
      href: "/posms/jurmala",
      title: "Uz Jūrmalu",
    },
    content: contentHome,
  },
  jurmala: {
    title: "Jūrmala",
    next: {
      href: "/posms/traffic",
      title: "Uz satiksmi",
    },
    content: contentJurmala,
  },
  traffic: {
    title: "Satiksme",
    next: {
      href: "/posms/parking",
      title: "Uz stāvvietu",
    },
    content: contentTraffic,
  },
  parking: {
    title: "Stāvvieta",
    next: {
      href: "/posms/university",
      title: "Uz universitāti",
    },
    content: contentParking,
  },
  university: {
    title: "Universitāte",
    next: {
      href: "/",
      title: "Uz sākumu",
    },
    content: contentUniversity,
  },
};

export default function Page(props: { params: { name: keyof typeof pages } }) {
  const page = pages[props.params.name];

  return (
    <>
      <Header title={page.title} active={`/posms/${props.params.name}`} />
      <main className="flex h-full w-full flex-col items-center">
        <div className="my-12 w-full space-y-8">
          {page.content.map((item, index) => (
            <Article
              key={item.title}
              type={index % 2 === 0 ? "left-image" : "right-image"}
              {...item}
            />
          ))}
          <div className="flex h-[30vh] items-center justify-center ">
            <Link
              href={page.next.href}
              className="flex select-none items-center gap-2"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                {page.next.title}
              </h2>
              <ArrowRightIcon className="h-6 w-6 sm:h-8 sm:w-8 md:h-12 md:w-12" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
