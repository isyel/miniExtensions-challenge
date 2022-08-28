import React, { useEffect } from "react";
import { initialStateT } from "@/redux/reducers/initialState.types";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getStudents } from "./../../api/studentsApi";

import styles from "./Student.module.css";
import { getAllStudentsSuccess } from "./../../redux/actions/students.actions";
import ClassesList from "./../../components/ClassesList";

const Student = () => {
  const params = useParams();
  const classes = useSelector((state: initialStateT) => state.classes.classes);

  const dispatch = useDispatch();

  useEffect(() => {
    // getClasses();
    if (classes) {
      const filterFormulaString = classes
        .map((singleClass) => `FIND('${singleClass.fields?.Name}',{Classes})`)
        .join(",");
      loadStudentsData(filterFormulaString);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [classes]);

  const loadStudentsData = async (filterFormulaString: string) => {
    const students = await getStudents(filterFormulaString);
    const mappedData = students.map((item) => ({
      classes: item.fields.Classes as string[],
      name: item.fields.Name as string,
      id: item.id,
    }));
    dispatch(getAllStudentsSuccess(mappedData));
  };

  return (
    <div className={styles.Student__container}>
      <h2>Student: {params.name}</h2>
      <ClassesList classes={classes} />
    </div>
  );
};

export default Student;
