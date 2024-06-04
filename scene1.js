// scene one for the loading page
class Scene1 extends Phaser.Scene {
    constructor () {
        super('game')
    }
    preload (){
    // this.load.image('background','https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg?auto=compress&cs=tinysrgb&w=600')

        // font
        this.load.bitmapFont(
        'myfont',
        '/font-removebg-preview.png',
        // '/font_0.png',
        // '/font_1.png',
        '/font.xml'
        );

        // images
        this.load.spritesheet('apple','apple.png',{
            frameWidth: config.width,
            frameHeight: config.height
        });
        this.load.spritesheet('kiwi','kiwi.png',{
            frameWidth: config.width,
            frameHeight: config.height
        });
        this.load.spritesheet('orange','orange.png',{
            frameWidth: config.width,
            frameHeight: config.height
        });
        this.load.spritesheet('pineapple','pineapple.png',{
            frameWidth: config.width,
            frameHeight: config.height
        });
        this.load.spritesheet('watermelon','watermelon.png',{
            frameWidth: config.width,
            frameHeight: config.height
        });
        this.load.spritesheet('apple','apple.png',{
            frameWidth: config.width,
            frameHeight: config.height
        });
        this.load.spritesheet('boom','boom.png',{
            frameWidth: config.width,
            frameHeight: config.height
        })

        // animation sprites
        this.load.spritesheet('appleSprtie','appleSprit.png',{
            frameWidth: config.width,
            frameHeight: config.height
        });
        this.load.spritesheet('kiwiSprit','kiwiSprit.png',{
            frameWidth: config.width,
            frameHeight: config.height
        });
        this.load.spritesheet('orangeSprit','orangeSprit.png',{
            frameWidth: config.width,
            frameHeight: config.height
        });
        this.load.spritesheet('pineappleSprit','pineappleSprit.png',{
            frameWidth: config.width,
            frameHeight: config.height
        });
        this.load.spritesheet('watermelonSprit','watermelonSprit.png',{
            frameWidth: config.width,
            frameHeight: config.height
        });
        this.load.spritesheet('boomSprit','boomSprit.png',{
            frameWidth: config.width,
            frameHeight: config.height
        });


        // sounds
        this.load.audio("swordSound",['sword.ogg','sword.mp3'])
        this.load.audio("boomSound",['explosion.mp3'])
        this.load.audio("music",['music.ogg','music.mp3'])
        this.load.audio("win",['win.ogg' , 'win.mp3'])

    }
    create() {
        let num = 2
        if(config.index==null){
            this.text =""
        }else {
            this.text = "Level "+num
            num++
        }


        this.buttonStart = this.add.bitmapText(config.width/2, config.height/2, 'myfont','Start '+this.text,80);
        this.buttonStart.setOrigin(0.5,0.5)
        this.buttonStart.setInteractive()
        // this.buttonNextLevel.on('pointerover',this.buttonNextLevel.fill('black'))

        // this._timesec = levelparams.timelimit;
        this.helloMessage = this.add.bitmapText(config.width/2, 50,'myfont',"Excited to see my game?",40);
        this.helloMessage.setOrigin(0.5,0.5)
        this.buttonStart.on('pointerdown',() => {
            // var levelparams = MyLevelData[config.index];
            // let message = levelparams.title;


            if(config.index==null){
                config.index=0
            }else {
                config.index++
            }
            if(config.index==0){
                this.scene.start('Level');
        } // just restart the same state
        else{
            console.log('restart');
            this.scene.start('Level');
        }
            
            // config.index++
          },this)
    }  
}

