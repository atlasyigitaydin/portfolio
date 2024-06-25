import VueIcon from '~/assets/icons/vue.png'
import VueuseIcon from '~/assets/icons/vueuse.png'
import BootstrapIcon from '~/assets/icons/bootstrap.png'
import JiraIcon from '~/assets/icons/jira.png'
import GitlabIcon from '~/assets/icons/gitlab.png'
import GitIcon from '~/assets/icons/git.png'
import NuxtIcon from '~/assets/icons/nuxt.png'
import ViteIcon from '~/assets/icons/vite.png'
import PrimevueIcon from '~/assets/icons/primevue.png'
import HTMLIcon from '~/assets/icons/html.png'
import CSSIcon from '~/assets/icons/css.png'
import JSIcon from '~/assets/icons/js.png'
import TSIcon from '~/assets/icons/ts.png'
import TailwindIcon from '~/assets/icons/tailwind.png'
import PiniaIcon from '~/assets/icons/pinia.png'
import type { Ability } from '~/core/types'

export const useAbilityStore = defineStore('Abilitys', () => {
  const selectedAbility = ref<Ability>()

  const abilitys: Ability[] = [
    {
      img: VueIcon,
      name: 'Vue',
      content: 'Vue.js is a progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable, focusing on the view layer and can be easily integrated into projects of any scale. Vue\'s reactive data binding and component-based architecture make it a flexible and powerful tool for creating dynamic and interactive web applications.',
    },
    {
      img: BootstrapIcon,
      name: 'Bootstrap',
      content: 'Bootstrap is a popular open-source framework for developing responsive and mobile-first websites. It includes a comprehensive set of CSS and JavaScript tools that facilitate the creation of flexible and modern web designs. Bootstrap simplifies the process of styling and layout with its grid system, pre-styled components, and powerful JavaScript plugins.',
    },
    {
      img: JiraIcon,
      name: 'Jira',
      content: 'Jira is a powerful project management tool developed by Atlassian, widely used for tracking issues, bugs, and tasks in software development projects. It offers robust features for agile project management, including scrum and kanban boards, customizable workflows, and detailed reporting capabilities. Jira helps teams collaborate more efficiently and maintain transparency in their development processes.',
    },
    {
      img: VueuseIcon,
      name: 'Vueuse',
      content: 'Vueuse is a collection of essential Vue Composition Utilities for Vue 3. It provides a wide range of utilities that are modular and tree-shakable, making it easier to manage and reuse code. Whether you need to handle state management, side effects, or perform complex computations, Vueuse has a utility to help streamline your development process.',
    },
    {
      img: GitlabIcon,
      name: 'GitLab',
      content: 'GitLab is a complete DevOps platform that provides a comprehensive suite of tools for software development, version control, CI/CD, and project management. It allows teams to collaborate on code, track progress, and deploy applications efficiently. GitLab\'s integrated environment supports the entire software development lifecycle, from planning to monitoring.',
    },
    {
      img: GitIcon,
      name: 'Git',
      content: 'Git is a distributed version control system that enables multiple developers to work on the same project simultaneously without overwriting each other\'s changes. It tracks changes in source code, allowing developers to collaborate efficiently and maintain a history of revisions. Git\'s branching and merging capabilities facilitate flexible and efficient workflows.',
    },
    {
      img: NuxtIcon,
      name: 'Nuxt',
      content: 'Nuxt.js is a framework built on top of Vue.js, designed to simplify the development of server-side rendered (SSR) and static web applications. It provides a powerful configuration-based approach to application development, offering features like automatic routing, state management, and server-side rendering out of the box. Nuxt enhances the performance and SEO of Vue applications.',
    },
    {
      img: ViteIcon,
      name: 'Vite',
      content: 'Vite is a next-generation front-end tool that offers an extremely fast development environment for modern web projects. It leverages native ES modules and provides a lightning-fast hot module replacement (HMR) during development. Vite\'s optimized build process ensures efficient production builds with minimal configuration.',
    },
    {
      img: PrimevueIcon,
      name: 'PrimeVue',
      content: 'PrimeVue is a comprehensive UI component library for Vue.js that offers a wide range of ready-to-use components. It is designed to be highly customizable and easy to integrate, providing a consistent and professional look and feel to web applications. PrimeVue components are feature-rich, responsive, and accessible, enhancing the user experience.',
    },
    {
      img: HTMLIcon,
      name: 'HTML',
      content: 'HTML (HyperText Markup Language) is the standard markup language used for creating web pages. It defines the structure and content of a webpage, using elements and tags to organize text, images, links, and other media. HTML is the foundation of web development, enabling the creation of structured and semantic web content.',
    },
    {
      img: CSSIcon,
      name: 'CSS',
      content: 'CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML or XML. It allows developers to apply styles to web pages, including layout, colors, fonts, and animations. CSS enhances the visual appeal of web content and enables responsive design, ensuring that web pages look good on different devices.',
    },
    {
      img: JSIcon,
      name: 'JavaScript',
      content: 'JavaScript is a versatile programming language that enables dynamic behavior on web pages. It allows developers to create interactive elements, control multimedia, animate graphics, and handle user inputs. JavaScript is an essential tool for front-end development, enhancing the user experience and enabling the creation of sophisticated web applications.',
    },
    {
      img: TSIcon,
      name: 'TypeScript',
      content: 'TypeScript is a statically typed superset of JavaScript that adds optional static typing to the language. It enables developers to catch errors early and improve the maintainability of their code by providing robust type-checking and autocompletion features. TypeScript compiles to plain JavaScript, making it compatible with any JavaScript environment.',
    },
    {
      img: TailwindIcon,
      name: 'Tailwind',
      content: 'Tailwind CSS is a utility-first CSS framework that provides low-level utility classes for rapidly building custom designs. It enables developers to apply styles directly within their HTML, promoting a highly efficient and scalable approach to styling. Tailwind\'s responsive design capabilities and pre-configured design system streamline the development of modern web interfaces.',
    },
    {
      img: PiniaIcon,
      name: 'Pinia',
      content: 'Pinia is a state management library for Vue.js, serving as an alternative to Vuex. It offers a simpler and more intuitive API for managing application state, with a focus on modularity and TypeScript support. Pinia\'s reactive state management and minimal boilerplate make it an efficient solution for managing complex state in Vue applications.',
    },
  ]

  return {
    selectedAbility,
    abilitys,
  }
})
