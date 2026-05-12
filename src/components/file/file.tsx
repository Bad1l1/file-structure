import styles from "./file.module.scss";

interface IFileProps {
  name: string;
}
export const File = ({ name }: IFileProps) => {
  return (
    <div className={styles.file}>
      {"- "}
      {name}
    </div>
  );
};
