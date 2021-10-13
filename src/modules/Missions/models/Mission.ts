export interface IMission {
  id: string;
  name: string;
  website?: string;
  wikipedia?: string;
  description?: string;
  manufacturers: string[];
}

export class Mission {
  id!: string;
  name!: string;
  website!: string;
  wikipedia!: string;
  description!: string;
  manufacturers!: string;

  constructor({ id, description, manufacturers, name, website, wikipedia }: IMission) {
    this.id = id;
    this.name = name;
    this.website = website || "";
    this.description = description || "";
    this.wikipedia = wikipedia || "";
    this.manufacturers = manufacturers.join(", ");
  }
}
