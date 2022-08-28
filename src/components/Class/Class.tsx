import { initialStateT } from "@/redux/reducers/initialState.types";
import React from "react";
import { useSelector } from "react-redux";

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
    .map((student) => student.name);

  return (
    <div>
      <h3>{name}</h3>
      <div>Students</div>
      {filteredStudents.map((student) => (
        <div>{student}</div>
      ))}
    </div>
  );
};

export default Class;
