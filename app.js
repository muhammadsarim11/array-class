const arr  = ["sarfaraz", "babar","kamran akmal","mohammad amir"];
let userinput = prompt("enter player's name");

if(userinput.toLowerCase()=="sarfaraz"){
    document.write("weldone captain!")
}
else if (userinput == "babar"){
    document.write("king karlega")
}
else if(userinput =="karmran akmal"){
    document.write("wicket keeper batsman")
}
else if(userinput == "mohammad amir"){
    document.write("great bowler")


}
else{
    document.write("enter correct name")
}