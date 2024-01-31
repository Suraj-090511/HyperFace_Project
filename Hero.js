import React from 'react';
import '..//Main.css'

function Hero() {

    const openCourseDetails = (courseId, courseTitle, courseImage) => {
        const newWindow = window.open('', '_blank');
        newWindow.document.write(`
          <html>
            <head>
              <title>${courseTitle}</title>
            </head>
            <body style="text-align: center;">
              <h2>${courseTitle}</h2>
              <img src="${courseImage}" alt="img" style="max-width: 100%; max-height: 100%;"/>
            </body>
          </html>
        `);
      };
  return (
    <div>
      <div className="hero-container">
        <h1>Course for You</h1>
        <p>Listen to byte-sized audio courses from top thinkers</p>
      </div>
      <div className="course-cards-container ">
        <div className="course-card"
        onClick={() => openCourseDetails(1, 'Course 1', 'https://lh3.googleusercontent.com/-wueHgAu5aaQ/YPJwOmTQBFI/AAAAAAAAAMY/BYvUX5vGVtsgCot3Qfsamu-7-8JakdbkACLcBGAsYHQ/w1200-h630-p-k-no-nu/C%2Bcourses.png')} >
            <img src="https://lh3.googleusercontent.com/-wueHgAu5aaQ/YPJwOmTQBFI/AAAAAAAAAMY/BYvUX5vGVtsgCot3Qfsamu-7-8JakdbkACLcBGAsYHQ/w1200-h630-p-k-no-nu/C%2Bcourses.png" alt ="img"/>
          <h2>Course 1</h2>
          <p>Description for Course 1</p>
        </div>
        <div className="course-card" 
        onClick={() => openCourseDetails(2, 'Course 2', 'https://lh3.googleusercontent.com/-wueHgAu5aaQ/YPJwOmTQBFI/AAAAAAAAAMY/BYvUX5vGVtsgCot3Qfsamu-7-8JakdbkACLcBGAsYHQ/w1200-h630-p-k-no-nu/C%2Bcourses.png')}>
        <img src="https://lh3.googleusercontent.com/-wueHgAu5aaQ/YPJwOmTQBFI/AAAAAAAAAMY/BYvUX5vGVtsgCot3Qfsamu-7-8JakdbkACLcBGAsYHQ/w1200-h630-p-k-no-nu/C%2Bcourses.png" alt ="img"/>
          <h2>Course 2</h2>
          <p>Description for Course 2</p>
        </div>
        <div className="course-card"
        onClick={() => openCourseDetails(3, 'Course 3', 'https://lh3.googleusercontent.com/-wueHgAu5aaQ/YPJwOmTQBFI/AAAAAAAAAMY/BYvUX5vGVtsgCot3Qfsamu-7-8JakdbkACLcBGAsYHQ/w1200-h630-p-k-no-nu/C%2Bcourses.png')}>
        <img src="https://lh3.googleusercontent.com/-wueHgAu5aaQ/YPJwOmTQBFI/AAAAAAAAAMY/BYvUX5vGVtsgCot3Qfsamu-7-8JakdbkACLcBGAsYHQ/w1200-h630-p-k-no-nu/C%2Bcourses.png" alt ="img"/>
          <h2>Course 3</h2>
          <p>Description for Course 3</p>
        </div>
      
      </div>
      <div className="hero-container">
        <h1>Article-Reads</h1>
        <p>Listen to audio version of top web articles</p>
      </div>
      <div className="course-cards-container">
        <div className="course-card"
        onClick={() => openCourseDetails(1, 'Article 1', 'https://venngage-wordpress.s3.amazonaws.com/uploads/2019/12/Digital-Marketing-Meet-Up-Event-Poster-DesignTemplate.jpg')}>
            <img src="https://venngage-wordpress.s3.amazonaws.com/uploads/2019/12/Digital-Marketing-Meet-Up-Event-Poster-DesignTemplate.jpg" alt ="img"/>
          <h2>Article 1</h2>
          <p>Description for Article 1</p>
        </div>
        <div className="course-card"
         onClick={() => openCourseDetails(2, 'Article 2', 'https://venngage-wordpress.s3.amazonaws.com/uploads/2019/12/Digital-Marketing-Meet-Up-Event-Poster-DesignTemplate.jpg')}>
        <img src="https://venngage-wordpress.s3.amazonaws.com/uploads/2019/12/Digital-Marketing-Meet-Up-Event-Poster-DesignTemplate.jpg" alt ="img"/>
          <h2>Article 2</h2>
          <p>Description for Article 2</p>
        </div>
        <div className="course-card"
         onClick={() => openCourseDetails(3, 'Article 3', 'https://venngage-wordpress.s3.amazonaws.com/uploads/2019/12/Digital-Marketing-Meet-Up-Event-Poster-DesignTemplate.jpg')}>
        <img src="https://venngage-wordpress.s3.amazonaws.com/uploads/2019/12/Digital-Marketing-Meet-Up-Event-Poster-DesignTemplate.jpg" alt ="img"/>
          <h2>Article 3</h2>
          <p>Description for Article 3</p>
        </div>
      
      </div>
    </div>
  );
}

export default Hero;
