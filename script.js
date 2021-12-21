document.getElementById('graybutton').onclick=switchgray;
document.getElementById('bluebutton').onclick=switchblue;
document.getElementById('yellowbutton').onclick=switchyellow;
document.getElementById('pinkbutton').onclick=switchpink;
document.getElementById('redbutton').onclick=switchred;
document.getElementById('whitebutton').onclick=switchwhite;

function switchgray(){
    document.getElementsByTagName('body')[0].style.backgroundColor='gray';
    document.getElementsByTagName('body')[0].style.color='white';
}


function switchblue(){
    document.getElementsByTagName('body')[0].style.backgroundColor='blue';
    document.getElementsByTagName('body')[0].style.color='white';
}

function switchyellow(){
    document.getElementsByTagName('body')[0].style.backgroundColor='yellow';
    document.getElementsByTagName('body')[0].style.color='black';
}

function switchpink(){
    document.getElementsByTagName('body')[0].style.backgroundColor='pink';
    document.getElementsByTagName('body')[0].style.color='black';
}

function switchred(){
    document.getElementsByTagName('body')[0].style.backgroundColor='red';
    document.getElementsByTagName('body')[0].style.color='black';
}
function switchwhite(){
    document.getElementsByTagName('body')[0].style.backgroundColor='white';
    document.getElementsByTagName('body')[0].style.color='black';
}