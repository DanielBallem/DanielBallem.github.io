export interface job {
    title: string;
    date: string;
    description: string;
    image: string;
}

export const experience: job[] = [
    {
        title: "Software Developer @ IBM",
        date: "May 2021 - Aug 2022",
        description: "Developed front-end widgets using Angular and Typescript, HTML, and SCSS to visualize customer supply-chain data.\n-Wrote and debugged GraphQL queries to retrieve server-side data, enabling users to create their own widgets and dashboards.\n-Implemented out-of-the-box data upload for new accounts and tenants, allowing internal teams and potential customers to experiment with and use the application.\n-Created a service to stream weather event data into dashboards, leading to new business opportunities and clients. Utilized Python 3 and Docker in development.",
        image: "ibm.png"
    },
    {
        title: "Lead Teaching Assistant @ Queen's University",
        date: "Sep 2020 - April 2021, Sep 2022 - Current",
        description: "Teaching assistant for several courses: Intro to programming, Object Oriented Programming, and Game Development. Lead TA for Discrete Mathematics. \nAssisted the professor with grading assignments, and providing feedback to help students improve their understanding of course material.\n-Leading review sessions and office hours to provide additional support and guidance to students.\n-Collaborating with the course instructor and other TAs to refine course content and coordinate marking schedules.",
        image: "queens.png"
    }
]