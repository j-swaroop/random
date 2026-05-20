class Students {
  constructor(students) {
    this.students = students;
  }

  getNumberOfStudents() {
    return this.students.length;
  }

  getHighestScoreOfStudents() {
    let avgs = this.students.map((student) => {
      return {
        score: student.getAvg(),
        studentName: student.firstName,
      };
    });
    console.log(avgs);

    let highestScorer = avgs[0]

    for (let i of avgs){
        if (i.score > highestScorer?.score){
            highestScorer = i
        }
    }
    console.log(highestScorer)
    return highestScorer
  }
}

class Student {
  constructor(firstName, lastName, grade, scores) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
    this.scores = scores;
  }

  fullName() {
    return `${this.firstName} full name is ${this.firstName} ${this.lastName}`;
  }

  getGrade() {
    return `${this.firstName} Studying ${this.grade}th Grade.`;
  }

  addScores(scores) {
    this.scores = [...this.scores, ...scores];
    return "Success";
  }

  getScores() {
    return this.scores;
  }

  getAvg() {
    let sum = this.scores.reduce((acc, current) => acc + current);
    return sum / this.scores.length;
  }
}

let harry = new Student("Harry", "Potter", 5, [90, 95]);
let ginny = new Student("Ginny", "Weasley", 4, [80, 85]);
let ron = new Student("Rondald", "Weasley", 5, [70, 80]);
let hermoine = new Student("Hermoine", "Granger", 5, [92, 96]);

// console.log(harry)
// console.log(ron)
// console.log(hermoine)
// console.log(ginny)

// console.log(hermoine.fullName())

// console.log(ron.getGrade())

// console.log(ron.addScores([70, 76, 80]));

// console.log(ron.getScores());

// console.log(ron.getAvg());

let students = new Students([harry, ron, hermoine, ginny]);
// console.log(students)

// console.log(students.getNumberOfStudents())
console.log(students.getHighestScoreOfStudents());
