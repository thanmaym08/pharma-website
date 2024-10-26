import React from 'react';
import Layout from './layout'; // Adjust the path if necessary



const Home: React.FC = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center h-screen">
        <h2 className="text-3xl font-bold">Welcome to Our Landing Page!</h2>
      </div>
    </Layout>
  );
};

export default Home;
