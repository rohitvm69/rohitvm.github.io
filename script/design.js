function borderSelected(elem) {
    elem.style.border="solid rgb(90, 230, 199)";
    elem.style.borderTop = "0";
    elem.style.borderBottom = "0";
    elem.style.borderRight = "0";
    elem.style.borderWidth = "thick";
}
function borderNormal(){
    liArr = document.getElementsByTagName("li");
    for(var i=0; i<liArr.length; i++){
        if(((liArr[i].parentNode).parentNode).className == "my-journey-content"){
            liArr[i].style.border="solid rgb(160, 172, 202)";
            liArr[i].style.borderTop = "0";
            liArr[i].style.borderBottom = "0";
            liArr[i].style.borderRight = "0";
        }
    }
}


function clickCipher() {
    
    borderNormal();
    
    elem = document.getElementById("cipher-li");
    borderSelected(elem);
    
    // elem = document.getElementById("journey-data");
    // ul = document.createElement("ul");
    // elem.append(ul);
    // li = document.createElement("li");
    // li.appendChild(document.createTextNode("Robocon 2022: AIR 21"));
    // ul.append(li);
    
    elem = document.getElementById("designation");
    elem.innerHTML = "Programming Lead";
    
    elem = document.getElementById("time-period");
    elem.innerHTML = "2021 - 2024";

    elem = document.getElementById("post-info");
    var data = "<li class='c1'> DD Robocon 2022 : AIR 21 </li>" +  
                "<li class='c1'> DD Robocon 2023 </li>" + 
                "<li class='c2'> Stage 1 : AIR 1 </li>" + 
                "<li class='c2'> Stage 2 : AIR 1 </li>" + 
                "<li class='c2'> Stage 3 : AIR 1 </li>" ;

    elem.innerHTML = data;
}

function clickBtech() {

    borderNormal();

    elem = document.getElementById("btech-li");
    borderSelected(elem);

    elem = document.getElementById("designation");
    elem.innerHTML = "Computer Engineering";
    
    elem = document.getElementById("time-period");
    elem.innerHTML = "2020 - 2024";

    elem = document.getElementById("post-info");
    var data = "<li class='c1'> Projects </li>" + 
                "<li class='c2'> Autonomous Driving Vehicle </li>" + 
                "<li class='c2'> Portfolio website </li>" + 
                "<li class='c2'> Spotify clone </li>" ;

    elem.innerHTML = data;
}

function clickhsc() {

    borderNormal();

    elem = document.getElementById("hsc-li");
    borderSelected(elem);

    elem = document.getElementById("designation");
    elem.innerHTML = "Student PCM";
    
    elem = document.getElementById("time-period");
    elem.innerHTML = "2018 - 2020";

    elem = document.getElementById("post-info");
    var data = "<li class='c1'> Army Public School Chandimandir </li>" + 
                "<li class='c1'> Percentage: 83 </li>" ;

    elem.innerHTML = data;
}

function clickssc() {

    borderNormal();

    elem = document.getElementById("ssc-li");
    borderSelected(elem);

    elem = document.getElementById("designation");
    elem.innerHTML = "Student";
    
    elem = document.getElementById("time-period");
    elem.innerHTML = "2016 - 2018";

    elem = document.getElementById("post-info");
    var data = "<li class='c1'> Army Public School Chandimandir </li>" +
                "<li class='c1'> Percentage: 81.6 </li>" ;

    elem.innerHTML = data;
}