import React, { useState } from 'react';

function JobList({ jobPosts }) {
    const [applicationStatus, setApplicationStatus] = useState({});
    const [selectedJob, setSelectedJob] = useState(null);

    const handleApply = (jobId) => {
        // Simulate applying for a job
        alert(`You applied for the job with ID ${jobId}`);
    };

    const handleStatusChange = (jobId, applicationId, newStatus) => {
        setApplicationStatus(prevStatus => ({
            ...prevStatus,
            [`${jobId}-${applicationId}`]: newStatus,
        }));
    };

    const handleJobSelect = (jobId) => {
        setSelectedJob(jobId === selectedJob ? null : jobId);
    };

    return (
        <div className="job-list">
            <h2>Job Posts</h2>
            {jobPosts.map(jobPost => (
                <div key={jobPost.id} className="job-item">
                    <h3>{jobPost.title}</h3>
                    <p>{jobPost.company} - {jobPost.location}</p>
                    {/* ... other job details ... */}
                    <button onClick={() => handleApply(jobPost.id)}>Apply</button>
                    <h4>Recent Applications:</h4>
                    {jobPost.applications.map(application => (
                        <div key={application.id} className="application">
                            <p>{application.candidateName}</p>
                            <p>Status: {applicationStatus[`${jobPost.id}-${application.id}`] || application.status}</p>
                            <button onClick={() => handleStatusChange(jobPost.id, application.id, 'Pending')}>
                                Mark as Pending
                            </button>
                            <button onClick={() => handleStatusChange(jobPost.id, application.id, 'Reviewed')}>
                                Mark as Reviewed
                            </button>
                        </div>
                    ))}
                    {jobPost.relatedJob && (
                        <div className="recommended-job">
                            <h4>Recommended Job:</h4>
                            <p>{jobPost.relatedJob.title}</p>
                            <p>{jobPost.relatedJob.company} - {jobPost.relatedJob.location}</p>
                            <p>Type: {jobPost.relatedJob.type}</p>
                            <p>{jobPost.relatedJob.description}</p>
                            <button onClick={() => handleJobSelect(jobPost.relatedJob.id)}>
                                {selectedJob === jobPost.relatedJob.id ? 'Hide Details' : 'View Details'}
                            </button>
                            {selectedJob === jobPost.relatedJob.id && (
                                <div className="job-details">
                                    {/* Display detailed information about the recommended job */}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default JobList;
