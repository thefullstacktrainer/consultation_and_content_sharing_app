import React from 'react';
import ConsultationCard from './components/ConsultationCard';
import ContentCard from './components/ContentCard';

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

  const defaultAuthor = "Rajath";
  return (
    <div className="app">
      <ConsultationCard {...consultationData} />
      <ContentCard {...contentData} />
      <ConsultationCard userName={defaultAuthor} />
      <ContentCard author={defaultAuthor} />
    </div>
  );
};

export default App;
