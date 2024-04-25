/*
Aufgabe: L04_Einkaufsliste_Datenstruktur
Name: Marius Dauner
Matrikel: 275813
Datum: 25.04.24
Quellen: <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
*/

// Funktion zum Einblenden der Neuer Eintrag Maske nachdem der Button hierfür geklickt wurde
function showEntryMask() {
    const mask = document.getElementById('neuerEintrag')!;
    mask.style.display = "block";
}

// Funktion zum Ausblenden der Maske für einen Neuer Eintrag nachdem der hinzufügen button gedrückt wurde
// und Hinzufügen des Eintrags zur Liste
function hideEntryMask() {
    const mask = document.getElementById('neuerEintrag')!;
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
            const tableBody = document.querySelector('#liste table tbody');
            if (tableBody) {
                data.forEach(entry => {
                    const newRow = document.createElement('tr');
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
    const nameInput = document.getElementById('neueWareName') as HTMLInputElement;
    const mengeInput = document.getElementById('Menge') as HTMLInputElement;
    const dateInput = document.getElementById('date') as HTMLInputElement;
    const kommentarInput = document.getElementById('Kommentar') as HTMLInputElement;

    const name = nameInput.value;
    const menge = mengeInput.value;
    const date = dateInput.value;
    const kommentar = kommentarInput.value;

    const tableBody = document.querySelector('#liste table tbody');
    if (tableBody) {
        const newRow = document.createElement('tr');
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
    const row = button.closest('tr'); // Finden der Zeile, zu der der Button gehört
    if (row) {
        row.remove(); // Entferne die Zeile aus der Tabelle
        console.log('Eintrag entfernt');
    }
}

// Funktion zum Markieren eines Eintrags als gekauft
function boughtItem(button: HTMLElement) {
    const row = button.closest('tr'); // Finde die Zeile, zu der der Button gehört
    if (row) {
        const tableBody = row.parentElement; // Finde den tbody-Container der Tabelle
        if (tableBody) {
            // Verschiebe die Zeile ans Ende der Tabelle
            tableBody.appendChild(row);
        }

        const dateCell = row.querySelector('td:nth-child(4)'); // Finde die Zelle mit dem Datum
        if (dateCell) {
            const today = new Date();
            const formattedDate = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`; // Aktuelles Datum formatieren
            dateCell.textContent = formattedDate; // Aktualisiere das Datum in der Zelle
        }

        const checkbox = row.querySelector('.checkbox') as HTMLInputElement; // Finde die Checkbox
        if (checkbox) {
            checkbox.checked = false; // Setze den Haken bei der Checkbox auf false
        }

        console.log('Datum aktualisiert, Haken entfernt und Item ans Ende verschoben');
    }
}


// Lade die Einträge aus der JSON-Datei, wenn die Seite geladen ist
loadEntries();


