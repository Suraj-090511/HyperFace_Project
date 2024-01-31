import React from 'react'

function Tweet() {

    const openCourseDetails = (desc, name, Image) => {
        const newWindow = window.open('', '_blank');
        newWindow.document.write(`
          <html>
            <head>
                
              <title>${desc}</title>
            </head>
            <body style="text-align: center;">
            <h2>${name}</h2>
              <img src="${Image}" alt="img" style="max-width: 100%; max-height: 100%;"/>
            </body>
          </html>
        `);
    }
  return (
    <>
    <div>
        <h1>Tweet Shorts</h1>
        <p>Listen to audio version of tweet threads</p>
    </div>

    <div style={{display:"flex"}}>
    <div style={{display:"flex"}}>
        <div>
        <span  onClick={() => openCourseDetails("Fundamentals Of Product Design","Shreyas Ghoshi","https://www.sportspodcastgroup.com/wp-content/uploads/2022/11/Kenny-Mayne-FINAL-COVER-21-scaled.jpg")}><img style={{ height:"140px",width :"200px"}}
       src="https://www.sportspodcastgroup.com/wp-content/uploads/2022/11/Kenny-Mayne-FINAL-COVER-21-scaled.jpg" alt =""/
       >
       </span>
        </div>
       
       <div>
       <h3>Fundamentals Of Product Design</h3>
       <p>Shreyas Ghoshi</p>
       </div>
       </div>
       
       <div style={{display:"flex"}}>
        <div >
        <span  onClick={() => openCourseDetails("Fundamentals Of Product Design","Shreyas Ghoshi","https://www.sportspodcastgroup.com/wp-content/uploads/2022/11/Kenny-Mayne-FINAL-COVER-21-scaled.jpg")}>
            <img style={{ height:"140px",width :"200px"}}
       src="https://www.sportspodcastgroup.com/wp-content/uploads/2022/11/Kenny-Mayne-FINAL-COVER-21-scaled.jpg" alt =""/
       >
       </span>
        </div>
       
       <div>
       <h3>Fundamentals Of Product Design</h3>
       <p>Shreyas Ghoshi</p>
       </div>
    </div>

    </div>
    </>
  )
}

export default Tweet
