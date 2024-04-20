"use strict";
//Funktion zum einblenden der Neuen Eintrag Maske nachdem der Button hierfür geklickt wurde
function showEntryMask() {
    document.getElementById('neuerEintrag').style.display = "block";
    document.getElementById('addEntryMaskButton').style.display = "none";
    console.log('Neuer Eintrag Maske eingeblendet');
}
//Ausblenden der Maske für einen Neuen Eintrag nachdem der hinzufügen button gedrückt wurde + hinzufügen des Eintrags zur Liste
function hideEntryMask() {
    document.getElementById('neuerEintrag').style.display = "none";
    document.getElementById('addEntryMaskButton').style.display = "block";
    console.log('Neuer Eintrag Maske ausgeblendet');
}
//Item aus der Liste entfernen
function removeItem() {
    document.getElementsByClassName('close');
    console.log('Item entfernt');
}
function boughtItem() {
    document.getElementsByClassName('ItemBoughtButton');
    console.log('Item wurde als gekauft markiert');
    //entfernen des Häckchens bei "Kaufen"
    //Update des "Zu letzt gekauft am (Datum)"
    //Item rutscht nach ganz unten auf der Liste
}
document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', markedAsToBuy);
    });
});
function markedAsToBuy(event) {
    const checkbox = event.target;
    if (checkbox.checked) {
        console.log('Checkbox abgehakt');
    }
    else {
        console.log('Checkbox entfernt');
    }
}
//# sourceMappingURL=script.js.map