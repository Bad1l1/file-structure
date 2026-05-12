import { File } from "../../components/file/file";
import { Folder } from "../../components/folder/folder";
import type { TStructureElement } from "../../models/models";

interface IFileStructureFactoryProps {
  item: TStructureElement;
  itemName: string;
}

export const FileStructureFactory = ({
  item,
  itemName,
}: IFileStructureFactoryProps) => {
  switch (item.type) {
    case "file":
      return <File name={itemName} />;
    case "folder":
      return <Folder name={itemName} nestedItems={item.children} />;
    default:
      return null;
  }
};
