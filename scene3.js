class Scene3 extends Phaser.Scene{
    constructor(){
        super('endGame')
    }
    create(){
        this.winText = this.add.bitmapText(config.width/2, config.height/2, 'myfont','Game Over!',80);
        this.winText.setOrigin(0.5,0.50)
        this.buttonRestartLevel = this.add.bitmapText(80, 50, 'myfont','retake',40);
        this.buttonRestartLevel.setOrigin(0.5,0.50)
        this.buttonRestartLevel.setInteractive()
        this.buttonRestartLevel.on('pointerdown',()=>{
            // config.index--
            // console.log(config.index+' '+this.levelindex);
            // this.levelindex--
            console.log(this.scene.restart('Level'));
            this.scene.start('Level');
        }, this)
        console.log(this.buttonRestartLevel);    

        
    }
} 
