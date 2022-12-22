let emnumber;
let username;
let inshuttle;
let outshuttle;
let shiftdatein;
let shifttimein;
let shiftdateout;
let shifttimeout;


document.getElementById("myButton").onclick = function(){
    emnumber = document.getElementById("idNumber").value;
    username = document.getElementById("name").value;
    inshuttle = document.getElementById("shuttlein").value;
    outshuttle = document.getElementById("shuttleout").value;
    shiftdatein = document.getElementById("indate").value;
    shifttimein = document.getElementById("intime").value;
    shiftdateout = document.getElementById("outdate").value;
    shifttimeout = document.getElementById("outtime").value; 

   console.log(emnumber);
   console.log(username);
   console.log(inshuttle);
   console.log(outshuttle);
   console.log(shiftdatein);
    
    document.getElementById("Eid").innerHTML = emnumber;
    document.getElementById("Ename").innerHTML = username;
    document.getElementById("inroute").innerHTML = inshuttle;
    document.getElementById("outroute").innerHTML = outshuttle;
    document.getElementById("datein").innerHTML = shiftdatein;
    document.getElementById("timein").innerHTML = shifttimein;
    document.getElementById("dateout").innerHTML = shiftdateout;
    document.getElementById("timeout").innerHTML = shifttimeout;
}