var skillsContainer = document.getElementById('skillsContainer');
var addSkillsBtn = document.getElementById('addSkillsBtn');
var isSkillsFieldVisible = false;
// Toggle Skills Input Field
var toggleSkillsField = function () {
    if (isSkillsFieldVisible) {
        var skillsDiv = document.querySelector('.extraSkillDiv');
        if (skillsDiv)
            skillsContainer.removeChild(skillsDiv);
    }
    else {
        var skillsDiv = document.createElement('div');
        skillsDiv.classList.add('extraSkillDiv');
        skillsDiv.innerHTML = "\n            <label for=\"addMoreSkills\">Add More Skills:</label>\n            <input type=\"text\" name=\"addMoreSkills\" id=\"addMoreSkills\">\n        ";
        skillsContainer.appendChild(skillsDiv);
    }
    isSkillsFieldVisible = !isSkillsFieldVisible;
};
addSkillsBtn.addEventListener('click', toggleSkillsField);
