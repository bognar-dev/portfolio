export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Adel N.",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "My Gallery",
      href: "/insta-gallery"
    }
  ],
  links: {
    instagram: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
