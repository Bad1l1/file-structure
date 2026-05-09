export type TDataStructure = "file" | "folder";

export interface IGenericFileStructure {
  type: TDataStructure;
}

export interface IFile extends IGenericFileStructure {
  type: "file";
}

export interface IFolder extends IGenericFileStructure {
  type: "folder";
  children: TStructure;
}

export type TStructure = {
  [name: string]: TStructureElement;
};

export type TStructureElement = IFile | IFolder;
