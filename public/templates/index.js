import fs from "fs";

export default {
  allProjects: fs.readFileSync(`${__dirname}/allProjects.handlebars`, "utf8"),
  projectsPreview: fs.readFileSync(
    `${__dirname}/projectsPreview.handlebars`,
    "utf8"
  ),
  projectDetails: fs.readFileSync(
    `${__dirname}/projectDetails.handlebars`,
    "utf8"
  ),
};
