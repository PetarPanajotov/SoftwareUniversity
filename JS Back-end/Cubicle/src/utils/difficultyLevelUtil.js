exports.generateDifficultyLevel = (currentDifficultyLevel) => {
    let difficultyLevel = [
        { key: "1", value: 'Very Easy', selected: false },
        { key: "2", value: 'Easy', selected: false },
        { key: "3", value: "Medium (Standard 3x3)", selected: false },
        { key: "4", value: "Intermediate", selected: false },
        { key: "5", value: "Expert", selected: false },
        { key: "6", value: "Hardcore", selected: false },
    ]
    difficultyLevel =  difficultyLevel.map( (x) => x.key == currentDifficultyLevel? { ...x, selected: true}: x);
    return difficultyLevel;
};
