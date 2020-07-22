//Question 3
//make a webpage that will ask the name of the user. then will display a welcome message on the webpage .also the webpage should also have a clock.
        
//Using the toggle method of classlist add a dark mode feature to the website. 

let attr = document.getElementById('darkbg');
let name = prompt("Enter name.");
const greet = document.getElementById('wel')
greet.innerHTML = `Welcome ${name} to Day 6 Assignment`;
const dmode = document.getElementById('btn');

/*dmode.onclick = function dark(){
    
        document.body.style.backgroundColor = "black";
        document.body.style.color="white
}*/
    
attr.onclick = function dark(){
        if(btn.innerText == "Dark Mode"){
                btn.innerText = "Light Mode"
                attr.classList.remove("white");
                attr.classList.add("black");
        }
        else{
                btn.innerText = "Dark Mode"
                attr.classList.remove("black");
                attr.classList.add("white");
        }
}
const ctime = document.getElementById('time');
function clock(){
 let today = new Date();
 let time = today.toLocaleTimeString(); 
 ctime.innerText = time;      
}
setInterval(clock,1000);