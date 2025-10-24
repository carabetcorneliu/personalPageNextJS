// import { Github, Linkedin, Mail, Twitter, Telegram } from "lucide-react";
// import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
// import { SiX } from "react-icons/si";
import {
  SiGithub,
  SiLinkedin,
  SiTelegram,
  SiMailboxdotorg,
} from "react-icons/si";

export type SocialLink = {
  id: "github" | "linkedin" | "telegram" | "email" | "website";
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  rel?: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    href: "/go/github",
    icon: SiGithub,
    rel: "noopener noreferrer",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "/go/linkedin",
    icon: SiLinkedin,
    rel: "noopener noreferrer",
  },
  // {
  //   id: "x",
  //   label: "X",
  //   href: "/go/x",
  //   icon: SiX,
  //   rel: "noopener noreferrer",
  // },
  {
    id: "telegram",
    label: "Telegram",
    href: "/go/telegram",
    icon: SiTelegram,
    rel: "noopener noreferrer",
  },
  {
    id: "email",
    label: "Email",
    href: "/go/email",
    icon: SiMailboxdotorg,
  },
  //   {
  //     id: "website",
  //     label: "Website",
  //     href: "https://carabet.corneliu",
  //     icon: Globe,
  //   },
] as const;
