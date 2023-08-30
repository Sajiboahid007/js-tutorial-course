let storeValue= [];

function push() {
    console.log("inside the function");
    let element =prompt(`push your elemets`);
    storeValue.push(element);
}
push();
storeValue.pop();

push();
push();
push();
push();
storeValue.pop();
for(let i=0;i<storeValue.length;i++)
{
    console.log(`The Elements are ${storeValue}`);
}
