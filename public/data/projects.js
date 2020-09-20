// Store large JSONs as string and parse them in runtime ends in a better performance, ref: https://v8.dev/blog/cost-of-javascript-2019#json
const projects = `[
  {
    "name": "memory-usage-webpack-plugin",
    "type": "Webpack Plugin",
    "readme": "https://raw.githubusercontent.com/sirgalleto/memory-usage-webpack-plugin/base/README.md"
  },
  { 
    "name": "prs-vemos-rolas-no-sabemos",
    "type": "Git Hook",
    "readme": "https://raw.githubusercontent.com/sirgalleto/prs-vemos-rolas-no-sabemos/master/README.md"
  },
  {
    "name": "navajitas bot",
    "type": "Twitter Bot",
    "readme": "https://raw.githubusercontent.com/sirgalleto/navajitasbot/master/README.md"
  }
]`;

window.projects = JSON.parse(projects);
