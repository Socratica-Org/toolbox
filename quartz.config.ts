import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"
import dotenv from 'dotenv';

dotenv.config();

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Socratica Toolbox",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "firebase",
      config: {
        apiKey: process.env.FIREBASE_API_KEY ?? '',
        authDomain: process.env.FIREBASE_AUTH_DOMAIN ?? '',
        projectId: process.env.FIREBASE_PROJECT_ID ?? '',
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET ?? '',
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID ?? '',
        appId: process.env.FIREBASE_APP_ID ?? '',
        measurementId: process.env.FIREBASE_MEASUREMENT_ID ?? ''
      }
    },
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      typography: {
        header: "Tiempos",
        body: "PT Serif",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f7f5eb",
          lightgray: "#e0ddd7",
          gray: "#A09D98",
          darkgray: "#5c534b",
          dark: "#242220",
          secondary: "#635b8f",
          tertiary: "#69a3d6",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents({ maxDepth: 2 }),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"], // you can add 'git' here for last modified from Git but this makes the build slower
      }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
