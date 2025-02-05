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

// Function to calculate average
function calculateAverage(students) {
    let result = {};
    
    // Iterate over each student
    for (let student in students) {
        let subjects = students[student];
        let total = Object.values(subjects).reduce((sum, score) => sum + score, 0);
        let average = total / Object.values(subjects).length;
        
        // Store the average in the result object
        result[student] = { average: average };
    }
    
    return result;
}

// Calculate and display result
let averages = calculateAverage(students);
console.log(averages);
