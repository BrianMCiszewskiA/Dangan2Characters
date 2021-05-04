class char{
    let num = 1;
    let actualImage;
    constructor(charName, ultimate, infoText, presentsLoves, presentsLikes, reportCard, maxNum){
        this.name = charName; // iniciar con _ y usar .replace("_", " ") a la hora de poner el nombre
        this.ultimate = ultimate; //el ultimate del pj, un string
        this.infoText = infoText; //un string con la info personal del personaje (pendiente tal vez cambiarlo)
        this.presentsLoves = presentsLoves; //array de strings con los regalos q le encantan
        this.presentsLikes = presentsLikes; //array de strings con los regalos q le gustan
        this.reportCard = reportCard; //array de strings con el texto de sus paginas de la report card
        this.maxNum = maxNum; //cantidad de sprites que tiene
        this.initializeImage()
    }

    initializeImage(){
        this.changeImage(1);
    }
    function nextImage(char) {
        if (num == maxNum) {
          num = 1;
        } else {
          num = num + 1;
        }
        this.changeImage(num);
      }
      
      function prevImage(char) {
        if (num == 1) {
          num = maxNum;
        } else {
          num = num - 1;
        }
        this.changeImage(num);
      }
      changeImage(number){
        this.actualImage = this.charName + "/" + this.charName + "_Halfbody_Sprite_(" + number.toString() + ").png"; //comprobar ruta
        document.getElementById(char).setAttribute("src", actualImage);
      }
}