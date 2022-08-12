const allProjects = [
    {
        name: 'React Portfolio',
        projDesc: `I rebuilt my portfolio with responsive design in mind, with UI tailored for up to 21x9 screens.  I challenged myself to not use any CSS frameworks and avoid using React packages. 
        User customization is always my priority, so I implemented a dark mode toggler that updates colors and backgrounds across the site.`,
        role: 'Role: Full-Stack dev, sole author. Prototyped in XD and created in React. Created custom icons for the site as well as photographed most of the photos seen. Other photos and assets were licensed and listed on Github',
        techStack: 'React, CSS, Node/Express Server, Photoshop, Illustrator, Adobe XD',
        githubLink: 'https://github.com/Diegopie/portfolio',
        liveLink: 'https://diegopie.herokuapp.com/',
        stillImage: '/assets/img/projects/reactPort-still.png',
        animateImage: '/assets/img/projects/reactPort-animate.gif'
    },
    {
        name: 'Water Cooler',
        projDesc: 'This video conferencing application uses a unique GUI interface for interacting with large social groups. Users can use sprites to create new social spaces with unique video and text chats',
        role: 'Role: Full-Stack dev. Wrote friend request, room invitations, social space request systems, and connected front end UI with live database info. Managed architecting database, managing seed data, and UX/UI design',
        techStack: 'React, CSS, Bootstrap, React-Toastify, Service Workers, PWA, Node/Express Server, Mongoose, Jest, socket.io, Passport, Bcrypt, JWT, Eslint, Illustrator, Photoshop, XD',
        githubLink: 'https://github.com/Diegopie/water-cooler-refactor',
        liveLink: 'https://water-cooler-app.herokuapp.com/',
        stillImage: '/assets/img/projects/waterCooler-still.png',
        animateImage: '/assets/img/projects/waterCooler-animate.gif'
    },
    {
        name: 'PWA Budget Tracker',
        projDesc: 'This demo application was made to practice PWA implementation. It is an installable app with full offline support',
        role: 'Role: Implement Mongo and IndexDB database so they may sync together',
        techStack: 'HTML, CSS, Bootstrap, Service Worker, PWA, IndexedDB, Node/Express Server, Mongoose',
        githubLink: 'https://github.com/Diegopie/PWA-Budget-App',
        liveLink: 'https://budget-pwaa.herokuapp.com/',
        animateImage: '/assets/img/projects/budgetPWA-animate.gif',
        stillImage: '/assets/img/projects/budgetPWA-still.png',
    },
    {
        name: 'The Smartest Among Us',
        projDesc: 'Entertainment site for playing randomly generated quizzes. Users can save and edit randomly generated quizzes or create their own. Any saved quiz is shareable with friends to compete in leaderboards',
        role: 'Role: Team Lead - Assign tasks, set deadlines. Architect database, UX/UI Lead, front-end dev',
        techStack: 'HTML, CSS, Bootstrap, jQuery, Open Trivia API, Node/Express Server, Sequelize, Passport, Bcrypt, Photoshop, InDesign',
        githubLink: 'https://github.com/Diegopie/The-Smartest-Among-Us-Refactor',
        liveLink: 'https://the-smartest-among-us.herokuapp.com/',
        stillImage: '/assets/img/projects/among-still.png',
        animateImage: '/assets/img/projects/among-animate.gif',
    },
    {
        name: 'QR-aid Codes',
        projDesc: `An application for organizing game sessions with your friends. Users can easily select a time and date for what they want to play and receive a QR code to share with their friends!
        Scanning this code creates a calendar event to save to user’s preferred calendar application.`,
        role: 'Role: Team Lead - Assign tasks, set deadlines; UX/UI Lead. Implemented API integration and dynamically rendered content with jQuery',
        techStack: 'HTML, CSS, Bulma, jQuery, Rawg.io API, Qrickit API, InDesign',
        githubLink: 'https://github.com/Diegopie/qraid-codes',
        liveLink: 'https://diegopie.github.io/qraid-codes/',
        stillImage: '/assets/img/projects/qrcodes-still.png',
        animateImage: '/assets/img/projects/qrcodes-animate.gif',
    },
    {
        name: 'Weather Forecast',
        projDesc: `This is a weather forecast application that allows users to search any city in the US to find the current temperature, humidity, wind speed, UV index, and 5 day forecast. The application will automatically save a user's 10 recent searches.`,
        role: 'Role: Implement API integration and dynamically render API data in jQuery',
        techStack: 'HTML, CSS, Bootstrap, jQuery, Open Weather API',
        githubLink: 'https://github.com/Diegopie/local-weather-forecast',
        liveLink: 'https://diegopie.github.io/local-weather-forecast/',
        stillImage: '/assets/img/projects/calendar-still.png',
        animateImage: '/assets/img/projects/calendar-animate.gif',
    },
]

export default allProjects
