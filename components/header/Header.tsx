import ThemeToggle from "./ThemeToggle";
import Navigation from "./Navigation";

export default function Header(props: { title: string; active: string }) {
  const { title, active } = props;
  return (
    <header className="flex h-16 w-full items-center justify-between border-b-2 border-b-border bg-secondary px-4">
      <Navigation active={active} />
      <h1 className="text-2xl font-bold text-muted-foreground">{title}</h1>
      <ThemeToggle />
    </header>
  );
}
