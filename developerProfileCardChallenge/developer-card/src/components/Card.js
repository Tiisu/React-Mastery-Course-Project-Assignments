import Avatar from "./Avatar";
import Intro from "./Intro";
import SkillList from "./SkillList";

function Card(){
  return (
    <div className='card'>
      <Avatar src='./mypicsdadfaf.png' alt="My profile pic" />
      <Intro myintro='Ghana is a nice country' />
      <SkillList />
      {/* <h1>Press Q</h1> */}
    </div>
  )
}

export default Card;