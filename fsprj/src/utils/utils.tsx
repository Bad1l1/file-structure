import { FileStructureFactory } from "../factories/file-structure-factory/file-structure-factory";
import type { TStructure } from "../models/models";

export const renderFileStructure = (structure: TStructure) => {
  const structureItems = Object.entries(structure);

  return structureItems.map(([name, item], index) => (
    <FileStructureFactory key={index} itemName={name} item={item} />
  ));
};
