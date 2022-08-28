import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllClassesSuccess } from "../../redux/actions/classes.actions";
import { getClasses } from "./../../api/classesApi";
import { useNavigate } from "react-router-dom";
import useDebounce from "./../../hooks/useDebounce";

import styles from "./Home.module.css";

const Home = () => {
  const [studentName, setStudentName] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useDebounce(() => handleGetClasses(), 2000, [studentName]);

  const handleGetClasses = async () => {
    const response = await getClasses(studentName);
    const mappedData = response.map((item) => ({
      fields: item.fields,
      id: item.id,
    }));
    dispatch(getAllClassesSuccess(mappedData));
    navigate(`/student/${studentName}`);
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
    </div>
  );
};

export default Home;
