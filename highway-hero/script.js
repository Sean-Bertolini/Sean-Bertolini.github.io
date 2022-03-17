document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({titleScreenImageURL: "./img/title-screen.png", makeResponsive: true, actionRadius: 100, timeBetweenNPCs: 7500, npcCollisionRadius: 1000, actionDuration:2000, jumpHeight: 200, numOfCollectables: 2, removeCollectableAfterCollected: true, npcMoveToX: 175, removeNPCAfterInteracted: false, typesOfNPC: 100, removeNPCAfterInteractedDelay: 5000});
});
