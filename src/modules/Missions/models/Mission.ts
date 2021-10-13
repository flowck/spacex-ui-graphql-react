export interface IMission {
  id: string;
  name: string;
  website?: string;
  wikipedia?: string;
  manufacturers: string[];
}

export class Mission {
  id!: string;
  name!: string;
  website!: string;
  wikipedia!: string;
  manufacturers!: string;

  constructor({ id, manufacturers, name, website, wikipedia }: IMission) {
    this.id = id;
    this.name = name;
    this.website = website || "";
    this.wikipedia = wikipedia || "";
    this.manufacturers = manufacturers.join(", ");
  }
}
