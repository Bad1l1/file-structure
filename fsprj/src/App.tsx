import { useEffect, useState } from "react";
import type { TStructure } from "./models/models";
import { renderFileStructure } from "./utils/utils";
import "./index.css";

export const App = () => {
  const [fileStructure, setFileStructure] = useState<TStructure | null>(null);

  useEffect(() => {
    fetch("http://localhost:3001/root")
      .then((res) => res.json())
      .then((data) => setFileStructure(data));
  }, []);

  if (!fileStructure) return null;

  return <div className="main">{renderFileStructure(fileStructure)}</div>;
};
