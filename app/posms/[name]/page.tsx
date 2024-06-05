import Header from "@/components/header/Header";

const pages = {
  home: {
    title: "Mājas",
    next: {
      href: "/posms/jurmala",
      title: "Jūrmala",
    },
  },
  jurmala: {
    title: "Jūrmala",
    next: {
      href: "/posms/traffic",
      title: "Satiksme",
    },
  },
  traffic: {
    title: "Satiksme",
    next: {
      href: "/posms/parking",
      title: "Stāvvieta",
    },
  },
  parking: {
    title: "Stāvvieta",
    next: {
      href: "/posms/university",
      title: "Universitāte",
    },
  },
  university: {
    title: "Universitāte",
    next: {
      href: "/",
      title: "Uz sākumu",
    },
  },
};

export default function Page(props: { params: { name: keyof typeof pages } }) {
  return (
    <>
      <Header
        title={pages[props.params.name].title}
        active={`/posms/${props.params.name}`}
      />
    </>
  );
}
