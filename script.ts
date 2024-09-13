interface Skills {
    addMoreSkills: string;
}

const skillsContainer = document.getElementById('skillsContainer') as HTMLDivElement;
const addSkillsBtn = document.getElementById('addSkillsBtn') as HTMLButtonElement;
let isSkillsFieldVisible = false;

// Toggle Skills Input Field
const toggleSkillsField = () => {
    if (isSkillsFieldVisible) {
        const skillsDiv = document.querySelector('.extraSkillDiv') as HTMLDivElement;
        if (skillsDiv) skillsContainer.removeChild(skillsDiv);
    } else {
        const skillsDiv = document.createElement('div');
        skillsDiv.classList.add('extraSkillDiv');
        skillsDiv.innerHTML = `
            <label for="addMoreSkills">Add More Skills:</label>
            <input type="text" name="addMoreSkills" id="addMoreSkills">
        `;
        skillsContainer.appendChild(skillsDiv);
    }
    isSkillsFieldVisible = !isSkillsFieldVisible;
};


addSkillsBtn.addEventListener('click', toggleSkillsField);
