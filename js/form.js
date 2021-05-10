class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(400, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'black');
        this.input.position(570,400);
        this.input.style('width', '200px');
        this.input.style('height', '25px');
        this.input.style('color','white');
        this.input.style('background', 'darkviolet');
        this.button.position(570,550);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('color','white');
        this.button.style('background', 'indigo');
        this.reset.position(620, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'hotpink');
        this.reset.style('color','white');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(400,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');
        });

        this.reset.mousePressed(() => {
           game.update(0);
           player.updateCount(0);
           var Players = database.ref("players");
           Players.remove();
        });

    }
}