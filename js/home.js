const progressBarGroupDOM = document.querySelector('.progress-bar-group');
const optionsDOM = progressBarGroupDOM.querySelectorAll('.option');

for (const optionDOM of optionsDOM) {
    optionDOM.addEventListener('click', () => {
        const groupIndex = optionDOM.dataset.group;
        progressBarGroupDOM.dataset.group = groupIndex;
    })
}