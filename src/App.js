import React, { useState } from 'react';
import ConsultationList from './components/ConsultationList';
import ContentSharing from './components/ContentSharing';
import EnhancedConsultationCard from './components/EnhancedConsultationCard';
import ContentSharingPage from './components/ContentSharingPage';
import ConsultationSearch from './components/ConsultationSearch';
import Header from './components/Header';
import ConsultationForm from './components/ConsultationForm';
import LoginFormFunc from './components/login/LoginFormFunc';

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
  const handleSearch = (searchValue) => {
    // Perform search logic using the searchValue
    console.log('Searching for:', searchValue);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div>
      <Header />
      {!isLoggedIn ? <LoginFormFunc onLogin={() => setIsLoggedIn(true)} /> : <>

        <h2>Search Consultations</h2>
        <ConsultationSearch onSearch={handleSearch} />
        <ConsultationList consultations={consultations} />
        <EnhancedConsultationCard {...consultationData} />

        <ContentSharing contentList={contentList} userId="1" />
        <div>
          <h1>Online Consultation and Content Sharing Platform</h1>
          <ContentSharingPage />
        </div>
        <ConsultationForm /></>}
    </div>
  );
};

export default App;
