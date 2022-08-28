import { classT } from "@/redux/reducers/initialState.types";
import React from "react";
import Class from "../Class";

import styles from "./ClassesList.module.css";

interface IClassesListProps {
  classes: classT[];
}

const ClassesList: React.FC<IClassesListProps> = ({ classes }) => {
  return (
    <div className={styles.Classes}>
      {classes.map((singleClass) => (
        <Class
          key={singleClass.id}
          name={singleClass.fields?.Name?.toString()}
          id={singleClass.id}
        />
      ))}
    </div>
  );
};

export default ClassesList;
