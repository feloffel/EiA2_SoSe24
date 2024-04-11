window.addEventListener('load', handleLoad);

function handleLoad (): void {
    document.addEventListener('mousemove', setInfoBox);
    document.addEventListener('click', logInfo);
    document.addEventListener('keyup', logInfo);
 
    document.querySelector('body')?.addEventListener('click', logInfo);
    document.querySelector('body')?.addEventListener('keyup', logInfo);

    document.querySelector('#div0')?.addEventListener('click', logInfo);
    document.querySelector('#div0')?.addEventListener('click', logInfo);
    document.querySelector('#div1')?.addEventListener('click', logInfo);
    document.querySelector('#div1')?.addEventListener('keyup', logInfo);

    
}

window.addEventListener('mousemove', setInfoBox);

function setInfoBox(_event:MouseEvent) {
    let spanelement: HTMLSpanElement = document.querySelector('span');
    spanelement.style.top = Number (_event.clientY + 5).toString() + "px";
    spanelement.style.left = Number (_event.clientX + 5).toString() + "px";
    spanelement.innerText = "Maus: " + (_event.clientX + 5) + "px " + (_event.clientY + 5) + "px " + "target: " + (_event.target);
    
    return spanelement;
}

function logInfo(_event: MouseEvent | KeyboardEvent): void {
    console.log(_event);
    console.log(_event.type);
    console.log(_event.currentTarget);
    console.log(_event.target);
  }
