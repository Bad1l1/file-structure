import type { TStructure } from "../../models/models";
import { renderFileStructure } from "../../utils/utils";
import styles from "./folder.module.scss";

interface IFolderProps {
  name: string;
  nestedItems: TStructure;
}

export const Folder = ({ name, nestedItems }: IFolderProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.folder}>
        {"> "}
        {name}
      </div>
      <div className={styles.list_wrapper}>
        <hr className={styles.hr} />
        <div className={styles.list}>{renderFileStructure(nestedItems)}</div>
      </div>
    </div>
  );
};
