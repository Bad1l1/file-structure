import { FileStructureFactory } from "../factories/file-structure-factory/file-structure-factory";
import type { TStructure } from "../models/models";

export const renderFileStructure = (structure: TStructure) => {
  const structureItems = Object.entries(structure);

  return structureItems.map(([name, item]) => (
    <FileStructureFactory key={name} itemName={name} item={item} />
  ));
};
