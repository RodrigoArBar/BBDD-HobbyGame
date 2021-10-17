export class Person
{
    private name: string;
    private nationality: string;
    private proffesion: string;
    private experienceYears: number;

    constructor(name: string, nationality: string, proffesion: string, experienceYears:number)
    {
        this.name = name;
        this.nationality = nationality;
        this.proffesion = proffesion;
        this.experienceYears =experienceYears;
        
    }

    public getName():string
    {
        return this.name
    }

    public setName(newName: string)
    {
        this.name = newName;
    }

    public getNationality():string
    {
        return this.nationality;
    }

    public setNationality(newNationality:string)
    {
        this.nationality = newNationality;
    }

    public getProffesion():string
    {
        return this.proffesion;
    }

    public setProffesion(newProffesion: string)
    {
        this.proffesion = newProffesion;
    }

    public getExperienceYears():number
    {
        return this.experienceYears;
    }

    public setExperienceYears(newExperienceYears: number)
    {
        this.experienceYears = newExperienceYears;
    }


    public isSamePerson(person: Person):boolean
    {
        let answer: boolean = true;
        let featuresNewPerson: string[] =[];
        
        for(let feature in person)
            answer &&= (this[feature] == person[feature]);
            // (si numeros)answer +=, answer = answer + valor
            //  answer = answer && (this[feature] == person[feature]) 
            // this[feature]== person[feature] devuelve true o false**
  
        return answer;
    }

    public print()
    {
        console.log("\nPerson attributes: ");
        console.log("\n · Name: "+this.name);
        console.log("\n · Nationality: "+this.nationality);
        console.log("\n · Proffesion: "+this.proffesion);
        console.log("\n · Experience years: "+this.experienceYears);

    }

    public attributesToString(): string
    {
        let cadena: string[] = [this.name, this.nationality, this.proffesion, this.experienceYears.toString()];

        return cadena.join(", ");

    }

}





