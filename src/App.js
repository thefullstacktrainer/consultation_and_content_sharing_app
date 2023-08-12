import React from 'react';
import ConsultationCard from './components/ConsultationCard';
import ContentCard from './components/ContentCard';
import ParentComponent from './components/ParentComponent';
const App = () => {
  const consultationData = {
    userName: 'John Doe',
    consultationDate: '2023-08-12',
    topic: 'Healthcare'
  };

  const contentData = {
    title: 'React Tips',
    description: 'Useful tips for working with React.',
    author: 'Jane Smith'
  };

  return (
    <div className="app">
      <ConsultationCard {...consultationData} />
      <ContentCard {...contentData} />
      <ParentComponent />
    </div>
  );
};

export default App;
