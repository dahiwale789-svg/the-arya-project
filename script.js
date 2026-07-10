
function transitionEffect(){

const t=document.getElementById("transition");

t.classList.add("show");

setTimeout(()=>{
t.classList.remove("show");
},400);

}
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const bgMusic = document.getElementById("bgMusic");
bgMusic.volume = 0.35;
const next1 = document.getElementById("next1");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const dialogue = document.getElementById("dialogue");
const page3 = document.getElementById("page3");
const yes2025 = document.getElementById("yes2025");
const no2025 = document.getElementById("no2025");
const dialogue2025 = document.getElementById("dialogue2025");
const page4 = document.getElementById("page4");

const continue4 = document.getElementById("continue4");
const typingText = document.getElementById("typingText");

const page5 = document.getElementById("page5");
const continue5 = document.getElementById("continue5");
const page5Text = document.getElementById("page5Text");

const page6 = document.getElementById("page6");
const yes6 = document.getElementById("yes6");
const no6 = document.getElementById("no6");
const dialogue6 = document.getElementById("dialogue6");

const page7 = document.getElementById("page7");
const next7 = document.getElementById("next7");

const page8 = document.getElementById("page8");
const next8 = document.getElementById("next8");

const page9 = document.getElementById("page9");
const next9 = document.getElementById("next9");

const page10 = document.getElementById("page10");
const show10 = document.getElementById("show10");

const page11 = document.getElementById("page11");
const next11 = document.getElementById("next11");

const page12 = document.getElementById("page12");
const page13 = document.getElementById("page13");

const next12 = document.getElementById("next12");
const next13 = document.getElementById("next13");

const page14 = document.getElementById("page14");
const next14 = document.getElementById("next14");

const page15 = document.getElementById("page15");
const next15 = document.getElementById("next15");

const page16 = document.getElementById("page16");
const next16 = document.getElementById("next16");

const page17 = document.getElementById("page17");
const next17 = document.getElementById("next17");

const page18 = document.getElementById("page18");

const loadingText = document.getElementById("loadingText");
const loadingFill = document.getElementById("loadingFill");

const page19 = document.getElementById("page19");

const continue18 = document.getElementById("continue18");

const serveBar=document.getElementById("serveBar");
const smashBar=document.getElementById("smashBar");
const defenseBar=document.getElementById("defenseBar");
const energyBar=document.getElementById("energyBar");
const coolBar=document.getElementById("coolBar");

const replayBtn = document.getElementById("replayBtn");


let noClickCount = 0;

next1.addEventListener("click", () => {
  transitionEffect();
  bgMusic.play();
  showPage(2);
  updateProgress(2);
});

noBtn.addEventListener("click", () => {
noClickCount++;
  const x = Math.floor(Math.random() * 220) - 110;
  const y = Math.floor(Math.random() * 220) - 110;

  const pageRect = page2.getBoundingClientRect();

const maxLeft = pageRect.width - noBtn.offsetWidth - 20;

// Top se 180px niche hi move hoga
const minTop = 180;
const maxTop = pageRect.height - noBtn.offsetHeight - 30;

const randomLeft = Math.random() * maxLeft;
const randomTop = minTop + Math.random() * (maxTop - minTop);

noBtn.style.left = randomLeft + "px";
noBtn.style.top = randomTop + "px";

  if(noClickCount==1){
dialogue.innerHTML="🤔 Umm... No Kaun Kart Ahe?";
}
else if(noClickCount==2){
dialogue.innerHTML="😆 Double No Click Keli!";
}
else{
dialogue.innerHTML=" Yes La Click Kar N Pagal 😂!";
yesBtn.style.display="inline-block";
}


});

yesBtn.addEventListener("click", () => {

transitionEffect();

  showPage(3);
updateProgress(3);
});
no2025.addEventListener("click", () => {

  dialogue2025.innerHTML = "Umm Nusti No - No Katre😅.";

});

yes2025.addEventListener("click",()=>{
transitionEffect();
showPage(4);
updateProgress(4);
startTyping();

});

continue4.addEventListener("click", () => {
transitionEffect();
showPage(5);
updateProgress(5);
});

continue5.addEventListener("click", () => {
transitionEffect();
showPage(6);
updateProgress(6);
});

function startTyping(){

const message = `Do you remember this? 🤔

Last year I wished you Happy Birthday.

Instead of saying "Thank You"...

You asked...

"Photo khutun ale?" 😂

That reply still makes laugh. 😄

Karan "Happy Birthday" mhatlyavar
"Thank You" mantat... 😄`;

typingText.innerHTML="";

let i=0;

const timer=setInterval(()=>{

typingText.innerHTML+=message.charAt(i);

i++;

if(i>=message.length){

clearInterval(timer);

}

},40);

}
let noClick6 = 0;

no6.addEventListener("click", () => {

noClick6++;

yes6.style.display = "inline-block";

const x = Math.floor(Math.random() * 220) - 110;
const y = Math.floor(Math.random() * 220) - 110;


if(noClick6==1){
dialogue6.innerHTML="Pagal Ahe ! Yacha Answer Obviously Yes Ach Rahil 😃 !";
}
else if(noClick6==2){
dialogue6.innerHTML="😂 No Noko Karu...";
}
else{
dialogue6.innerHTML="Ummmmmmmmmm🥲.";
}

});
yes6.addEventListener("click",()=>{

transitionEffect();

showPage(7);

updateProgress(7);

startVolleyballStats();

});
next7.addEventListener("click", () => {
    transitionEffect();
    showPage(8);
    updateProgress(8);
});


next8.addEventListener("click", () => {
transitionEffect();
showPage(9);
updateProgress(9);
});
next9.addEventListener("click", () => {
transitionEffect();
showPage(10);
updateProgress(10);
});
show10.addEventListener("click", () => {
transitionEffect();
showPage(11);
updateProgress(11);
});

next11.addEventListener("click", () => {
transitionEffect();
showPage(12);
updateProgress(12);
});

next12.addEventListener("click", () => {
transitionEffect();
showPage(13);
updateProgress(13);
});

next13.addEventListener("click", () => {
transitionEffect();
showPage(14);
updateProgress(14);
});

next14.addEventListener("click", () => {
showPage(15);
updateProgress(15);
});

next15.addEventListener("click", () => {
transitionEffect();
page15.classList.remove("active");
page16.classList.add("active");
updateProgress(16);
});

next16.addEventListener("click", () => {

transitionEffect();

showPage(17);

updateProgress(17);

});

next17.addEventListener("click", () => {

transitionEffect();

showPage(18);

updateProgress(18);

startLoading();

});

function startVolleyballStats(){

const bars=[
serveBar,
smashBar,
defenseBar,
energyBar,
coolBar
];

bars.forEach(bar=>{
bar.value=0;
});

let value=0;

const timer=setInterval(()=>{

value+=5;

bars.forEach(bar=>{
bar.value=value;
});

if(value>=100){
clearInterval(timer);
}

},100);

}

function startLoading(){

const values=[10,40,80,100];

let i=0;

const timer=setInterval(()=>{

loadingText.innerHTML=values[i]+"%";

loadingFill.style.width=values[i]+"%";

i++;

if(i>=values.length){

clearInterval(timer);

setTimeout(()=>{

showPage(19);
updateProgress(19);

},800);

}

},900);

}
continue18.addEventListener("click", () => {

transitionEffect();

showPage(20);


launchConfetti();

});
replayBtn.addEventListener("click", () => {
showPage(1);
updateProgress(1);
});
function updateProgress(page){
    progressText.innerHTML = `Page ${page} / 20`;
}
function launchConfetti(){

const colors=["#FFD700","#38BDF8","#FFFFFF","#F472B6","#22C55E"];

for(let i=0;i<180;i++){

const c=document.createElement("div");

c.className="confetti";

c.style.left=Math.random()*100+"vw";

c.style.background=colors[Math.floor(Math.random()*colors.length)];

c.style.animationDuration=(Math.random()*3+3)+"s";

c.style.width=(Math.random()*8+6)+"px";

c.style.height=c.style.width;

document.body.appendChild(c);

setTimeout(()=>{
c.remove();
},5000);

}

}
const pages = document.querySelectorAll(".page");
const progressText = document.getElementById("progressText");

function showPage(pageNumber){

pages.forEach(page=>{
page.classList.remove("active");
});

pages[pageNumber-1].classList.add("active");

progressText.innerHTML=`Page ${pageNumber} / 19`;

transitionEffect();

}