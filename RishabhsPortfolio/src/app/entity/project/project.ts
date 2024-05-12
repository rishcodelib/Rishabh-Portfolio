export class Project {
  private projectName: String;
  shortName: String;
  description: String;
  category: String;
  techStack: String;
  demo: String;
  git: String;
  live: String;
  version: Number;
  status: any;
  key: String;
  imgSrc: String;

  constructor(
    version: number,
    projectName: string,
    shortName: string,
    description: string,
    category: string,
    techStack: string,
    demo: string,
    git: string,
    live: string,
    status: any,
    key: any,
    imgSrc: String
  ) {
    this.version = version;
    this.projectName = projectName;
    this.shortName = shortName;
    this.description = description;
    this.category = category;
    this.techStack = techStack;
    this.demo = demo;
    this.git = git;
    this.live = live;
    this.status = status;
    this.key = key;
    this.imgSrc = imgSrc;
  }
}
