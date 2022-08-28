import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllClassesSuccess } from "../../redux/actions/classes.actions";
import { getClasses } from "./../../api/classesApi";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [studentName, setStudentName] = useState<string>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    handleGetClasses();
  }, []);

  const handleGetClasses = async () => {
    const response = await getClasses("Jenny");
    const mappedData = response.map((item) => item.fields);
    console.log("mappedData", mappedData);

    dispatch(getAllClassesSuccess(mappedData));
    navigate(`/student/${studentName}`);
  };

  return <div>Home</div>;
};

export default Home;
