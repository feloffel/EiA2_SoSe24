/*
Aufgabe: L04_Einkaufsliste_Datenstruktur
Name: Marius Dauner
Matrikel: 275813
Datum: 25.04.24
Quellen: <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
*/

// Funktion zum Einblenden der Neuer Eintrag Maske nachdem der Button hierfür geklickt wurde
function showEntryMask() {
    let mask = document.getElementById('neuerEintrag')!;
    mask.style.display = "block";
}

// Funktion zum Ausblenden der Maske für einen Neuer Eintrag nachdem der hinzufügen button gedrückt wurde
// und Hinzufügen des Eintrags zur Liste
function hideEntryMask() {
    let mask = document.getElementById('neuerEintrag')!;
    mask.style.display = "none";
}

//Definitionen
interface Entry {
    name: string;
    menge: number;
    letzterKauf: Date; 
    kommentar: string;
    gekauft: boolean; 
}


// Funktion zum Einlesen der Einträge aus der JSON-Datei und Hinzufügen zur Tabelle
function loadEntries() {
    fetch('eintraege.json')
        .then(response => response.json())
        .then((data: Entry[]) => { // Hier gibst du das Interface an, um den Typ zu definieren
            let tableBody = document.querySelector('#liste table tbody');
            if (tableBody) {
                data.forEach(entry => {
                    let newRow = document.createElement('tr');
                    newRow.innerHTML = `
                        <td><input type="checkbox" class="checkbox" ${entry.gekauft ? 'checked' : ''}></td>
                        <td>${entry.name}</td>
                        <td><input type="number" value="${entry.menge}" placeholder="Anzahl"></td>
                        <td>${entry.letzterKauf}</td>
                        <td><input value="${entry.kommentar}" placeholder="weitere Infos"></td>
                        <td><button class="ItemBoughtButton" onclick="boughtItem(this)">Gekauft</button></td>
                        <td><button class="close" onclick="removeItem(this)">–</button></td>
                    `;
                    tableBody.appendChild(newRow);
                });
            }
        });
}


// Funktion zum Hinzufügen eines Eintrags zur Liste
function addEntry() {
    let nameInput = document.getElementById('neueWareName') as HTMLInputElement;
    let mengeInput = document.getElementById('Menge') as HTMLInputElement;
    let dateInput = document.getElementById('date') as HTMLInputElement;
    let kommentarInput = document.getElementById('Kommentar') as HTMLInputElement;

    let name = nameInput.value;
    let menge = mengeInput.value;
    let date = dateInput.value;
    let kommentar = kommentarInput.value;

    let tableBody = document.querySelector('#liste table tbody');
    if (tableBody) {
        let newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td><input type="checkbox" class="checkbox"></td>
            <td>${name}</td>
            <td><input type="number" value="${menge}" placeholder="Anzahl"></td>
            <td>${date}</td>
            <td><input value="${kommentar}" placeholder="weitere Infos"></td>
            <td><button class="ItemBoughtButton" onclick="boughtItem(this)">Gekauft</button></td>
            <td><button class="close" onclick="removeItem(this)">–</button></td>
        `;
        tableBody.appendChild(newRow);
    }

    hideEntryMask();
}

// Funktion zum Entfernen eines Eintrags aus der Liste
function removeItem(button: HTMLElement) {
    let row = button.closest('tr'); // Finden der Zeile, zu der der Button gehört
    if (row) {
        row.remove(); // Entferne die Zeile aus der Tabelle
        console.log('Eintrag entfernt');
    }
}

// Funktion zum Markieren eines Eintrags als gekauft
function boughtItem(button: HTMLElement) {
    let row = button.closest('tr'); // Finde die Zeile, zu der der Button gehört
    if (row) {
        let tableBody = row.parentElement; // Finde den tbody-Container der Tabelle
        if (tableBody) {
            // Verschiebe die Zeile ans Ende der Tabelle
            tableBody.appendChild(row);
        }

        let dateCell = row.querySelector('td:nth-child(4)'); // Finde die Zelle mit dem Datum
        if (dateCell) {
            let today = new Date();
            let formattedDate = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`; // Aktuelles Datum formatieren
            dateCell.textContent = formattedDate; // Aktualisiere das Datum in der Zelle
        }

        let checkbox = row.querySelector('.checkbox') as HTMLInputElement; // Finde die Checkbox
        if (checkbox) {
            checkbox.checked = false; // Setze den Haken bei der Checkbox auf false
        }

        console.log('Datum aktualisiert, Haken entfernt und Item ans Ende verschoben');
    }
}


// Lade die Einträge aus der JSON-Datei, wenn die Seite geladen ist
loadEntries();


