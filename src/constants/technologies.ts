export interface Technology {
  name: string
  src: string
  width?: number
}

export const TECHNOLOGIES: Technology[] = [
  {
    name: "TypeScript",
    src: "/images/typescript-logo.png",
  },
  {
    name: "React.js",
    src: "/images/react-logo.png",
    width: 23,
  },
  {
    name: "Node.js",
    src: "/images/node-logo.png",
    width: 18,
  },
  {
    name: "Next.js",
    src: "/images/next-logo.png",
    width: 18,
  },
  {
    name: "Material UI",
    src: "/images/mui-logo.png",
    width: 22,
  },
  {
    name: "Webpack",
    src: "/images/webpack-logo.png",
    width: 19,
  },
  {
    name: "Jest",
    src: "/images/jest-logo.svg",
  },
  {
    name: "OpenAPI",
    src: "/images/openapi-logo.png",
  },
  {
    name: "PostgreSQL",
    src: "/images/postgres-logo.png",
  },
  {
    name: "Storybook",
    src: "/images/storybook-logo.png",
  },
]
