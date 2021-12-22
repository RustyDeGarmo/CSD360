/*
Rusty DeGarmo
Professor Sampson
Interactive Dev with JavaScript
11 December 2021
*/


document.getElementById("imageOne").addEventListener("mouseover", mouseOverOne);
document.getElementById("imageTwo").addEventListener("mouseover", mouseOverTwo);
document.getElementById("imageThree").addEventListener("mouseover", mouseOverThree);
document.getElementById("imageFour").addEventListener("mouseover", mouseOverFour);
document.getElementById("imageFive").addEventListener("mouseover", mouseOverFive);
document.getElementById("imageSix").addEventListener("mouseover", mouseOverSix);
document.getElementById("imageSeven").addEventListener("mouseover", mouseOverSeven);
document.getElementById("imageEight").addEventListener("mouseover", mouseOverEight);


function mouseOverOne(){
    let description = "<br /><hr /><p>Escape from Tarkov is a hardcore and realistic online" +
        " first-person action RPG/Simulator with MMO features and a story-driven" +
        "walkthrough.</p>" +
        "<p>With each passing day the situation in the Norvinsk region grows more" + 
        " and more complicated. Incessant warfare in Torkov has sparked massive " +
        "panic; the local population has fled the city, but those who stayed are " + 
        " looking to improve their fortunes at the expense of others. Having accepted " +
        "the new reality, savage Tarkov locals - 'Scavs' flocked into well-armed gangs" + 
        " and started the redivision of the city. Nowadays, Tarkov is seperated by " +
        "unseen borders, controlled by different groups. Gain-greedy gunmen would " +
        "go to any length to have their way, including the murder of civilians and " +
        "direct confrontation with the two private military companies.</p>";

    let image = document.getElementById("imageOne");
    image.src = "images/EFT.jpg";
    let text = document.getElementById("description");
    text.innerHTML = description;
        
}

function mouseOverTwo(){
    let description = "<br /><hr /><p>Hunt: Showdown is a competitive first-person PvP bounty " +
    "hunting game with heavy PvE elements, from the makers of Crysis. Set in the " +
    "darkest corners of the world, it packs the thrill of survival games into " +
    "match-based format</p>";
        ;

    let image = document.getElementById("imageTwo");
    image.src = "images/Hunt.jpg";
    let text = document.getElementById("description");
    text.innerHTML = description;
        
}

function mouseOverThree(){
    let description = "<br /><hr /><p>Fortnite is a Free-to-Play Battle Roale game " +
    "and so much more. Hang out peacefully with friends while watching a concert " + 
    "or movie. Build and create your own island, or fight to be the last person standing</p>"+
    "<p>My kids and I enjoy taking turns playing. My son is better than I am now. That's " +
    "a real kick in the shorts because I've been playing FPS games for 25 years. Getting" +
    "old sucks.</p>";
    

    let image = document.getElementById("imageThree");
    image.src = "images/Fortnite.jpg";
    let text = document.getElementById("description");
    text.innerHTML = description;
        
}

function mouseOverFour(){
    let description = "<br /><hr /><p>Reading a good book is one of my favorite things to do. "+
    "Lately, I've been reading more for education than entertainment, but I'll "+
    "always enjoy a good high fantasy or science fiction book as well. At the time"+
    " of writing, I'm currently working my way through The Wheel of Time series,"+
    " so I was pretty excited when I saw that Amazon was creating a serial adaptation.</p>";


    let image = document.getElementById("imageFour");
    image.src = "images/Library.jpg";
    let text = document.getElementById("description");
    text.innerHTML = description;
        
}

function mouseOverFive(){
    let description = "<br /><hr /><p>In recent years I haven't been able to get out into "+
    "nature much because I'm working, going to school online, and trying to "+
    "manage a family. I still like to go for a walk around the neighborhood "+
    "when I can and I plan to get back out to the trails at some point.</p>";


    let image = document.getElementById("imageFive");
    image.src = "images/hiking.jpg";
    let text = document.getElementById("description");
    text.innerHTML = description;
        
}

function mouseOverSix(){
    let description = "<br /><hr /><p>Looking for a way to alleviate by lower back pain "+
    "brought me to yoga and meditation. It helps quite a bit and I have found that I feel "+
    "better and more at peace overall as well has having less frequent back pain. "+
    "I used to lift weights, but after starting yoga I doubt I will ever feel the "+
    "need to again. Yoga practice builds plenty of functional strength.</p>";


    let image = document.getElementById("imageSix");
    image.src = "images/yoga.jpg";
    let text = document.getElementById("description");
    text.innerHTML = description;
        
}

function mouseOverSeven(){
    let description = "<br /><hr /><p>Although I don't get to as much as I used to, one of my "+
    "favorite ways to spend time during the summer was to hang out at the lake. "+
    "Swimming during the day and relaxing around a fire in the evening.</p>";


    let image = document.getElementById("imageSeven");
    image.src = "images/lake.jpg";
    let text = document.getElementById("description");
    text.innerHTML = description;
        
}

function mouseOverEight(){
    let description = "<br /><hr /><p>I haven't been able to travel as much as I would like. "+
    "My wife is a teacher so she has summers off and I haven't been able to get "+
    "vacation time during the summer very often. I definitely want to spend some "+
    "time traveling when the oportunity presents. I want to see some more of the "+
    "US and the rest of the world.</p>";


    let image = document.getElementById("imageEight");
    image.src = "images/travel.jpg";
    let text = document.getElementById("description");
    text.innerHTML = description;
        
}

function displayImageOnClick(imageFile){
    let imageURL = 'images/' + imageFile;
    document.getElementById("bigImage").src = (imageURL);
}