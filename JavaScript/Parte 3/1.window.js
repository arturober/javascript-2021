console.log(window.outerWidth + " - " + window.outerHeight); 

let win = window.open('', '', "width=800, height=600");
win.addEventListener('resize', e => {
    console.log("Resize");
    win.resizeTo(640, 320);
});

win.document.addEventListener('mouseenter', e => {
    console.log("Mouse enter");
    win.moveTo(Math.random() * screen.availWidth, Math.random() * screen.availHeight);
})
