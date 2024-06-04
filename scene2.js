
        // scene two for the booting game
        class Scene2 extends Phaser.Scene {
            constructor () {
                super('Level');
                
            }
            // Sword(){
            //         var sword = new Sword(this);
            //         this.swordSound.play();
            // }
            setupStage(){
                this.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
                if (!isMobile) this.scale.setResizeCallback(this.scaleGame);
                this.scaleGame();
            };
            scaleGame = () => {
                const padding = isMobile ? 0 : 80; // include padding around the canvas frame for desktop
                const yScale = (window.innerHeight - padding) / this.game.height;
                const scale = Math.min(yScale, 1);
                this.scale.setUserScale(scale, scale);
            };

            create() {
                
                console.log(config.index);
                this.score = 0;
                // this.scoreText = this.add.bitmapText(50,50,'myfont',"SCORE ",16);
                this.scoreText = this.add.bitmapText(50, 50, 'myfont','Score ',40);
                // this.add.text(50, 50,"Score ",{ fill:"black"});
                this.levelNum =config.index+1
                let titlemsg = MyLevelData[config.index].title
                this.levelText = this.add.bitmapText(config.width/2, 50, 'myfont', titlemsg+this.levelNum,40);
                // this.add.text(200,50, titlemsg+this.levelNum,{ fill:"black"})
                this.yourScoreMessage = this.add.bitmapText(config.width/2, 150,'myfont',"You must score: "+MyLevelData[config.index].mustscore,40);
                this.yourScoreMessage.setOrigin(0.5,0.5)
                // audio
                this.swordSound = this.sound.add('swordSound')
                this.boomSound = this.sound.add('boomSound')
                this.musicSound = this.sound.add('music')
                this.win = this.sound.add('win')
                var musicConfig ={
                    mute:false,
                    volume:1,
                    rate:1,
                    detune:0,
                    seek:0,
                    loop:false,
                    delay:0
                }
                this.musicSound.play()

                // fruits
                var apples = []; var oranges=[]; var pineapples =[]; var kiwies = []; var watermelons = []; var boom = []
                this.fruits = [apples,oranges,pineapples,kiwies,watermelons,boom];
                console.log(MyLevelData[config.index].numOfObjects);
                var numOfObjects = MyLevelData[config.index].numOfObjects;

                for(var i=0 ; i<numOfObjects; i++){
                    apples[i] = this.add.sprite(config.width/5,Phaser.Math.Between(0,config.height*70),'apple').setInteractive()
                    apples[i].setScale(0.25)

                    oranges[i] = this.add.sprite(config.width/5*3,Phaser.Math.Between(0,config.height*70),'orange').setInteractive()
                    oranges[i].setScale(0.25)

                    pineapples[i]= this.add.sprite(config.width/5*4,Phaser.Math.Between(0,config.height*70),'pineapple').setInteractive()
                    pineapples[i].setScale(0.25)
                    
                    kiwies[i] = this.add.sprite(config.width/5*2,Phaser.Math.Between(0,config.height*70),'kiwi').setInteractive()
                    kiwies[i].setScale(0.25)

                    watermelons[i]= this.add.sprite(config.width-50,Phaser.Math.Between(0,config.height*70),'watermelon').setInteractive()
                    watermelons[i].setScale(0.25)

                    boom[i] = this.add.sprite(config.width/2,Phaser.Math.Between(0,config.height*70),'boom').setInteractive()
                    boom[i].setScale(0.25)
                }

                // animation
                this.anims.create({
                key: "appleSpriteAnim",
                frames: this.anims.generateFrameNumbers("appleSprtie"),
                frameRate: 20,
                repeat: 0,
                hideOnComplete: true
                });
                this.anims.create({
                key: "orangeSpritAnim",
                frames: this.anims.generateFrameNumbers("orangeSprit"),
                frameRate: 20,
                repeat: 0,
                hideOnComplete: true
                });
                this.anims.create({
                key: "pineappleSpritAnim",
                frames: this.anims.generateFrameNumbers("pineappleSprit"),
                frameRate: 20,
                repeat: 0,
                hideOnComplete: true
                });
                this.anims.create({
                key: "kiwiSpritAnim",
                frames: this.anims.generateFrameNumbers("kiwiSprit"),
                frameRate: 20,
                repeat: 0,
                hideOnComplete: true
                });
                this.anims.create({
                key: "watermelonSpritAnim",
                frames: this.anims.generateFrameNumbers("watermelonSprit"),
                frameRate: 20,
                repeat: 0,
                hideOnComplete: true
                });
                this.anims.create({
                key: "boomSpritAnim",
                frames: this.anims.generateFrameNumbers("boomSprit"),
                frameRate:20,
                repeat:0,
                hideOnComplete:true
                });

                // play
                for(let i=0 ; i<numOfObjects ; i++){
                    apples[i].on('pointerdown',()=>{return apples[i].setTexture('appleSprtie') ,apples[i].play('appleSpriteAnim'),this.score+=10,this.scoreText.text="Score "+this.score,this.swordSound.play()},apples[i]);
                    kiwies[i].on('pointerdown',()=>{return kiwies[i].setTexture('kiwiSprit') , kiwies[i].play('kiwiSpritAnim'),this.score+=10,this.scoreText.text="Score "+this.score,this.swordSound.play()},kiwies[i]);
                    oranges[i].on('pointerdown',()=>{return oranges[i].setTexture('orangeSprit') , oranges[i].play('orangeSpritAnim'),this.score+=10,this.scoreText.text="Score "+this.score,this.swordSound.play()},oranges[i]);
                    pineapples[i].on('pointerdown',()=>{return pineapples[i].setTexture('pineappleSprit') , pineapples[i].play('pineappleSpritAnim'),this.score+=10,this.scoreText.text="Score "+this.score,this.swordSound.play()},pineapples[i]);
                    watermelons[i].on('pointerdown',()=>{return watermelons[i].setTexture('watermelonSprit') , watermelons[i].play('watermelonSpritAnim'),this.score+=10,this.scoreText.text="Score "+this.score,this.swordSound.play()},watermelons[i]);
                    boom[i].on('pointerdown',()=>{return boom[i].setTexture('boomSprit'), boom[i].play('boomSpritAnim'),this.scoreText.text="GAME OVER!!", this.boomSound.play(),this.gameOver()},boom[i])
                }
            }

            // local functions
            fruitFall(fruit,yPosition){
                fruit.y+=yPosition
                if(fruit.y>Phaser.Math.Between(config.height,config.height*70)){
                    this.resetYpostion(fruit)
                }
            }
            resetYpostion(fruit){
                var xPosition = Phaser.Math.Between(50,config.width-50);
                fruit.y=0
                fruit.x=xPosition
                
            }
            gameOver(){
                this.scene.stop()
                this.boomSound.play()
                this.scene.start('endGame')
            }
            winGame(){
                if (this.score == MyLevelData[config.index].mustscore){
                    console.log(this.score);
                    // config.index++
                    this.win.play()
                    this.scene.start('game')
                }
            }
            // win the game
            
            update(){
                for(var i=0;i<7;i++){
                    this.fruitFall(this.fruits[0][i],1.5 + MyLevelData[config.index].speed)
                    this.fruitFall(this.fruits[1][i],1.75 + MyLevelData[config.index].speed)
                    this.fruitFall(this.fruits[2][i],2 + MyLevelData[config.index].speed)
                    this.fruitFall(this.fruits[3][i],1 + MyLevelData[config.index].speed)
                    this.fruitFall(this.fruits[4][i],1.4 + MyLevelData[config.index].speed)
                    this.fruitFall(this.fruits[5][i],1.5 + MyLevelData[config.index].speed)
                }
                this.winGame()
            
            }


        }