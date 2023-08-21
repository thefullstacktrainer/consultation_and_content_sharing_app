import React from 'react'
import JobList from './JobList'
import OverviewBanner from './OverviewBanner'
import QuickAccess from './QuickAccess'
import { recommendedJobs, jobPosts, recentApplications } from '../data/job_data';
function Dashboard() {

    return (

        <div className="app">
            <OverviewBanner />
            <QuickAccess />
            <JobList
                jobPosts={jobPosts}
                recentApplications={recentApplications}
                recommendedJobs={recommendedJobs}
            />
        </div>

    )
}

export default Dashboard