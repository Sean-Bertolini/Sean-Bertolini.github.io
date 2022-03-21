document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({titleScreenImageURL: "./img/title-screen.gif", preGameScreenImageURLs: ["./img/pregame-screen-1.png", "./img/pregame-screen-2.png"] , makeResponsive: true, actionRadius: 100, timeBetweenNPCs: 7500, npcCollisionRadius: 1000, removeNPCAfterInteractedDelay: 50000, actionDuration:1450, jumpHeight: 200, numOfCollectables: 2, removeCollectableAfterCollected: true, npcMoveToX: 190, removeNPCAfterInteracted: false, typesOfNPC: 100,});
});
