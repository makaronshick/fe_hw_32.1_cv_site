import React from "react";
import "./about.styles.css";

export default () => {
  return (
    <div className="cv_container">

    <header>
      <img src="../../images/cat.jpg" alt="John Doe Photo" class="photo"/>
      <h1>John Doe</h1>
      <p>Software Engineer | Web Developer</p>
    </header>

    <div class="cv_section contact-info">
      <h2>Contact Information</h2>
      <p>Email: johndoe@example.com</p>
      <p>Phone: +1 (123) 456-7890</p>
      <p>LinkedIn: linkedin.com/in/johndoe</p>
      <p>GitHub: github.com/johndoe</p>
    </div>

    <div class="cv_section summary">
      <h2>Summary</h2>
      <p>Experienced software engineer with a focus on web development. Skilled in JavaScript, React, and Node.js, with a passion for creating responsive and scalable web applications.</p>
    </div>

    <div class="cv_section experience">
      <h2>Work Experience</h2>
      <h3>Senior Software Engineer</h3>
      <p>Tech Solutions Inc., 2019 - Present</p>
      <ul>
        <li>Led a team of developers to build a large-scale e-commerce application with React and Node.js.</li>
        <li>Improved application performance by 30% by optimizing code and implementing best practices.</li>
        <li>Collaborated with designers to create a responsive UI, resulting in a 20% increase in user engagement.</li>
      </ul>
      
      <h3>Web Developer</h3>
      <p>Creative Agency, 2017 - 2019</p>
      <ul>
        <li>Developed custom websites and applications for clients using JavaScript, HTML, and CSS.</li>
        <li>Worked closely with clients to understand requirements and provide technical solutions.</li>
        <li>Implemented SEO strategies that boosted clients' search engine rankings by 25%.</li>
      </ul>
    </div>

    <div class="cv_section education">
      <h2>Education</h2>
      <h3>Bachelor of Science in Computer Science</h3>
      <p>University of Example, 2013 - 2017</p>
      <p>Graduated with honors, GPA: 3.8/4.0</p>
    </div>

    <div class="cv_section skills">
      <h2>Skills</h2>
      <p>Programming Languages: JavaScript, Python, C++</p>
      <p>Frameworks & Libraries: React, Node.js, Express</p>
      <p>Tools & Technologies: Git, Docker, AWS</p>
      <p>Soft Skills: Problem-solving, Team Leadership, Communication</p>
    </div>

    <footer class="cv_section">
      <p>&copy; 2024 John Doe. All rights reserved.</p>
    </footer>
  </div>
  );
};
