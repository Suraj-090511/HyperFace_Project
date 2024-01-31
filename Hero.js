import React from 'react';
import '..//Main.css'

const url = "man_surfing(1080p).mp4";

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
              <video width="500" height="540" controls>
            <source src= "${url}" type="video/mp4">
                </video>
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
          <img src="https://lh3.googleusercontent.com/-wueHgAu5aaQ/YPJwOmTQBFI/AAAAAAAAAMY/BYvUX5vGVtsgCot3Qfsamu-7-8JakdbkACLcBGAsYHQ/w1200-h630-p-k-no-nu/C%2Bcourses.png" alt="img" />
          <h2>Course 1</h2>
          <p>Fundamentals Of C++</p>
        </div>
        <div className="course-card"
          onClick={() => openCourseDetails(2, 'Course 2', 'https://lh3.googleusercontent.com/-wueHgAu5aaQ/YPJwOmTQBFI/AAAAAAAAAMY/BYvUX5vGVtsgCot3Qfsamu-7-8JakdbkACLcBGAsYHQ/w1200-h630-p-k-no-nu/C%2Bcourses.png')}>
          <img src="https://developers.redhat.com/sites/default/files/styles/article_feature/public/Python-01%20%282%29.webp?itok=TEVIQBQo" alt="img" />
          <h2>Course 2</h2>
          <p>Fundamentals Of Python</p>
        </div>
        <div className="course-card"
          onClick={() => openCourseDetails(3, 'Course 3', 'https://lh3.googleusercontent.com/-wueHgAu5aaQ/YPJwOmTQBFI/AAAAAAAAAMY/BYvUX5vGVtsgCot3Qfsamu-7-8JakdbkACLcBGAsYHQ/w1200-h630-p-k-no-nu/C%2Bcourses.png')}>
          <img src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo-700x394.png" alt="img" />
          <h2>Course 3</h2>
          <p>Fundamentals Of Python</p>
        </div>

      </div>
      <div className="hero-container">
        <h1>Article-Reads</h1>
        <p>Listen to audio version of top web articles</p>
      </div>
      <div className="course-cards-container">
        <div className="course-card"
          onClick={() => openCourseDetails(1, 'Article 1', 'https://venngage-wordpress.s3.amazonaws.com/uploads/2019/12/Digital-Marketing-Meet-Up-Event-Poster-DesignTemplate.jpg')}>
          <img src="https://2.bp.blogspot.com/-K6trWRlrwvE/UGJT2sE27RI/AAAAAAAABEE/g4frXiJj8yw/s1600/how+to.gif" alt="img" />
          <h2>Article 1</h2>
          <p>How to write the Style</p>
        </div>
        <div className="course-card"
          onClick={() => openCourseDetails(2, 'Article 2', 'https://venngage-wordpress.s3.amazonaws.com/uploads/2019/12/Digital-Marketing-Meet-Up-Event-Poster-DesignTemplate.jpg')}>
          <img src="https://i.insider.com/5ba3b322e361c0243a8b5424?width=1200&format=jpeg" alt="img" />
          <h2>Article 2</h2>
          <p>Mr.President</p>
        </div>
        <div className="course-card"
          onClick={() => openCourseDetails(3, 'Article 3', 'https://venngage-wordpress.s3.amazonaws.com/uploads/2019/12/Digital-Marketing-Meet-Up-Event-Poster-DesignTemplate.jpg')}>
          <img src="https://venngage-wordpress.s3.amazonaws.com/uploads/2019/12/Digital-Marketing-Meet-Up-Event-Poster-DesignTemplate.jpg" alt="img" />
          <h2>Article 3</h2>
          <p>Digital Marketing</p>
        </div>

      </div>
    </div>
  );
}

export default Hero;
