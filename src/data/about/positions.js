const positions = [
  {
    company: 'PayPal',
    position: 'Software Engineer Intern',
    link: 'https://www.paypal.com/sg/home',
    daterange: 'Aug 2022 - Dec 2022',
    points: [
      `Designed and maintained a single web portal for engineers to find data of interest needed 
      for issue analysis of PayPal accounts, which reduced 40% of live issues inflow requests; 
      actively engaged with React.js and Node.js`,
      'Set up the the Jest framework for unit testing to increase the code coverage for the frontend code to 80%',
      'Added new metrics to monitor service health status and published inflow requests in case of db failure to increase robustness',
    ],
  },
  {
    company: 'Garena',
    position: 'Software Engineer Intern',
    link: 'https://www.garena.sg/',
    daterange: 'May 2022 - Aug 2022',
    points: [
      'Developed and maintained different new channels for players to do in-game purchases and top-ups',
      'Developed a new proxy server to forward callbacks from payment channels to the correct testing environment to optimize testing processes',
      `Developed a new Kafka consumer for product managers to automatically process more than twenty 
      add-whitelist-URLs-requests from game development team per day`,
      'Added a new feature of verifying the email address that receives payment receipt for Payment Center-Malaysia to prevent from sending spam emails',
    ],
  },
  {
    company: 'School of Computing, NUS',
    position: 'Teaching Assistant',
    link: 'https://www.comp.nus.edu.sg/',
    daterange: 'Aug 2021 - Present',
    points: [
      `Assisted in CS1010 Programming Methodology I (AY 21/22 semester 1), TIC1001 Introduction to Computing and Programming I (AY 22/23 semester 1), 
      TIC2601 Database and Web Applications (AY 22/23 semester 1), and CS2113 Object Oriented Programming and Software Engineering (AY 22/23 semester 2) 
      with 4.3 out of 5.0 teaching feedback`,
      'Marked students’ assignments, facilitated weekly labs/tutorials, and provided constructive comments for improvement',
    ],
  },
];

export default positions;
