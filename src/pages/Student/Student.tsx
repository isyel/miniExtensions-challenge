import React, { useEffect } from "react";
import { initialStateT } from "@/redux/reducers/initialState.types";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getStudents } from "./../../api/studentsApi";

const Student = () => {
  const params = useParams();
  const classes = useSelector((state: initialStateT) => state.classes.classes);

  useEffect(() => {
    // getClasses();
    if (classes) {
      const filterFormulaString = classes
        .map((singleClass) => `FIND('${singleClass.Name}',{Classes})`)
        .join(",");
      loadStudentsData(filterFormulaString);
    }
  }, [classes]);

  const loadStudentsData = async (filterFormulaString: string) => {
    const students = await getStudents(filterFormulaString);
    console.log(students);
  };

  console.log("classes in Student", classes);

  return <div>Student</div>;
};

export default Student;
