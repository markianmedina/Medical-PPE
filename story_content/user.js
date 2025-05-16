window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var gloves = document.querySelector("[data-acc-text='gloves']");
var text = document.querySelector("[data-acc-text='glovesText']");

let timeline = gsap.timeline();

function addAnimation_Move(target){
    timeline.to(target, {x:40, duration:0.3, ease:"sine.out"});
}

//Gloves
gloves.addEventListener('mouseover', () => {
    addAnimation_Move(text);
    timeline.play();
});


gloves.addEventListener('mouseout', () => {
    addAnimation_Move(text);
    timeline.reverse();
});
}

window.Script2 = function()
{
  var goggles = document.querySelector("[data-acc-text='goggles']");
var text = document.querySelector("[data-acc-text='gogglesText']");

let timeline = gsap.timeline();

function addAnimation_Move(target){
    timeline.to(target, {x:40, duration:0.3, ease:"sine.out"});
}
//Goggles
goggles.addEventListener('mouseover', () => {
    addAnimation_Move(text);
    timeline.play();
});


goggles.addEventListener('mouseout', () => {
    addAnimation_Move(text);
    timeline.reverse();
});
}

window.Script3 = function()
{
  var mask = document.querySelector("[data-acc-text='mask']");
var text = document.querySelector("[data-acc-text='maskText']");

let timeline = gsap.timeline();

function addAnimation_Move(target){
    timeline.to(target, {x:40, duration:0.3, ease:"sine.out"});
}
//Mask
mask.addEventListener('mouseover', () => {
    addAnimation_Move(text);
    timeline.play();
});


mask.addEventListener('mouseout', () => {
    addAnimation_Move(text);
    timeline.reverse();
});
}

window.Script4 = function()
{
  var gown = document.querySelector("[data-acc-text='gown']");
var text = document.querySelector("[data-acc-text='gownText']");

let timeline = gsap.timeline();

function addAnimation_Move(target){
    timeline.to(target, {x:40, duration:0.3, ease:"sine.out"});
}


gown.addEventListener('mouseover', () => {
    addAnimation_Move(text);
    timeline.play();
});

gown.addEventListener('mouseout', () => {
    addAnimation_Move(text);
    timeline.reverse();
});
}

window.Script5 = function()
{
  var shoe = document.querySelector("[data-acc-text='shoe']");
var text = document.querySelector("[data-acc-text='shoeText']");

let timeline = gsap.timeline();

function addAnimation_Move(target){
    timeline.to(target, {x:40, duration:0.3, ease:"sine.out"});
}


shoe.addEventListener('mouseover', () => {
    addAnimation_Move(text);
    timeline.play();
});

shoe.addEventListener('mouseout', () => {
    addAnimation_Move(text);
    timeline.reverse();
});
}

};
