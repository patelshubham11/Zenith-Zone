// src/App.js
import React, { useState } from 'react';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import './index.css'; // Ensure your Tailwind CSS is imported

function App() {
  const [newStudentAdded, setNewStudentAdded] = useState(false);

  // This function will be passed to StudentForm to trigger a refetch in StudentList
  const handleStudentAdded = () => {
    setNewStudentAdded(prev => !prev); // Toggle to trigger useEffect in StudentList
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="bg-white shadow p-6 rounded-lg mb-8">
        <h1 className="text-4xl font-extrabold text-center text-purple-700">
          Student Directory App
        </h1>
      </header>
      <main className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <StudentForm onStudentAdded={handleStudentAdded} />
        </div>
        <div>
          <StudentList newStudentAdded={newStudentAdded} />
        </div>
      </main>
      <footer className="mt-12 text-center text-gray-600">
        <p>&copy; 2023 Student Directory. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;