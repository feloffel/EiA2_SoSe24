"use strict";
//namespace
const randomPoemArrays = {
    // Arrays für Subjekte, Prädikate und Objekte
    subjects: ['Harry', 'Hermine', 'Ron', 'Hagrid', 'Snape', 'Dumbledore'],
    predicates: ['braut', 'liebt', 'studiert', 'hasst', 'zaubert', 'zerstört'],
    objects: ['Zaubertränke', 'den Grimm', 'Lupin', 'Hogwarts', 'die Karte des Rumtreibers', 'Dementoren']
};
console.log(randomPoemArrays);
for (let i = randomPoemArrays.subjects.length; i >= 1; i--) {
    console.log(i);
    const verse = getVerse([], [], []);
    console.log(verse);
}
function getVerse(_subjects, _predicates, _objects) {
    return "Alohomora";
}
//# sourceMappingURL=script.js.map