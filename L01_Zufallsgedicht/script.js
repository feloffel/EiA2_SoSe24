"use strict";
var Zufallsgedicht;
(function (Zufallsgedicht) {
    let randomPoemArrays = {
        // Arrays für Subjekte, Prädikate und Objekte
        subjects: ['Kirk', 'Spock', 'McCoy', 'Picard', 'Data', 'Riker'],
        predicates: ['befehligt', 'entdeckt', 'rettet', 'erforscht', 'bekämpft', 'analysiert'],
        objects: ['die Enterprise', 'Ferengi', 'Klingonen', 'die Borg', 'das Holodeck', 'die Föderation']
    };
    // Schleife zur Erzeugung von Versen
    for (let i = randomPoemArrays.subjects.length - 1; i >= 0; i--) {
        let verse = getVerse(randomPoemArrays.subjects, randomPoemArrays.predicates, randomPoemArrays.objects);
        console.log(verse);
    }
    // Funktion zur Erstellung eines Verses
    function getVerse(_subjects, _predicates, _objects) {
        // Variable zum Speichern des Verses
        let verse = "";
        // Zufällige Auswahl eines Subjekts, Prädikats und Objekts
        let randomSubjectIndex = Math.floor(Math.random() * _subjects.length);
        let subject = _subjects.splice(randomSubjectIndex, 1)[0];
        verse += subject + " ";
        let randomPredicateIndex = Math.floor(Math.random() * _predicates.length);
        let predicate = _predicates.splice(randomPredicateIndex, 1)[0];
        verse += predicate + " ";
        let randomObjectIndex = Math.floor(Math.random() * _objects.length);
        let object = _objects.splice(randomObjectIndex, 1)[0];
        verse += object + ".";
        // Rückgabe des Verses
        return verse;
    }
})(Zufallsgedicht || (Zufallsgedicht = {}));
//# sourceMappingURL=script.js.map