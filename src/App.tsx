import { useEffect, useState } from "react";
import type { TStructure } from "./models/models";
import { renderFileStructure } from "./utils/utils";
import "./index.css";
import type { TResponseStatuses } from "./api/models";
import { fetchFileStructure } from "./api/file-structure-api";

export const App = () => {
  const [fileStructure, setFileStructure] = useState<TStructure | null>(null);

  const [status, setStatus] = useState<TResponseStatuses>("loading");

  useEffect(() => {
    fetchFileStructure()
      .then((data) => {
        setFileStructure(data);
        setStatus("ok");
      })
      .catch(() => setStatus("error"));
  }, []);

  if (!fileStructure || status === "error") {
    return (
      <div className="main">
        Произошла ошибка при загрузке файловой структуры
      </div>
    );
  }

  if (status === "loading") {
    return <main className="main">Загрузка...</main>;
  }

  if (!!fileStructure && !Object.keys(fileStructure).length) {
    return <div className="main">Файловая структура пуста</div>;
  }

  return <div className="main">{renderFileStructure(fileStructure)}</div>;
};
