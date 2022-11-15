class Game {
  constructor() {
    this.leaderBoard=createElement("h2")
    this.l1=createElement("h2")
    this.l2=createElement("h2")
  }
getState(){
  database.ref("gameState").on("value",function(data){
  gameState=data.val()
  })
}
update(state){
  database.ref("/").update({
  gameState:state
  })
}
  start() {
 player=new Player()
 playerCount=player.getCount()


 form = new Form();
    form.display();
    
    c1=createSprite(width/3-200,height-300)
    c1.addAnimation("cheetah",cheetah1)
    l1=createSprite(width/3-200,height-400)
    l1.addAnimation("lion",lion)
    animals=[c1,l1]
    c1.scale=2
    l1.scale=2
  }
  handleElemnts(){
    form.hide()
  }
  play(){
    this.handleElemnts()
    Player.getPlayerinfo()
    if(allPlayers!==undefined){
      image (track,0,height,- width*6,height)
    var index=0
    for( var plr in allPlayers) {
      index=index+1 
      var x = allPlayers[plr].positionX
      var y = height-allPlayers[plr].positionY
      animals[index-1].position.x=x
      animals[index-1].position.y=y
    }
    this.handlePlayer()
      drawSprites()
    }
  
  }
  handlePlayer(){
  if(keyIsDown(RIGHT_ARROW)){
player.positionX+=10
player.update()
  }
  }

}
