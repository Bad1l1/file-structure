import type { TStructure } from "../../models/models";
import { renderFileStructure } from "../../utils/utils";
import styles from "./folder.module.scss";

interface IFolderProps {
  name: string;
  children: TStructure;
}

export const Folder = ({ name, children }: IFolderProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.folder}>
        {"> "}
        {name}
      </div>
      <div className={styles.list_wrapper}>
        <hr className={styles.hr} />
        <div className={styles.list}>{renderFileStructure(children)}</div>
      </div>
    </div>
  );
};
