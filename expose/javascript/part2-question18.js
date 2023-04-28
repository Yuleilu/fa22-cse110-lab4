
function prinTime(){
    let d =new Date();
    let time =d.toLocaleTimeString();
    console.log(time);

}
setInterval(prinTime,1000);