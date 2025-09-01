import React, { useEffect, useState } from 'react';
import StudentCard from './StudentCard';

const StudentList = ({ newStudentAdded }) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStudents = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:3000/api/members');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error("Error fetching students:", error);
      setError("Failed to fetch students. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, [newStudentAdded]); 

  if (loading) {
    return <div className="text-center text-gray-600">Loading students...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 font-semibold">{error}</div>;
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Student Directory</h2>
      {students.length === 0 ? (
        <p className="text-gray-600">No students found. Add one above!</p>
      ) : (
        <div>
          {students.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentList;