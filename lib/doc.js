import fs from "fs";
import matter from "gray-matter";
import path from "path";
const postsDirectory = path.join(process.cwd(), "docs");

export function getDocument() {
  const filesNames = fs.readdirSync(postsDirectory);
  const allDocuments = filesNames.map((fileName) => {
    const id = fileName.replace(".md", "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    console.log(matterResult);
  });
}