import './App.css';
import ahmed from './ahmed.jpg';
// import brain from 'brain.jpg'
import Video from "./video.mp4";
import './Style.css';
  

function App() {
  return (
    <div className="App">

    <div className="first" style={{border:'solid 1px black', maxWidth:'100vw'}}>
       <div>      
         <h1 className="title red">Ahmed Chaouach</h1>
         <p>Hello, I’m Ahmed Chaouach, a junior Full Stack Javascript, gifted with information systems engineering, you have a small Project! You want to present it on the internet. You want to develop your business by presenting your services on the web, we are here to help you do not hesitate to contact us.</p>
        </div>
        <img src= {ahmed} className="my-profile" alt='mer'/>
        <img src= 'brain.jpg' className="my-profile" alt='brain'/>
    </div>
  <div className="second">
    <p>Hello, I’m Ahmed Chaouach, a junior Full Stack Javascript, gifted with information systems engineering, you have a small Project! You want to present it on the internet. You want to develop your business by presenting your services on the web, we are here to help you do not hesitate to contact us.</p>
    <video  controls autostart autoPlay src={Video} type="video/mp4" >
 <source src="myVideo.mp4" type="video/mp4" />
</video>
</div>





    </div>
  );
}

export default App;
