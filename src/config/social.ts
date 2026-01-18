// import { Github, Linkedin, Mail, Twitter, Telegram } from "lucide-react";
// import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
// import { SiX } from "react-icons/si";
import { TelegramIcon } from "@/components/ui/telegram-icon";
import {
  Github,
  Linkedin,
  // SiMailboxdotorg,
} from "lucide-react";

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
    icon: Github,
    rel: "noopener noreferrer",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "/go/linkedin",
    icon: Linkedin,
    rel: "noopener noreferrer",
  },
  {
    id: "telegram",
    label: "Telegram",
    href: "/go/telegram",
    icon: TelegramIcon,
    rel: "noopener noreferrer",
  },
  // {
  //   id: "email",
  //   label: "Email",
  //   href: "/go/email",
  //   icon: SiMailboxdotorg,
  // },
] as const;
