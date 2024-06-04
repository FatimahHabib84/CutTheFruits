var config = {
    type: Phaser.AUTO,
    parent: "container",
    width:800 ,
    height: 740,
    transparent: true,
    scene: [Scene1 , Scene2, Scene3],
    pixelArt: true,
    // physics: {
    //     default: "arcade",
    //     arcade:{
    //         debug: false
    //     }
    // },
    index:null
};
    
// }

    var game  = new Phaser.Game(config);
