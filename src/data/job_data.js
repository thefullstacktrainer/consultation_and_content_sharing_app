// Dummy data for job posts
const jobPosts = [
    {
        id: 1,
        title: 'Frontend Developer',
        company: 'TechCo',
        location: 'City A',
        type: 'Full-time',
        description: 'We are looking for a skilled frontend developer...',
    },
    {
        id: 2,
        title: 'Backend Engineer',
        company: 'CodeTech',
        location: 'City B',
        type: 'Contract',
        description: 'Join our team as a backend engineer...',
    },
    // Add more job post objects
];

// Dummy data for recent applications
const recentApplications = [
    {
        id: 101,
        jobId: 1, // Relates to the job post with id 1
        candidateName: 'Alice Johnson',
        appliedDate: '2023-08-10',
        status: 'Pending',
    },
    {
        id: 102,
        jobId: 2, // Relates to the job post with id 2
        candidateName: 'Bob Smith',
        appliedDate: '2023-08-09',
        status: 'Reviewed',
    },
    // Add more application objects
];

// Dummy data for recommended jobs
const recommendedJobs = [
    {
        id: 3,
        title: 'UI/UX Designer',
        company: 'DesignHub',
        location: 'City C',
        type: 'Full-time',
        description: 'Are you a creative UI/UX designer? Join our team...',
    },
    // Add more recommended job objects
];

// Create relationships between job posts and recent applications
jobPosts.forEach(jobPost => {
    jobPost.applications = recentApplications.filter(application => application.jobId === jobPost.id);
});

// Create a relationship between recommended jobs and job posts
recommendedJobs[0].relatedJob = jobPosts[0]; // Associate the first recommended job with the first job post

// Export the data
export { jobPosts, recentApplications, recommendedJobs };
