export interface BackLink {
  imageUrl: string
  shortDescription: string
  title: string
  type: "article" | "project"
  url?: string
}

export const backLinks: BackLink[] = [
  {
    imageUrl: "/images/backlinks/blog-medium-javascript-2023.jpg",
    shortDescription:
      "My article recommending tips, best practices and tools to write maintainable JavaScript.",
    title: "How to write maintainable JavaScript code in 2023",
    type: "article",
    url: "https://medium.com/dev-genius/how-to-write-maintainable-javascript-code-in-2023-web-or-node-js-d66d8baead67",
  },
  {
    imageUrl: "/images/backlinks/project-react-browser-form.jpg",
    shortDescription:
      "React Browser Form is my open-source library that handles form usage in React.",
    title: "React Browser Form",
    type: "project",
    url: "https://github.com/deniskabana/react-browser-form",
  },
  {
    imageUrl: "/images/backlinks/project-rpsh.jpg",
    shortDescription:
      "A React useState() replacement with persistence (Web Storage API) and full TypeScript support 💪",
    title: "react-persistent-state-hook",
    type: "project",
  },
]
