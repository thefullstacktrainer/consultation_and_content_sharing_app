import React from 'react';
import ConsultationList from './components/ConsultationList';
import ContentSharing from './components/ContentSharing';
import EnhancedConsultationCard from './components/EnhancedConsultationCard';
import ContentSharingPage from './components/ContentSharingPage';


const App = () => {
  const consultations = [
    { userName: 'Vikash', consultationDate: '2023-09-12', topic: 'Healthcare' },
    { userName: 'Raxith', consultationDate: '2023-09-15', topic: 'Technology' }
  ];

  const contentList = [
    { title: 'React Tips', description: 'Useful tips for working with React.', author: 'Manoj' },
    { title: 'Redux Guide', description: 'A comprehensive guide to using Redux.', author: 'Sumanth' }
  ];

  const consultationData = {
    userName: 'Lakshmikant D',
    consultationDate: '2023-08-12',
    topic: 'Software Rust Training',
    comments: ['Great consultation!', 'Very informative.'],
    likes: 10
  };

  return (
    <div>
      <ConsultationList consultations={consultations} />
      <EnhancedConsultationCard {...consultationData} />

      <ContentSharing contentList={contentList} />
      <div>
        <h1>Online Consultation and Content Sharing Platform</h1>
        <ContentSharingPage />
      </div>
    </div>
  );
};

export default App;
