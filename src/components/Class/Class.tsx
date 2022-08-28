import { initialStateT } from "@/redux/reducers/initialState.types";
import React from "react";
import { useSelector } from "react-redux";

import styles from "./Class.module.css";

interface IClassesListProps {
  id: string;
  name?: string;
}

const Class: React.FC<IClassesListProps> = ({ id, name }) => {
  const students = useSelector(
    (state: initialStateT) => state.students.students
  );

  const filteredStudents = students
    .filter((student) => {
      return student.classes?.includes(id);
    })
    .map((student) => student);

  return (
    <div className={styles.Class__container}>
      <div className={styles.Class__header}>{name}</div>
      <div className={styles.Class__subHeader}>STUDENTS</div>
      <div className={styles.Class__studentsList}>
        {filteredStudents.map((student) => (
          <div key={student.id} className={styles.Class__studentsTag}>
            {student.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Class;
