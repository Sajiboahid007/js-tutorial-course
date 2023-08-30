const day =prompt(`input your day`);

switch (day)
{
    case "monday":{
        console.log("plan course structure");
        console.log("Go to codding meetup");}
        break;
    case "tuesday":
        console.log(`prepare theory videos`);
        break;
    case "wednesday":
    case "thursday":
        console.log(`write code example`);
        break;
    case "friday":
        console.log(`Record video`);
        break;
    case "saturday":
    case "sunday":
        console.log(`enjoy the weekend`);
        break;
    default:
        console.log(`not a valid day`);

}

console.log("------------****-------------")

if(day==="monday")
{
    console.log("you need to got varsity");
}
else if(day==="tuesday")
{
    console.log("carry bag and go for varsity");
}
else if(day==="wednesday")
{
    console.log("go home hurry and ride a bike")
}
else if(day==="thursday")
{
    console.log("it your half varsity")
}
else if(day ==="friday" || day === "saturday")
{
    console.log("enjoy your weekend")
}
else
    console.log("goo varsity class star")
