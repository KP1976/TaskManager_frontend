import { createContext } from "react";

export const ModifyTaskContext = createContext({
  modifyTask: {
    id: "",
    title: "",
  },
  setModifyTask: (modifyTask: { id: string; title: string }) => {},
});
