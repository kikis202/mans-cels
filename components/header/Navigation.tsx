import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const links = [
  {
    title: "Sākums",
    href: "/",
  },
  {
    title: "Mājas",
    href: "/posms/home",
  },
  {
    title: "Jūrmala",
    href: "/posms/jurmala",
  },
  {
    title: "Satiksme",
    href: "/posms/traffic",
  },
  {
    title: "Stāvvieta",
    href: "/posms/parking",
  },
  {
    title: "Universitāte",
    href: "/posms/university",
  },
];

export default function Navigation(props: { active: string }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary" size="icon">
          <HamburgerMenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="grid gap-4 py-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:font-bold hover:text-primary ${link.href === props.active ? "font-bold" : "text-muted-foreground"}`}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
