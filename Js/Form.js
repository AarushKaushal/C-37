class Form{
    constructor(){
     
         this.input=createInput("Name")
         this.button=createButton("GO")
         this.greeting= createElement('h3')
    }
    display(){
        this.title=createElement('h2')    
        this.title.html("Car Racing Game")
        this.title.position(600,200);
        
        this.input.position(600,250)
        
        this.button.position(600,300)
        this.button.mousePressed(function(){
            this.input.hide()
            this.button.hide()
            player.name=this.input.value()
            playerCount=playerCount+1
            player.index=playerCount
            player.update()
            player.updateCount(playerCount)
            var greeting= createElement('h3')
            this.greeting.html("Hello! "+player.name)
            this.greeting.position(600,250)
        })
    }
}