import React from 'react'
import CMSAccordian from './CMSAccordian'
import CMSMain from './CMSMain'
import CMSNav from './CMSNav'

function Dashboard() {
    return (
        <>
            <CMSNav />
            <div>Dashboard</div>
            <CMSMain />
        </>

    )
}

export default Dashboard