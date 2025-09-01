import React from 'react';

const StudentCard = ({ student }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center justify-between">
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{student.name}</h3>
        <p className="text-gray-600">{student.email}</p>
      </div>
    </div>
  );
};

export default StudentCard;