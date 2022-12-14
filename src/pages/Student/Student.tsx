import React, { useEffect } from "react";
import { initialStateT } from "@/redux/reducers/initialState.types";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getStudents } from "./../../api/studentsApi";

import styles from "./Student.module.css";
import { getAllStudentsSuccess } from "./../../redux/actions/students.actions";
import ClassesList from "./../../components/ClassesList";

const Student = () => {
  const params = useParams();
  const classes = useSelector((state: initialStateT) => state.classes.classes);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  useEffect(() => {
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
      <div className={styles.Student__header}>
        <div className={styles.Student__name}>Student: {params.name}</div>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <ClassesList classes={classes} />
    </div>
  );
};

export default Student;
