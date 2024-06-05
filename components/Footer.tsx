import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <footer className="mt-12 flex w-full flex-col gap-4 bg-secondary p-8 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-lg">
        © 2024 Kristaps Kozulis. Mans ceļš uz Latvijas Universitāti.
      </p>
      <div className="flex gap-6">
        <a
          href={"https://www.linkedin.com/in/kristaps-kozulis-b78109252/"}
          rel="noopener noreferrer"
          target="_blank"
          className="-ml-1 p-1"
        >
          <LinkedInLogoIcon className="h-6 w-6" />
        </a>
        <a
          href={"https://github.com/kikis202/"}
          rel="noopener noreferrer"
          target="_blank"
          className="p-1"
        >
          <GitHubLogoIcon className="h-6 w-6" />
        </a>
        <a
          href={"https://x.com/kikis_0"}
          rel="noopener noreferrer"
          target="_blank"
          className="-mr-1 p-1"
        >
          <TwitterLogoIcon className="h-6 w-6" />
        </a>
      </div>
    </footer>
  );
}
