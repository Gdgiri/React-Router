import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import All from "./Pages/All";
import Fullstack from "./Pages/Fullstack";
import Cyber from "./Pages/Cyber";
import Career from "./Pages/Career";
import Datascience from "./Pages/Datascience";
import Pagenotfound from "./Pages/Pagenotfound";
import Course from "./Pages/Course";

const App = () => {
  let data = [
    //Full Stack Development
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg",
      head: "Full Stack Development",
      title: "Best Full-Stack Development Project Ideas in 2024",
      author: "Isha Sharma",
      date: "26 Mar, 2024",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-768x402.webp",
      head: "Full Stack Development",
      title: "How Long Would It Take to Be a Full Stack Developer?",
      author: "Meghana D",
      date: "23 Mar, 2024",
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/03/1.jpg",
      head: "Full Stack Development",
      title: "Best Web Development Roadmap for Begineers 2024",
      author: "Isha Sharma",
      date: "20 Mar, 2024",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2024/02/full_stack_developer_roadmap_in_2024-768x402.webp",
      head: "Full Stack Development",
      title: "Full-Stack Developer Roadmap , a complete guide ",
      author: "Meghana D",
      date: "10 Mar, 2024",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2024/03/Feature-3.webp",
      head: "Full Stack Development",
      title: "7 Unique Web Development Project Ideas for Begineers",
      author: "Lukesh S",
      date: "05 Apr, 2024",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
      head: "Full Stack Development",
      title: "6 Essential Prerequisites For Learning ReactJS",
      author: "Srinithi Shankar",
      date: "26 Jun, 2024",
    },

    //Data Science

    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/08/Everything-about-Data-Scientist-Salary-in-India-2023-2048x1072.png",
      head: "Data Science",
      title: "Everything about DataScientist Salary in india | 2024",
      author: "Shrinithi Shankar",
      date: "26 Mar, 2024",
    },

    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
      head: "Data Science",
      title: "Top Product-Based Companies for Data Scientists in 2024",
      author: "Jaishree Tomar",
      date: "29 Mar, 2024",
    },

    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/image-4-768x433.png",
      head: "Data Science",
      title: "Roles and Responsibilities of a Data Scientist",
      author: "Jaishree Tomar",
      date: "26 Jul, 2024",
    },

    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Best-Data-Science-Online-Courses-for-Beginners.webp",
      head: "Data Science",
      title: "10 Best Data Scientist online course for Begineers",
      author: "Srinithi Shankar",
      date: "11 Aug, 2024",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2020/10/data-e1625548568296.png",
      head: "Data Science",
      title: "A Complete Guide to become a Data Scientist in 3 months",
      author: "Guvi Geek",
      date: "26 Oct, 2024",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2021/10/Colorful-Photo-Animal-Kids-Toys-Promot-Deals-Card-768x545.png",
      head: "Data Science",
      title: "A Complete Guide on Data Scientist Syllabus | 2024",
      author: "Archana",
      date: "26 Mar, 2024",
    },

    // course

    {
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.5efv7aqqd0rieX9TDNqa2QHaEK%26pid%3DApi&f=1&ipt=162b38de93a951f365288ebe5cb41a71bdff9b071263b4e97780cd57f48c8989&ipo=images",
      head: "Course",
      title: "Python for Data Science , AI & Development",
      author: "IBM",
      date: "26 Mar, 2024",
    },

    {
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Q6VCRoUOrx691mvhmSwkDgHaEo%26pid%3DApi&f=1&ipt=93051138669153f7c1b472a575dd4f7a4824dfcdadc0ab1a6bd0644d0de05541&ipo=images",
      head: "Course",
      title: "Java Programming and Software Engineering Fundamentals ",
      author: "Duke University",
      date: "29 Mar, 2024",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYFKmQIBuya9wSrr-5NZPRqh3dUxNO3AvdCQ&s",
      head: "Course",
      title: "Computer Science: Programming with a Purpose",
      author: "Sharma",
      date: "17 Mar, 2024",
    },
    {
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipground.com%2Fimages%2Fpng-coding-1.png&f=1&nofb=1&ipt=2583dd6c1bf81b178af54c27d233bd68a86eff11432bdeafa0c61bc221dfe9e1&ipo=images",
      head: "Course",
      title: "Code Yourself! An introduction to Programming",
      author: "The University of Edinburgh",
      date: "08 Mar, 2024",
    },
    {
      image:
        "https://png.pngtree.com/element_our/20200609/ourmid/pngtree-children-s-software-programming-image_2230759.jpg",
      head: "Course",
      title: "Programming Fundamentals",
      author: "Duke University",
      date: "26 Nov, 2024",
    },
    {
      image:
        "https://w7.pngwing.com/pngs/181/762/png-transparent-programmer-computer-programming-software-programming-s-computer-computer-program-programming-language.png",
      head: "Course",
      title: "Coding for Everyone: C and C++",
      author: "University of California",
      date: "26 Dec, 2024",
    },

    //Cyber

    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
      head: "Cyber",
      title: "What is Cyber Security? importance and its uses",
      author: "Tushar Vinocha",
      date: "26 Jan, 2024",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
      head: "Cyber",
      title: "The Ultimate Cyber Security Roadmap for Begineers",
      author: "Srinithi Sankar",
      date: "26 Feb, 2024",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif",
      head: "Cyber",
      title: "Is Coding required for Cyber Security?",
      author: "Tushar Vinocha",
      date: "24 Mar, 2024",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2020/11/cyber-security-e1614342903477.png",
      head: "Cyber",
      title: "How is Cyber Security important to our lives",
      author: "Guvi Geek",
      date: "25 Apr, 2024",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2021/03/Blog-9-768x402.png",
      head: "Cyber",
      title: "The Cyber Security:5 Must have Cyber Security Certification",
      author: "Tushar Vinocha",
      date: "26 May, 2024",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-2048x1152.png",
      head: "Cyber",
      title: "8 Different types of Cyber Security and Threats involved",
      author: "Tushar Vinocha",
      date: "26 , 2jun024",
    },

    //career

    {
      image:
        "https://www.boardinfinity.com/blog/content/images/2023/07/Top-50-Data-Analyst-Interview-Questions-and-Answers--50-.png",
      head: "Career",
      title: "Career Coaching and Personal Development",
      author: "Board Infinity",
      date: "05 Jul, 2024",
    },
    {
      image:
        "https://www.boardinfinity.com/blog/content/images/2023/07/Top-50-Data-Analyst-Interview-Questions-and-Answers--81-.png",
      head: "Career",
      title: "Personal Finance and Investment Planning",
      author: "Board Infinity",
      date: "16 Aug, 2024",
    },
    {
      image:
        "https://www.boardinfinity.com/blog/content/images/2023/07/Top-50-Data-Analyst-Interview-Questions-and-Answers--55-.png",
      head: "Career",
      title: "Online Learning: MAstering Essential Skills",
      author: "Board Infinity",
      date: "05 Sep, 2024",
    },
    {
      image:
        "https://www.boardinfinity.com/blog/content/images/2023/07/Top-50-Data-Analyst-Interview-Questions-and-Answers--57-.png",
      head: "Career",
      title: "Inspirational Conversation with Leaders",
      author: "Board Infinity",
      date: "26 Jan, 2024",
    },
    {
      image:
        "https://www.boardinfinity.com/blog/content/images/2023/07/Top-50-Data-Analyst-Interview-Questions-and-Answers--52-.png",
      head: "Career",
      title: "Linkedin, Networking and Professional Branding",
      author: "Board Infinity",
      date: "26 Mar, 2024",
    },
    {
      image:
        "https://www.boardinfinity.com/blog/content/images/2023/07/Top-50-Data-Analyst-Interview-Questions-and-Answers--53--1.png",
      head: "Career",
      title: "Career choice , Oppertunities and Trends",
      author: "Board Infinity",
      date: "29 Mar, 2024",
    },
  ];

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<All data={data} />} />
          <Route path="/fullstack" element={<Fullstack data={data} />} />
          <Route path="/datascience" element={<Datascience data={data} />} />
          <Route path="/cybersecurity" element={<Cyber data={data} />} />
          <Route path="/career" element={<Career data={data} />} />
          <Route path="/course" element={<Course data={data} />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
