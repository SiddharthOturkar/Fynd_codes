const screens = document.querySelectorAll(".screen");

const startButton = document.getElementById("start-btn");

startButton.addEventListener("click", () => screens[0].classList.add("up"));


function cngbg()
{
    document.body.style.backgroundImage = "url('images/clg1.jpg')";
   
}

function cngbg1()
{
    // document.body.style.backgroundImage = "url('images/ground.jpg')";
    window.location.href = 'index1.html';
}

function cngbg2()
{
    // document.body.style.backgroundImage = "url('images/ground.jpg')";
    window.location.href = 'index2.html';
}

function cngbg3()
{
    // document.body.style.backgroundImage = "url('images/ground.jpg')";
    window.location.href = 'index3.html';
}

function cngbg4()
{
    // document.body.style.backgroundImage = "url('images/ground.jpg')";
    window.location.href = 'index4.html';
}


// var ts = document.querySelector('ts');
// var lname = document.getElementById("lnameInput").value;
// // const lname = document.getElementById('lnameInput').value;
// var phone = document.getElementById("phoneInput").value;
// var name = document.getElementById('emailInput').value;

// sessionStorage.setItem("ts",ts);
// sessionStorage.setItem("lname",lname);
// sessionStorage.setItem("phone",phone);
// sessionStorage.setItem("name",name);