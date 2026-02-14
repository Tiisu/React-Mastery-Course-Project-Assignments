function Skill({nameOfSkill, emoji}){
    return (
        <div className="skill">
            <h3>{nameOfSkill} <span>{emoji}</span></h3>
        </div>
    )
}
export default Skill;