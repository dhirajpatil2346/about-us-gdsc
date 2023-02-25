import React from 'react'
// import bag1 from "../images/frame-1.jpg"
import "./style.css"
function Frame1() {
    // const styles = {
    //         backgroundImage: `url(${bag1})`,
    //         backgroundPosition: 'center',
    //         backgroundSize: 'cover',
    //         height:'200%'
    //         // width: '100%',
    //         // height: '200%'
    // };
  return (
    <div className='Frame1 my-image' >
        <h1 className='community h11' style={{"color" : "#FF0000"}}>
            About the community
        </h1>
        <div className='container'>
            <div className='container marg'>
                <p className='para'>If you love to code and develop, 
                    you are welcome to the world of Google Developer Technologies! 
                    GDSC provides you a platform to enhance your technical skills through our free hands-on workshops,
                    study-jams and project building activities.
                    We work together as a team to build inspiring solutions to solve real-world problems. 
                    Not only this, top performers also get a chance to win swags and goodies!
                    Join us and let`s begin this journey of learning and growing together as a community!
                </p>
            </div>
        </div>
    </div>
  )
}
export default Frame1