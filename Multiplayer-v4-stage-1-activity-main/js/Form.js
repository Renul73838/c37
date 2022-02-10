class Form {
  constructor() {
    this.input=createInput("").attribute("placeHolder","enter your name")
    this.playButton=createButton("play")
    this.titleImg=createImg("assets/title.png","gameTitle")
    this.greeting=createElement("h2")
    
  }
setElementPosition(){
  this.titleImg.position(120,50)
  this.input.position(width/2-110,height/2-80)
  this.playButton.position(width/2-90,height/2-20)
  this.greeting.position(width/2-300,height/2-100)
}
hide(){
  this.greeting.hide()
  this.playButton.hide()
  this.input.hide()
}
handleMousePressed(){
  this.playButton.mousePressed(()=>{
    this.input.hide();
    this.playButton.hide();
    var message = `
    hello ${this.input.value()}
    </br> wait for another player to join`;
    this.greeting.html(message);
  });
}
display(){
  this.setElementPosition()
  this.handleMousePressed()
}

}
