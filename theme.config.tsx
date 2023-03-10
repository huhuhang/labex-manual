import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: "%s – LabEx",
    };
  },
  logo: (
    <>
      <svg width="15px" height="24px" viewBox="0 0 24 24">
        <path d="M12.750877,6.48865231 C12.750877,6.48865231 7.3507833,13.4935398 5.62331208,16.7065086 C3.89584086,19.9200581 7.53412341,24 7.53412341,24 C7.53412341,24 13.2729597,15.2594241 13.9818748,14.247278 C15.9974519,11.3020082 12.750877,6.48807162 12.750877,6.48807162 M7.59290865,0 C7.59290865,0 2.19281499,7.00488749 0.465343772,10.218437 C-1.26212745,13.4325671 2.3761551,17.5119284 2.3761551,17.5119284 C2.3761551,17.5119284 8.11499143,8.77193322 8.8239065,7.75920639 C10.8394836,4.81393661 7.59290865,0 7.59290865,0"></path>
      </svg>
      <span style={{ marginLeft: ".2em", fontWeight: 600 }}>
        LabEx Guidelines
      </span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="LabEx Guidelines" />
      <meta property="og:description" content="Join Us!" />
    </>
  ),
  faviconGlyph: "✍️",
  banner: {
    key: 'instructor',
    text: <a href="/others/contribute">
      👋 Become an Instructor. Read more →
    </a>,
  },
  footer: {
    component: false,
  },
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
  project: {
    link: "https://github.com/huhuhang/labex-docs",
  },
  i18n: [
    { locale: "en", text: "English" },
    { locale: "zh", text: "中文" },
  ],
};

export default config;
