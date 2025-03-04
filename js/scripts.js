// Change Variable
let stylemode = document.cookie;

// Change Variable
let stylelink = document.getElementById('style');

// conditional Branch with else Branch
if (stylemode == 'dark') {
    // change the href propertt of the 'link'
    stylelink.href = 'css/dark.css';
} else {
    stylelink.href = 'css/light.css';
    stylemode = 'dark'
    document.cookie = 'light'
}

//common event
function switchmode() {
    //conditional statement wth else brach
    if (stylemode == 'light') {
       stylemode = 'dark'
       stylelink.href = 'css/dark.css';
       document.cookie = 'dark';
    } else {
        stylemode = 'light'
        stylelink.href = 'css/light.css';
        document.cookie = 'light';
    }
}

function showhide() {
    let toolbarbuttons = document.getElementById('buttons');
    if (toolbarbuttons.style.display == 'block') {
        toolbarbuttons.style.display = 'none'
    } else {
        toolbarbuttons.style.display = 'block';
    }
}