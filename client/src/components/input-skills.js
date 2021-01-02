import React from 'react'

const SkillsInput = props => {
	const [skill, setSkill] = React.useState(props.skill);
	const removeSkill = indexToRemove => {
		setSkill([...skill.filter((_, index) => index !== indexToRemove)]);
	};
	const addSkill = event => {
		if (event.target.value !== "") {
			setSkill([...skill, event.target.value]);
			props.selectedSkill([...skill, event.target.value]);
            event.target.value = "";
            event.preventDefault();
		}
	};
	return (
		<div className="skill-input">
			<ul id="skill">
				{skill.map((skills, index) => (
                    
					<li key={index} className="skill">
						<span className='skill-title'>{skills}</span>
						<span className='skill-close-icon'
							onClick={() => removeSkill(index)}
						>
							x
						</span>
					</li>
				))}
			</ul>
			<input
				type="text"
				onKeyDown={event => event.key === "Enter" ? addSkill(event) : null}
				placeholder="Enter Skill and Press Enter"
			/>
		</div>
	);
};

const InputSkill = () => {
	const selectedSkill = skill => {
		console.log(skill);
	};
	return (
		<div className="skill">
			<SkillsInput selectedSkill={selectedSkill}  skill={['Lawn Care', 'Wood Working']}/>
		</div>
	);
};

export default InputSkill;
