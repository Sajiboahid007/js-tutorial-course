const studentInfo = (id, department, name ,semesterFee) =>{
    return {
        id,
        department,
        name,
        semesterFee
    };
}
const department = [
    "CSE",
    "PHARMACY",
    "MATH",
    "CIVIL",
    "CHEMISTRY"
]
const naming = "something";
//bubble sort
const sortBySemesterFee = students =>{
    for (let i = 0; i < students.length - 1; i++) {
        for (let j = 0; j < students.length - 1 - i; j++) {
            if(students[j].semesterFee > students[j + 1].semesterFee){
                let temp = students[j];
                students[j] = students[j+1];
                students[j+1] = temp;
            }
        }
    }
    return students;
}

const Information = () =>{
    const numberOfStudent = prompt("Enter the student number");
    let studentInfoArray = [];
    for (let i = 0; i < numberOfStudent; i++) {
        const index = i % 5;
        const dept = department[index];
        const studentObj = studentInfo(5001 + i, dept, `${naming} ${i}`, Math.trunc(Math.random() * 10000));
        //studentInfoArray.push(studentObj);
        studentInfoArray = [...studentInfoArray, studentObj]
    }

    const cseStudents = studentInfoArray.filter(item => item.department === department[0]);
    const sortedInfo = sortBySemesterFee(cseStudents);
    console.log(sortedInfo);

    // for (let i = 0; i < studentInfoArray.length ; i++) {
    //     const {department: dept} = studentInfoArray[i];
    //     if( dept === department[0]){
    //        studentInfoArray.sort((a, b) =>parseFloat(a.semesterFee) - parseFloat(b.semesterFee));
    //         console.log(studentInfoArray[i]);
    //     }
    // }
    // for (let i = 0; i < studentInfoArray.length ; i++) {
    //     const {department: dept} = studentInfoArray[i];
    //     if( dept === department[0]){
    //         studentInfoArray.sort((a, b) =>parseFloat(a.semesterFee) - parseFloat(b.semesterFee));
    //         studentInfoArray.sort((a, b) =>parseFloat(a.id) - parseFloat(b.id));
    //         console.log(studentInfoArray);
    //     }
    // }
    console.log(studentInfoArray);
}
Information();