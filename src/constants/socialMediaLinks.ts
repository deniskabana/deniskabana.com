import { SvgIconTypeMap } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"

import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import AutoStoriesIcon from "@mui/icons-material/AutoStories"

export type SocialMediaLink = {
  href: string
  icon: OverridableComponent<SvgIconTypeMap<object, "svg">> & {
    muiName: string
  }
  label?: string
  title: string
}

export const SOCIAL_MEDIA_LINKS: SocialMediaLink[] = [
  {
    href: "https://www.linkedin.com/in/denis-kabana/",
    icon: LinkedInIcon,
    label: "linkedin.com/in/denis-kabana",
    title: "LinkedIn profile",
  },
  {
    href: "https://github.com/deniskabana",
    icon: GitHubIcon,
    label: "github.com/deniskabana",
    title: "GitHub profile",
  },
  {
    href: "https://medium.com/@deniskabana",
    icon: AutoStoriesIcon,
    label: "medium.com/@deniskabana",
    title: "Medium.com profile",
  },
]
