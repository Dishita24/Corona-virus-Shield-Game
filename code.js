var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["1a3c82db-9c5b-4bbc-b492-17c7ba84ca38","d72e2991-54ba-4649-9b2d-10f2162ef68e","8d58a0d6-70c6-41a7-8cad-aba1becc5a97","d34efe17-edec-48aa-ac8a-52022df7cec4","404c0c57-2259-476f-abba-ea9a39c3a8cc","65268316-50d9-4c89-9dda-f0efb68713ad","93297881-3cbf-4c7c-930e-f945bdaebc3c","c3397503-0aac-4e02-9316-b8234fccf64d","28b43fb7-6112-415f-8ecd-9ff0c75bdc89","7c775d35-ef7e-47ba-b8c2-76d32475cac2","af53e080-fcf4-42c9-9158-100eb92bd3d3","7fb324ce-500f-4ee8-b1a1-2aa13ad87955"],"propsByKey":{"1a3c82db-9c5b-4bbc-b492-17c7ba84ca38":{"name":"coronavirus_comp.jpg_1","sourceUrl":"assets/v3/animations/Ww_jYsrqkEsUOKPIiX8WTkAoVNIO-F1Np9BYyiaCT_A/1a3c82db-9c5b-4bbc-b492-17c7ba84ca38.png","frameSize":{"x":750,"y":1000},"frameCount":1,"looping":true,"frameDelay":4,"version":"eMdeVNNij2fqKY7Sm5Xj0lUIfPQpUBZu","loadedFromSource":true,"saved":true,"sourceSize":{"x":750,"y":1000},"rootRelativePath":"assets/v3/animations/Ww_jYsrqkEsUOKPIiX8WTkAoVNIO-F1Np9BYyiaCT_A/1a3c82db-9c5b-4bbc-b492-17c7ba84ca38.png"},"d72e2991-54ba-4649-9b2d-10f2162ef68e":{"name":"Happycommunitycompfinal.png_1","sourceUrl":null,"frameSize":{"x":900,"y":450},"frameCount":1,"looping":true,"frameDelay":12,"version":"J99sPSRsePLVowb48whe2nqHV29iowci","loadedFromSource":true,"saved":true,"sourceSize":{"x":900,"y":450},"rootRelativePath":"assets/d72e2991-54ba-4649-9b2d-10f2162ef68e.png"},"8d58a0d6-70c6-41a7-8cad-aba1becc5a97":{"name":"vaccine1_comp.jpg_1","sourceUrl":"assets/v3/animations/Ww_jYsrqkEsUOKPIiX8WTkAoVNIO-F1Np9BYyiaCT_A/8d58a0d6-70c6-41a7-8cad-aba1becc5a97.png","frameSize":{"x":1024,"y":1024},"frameCount":1,"looping":true,"frameDelay":4,"version":"j6r_3KdMbZuYp1cpyRcOo2pCmFUXAYME","loadedFromSource":true,"saved":true,"sourceSize":{"x":1024,"y":1024},"rootRelativePath":"assets/v3/animations/Ww_jYsrqkEsUOKPIiX8WTkAoVNIO-F1Np9BYyiaCT_A/8d58a0d6-70c6-41a7-8cad-aba1becc5a97.png"},"d34efe17-edec-48aa-ac8a-52022df7cec4":{"name":"mask.jpg_1","sourceUrl":null,"frameSize":{"x":1600,"y":1689},"frameCount":1,"looping":true,"frameDelay":12,"version":"ELZO9NbSe44vb4fDXXiXRbIaWHkJAqVw","loadedFromSource":true,"saved":true,"sourceSize":{"x":1600,"y":1689},"rootRelativePath":"assets/d34efe17-edec-48aa-ac8a-52022df7cec4.png"},"404c0c57-2259-476f-abba-ea9a39c3a8cc":{"name":"washinghands.jpg_1","sourceUrl":"assets/v3/animations/Ww_jYsrqkEsUOKPIiX8WTkAoVNIO-F1Np9BYyiaCT_A/404c0c57-2259-476f-abba-ea9a39c3a8cc.png","frameSize":{"x":820,"y":597},"frameCount":1,"looping":true,"frameDelay":4,"version":"hnJlDwnsVOTLBhy.JPiK8qoMjWeEK429","loadedFromSource":true,"saved":true,"sourceSize":{"x":820,"y":597},"rootRelativePath":"assets/v3/animations/Ww_jYsrqkEsUOKPIiX8WTkAoVNIO-F1Np9BYyiaCT_A/404c0c57-2259-476f-abba-ea9a39c3a8cc.png"},"65268316-50d9-4c89-9dda-f0efb68713ad":{"name":"socialdistancing2.jpg_1","sourceUrl":"assets/v3/animations/Ww_jYsrqkEsUOKPIiX8WTkAoVNIO-F1Np9BYyiaCT_A/65268316-50d9-4c89-9dda-f0efb68713ad.png","frameSize":{"x":626,"y":417},"frameCount":1,"looping":true,"frameDelay":4,"version":"E76OhOz0hwsOtZPFp_HQ.5Yb.39Cn7VA","loadedFromSource":true,"saved":true,"sourceSize":{"x":626,"y":417},"rootRelativePath":"assets/v3/animations/Ww_jYsrqkEsUOKPIiX8WTkAoVNIO-F1Np9BYyiaCT_A/65268316-50d9-4c89-9dda-f0efb68713ad.png"},"93297881-3cbf-4c7c-930e-f945bdaebc3c":{"name":"handsanitizercomp.jpg_1","sourceUrl":"assets/v3/animations/Ww_jYsrqkEsUOKPIiX8WTkAoVNIO-F1Np9BYyiaCT_A/93297881-3cbf-4c7c-930e-f945bdaebc3c.png","frameSize":{"x":588,"y":854},"frameCount":1,"looping":true,"frameDelay":4,"version":"8BlwWNEtF6WywPmDAH42INMzFGRPJIdp","loadedFromSource":true,"saved":true,"sourceSize":{"x":588,"y":854},"rootRelativePath":"assets/v3/animations/Ww_jYsrqkEsUOKPIiX8WTkAoVNIO-F1Np9BYyiaCT_A/93297881-3cbf-4c7c-930e-f945bdaebc3c.png"},"c3397503-0aac-4e02-9316-b8234fccf64d":{"name":"covid message.jpg_1","sourceUrl":"assets/v3/animations/Ww_jYsrqkEsUOKPIiX8WTkAoVNIO-F1Np9BYyiaCT_A/c3397503-0aac-4e02-9316-b8234fccf64d.png","frameSize":{"x":418,"y":217},"frameCount":1,"looping":true,"frameDelay":4,"version":"8c7h9F_Gj4SIhJZehFczihOuZuECKS6X","loadedFromSource":true,"saved":true,"sourceSize":{"x":418,"y":217},"rootRelativePath":"assets/v3/animations/Ww_jYsrqkEsUOKPIiX8WTkAoVNIO-F1Np9BYyiaCT_A/c3397503-0aac-4e02-9316-b8234fccf64d.png"},"28b43fb7-6112-415f-8ecd-9ff0c75bdc89":{"name":"lemonjuice (4).jpg_1","sourceUrl":"assets/v3/animations/Ww_jYsrqkEsUOKPIiX8WTkAoVNIO-F1Np9BYyiaCT_A/28b43fb7-6112-415f-8ecd-9ff0c75bdc89.png","frameSize":{"x":800,"y":857},"frameCount":1,"looping":true,"frameDelay":4,"version":"DXz_iX38qIamCOm1hbNPD0qeAW8TG2xm","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":857},"rootRelativePath":"assets/v3/animations/Ww_jYsrqkEsUOKPIiX8WTkAoVNIO-F1Np9BYyiaCT_A/28b43fb7-6112-415f-8ecd-9ff0c75bdc89.png"},"7c775d35-ef7e-47ba-b8c2-76d32475cac2":{"name":"immunityboosters (1).jpg_1","sourceUrl":"assets/v3/animations/Ww_jYsrqkEsUOKPIiX8WTkAoVNIO-F1Np9BYyiaCT_A/7c775d35-ef7e-47ba-b8c2-76d32475cac2.png","frameSize":{"x":626,"y":626},"frameCount":1,"looping":true,"frameDelay":4,"version":"Skw_BOrGyAfJuzdXbJKWbiPmty5ojMdT","loadedFromSource":true,"saved":true,"sourceSize":{"x":626,"y":626},"rootRelativePath":"assets/v3/animations/Ww_jYsrqkEsUOKPIiX8WTkAoVNIO-F1Np9BYyiaCT_A/7c775d35-ef7e-47ba-b8c2-76d32475cac2.png"},"af53e080-fcf4-42c9-9158-100eb92bd3d3":{"name":"coronashield.jpg_1","sourceUrl":"assets/v3/animations/Ww_jYsrqkEsUOKPIiX8WTkAoVNIO-F1Np9BYyiaCT_A/af53e080-fcf4-42c9-9158-100eb92bd3d3.png","frameSize":{"x":590,"y":691},"frameCount":1,"looping":true,"frameDelay":4,"version":"Sa__h8WXnxJDOMIaALTpd..bxxy2zDu7","loadedFromSource":true,"saved":true,"sourceSize":{"x":590,"y":691},"rootRelativePath":"assets/v3/animations/Ww_jYsrqkEsUOKPIiX8WTkAoVNIO-F1Np9BYyiaCT_A/af53e080-fcf4-42c9-9158-100eb92bd3d3.png"},"7fb324ce-500f-4ee8-b1a1-2aa13ad87955":{"name":"family-and-friends-png-5.png_1","sourceUrl":"assets/v3/animations/Ww_jYsrqkEsUOKPIiX8WTkAoVNIO-F1Np9BYyiaCT_A/7fb324ce-500f-4ee8-b1a1-2aa13ad87955.png","frameSize":{"x":3534,"y":2510},"frameCount":1,"looping":true,"frameDelay":4,"version":"t_QZ.MXvvgCLXSp5g9MPId4jdBEAfXWg","loadedFromSource":true,"saved":true,"sourceSize":{"x":3534,"y":2510},"rootRelativePath":"assets/v3/animations/Ww_jYsrqkEsUOKPIiX8WTkAoVNIO-F1Np9BYyiaCT_A/7fb324ce-500f-4ee8-b1a1-2aa13ad87955.png"}}};
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

var life = 10;

var boundary1, boundary2;
boundary1 = createSprite(20,340,800,3);
boundary2 = createSprite(20,60,800,3);
  
var coronavirus= createSprite(36,220,18,18);
coronavirus.setAnimation("coronavirus_comp.jpg_1");
coronavirus.scale=0.055;
  
var sanitizer = createSprite(100,130,10,10);
sanitizer.setAnimation("handsanitizercomp.jpg_1");
sanitizer.scale=0.075;

var handwash = createSprite(215,130,10,10);
handwash.setAnimation("washinghands.jpg_1");
handwash.scale=0.075;

var mask = createSprite(165,250,10,10);
mask.setAnimation("mask.jpg_1");
mask.scale=0.04;

var vaccine = createSprite(265,250,10,10);
vaccine.setAnimation("vaccine1_comp.jpg_1");
vaccine.scale=0.05;

var familyfriends=createSprite(360,90,150,20);
familyfriends.setAnimation("family-and-friends-png-5.png_1");
familyfriends.scale=0.03;  

var happyfamily=createSprite(325,225,150,20);
happyfamily.setAnimation("Happycommunitycompfinal.png_1");
happyfamily.scale=0.5;
  

  
  
 
//add the velocity to make the car move.

sanitizer.velocityY=9
handwash.velocityY=9
mask.velocityY=-9
vaccine.velocityY=-9

function draw() {
   background("white");
   fill("red")
   rect(0, 0, 400, 60);
   textSize(25)
   textFont("cursive")
   fill(rgb(randomNumber(0,255),randomNumber(0,255),randomNumber(0,255)));
   stroke("black")
   strokeWeight(4)
   text("Corona Shield Game ",60,40);
   
var coronashield = createSprite(30,30,10,10);
coronashield.setAnimation("coronashield.jpg_1");
coronashield.scale=0.055;
fill("red")
//rect(0, 340, 400, 60);
   playSound("sound123.mp3", true);
   
   fill("skyblue")
   textSize(10)
  text("Corona Attempts: " + life,300,20);
  strokeWeight(0);

// create bounceoff function to make the car bounceoff the boundaries
//Add the condition to make the virus move left right top and bottom
if (keyDown("LEFT_ARROW")) {
  coronavirus.x=coronavirus.x-5
}

if (keyDown("RIGHT_ARROW")) {
  coronavirus.x=coronavirus.x+5
}
if (keyDown("LEFT_ARROW")) {
  coronavirus.x=coronavirus.x-5
}

if (keyDown("UP_ARROW")) {
  coronavirus.y=coronavirus.y-5
}
if (keyDown("DOWN_ARROW")) {
  coronavirus.y=coronavirus.y+5
}

//Add the condition to reduce the life of the corona virus if it touches the shields.

if (coronavirus.isTouching(sanitizer)||coronavirus.isTouching(handwash)||coronavirus.isTouching(mask)||coronavirus.isTouching(vaccine)) {
coronavirus.x=20
coronavirus.y=190
life=life-1
playSound("assets/category_explosion/8bit_explosion.mp3", false);

}


sanitizer.bounceOff(boundary1)
sanitizer.bounceOff(boundary2)
handwash.bounceOff(boundary1)
handwash.bounceOff(boundary2)
mask.bounceOff(boundary1)
mask.bounceOff(boundary2)
vaccine.bounceOff(boundary1)
vaccine.bounceOff(boundary2)
coronavirus.bounceOff(boundary1)
coronavirus.bounceOff(boundary2)

drawSprites();
 if (life===0) {
   fill("white")
  //rect(0, 340, 400, 60);
   noStroke()
   noFill()
   fill("white")
   text("U R SAFE EVERYTIME",280,55);
//background("")
coronavirus.destroy();
sanitizer.destroy();
handwash.destroy();
mask.destroy();
vaccine.destroy();
happyfamily.destroy();
familyfriends.destroy();

   //playSound("assets/category_music/birthday_kazoo_negative_game_cue_1.mp3",false);
var happyteam = createSprite(250,370,10,10);
happyteam.setAnimation("covid message.jpg_1");
happyteam.scale=0.5;

var sanitizer1 = createSprite(30,100,10,10);
sanitizer1.setAnimation("handsanitizercomp.jpg_1");
sanitizer1.scale=0.075;

var handwash1 = createSprite(30,170,10,10);
handwash1.setAnimation("washinghands.jpg_1");
handwash1.scale=0.075;

var mask1 = createSprite(20,220,10,10);
mask1.setAnimation("mask.jpg_1");
mask1.scale=0.05;

var vaccine1 = createSprite(25,290,10,10);
vaccine1.setAnimation("vaccine1_comp.jpg_1");
vaccine1.scale=0.06;

var socialdistancing = createSprite(50,360,10,10);
socialdistancing.setAnimation("socialdistancing2.jpg_1");
socialdistancing.scale=0.16;

var lemonjuice = createSprite(80,150,10,10);
lemonjuice.setAnimation("lemonjuice (4).jpg_1");
lemonjuice.scale=0.06;

var immunityboosters = createSprite(80,250,10,10);
immunityboosters.setAnimation("immunityboosters (1).jpg_1");
immunityboosters.scale=0.095;


fill("black")
rect(115, 95, 320, 210);




textSize(15);
fill("yellow")
stroke("white")
strokeWeight(1)
textFont("cursive")

text("Wash your hands and Sanitize regularly ...", 120, 130);
text("Wear a mask and take Vaccine quickly...",120,160);
text("Drink warm lemon juice every morning..." ,120,190);
text("And always maintain Social Distancing. ",120,220);
textSize(18);
fill("white")
stroke("red")
strokeWeight(1)
textFont("cursive")
text("Prevention is better than Cure... ",120,250);
text("Be Safe and  healthy  for Sure !! ",120,280);
playSpeech("So u now know. Prevention is better than cure...so be safe and healthy for sure","male","English")
   
}
}
playSpeech("Welcome to the Corona Shield Game. Lets check if we follow all safety measures, can corona virus reach our family and friends? Use the arrow keys to move the virus. You can Start Playing Now","male","English")

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
