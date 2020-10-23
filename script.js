
// Get current time and format
function getTime() {
    let date = new Date(),
        min = date.getMinutes(),
        sec = date.getSeconds(),
        hour = date.getHours();

    return "" + 
        (hour < 10 ? ("0" + hour) : hour) + ":" + 
        (min < 10 ? ("0" + min) : min) + ":" + 
        (sec < 10 ? ("0" + sec) : sec);
}
function getDate(){
    var d = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[d.getDay()] + ' '+ d.getDate() + ' ' + months[d.getMonth()];
}

window.onload = () => {
    // Set up the clock
    document.getElementById("clock").innerHTML = getTime();
    // Set clock interval to tick clock
    setInterval( () => {
        document.getElementById("clock").innerHTML = getTime();
    },100);

    var redir = function(){
        var x = document.getElementsByClassName("google_search")[0].value;
        var google = "https://www.google.com/search?q=";
        window.location = google+x;
    
    }
    
    const node = document.getElementsByClassName("google_search")[0];
    node.addEventListener("keydown", function(event) {
        console.log("LOGGED;");
        if (event.key === "Enter") {
            event.preventDefault();
            redir();
        }
    });
    document.getElementById("date").innerHTML = getDate();

    var addItemToList = function(task){
	//localStorage.setItem("todo", "Email Templates, Python3 Work");
        var ulElem = document.getElementById("toDolist");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(task));
        li.setAttribute("id", "element4"); // added line
        ulElem.appendChild(li);
    }

    var PageLoad = function(){
        if(localStorage.getItem("todo") != null){
            var listItems = localStorage.getItem("todo").split(',');
            for (const element of listItems) {
              addItemToList(element);
            }
        }
        else{
            addItemToList("NOTHING LEFT");
        }
    }

    PageLoad();
}



