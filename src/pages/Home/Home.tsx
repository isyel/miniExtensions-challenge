import { useDispatch, useSelector } from "react-redux";
import { getAllClassesSuccess } from "../../redux/actions/classes.actions";
import { getClassesByIds } from "./../../api/classesApi";
import { useNavigate } from "react-router-dom";
import useDebounce from "./../../hooks/useDebounce";

import styles from "./Home.module.css";
import { getSingleStudent } from "./../../api/studentsApi";
import {
  getStudentDetailsSuccess,
  saveStudentName,
} from "./../../redux/actions/students.actions";
import { initialStateT } from "@/redux/reducers/initialState.types";
import {
  apiCallError,
  beginApiCall,
  endApiCall,
} from "./../../redux/actions/apiStatus.actions";

const Home = () => {
  const studentName = useSelector(
    (state: initialStateT) => state.students.studentName
  );
  const loading = useSelector((state: initialStateT) => state.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useDebounce(() => handleGetStudent(), 1000, [studentName]);

  const handleGetStudent = async () => {
    dispatch(beginApiCall());
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
      dispatch(apiCallError());
    } finally {
      dispatch(endApiCall());
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
      dispatch(apiCallError());
    } finally {
      dispatch(endApiCall());
    }
  };

  const handleStudentNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(saveStudentName(e.target.value));
  };

  return (
    <div className={styles.Home__container}>
      <h1>Student Search</h1>
      {!loading.isLoading ? (
        <>
          <input
            type="text"
            onChange={handleStudentNameChange}
            placeholder="Enter a student name"
            value={studentName}
          />
          <br />
          <button onClick={handleGetStudent}>Search</button>
          {loading.loadingError && (
            <div className={styles.Home__error}>No student found</div>
          )}
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Home;
