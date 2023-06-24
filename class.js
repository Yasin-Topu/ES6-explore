class student{
    constructor(sId,sName){
    this.id = sId;
    this.name = sName;
    this.school = 'safiuddin'
    }

}

const student1 = new student(12,'Topu');
const student2 = new student(13,'Sayma');
console.log(student1.school,student2);