

const data = [
    {
        id: 1,
        title: "BMW Group",
        slug: 'bmw-group',
        category: ['FinTech', 'Frontend', 'Design'],
        description: 'FinTech application for the BMW Group (BMW, Rolls Royce, Mini).',
        src: '/img/project/project1/pexels-brandin-t-13182965.jpg',
        overlay: 6
    },
    {
        id: 2,
        title: "Ford",
        slug: 'ford',
        category: ['FinTech', 'Frontend', 'Design'],
        src: '/img/project/project5/sam-warren-JKsAVzwn9CQ-unsplash.jpg',
        description: 'FinTech application for Ford.',
        overlay: 2
    },
    {
        id: 5,

        title: "Mercedes Benz",
        slug: 'mercedes-benz',
        src: '/img/project/project3/1.jpg',

        category: ['FinTech', 'Frontend', 'Design'],
        description: 'FinTech application for Mercedes Benz.',
        
        overlay: 6

    },
    {
        id: 3,
        
        title: "Thyssenkrupp & TKE",
        slug: 'thyssenkrupp',
        src: '/img/project/project2/ant-rozetsky-SLIFI67jv5k-unsplash.jpg',
        category: ['FinTech', 'Frontend', 'Design'],
        description: 'FinTech application for Thyssenkrupp and TKE.',
        overlay: 6
    },
    {
        id: 4,
        title: "Lufthansa",
        slug: 'lufthansa',
        category: ['FinTech', 'Frontend', 'Design'],
        src: '/img/project/project4/plane-gff4c52fb7_1920.jpg',
        description: 'FinTech application for Lufthansa.',
        overlay: 2
    }/* ,
    {
        id: 6,
        title: "Fidelity",
        slug: 'fidelity',
        category: ['FinTech', 'Frontend', 'Design'],
        src: '/img/project/project5/sam-warren-JKsAVzwn9CQ-unsplash.jpg',
        description: 'FinTech application for Fidelity.',
        overlay: 2
    } *//* ,
    {
        id: 5,
        title: "InCapSolution",
        slug: 'incapsolution',
        src: '/img/project/project5/1.jpg',

        category: ['Medical Research', 'Frontend', 'Design'],
        description: 'Web application & corporate identity for a medical research statrtup based in Germany.',
        overlay: 5
    },
    {
        id: 6,
        title: "KRONOS",
        slug: 'kronos',
        category: ['Ironhack', 'Full Stack', 'Hotel Industry'],
        src: '/img/project/project6/1.jpg',
        description: 'Task Management System for the Hotel industry. Ironhack project module 2.',
        overlay: 4
    } */
]

export const getPortfolioData = () => data;

export const getPortfolioItem = (value, whereName = "slug") => {
    return data.find(item => item[whereName] === value);
};
export const getPortfolioLink = (item) => {
    if (item)
        return item.slug && '/portfolio/' + item.slug;

    return '';
};