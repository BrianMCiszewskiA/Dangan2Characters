class Char{
    constructor(charName, ultimate, infoText, presentsLoves, presentsLikes, reportCard, maxNum){
        this.name = charName; // iniciar con _ y usar .replace("_", " ") a la hora de poner el nombre
        this.ultimate = ultimate; //el ultimate del pj, un string
        this.infoText = infoText; //un string con la info personal del personaje (pendiente tal vez cambiarlo)
        this.presentsLoves = presentsLoves; //array de strings con los regalos q le encantan
        this.presentsLikes = presentsLikes; //array de strings con los regalos q le gustan
        this.reportCard = reportCard; //array de strings con el texto de sus paginas de la report card
        this.maxNum = maxNum; //cantidad de sprites que tiene
        this.num = 1;
        this.actualImage;
    }

    initializeImage(){
        document.getElementById("pjSprite").setAttribute("alt", this.name);
        this.changeImage(1);
    }
    nextImage() {
      if (this.num == this.maxNum) {
        this.num = 1;
      } else {
        this.num = this.num + 1;
      }
      this.changeImage(this.num);
    }
      
    prevImage() {
      if (this.num == 1) {
        this.num = this.maxNum;
      } else {
        this.num = this.num - 1;
      }
      this.changeImage(this.num);
    }
    changeImage(number){
      this.actualImage = "characters/" + this.name + "/" + this.name + "_Halfbody_Sprite_(" + number.toString() + ").png"; //comprobar ruta
      document.getElementById("pjSprite").setAttribute("src", this.actualImage);
    }
    nameCC(){
      //devuelve el nombre del pj en camelCase (asi se puede usar el nombre de las const)
      return this.name.charAt(0).toLowerCase() + this.name.slice(1).replace("_", "");
    }
}