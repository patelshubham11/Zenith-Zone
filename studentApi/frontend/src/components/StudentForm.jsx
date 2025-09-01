import React, { useState } from 'react';

const StudentForm = ({ onStudentAdded }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    if (!name || !email) {
      setError("Please fill in both name and email.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/members', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.msg || `HTTP error! status: ${response.status}`);
      }

      const newStudent = await response.json();
      console.log('New student added:', newStudent);
      setName('');
      setEmail('');
      setSuccess(true);
      if (onStudentAdded) {
        onStudentAdded(newStudent); 
      }
    } catch (error) {
      console.error("Error adding student:", error);
      setError(`Failed to add student: ${error.message}`);
    } finally {
      setLoading(false);
      setTimeout(() => setSuccess(false), 3000); 
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Student</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading}
        >
          {loading ? 'Adding...' : 'Add Student'}
        </button>

        {error && (
          <p className="mt-2 text-sm text-red-600">{error}</p>
        )}
        {success && (
          <p className="mt-2 text-sm text-green-600">Student added successfully!</p>
        )}
      </form>
    </div>
  );
};

export default StudentForm;