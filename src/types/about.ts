// Types for the About component

export interface AboutSectionProps {
  // Currently, the About component doesn't accept any props,
  // but we can add them here if needed in the future
  className?: string;
  id?: string;
}

export interface AboutContent {
  title: string;
  description: string[];
  // Add any other fields that might be needed for the about section
}

// Example usage of the types:
// const aboutContent: AboutContent = {
//   title: "Hi, I'm Cornel. Nice to meet you.",
//   description: [
//     "I'm a web developer who enjoys turning ideas into working applications...",
//     "I'm always eager to learn, improve my skills, and collaborate with others..."
//   ]
// };
