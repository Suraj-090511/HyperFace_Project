import React from 'react'
import '..//Main.css'

function NavBar() {
  return (
    <>
    <div className='NameBar'>
    <div>
    <h1>Hey <span style={{ color:"skyblue"}}>Anirudh 👋</span></h1>
    <h3>It's Nice Day To Learn Something</h3>
    </div>
    <img src = "https://media.istockphoto.com/id/1208843679/photo/caucasian-female-singer-portrait-isolated-on-purple-studio-background-in-neon-light.jpg?s=612x612&w=0&k=20&c=zQlDYsG6wPHPv5Gf8VEDGOE7YwV0--4ax-0M9J-yq6c=" alt="img"/>
    </div>

    

    <div className='Search_Area'>
        
        <input type='text' placeholder='Join and help us Building Airvoice'/>
        <button>Community</button>
    </div>
   
    </>
  )
}

export default NavBar
