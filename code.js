var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["99e51d59-1257-427b-83c7-563f1efbe351","701eec09-e34c-4f26-9630-8fcdea0c6dd6","e8d3fbed-4a92-4530-ab94-de90ce9d792a","3cc3d3ee-04a3-4278-93b4-074a440ba9d9","eb932b63-f5e5-47de-82a2-a18235be31c9"],"propsByKey":{"99e51d59-1257-427b-83c7-563f1efbe351":{"name":"alien","sourceUrl":"assets/api/v1/animation-library/gamelab/selvucUvDCWyGJawicv5mxxdIFF2Vod3/category_retro/retroaliens_12.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"selvucUvDCWyGJawicv5mxxdIFF2Vod3","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/selvucUvDCWyGJawicv5mxxdIFF2Vod3/category_retro/retroaliens_12.png"},"701eec09-e34c-4f26-9630-8fcdea0c6dd6":{"name":"alien2","sourceUrl":"assets/api/v1/animation-library/gamelab/Nn9DKAJvr5aApsY9qR9bKcvYnU_L_U85/category_retro/retroaliens_08.png","frameSize":{"x":400,"y":312},"frameCount":1,"looping":true,"frameDelay":2,"version":"Nn9DKAJvr5aApsY9qR9bKcvYnU_L_U85","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":312},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Nn9DKAJvr5aApsY9qR9bKcvYnU_L_U85/category_retro/retroaliens_08.png"},"e8d3fbed-4a92-4530-ab94-de90ce9d792a":{"name":"alien3","sourceUrl":"assets/api/v1/animation-library/gamelab/OCvk08hqB.Mgfooy3ajTc22E_.Xgqw5w/category_retro/retroaliens_15.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"OCvk08hqB.Mgfooy3ajTc22E_.Xgqw5w","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/OCvk08hqB.Mgfooy3ajTc22E_.Xgqw5w/category_retro/retroaliens_15.png"},"3cc3d3ee-04a3-4278-93b4-074a440ba9d9":{"name":"nave","sourceUrl":null,"frameSize":{"x":380,"y":398},"frameCount":1,"looping":true,"frameDelay":12,"version":"EXYLfWJaUXM3MblM.Y4jRpIOOhW1Jimt","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":398},"rootRelativePath":"assets/3cc3d3ee-04a3-4278-93b4-074a440ba9d9.png"},"eb932b63-f5e5-47de-82a2-a18235be31c9":{"name":"fim","sourceUrl":"assets/api/v1/animation-library/gamelab/g5oABvfMdI51LfKaIk8Ody01cBqBF_Gd/category_retro/retroship_08.png","frameSize":{"x":385,"y":283},"frameCount":1,"looping":true,"frameDelay":2,"version":"g5oABvfMdI51LfKaIk8Ody01cBqBF_Gd","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":385,"y":283},"rootRelativePath":"assets/api/v1/animation-library/gamelab/g5oABvfMdI51LfKaIk8Ody01cBqBF_Gd/category_retro/retroship_08.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var nave = createSprite(200,345,30,30);
nave.shapeColor="";
nave.setAnimation("nave");
nave.scale=0.2;
var sim = createSprite(200,250,10,10);
sim.shapeColor="";
sim.setAnimation("alien");
sim.scale = 0.06;
var nao = createSprite(200,150,10,10);
nao.shapeColor="";
nao.setAnimation("alien2");
nao.scale = 0.08;
var a = createSprite(200,50,10,10);
a.shapeColor="";
a.setAnimation("alien3");
a.scale = 0.10;
var final = createSprite(200,5,200,20);
final.shapeColor="red";
final.setAnimation("fim");
final.scale = 0.30;
var win = 0;
var death = 0;
sim.setVelocity(-10,0);
nao.setVelocity(10,0);
a.setVelocity(-10,0);
function draw() {
background("black");

createEdgeSprites();
nave.bounceOff(edges);
sim.bounceOff(edges);
nao.bounceOff(edges);
a.bounceOff(edges);
if(keyDown(UP_ARROW)){
  nave.y=nave.y-3;
}
if(keyDown(DOWN_ARROW)){
  nave.y=nave.y+3;
}
if (nave.isTouching(final)){
  win = win +1;
}
textSize(20);
fill("");
text("win: "+win,40,50);

if(keyDown(LEFT_ARROW)){
  nave.x=nave.x-3;
}
if(keyDown(RIGHT_ARROW)){
  nave.x=nave.x+3;
}
if(nave.isTouching(sim)|| nave.isTouching(nao)|| nave.isTouching(a)){
  nave.x=200;
  nave.y=350;
  death = death+1;
}
textSize(20);
  fill("");
  text("death:"+death,20,350);
  
drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
