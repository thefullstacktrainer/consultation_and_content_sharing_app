import React from 'react';
import ConsultationCard from './ConsultationCard';

const EnhancedConsultationCard = ({ userName, consultationDate, topic, comments, likes }) => {
    const cbFun = (name) => console.log(name)
    return (
        <div className="enhanced-consultation-card">
            <ConsultationCard
                userName={userName}
                consultationDate={consultationDate}
                topic={topic}
                onLike={cbFun}
            />
            <div className="comments-section">
                <p>Comments: {comments.map((comment, index) => <b key={index}><i>{comment} </i></b>)}</p>
            </div>
            <div className="likes-section">
                <p>Likes: {likes}</p>
            </div>
        </div>
    );
};

export default EnhancedConsultationCard;
