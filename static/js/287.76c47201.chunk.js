"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[287],{287:function(e,t,n){n.r(t),n.d(t,{default:function(){return Y}});var r=n(791),o=n(523),a=n(480),s=n(184),i=function(e){var t=e.data;return(0,s.jsx)("article",{className:"degree-container",children:(0,s.jsxs)("header",{children:[(0,s.jsx)("h4",{className:"degree",children:t.degree}),(0,s.jsxs)("p",{className:"school",children:[(0,s.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},c=function(e){var t=e.data;return(0,s.jsxs)("div",{className:"education",children:[(0,s.jsx)("div",{className:"link-to",id:"education"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h3",{children:"Education"})}),t.map((function(e){return(0,s.jsx)(i,{data:e},e.school)}))]})};c.defaultProps={data:[]};var l=c,u=function(e){var t=e.data;return(0,s.jsxs)("article",{className:"jobs-container",children:[(0,s.jsxs)("header",{children:[(0,s.jsxs)("h4",{children:[(0,s.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),(0,s.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),(0,s.jsx)("ul",{className:"points",children:t.points.map((function(e){return(0,s.jsx)("li",{children:e},e)}))})]})},d=function(e){var t=e.data;return(0,s.jsxs)("div",{className:"experience",children:[(0,s.jsx)("div",{className:"link-to",id:"experience"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h3",{children:"Experience"})}),t.map((function(e){return(0,s.jsx)(u,{data:e},e.company)}))]})};d.defaultProps={data:[]};var m=d;function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=n(611);function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function y(e,t){if(t&&("object"===g(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=function(e){var t=e.handleClick,n=e.active,r=e.label;return(0,s.jsx)("button",{className:"skillbutton ".concat(n[r]?"skillbutton-active":""),type:"button",onClick:function(){return t(r)},children:r})},w=function(e){var t=e.data,n=e.categories,r=t.category,o=t.competency,a=t.title,i={background:n.filter((function(e){return r.includes(e.name)})).map((function(e){return e.color}))[0]},c=k(k({},i),{},{width:"".concat(String(Math.min(100,Math.max(o/5*100,0))),"%")});return(0,s.jsxs)("div",{className:"skillbar clearfix",children:[(0,s.jsx)("div",{className:"skillbar-title",style:i,children:(0,s.jsx)("span",{children:a})}),(0,s.jsx)("div",{className:"skillbar-bar",style:c}),(0,s.jsxs)("div",{className:"skill-bar-percent",children:[o," / 5"]})]})};w.defaultProps={categories:[]};var S=w,C=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,f.Z)(e,t)}(a,e);var t,n,r,o=b(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=o.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,r){return k(k({},n),{},v({},r,e===r&&!t.buttons[r]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return k(k({},e),{},v({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=a,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return(0,s.jsx)(S,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return(0,s.jsx)(x,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return(0,s.jsxs)("div",{className:"skills",children:[(0,s.jsx)("div",{className:"link-to",id:"skills"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h3",{children:"Skills"})}),(0,s.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),(0,s.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&p(t.prototype,n),r&&p(t,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(r.Component);C.defaultProps={skills:[],categories:[]};var N=C,O=function(e){var t=e.data,n=e.last;return(0,s.jsxs)("li",{className:"course-container",children:[(0,s.jsxs)("a",{href:t.link,children:[(0,s.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),(0,s.jsx)("p",{className:"course-name",children:t.title})]}),!n&&(0,s.jsx)("div",{className:"course-dot",children:(0,s.jsx)("p",{className:"course-name",children:" \u2022"})})]})};O.defaultProps={last:!1};var P=O,D=function(e){return e.sort((function(e,t){var n=0;return e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(t,n){return(0,s.jsx)(P,{data:t,last:n===e.length-1},t.title)}))},A=function(e){var t=e.data;return(0,s.jsxs)("div",{className:"courses",children:[(0,s.jsx)("div",{className:"link-to",id:"courses"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h3",{children:"Selected Courses"})}),(0,s.jsx)("ul",{className:"course-list",children:D(t)})]})};A.defaultProps={data:[]};var E=A,I=[{title:"Programming Methodology",number:"CS1010",link:"https://nusmods.com/modules/CS1010/programming-methodology"},{title:"Programming Methodology II",number:"CS2030",link:"https://nusmods.com/modules/CS2030/programming-methodology-ii"},{title:"Data Structures and Algorithm",number:"CS2040C",link:"https://nusmods.com/modules/CS2040C/data-structures-and-algorithms"},{title:"Machine Learning",number:"CS3244",link:"https://nusmods.com/modules/CS3244/machine-learning"},{title:"Design and Analysis of Algorithms",number:"CS3230",link:"https://nusmods.com/modules/CS3230/design-and-analysis-of-algorithms"},{title:"Database System",number:"CS2102",link:"https://nusmods.com/modules/CS2102/database-systems"},{title:"Database System Implementation",number:"CS3223",link:"https://nusmods.com/modules/CS3223/database-systems-implementation"},{title:"Distributed Databases",number:"CS4224",link:"https://nusmods.com/modules/CS4224/distributed-databases"},{title:"Parallel and Concurrent Programming",number:"CS3211",link:"https://nusmods.com/modules/CS3211/parallel-and-concurrent-programming"},{title:"Database Applications Design and Tuning",number:"CS4221",link:"https://nusmods.com/modules/CS4221/database-applications-design-and-tuning"},{title:"Software Engineering and Object-Oriented Programming",number:"CS2113",link:"https://nusmods.com/modules/CS2113/software-engineering-object-oriented-programming"},{title:"Computer Networks",number:"EE4204",link:"https://nusmods.com/modules/EE4204/computer-networks"},{title:"Operating Systems",number:"CG2271",link:"https://nusmods.com/modules/CG2271/real-time-operating-systems"},{title:"Blockchain and Distributed Ledger Technologies",number:"IS4302",link:"https://nusmods.com/modules/IS4302/blockchain-and-distributed-ledger-technologies"}],M=[{school:"National University of Singapore",degree:"BEng, Computer Engineering (Honours)",link:"https://www.nus.edu.sg/",year:"2020.08 - Present"}],L=[{company:"BlackRock",position:"Incoming Technology Analyst Intern",link:"https://www.blackrock.com/",daterange:"May 2023 - Aug 2023",points:[]},{company:"PayPal",position:"Software Engineer Intern",link:"https://www.paypal.com/sg/home",daterange:"Aug 2022 - Dec 2022",points:["Designed and maintained a single web portal for engineers to find data of interest needed \n      for issue analysis of PayPal accounts, which reduced 40% of live issues inflow requests; \n      actively engaged with React.js and Node.js","Set up the the Jest framework for unit testing to increase the code coverage for the frontend code to 80%","Added new metrics to monitor service health status and published inflow requests in case of db failure to increase robustness"]},{company:"Garena",position:"Software Engineer Intern",link:"https://www.garena.sg/",daterange:"May 2022 - Aug 2022",points:["Developed and maintained different new channels for players to do in-game purchases and top-ups","Developed a new proxy server to forward callbacks from payment channels to the correct testing environment to optimize testing processes","Developed a new Kafka consumer for product managers to automatically process more than twenty \n      add-whitelist-URLs-requests from game development team per day","Added a new feature of verifying the email address that receives payment receipt for Payment Center-Malaysia to prevent from sending spam emails"]},{company:"School of Computing, NUS",position:"Teaching Assistant",link:"https://www.comp.nus.edu.sg/",daterange:"Aug 2021 - Present",points:["Assisted in CS1010 Programming Methodology I (AY 21/22 semester 1), TIC1001 Introduction to Computing and Programming I (AY 22/23 semester 1), \n      TIC2601 Database and Web Applications (AY 22/23 semester 1), and CS2113 Object Oriented Programming and Software Engineering (AY 22/23 semester 2) \n      with 4.3 out of 5.0 teaching feedback","Marked students\u2019 assignments, facilitated weekly labs/tutorials, and provided constructive comments for improvement"]}],R=n(210);var T=n(181);var B,_=[{title:"Javascript",competency:4,category:["Languages","Frontend Development"]},{title:"Typescript",competency:3,category:["Languages","Frontend Development"]},{title:"HTML + SASS/SCSS/CSS",competency:4,category:["Languages","Frontend Development"]},{title:"Python",competency:5,category:["Languages"]},{title:"Java",competency:5,category:["Languages"]},{title:"Go",competency:3,category:["Languages"]},{title:"C/C++",competency:3,category:["Languages"]},{title:"Spring Boot",competency:5,category:["Backend Development"]},{title:"Django",competency:5,category:["Backend Development"]},{title:"React",competency:4,category:["Frontend Development"]},{title:"MongoDB",competency:3,category:["Databases"]},{title:"MySQL",competency:4,category:["Databases"]},{title:"Redis",competency:3,category:["Databases"]}].map((function(e){return k(k({},e),{},{category:e.category.sort()})})),F=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],G=(B=new Set(_.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return(0,R.Z)(e)}(B)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(B)||(0,T.Z)(B)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:F[t]}})),U=["Education","Experience","Skills","Courses"],Y=function(){return(0,s.jsx)(a.Z,{title:"About me",description:"About Siyuan Cheng.",children:(0,s.jsxs)("article",{className:"post",id:"about",children:[(0,s.jsx)("header",{children:(0,s.jsxs)("div",{className:"title",children:[(0,s.jsx)("h2",{"data-testid":"heading",children:(0,s.jsx)(o.rU,{to:"about-me",children:"About Me"})}),(0,s.jsx)("div",{className:"link-container",children:U.map((function(e){return(0,s.jsx)("h4",{children:(0,s.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),(0,s.jsx)(l,{data:M}),(0,s.jsx)(m,{data:L}),(0,s.jsx)(N,{skills:_,categories:G}),(0,s.jsx)(E,{data:I})]})})}}}]);
//# sourceMappingURL=287.76c47201.chunk.js.map