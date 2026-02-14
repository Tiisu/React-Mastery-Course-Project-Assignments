import Skill from "./Skill";


function SkillList(){
    return (
        <div className="skill-list">
            <Skill nameOfSkill='react' emoji='💪' />
            <Skill nameOfSkill='express' emoji='👶' />
            <Skill nameOfSkill='express' emoji='🚀' />
        </div>
    )
}
export default SkillList;