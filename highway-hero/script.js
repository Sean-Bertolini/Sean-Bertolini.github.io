document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({titleScreenImageURL: "./img/title-screen.png", makeResponsive: true, actionRadius: 100, timeBetweenNPCs: 7500, npcCollisionRadius: 500, actionDuration:600, jumpHeight: 200, numOfCollectables: 2, removeCollectableAfterCollected: true, npcMoveToX: 275, removeNPCAfterInteracted: false, typesOfNPC: 100});
});
