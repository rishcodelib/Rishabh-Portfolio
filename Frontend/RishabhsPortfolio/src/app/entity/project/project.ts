export class Project {
  id: number;
  name: string;
  description: string;
  gitUrl: string;
  liveUrl: string;
  tag: any;

  constructor(
    id: number,
    name: string,
    description: string,
    gitUrl: string,
    liveUrl: string,
    tag: any
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.gitUrl = gitUrl;
    this.liveUrl = liveUrl;
    this.tag = tag;
  }
}

