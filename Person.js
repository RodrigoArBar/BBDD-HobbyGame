"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, nationality, proffesion, experienceYears) {
        this.name = name;
        this.nationality = nationality;
        this.proffesion = proffesion;
        this.experienceYears = experienceYears;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (newName) {
        this.name = newName;
    };
    Person.prototype.getNationality = function () {
        return this.nationality;
    };
    Person.prototype.setNationality = function (newNationality) {
        this.nationality = newNationality;
    };
    Person.prototype.getProffesion = function () {
        return this.proffesion;
    };
    Person.prototype.setProffesion = function (newProffesion) {
        this.proffesion = newProffesion;
    };
    Person.prototype.getExperienceYears = function () {
        return this.experienceYears;
    };
    Person.prototype.setExperienceYears = function (newExperienceYears) {
        this.experienceYears = newExperienceYears;
    };
    Person.prototype.isSamePerson = function (person) {
        var answer = true;
        var featuresNewPerson = [];
        for (var feature in person)
            answer && (answer = this[feature] == person[feature]);
        // (si numeros)answer +=, answer = answer + valor
        //  answer = answer && (this[feature] == person[feature]) 
        // this[feature]== person[feature] devuelve true o false**
        return answer;
    };
    Person.prototype.print = function () {
        console.log("\nPerson attributes: ");
        console.log("\n · Name: " + this.name);
        console.log("\n · Nationality: " + this.nationality);
        console.log("\n · Proffesion: " + this.proffesion);
        console.log("\n · Experience years: " + this.experienceYears);
    };
    Person.prototype.attributesToString = function () {
        var cadena = [this.name, this.nationality, this.proffesion, this.experienceYears.toString()];
        return cadena.join(", ");
    };
    return Person;
}());
exports.Person = Person;
