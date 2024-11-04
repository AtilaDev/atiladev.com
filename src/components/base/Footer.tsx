import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center justify-between gap-4 bg-gray-800 py-4 text-neutral-400">
      <div className="flex items-center gap-6">
        <Link
          href="https://twitter.com/FavreLeandro"
          target="_blank"
          className="transition-colors hover:text-orange-400"
          aria-label="Check my X"
        >
          <Twitter className="h-8 w-8" />
        </Link>
        <Link
          href="https://github.com/AtilaDev"
          target="_blank"
          className="transition-colors hover:text-orange-400"
          aria-label="Check my Github"
        >
          <Github className="h-8 w-8" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/leandro-f-7a06a8171/"
          target="_blank"
          className="transition-colors hover:text-orange-400"
          aria-label="Check my Linkedin"
        >
          <Linkedin className="h-8 w-8" />
        </Link>
        <Link
          href="mailto:atiladevelop@gmail.com"
          className="transition-colors hover:text-orange-400"
          aria-label="Send me an email"
        >
          <Mail className="h-8 w-8" />
        </Link>
      </div>

      <p>
        © 2017-{new Date().getFullYear()} Leandro Favre · All rights reserved
      </p>
    </footer>
  );
};