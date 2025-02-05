let students = {
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
};


function calculateAverage(students) {
    let result = {};
    
    
    for (let student in students) {
        let subjects = students[student];
        let total = Object.values(subjects).reduce((sum, score) => sum + score, 0);
        let average = total / Object.values(subjects).length;
        
       
        result[student] = { average: average };
    }
    
    return result;
}


let averages = calculateAverage(students);
console.log(averages);
