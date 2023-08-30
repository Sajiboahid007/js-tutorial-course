 let studentList = [];
// class information {
//     constructor(name, id, age) {
//         this.name = name;
//         this.id=id;
//         this.age= age;
//     }
// }

for(let i = 0; i < 50; i ++){
    //let studentInformation = new information(`sajib${i}`,`csse-${i}`, 10 + i );
    let studentInformation = {
        name :`sajib${i}`,
        id: `csse-${i}`,
        age: 10 + i
    };

    studentList.push(studentInformation);
}
studentList= studentList.filter(item => item.age <= 50);

// some cooments here

// let studentInformation = {
//     name :"sajib",
//     id: "csse4676567",
//     age: 25
// };



console.log(studentList);

 fetch('https://fakestoreapi.com/products', post)
     .then(res=>res.json())
     .then(json=>console.log(json))