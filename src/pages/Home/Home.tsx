import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllClassesSuccess } from "../../redux/actions/classes.actions";
import { getClassesByIds } from "./../../api/classesApi";
import { useNavigate } from "react-router-dom";
import useDebounce from "./../../hooks/useDebounce";

import styles from "./Home.module.css";
import { getSingleStudent } from "./../../api/studentsApi";
import { getStudentDetailsSuccess } from "./../../redux/actions/students.actions";

const Home = () => {
  const [studentName, setStudentName] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useDebounce(() => handleGetStudent(), 1000, [studentName]);

  const handleGetStudent = async () => {
    try {
      const response = await getSingleStudent(studentName);
      const mappedData = response.map((item) => ({
        classes: item.fields.Classes as Array<string>,
        name: item.fields.Name as string,
        id: item.id,
      }));
      dispatch(getStudentDetailsSuccess(mappedData[0]));
      handleGetClasses(mappedData[0].classes);
    } catch (error) {
      console.log("error", error);
      setError(true);
    }
  };

  const handleGetClasses = async (classes: Array<string>) => {
    try {
      const filterFormulaString = classes
        .map((singleClass) => `FIND('${singleClass}',RECORD_ID())`)
        .join(",");
      const response = await getClassesByIds(filterFormulaString);
      const mappedData = response.map((item) => ({
        fields: item.fields,
        id: item.id,
      }));
      dispatch(getAllClassesSuccess(mappedData));
      navigate(`/student/${studentName}`);
    } catch (error) {
      console.log("error", error);
      setError(true);
    }
  };

  const handleStudentNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudentName(e.target.value);
  };

  return (
    <div className={styles.Home__container}>
      <h1>Student Search</h1>
      <input
        type="text"
        onChange={handleStudentNameChange}
        placeholder="Enter a student name"
      />
      {error && <div className={styles.Home__error}>No student found</div>}
    </div>
  );
};

export default Home;
