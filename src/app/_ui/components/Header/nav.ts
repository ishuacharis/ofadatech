import { NavInfo } from "@/app/types/type";

export const nav: NavInfo[] =[
  {
    name: "About",
    heading: "About us",
    link: '/about',
    description: "Ofada Technical College provides qualitative and research-oriented education to Nigerians and all those who have entered its domain in search of knowledge. The tecnical college has built a legacy of excellence and has been instrumental in the production of top range graduates and academia who have had tremendous impact, directly or indirectly, on growth and development in Nigeria.",
    sublinks: [
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
    name: "Admission",
    heading: "Admission",
    link: '/admission',
    description: `Ofada Technical school has built a proud heritage of attracting intelligent, competitive students and empowered each one of them reach their full potential.
    We are dedicated to intellectual leadership, collaboration, highest moral standards, innovative research and a winning spirit — in academics and all other areas of life.
    Come discover why Ofada Technical College is the leading technical college..`,
    sublinks: [
      {
        title: "Requirements",
        link: "/admission/requirements"
      }
    ]
  },
  {
    name: "Academics",
    heading: "Academics",
    link: "/academics",
    description: "Our academic programs are rigorous and carefully modelled to prepare our students to be ahead.",
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
];