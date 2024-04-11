window.addEventListener('load', handleLoad);

function handleLoad () {
    // document.addEventListener('mousemove', handleMouseMove);
    // document.addEventListener('click', handleClick);
    // document.addEventListener('keyup', handleKeyup);
 
    // document.querySelector('body')?.addEventListener('click', handleClick);
    // document.querySelector('body')?.addEventListener('keyup', handleKeyup);

    // document.querySelector('#div0')?.addEventListener('click', handleClick);
    // document.querySelector('#div0')?.addEventListener('click', handleKeyup);
    // document.querySelector('#div1')?.addEventListener('click', handleClick);
    // document.querySelector('#div1')?.addEventListener('keyup', handleKeyup);
}

window.addEventListener('mousemove', setInfoBox);

function setInfoBox(_event:MouseEvent) {
    let spanelement: HTMLSpanElement = document.querySelector('span');
    spanelement.style.top = Number (_event.clientY + 5).toString() + "px";
    spanelement.style.left = Number (_event.clientX + 5).toString() + "px";
    spanelement.innerText = (_event.clientX + 5) + "px" + (_event.clientY + 5) + "px" + (_event.target + 5);
    
    return spanelement;

}