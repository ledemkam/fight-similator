//class personnage
class Personnage {
    constructor(pseudo,classe,sante,attaque){
        this.pseudo = pseudo;
        this.classe = classe;
        this.sante = sante;
        this.attaque = attaque;
        this.niveau = 1;
    }

    evoluer(){
        this.niveau++
        console.log(this.pseudo + " " + "passe au niveau" +" "+ this.niveau + "!")
    }
    verifierSante(){
        if(this.niveau <= 0){
                this.sante === 0;
                console.log(this.pseudo + "a perdu !!")

        }
    }
    get informations(){
        return this.pseudo + "( " +this.classe + ") a " + this.sante + " points de vie et  est au niveau  " +this.niveau + "."
    }

 
}
//class  Magicien
class Magicien extends Personnage{
    constructor(pseudo){
        super(pseudo,"magicien",170,90)
    }

    attaquer(personnage){
    personnage.sante -= this.attaque
        console.log(this.pseudo + " attacque" + " " +personnage.pseudo + " en lancant un sort ( " + this.attaque + 'degats)' )
        this.evoluer();
        personnage.verifierSante();
    
 }

 coupSpecial(personnage){
    personnage.sante -= this.attaque * 5
    console.log(this.pseudo + " attacque avec son coup spécial puissance des arcanes " + " " +personnage.pseudo+ " + ( " + this.attaque * 5 + 'degats)')
    this.evoluer();
    personnage.verifierSante();
   
 }
}
// class Guerrier
class Guerrier extends Personnage{
    constructor(pseudo){
        super(pseudo,"guerrier",350,50)
    }

   

  attaquer(personnage){
    personnage.sante -= this.attaque
        console.log(this.pseudo + " attacque" + " " +personnage.pseudo + " avec son epee ( " + this.attaque + 'degats)' )
        this.evoluer();
        personnage.verifierSante();
    
 }

 coupSpecial(personnage){
    personnage.sante -= this.attaque * 5
    console.log(this.pseudo + " attacque avec son coup spécial hache de guerre" + " " +personnage.pseudo+ " + ( " + this.attaque * 5 + 'degats)')
    this.evoluer();
    personnage.verifierSante();
   
 }
}

// class Guerrier
var gandalf = new Magicien('Gandalf');
var thor    = new Guerrier('Thor');
console.log(thor.informations);
console.log(gandalf.informations);
gandalf.attaquer(thor);
console.log(thor.informations);
thor.attaquer(gandalf);
console.log(gandalf.informations);
gandalf.coupSpecial(thor);


