function getGradeAndComment(score) {
    if (score >= 90) {
        return { grade: "A", comment: "Outstanding! Keep it up!" };
    } else if (score >= 80) {
        return { grade: "B", comment: "Very good – room to reach A" };
    } else if (score >= 70) {
        return { grade: "C", comment: "Good effort – aim higher next time" };
    } else if (score >= 60) {
        return { grade: "D", comment: "Passing – but needs improvement" };
    } else {
        return { grade: "F", comment: "You need to study more" };
    }
}

// Test with at least 6 different scores
console.log("Score: -5", getGradeAndComment(-5));
console.log("Score: 59", getGradeAndComment(59));
console.log("Score: 60", getGradeAndComment(60));
console.log("Score: 89.9", getGradeAndComment(89.9));
console.log("Score: 90", getGradeAndComment(90));
console.log("Score: 100", getGradeAndComment(100));
