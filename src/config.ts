import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://blog.moxao.top/", // replace this with your deployed domain
  author: "Peng Chang",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "Chang'Blogs",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN", "zh-CN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: true,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/pengchangg/",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:changpeng94@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Telegram",
    href: "#",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
];
