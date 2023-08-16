import React from 'react';
import ConsultationCard from './components/ConsultationCard';
import ContentCard from './components/ContentCard';
import ParentComponent from './components/ParentComponent';
const App = () => {
  const consultationData = {
    userName: 'Johny Lever',
    consultationDate: '2023-08-12',
    topic: 'Healthcare'
  };

  const contentData = {
    title: 'React Tips',
    description: 'Useful tips for working with React.',
    author: 'Janaki Smrithi'
  };

  return (
    <div className="app">
      <ConsultationCard {...consultationData} />
      <ContentCard title={contentData.title} description={contentData.description} author={contentData.author} />
      <ParentComponent />
    </div>
  );
};

export default App;
