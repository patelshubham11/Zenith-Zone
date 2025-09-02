import React from 'react';
import ProductList from './components/ProductList';
import './index.css'; 

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4 mb-8">
        <h1 className="text-4xl font-extrabold text-center text-indigo-700">My Store</h1>
      </header>
      <main>
        <ProductList />
      </main>
    </div>
  );
}

export default App;