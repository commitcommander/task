import StudentsPicker from "../components/StudentsPicker";
import StudentsTable from "../components/StudentsTable";
import {
  fetchStudentData,
  fetchSchoolData,
  fetchLegalguardianData,
} from "../utils";
import { useState } from "react";

const StudentsDataComponent = () => {
  const [data, setData] = useState({
    studentsData: [],
    schoolsData: [],
    legalguardiansData: [],
  });

  const { studentsData, schoolsData, legalguardiansData } = data;

  const onStudentsPick = async (studentIds) => {
    const studentsPromises = studentIds.map((studentId) =>
      fetchStudentData(studentId)
    );
    const studentDataList = await Promise.all(studentsPromises);
    const updatedStudentsData = studentDataList.flat();

    const schoolPromises = updatedStudentsData.map((student) =>
      fetchSchoolData(student.schoolId)
    );
    const schoolDataList = await Promise.all(schoolPromises);

    const guardianPromises = updatedStudentsData.map((student) =>
      fetchLegalguardianData(student.legalguardianId)
    );
    const guardianDataList = await Promise.all(guardianPromises);

    setData((prevData) => ({
      studentsData: [...prevData.studentsData, ...updatedStudentsData],
      schoolsData: [...prevData.schoolsData, ...schoolDataList],
      legalguardiansData: [...prevData.legalguardiansData, ...guardianDataList],
    }));
  };

  return (
    <>
      <StudentsPicker onPickHandler={onStudentsPick} />
      <StudentsTable
        studentsData={studentsData}
        schoolsData={schoolsData}
        legalguardiansData={legalguardiansData}
      />
    </>
  );
};

export default StudentsDataComponent;
