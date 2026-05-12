import type { TStructure } from "../models/models";

const API_URL = "http://localhost:3001/root";

export const fetchFileStructure = async (): Promise<TStructure> => {
  const response = await fetch(API_URL);

  if (!response.ok)
    throw new Error("Error when trying to retrieve file structure data");

  return response.json();
};
