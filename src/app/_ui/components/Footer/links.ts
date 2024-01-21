import { QuickLinkInfo } from "@/app/types/type";

export const quickLinks: QuickLinkInfo[] = [
  {
    name: "About us", 
    sublinks: [
      {
        title: "History",
        link: "/#",
      },
      {
        title: "Leadership and Organogram",
        link: "/about/leadership",
      },
      {
        title: "Founder's Vision",
        link: "/#"
      }
    ]
  },
  {
    name: "Academics",
    sublinks: [
      {
        title: "Faculty of Engineering",
        link: "/academics/engineering",
      },
      {
        title: "Faculty of Hospitality",
        link: "/academics/hospitality"
      },
      {
        title: "Faculty of Agriculture",
        link: "/academics/agriculture"
      },
      {
        title: "Faculty of Business & Finance",
        link: "/academics/business",
      },
      {
        title: "Faculty of Creative Art",
        link: "/academics/art"
      },
      {
        title: "Faculty of Computer Science",
        link: "/academics/computer"
      }
    ]
  },
  {
    name: "Contact",
    sublinks: [
      {title: "Information", link: "/#"}
    ]
  },
];

export const footerLinks = ["Terms of service", "Privacy policy", "Cookie policy"];
