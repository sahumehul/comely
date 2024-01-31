
import './App.css';
import discordlogo from "./discord.jpg"
import discordcouple from "./discordcouple.webp";
import insta from "./insta.jpg"
import twitter from "./twitter.jpg";
import discordbottom from "./discordbottom.png"


function App() {
  return (
    <div className="App">
    <div className='left'></div>
    <div className='middle'>
    <div className='circle7f2b69'><h3 style={{position:"absolute",top:"56%",left:"42%"}}>Yunometa</h3></div>
      <div className='circleblue'><div className='innerblue'></div></div>
      <div className='halfcirlce'>
        <span className='circle' style={{padding:"5px"}}></span>
        <span className='circle' style={{padding:"5px"}}></span>
        <span className='circle' style={{padding:"10px"}}></span>
        <span className='circle' style={{padding:"15px"}}></span>
        <span className='circle' style={{padding:"20px"}}></span>
        <span className='circle' style={{padding:"25px"}}></span>
        <span className='circle' style={{padding:"30px"}}></span>
        <span className='circle' style={{padding:"40px"}}></span>
        <span className='circle' style={{padding:"45px"}}></span>
        <span className='circle' style={{padding:"50px"}}></span>
        <span className='circle' style={{padding:"55px"}}></span>
        <span className='circle' style={{padding:"60px"}}></span>
        <span className='circle' style={{padding:"65px"}}></span>
        <span className='circle' style={{padding:"70px"}}></span>
        <span className='circle' style={{padding:"75px"}}></span>
        <span className='circle' style={{padding:"80px"}}></span>
        <span className='circle' style={{padding:"85px"}}></span>
        <span className='circle' style={{padding:"90px"}}></span>
        <span className='circle' style={{padding:"95px"}}></span>
        <span className='circle' style={{padding:"100px"}}></span>
        <span className='circle' style={{padding:"105px"}}></span>
        <span className='circle' style={{padding:"110px"}}></span>
        <span className='circle' style={{padding:"115px"}}></span>
        <span className='circle' style={{padding:"120px"}}></span>
        <span className='circle' style={{padding:"125px"}}></span>
        <span className='circle' style={{padding:"130px"}}></span>
        <span className='circle' style={{padding:"135px"}}></span>
        <span className='circle' style={{padding:"140px"}}></span>
        <span className='circle' style={{padding:"145px"}}></span>
        <span className='circle' style={{padding:"150px"}}></span>
        <span className='circle' style={{padding:"155px"}}></span>
        <span className='circle' style={{padding:"160px"}}></span>
        <span className='circle' style={{padding:"165px"}}></span>
      </div>
      <h2 style={{position:"absolute",top:"29%",left:"26%",fontWeight:"bold",letterSpacing:"2px",color:"#f9feff"}}>JOIN US ON</h2>
      <div className='discord'><h1 className='title'>DISCORD</h1></div>
      <img className='discordlogo' src={discordlogo} alt='discordimg'></img>
      <img className='discordcouple' src={discordcouple} alt='discordcouple'></img>
      <div className='icons'>
        <div className='discordicon'><img src={discordbottom} alt='discordbottom' style={{marginLeft:"10px"}}></img></div> |
        <div className='twitter'><img src={twitter} alt='twitter' style={{marginLeft:"10px"}}></img></div> |
        <div className='insta'><img src={insta} alt='insta' style={{marginLeft:"10px"}}></img></div>
      </div>
    </div>
    <div className='right'></div>
    </div>
  );
}

export default App;
