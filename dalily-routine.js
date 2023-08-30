const day=prompt(`what is the day`).toLowerCase();

switch (day) {
    case "sunday":
        console.log(`week first class today`);
        break;
    case "monday":
        console.log(`u have class after lunch time`);
        break;
    case "tuesday":
        console.log(`no class after lunch time`);
        break;
    case "wednesday":
        console.log(`class start after 10pm`);
        break;
    case "thursday":
        console.log(`half class today`);
        break;
    case "friday":
    case "saturday":
        console.log(`enjoy your weekend day`);
        break;
    default:
        console.log(`Enter the day`);


}