import React from 'react';

function JobList({ jobPosts }) {
    return (
        <div className="job-list">
            <h2>Job Posts</h2>
            {jobPosts.map(jobPost => (
                <div key={jobPost.id} className="job-item">
                    <h3>{jobPost.title}</h3>
                    <p>{jobPost.company} - {jobPost.location}</p>
                    <p>Type: {jobPost.type}</p>
                    <p>{jobPost.description}</p>
                    <h4>Recent Applications:</h4>
                    {jobPost.applications.map(application => (
                        <div key={application.id} className="application">
                            <p>{application.candidateName}</p>
                            <p>Status: {application.status}</p>
                        </div>
                    ))}
                    {jobPost.relatedJob && (
                        <div className="recommended-job">
                            <h4>Recommended Job:</h4>
                            <p>{jobPost.relatedJob.title}</p>
                            <p>{jobPost.relatedJob.company} - {jobPost.relatedJob.location}</p>
                            <p>Type: {jobPost.relatedJob.type}</p>
                            <p>{jobPost.relatedJob.description}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default JobList;
