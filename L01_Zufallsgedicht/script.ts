namespace Zufallsgedicht {
    let randomPoemArrays = {
    // Arrays für Subjekte, Prädikate und Objekte
    subjects:  ['Kirk', 'Spock', 'McCoy', 'Picard', 'Data', 'Riker'],
    predicates: ['befehligt', 'entdeckt', 'rettet', 'erforscht', 'bekämpft', 'analysiert'],
    objects: ['die Enterprise', 'Ferengi', 'Klingonen', 'die Borg', 'das Holodeck', 'die Föderation']
    };

    // Schleife zur Erzeugung von Versen
    for (let i: number = randomPoemArrays.subjects.length - 1; i >= 0; i--) {
        let verse: string = getVerse(randomPoemArrays.subjects, randomPoemArrays.predicates, randomPoemArrays.objects);
        console.log(verse); 
    }

    // Funktion zur Erstellung eines Verses
    function getVerse(_subjects: string[], _predicates: string[], _objects: string[]): string {
        // Variable zum Speichern des Verses
        let verse: string = "";

        // Zufällige Auswahl eines Subjekts, Prädikats und Objekts
        let randomSubjectIndex: number = Math.floor(Math.random() * _subjects.length);
        let subject: string = _subjects.splice(randomSubjectIndex, 1)[0];
        verse += subject + " ";

        let randomPredicateIndex: number = Math.floor(Math.random() * _predicates.length);
        let predicate: string = _predicates.splice(randomPredicateIndex, 1)[0];
        verse += predicate + " ";

        let randomObjectIndex: number = Math.floor(Math.random() * _objects.length);
        let object: string = _objects.splice(randomObjectIndex, 1)[0];
        verse += object + ".";

        // Rückgabe des Verses
        return verse;
    }
}

  