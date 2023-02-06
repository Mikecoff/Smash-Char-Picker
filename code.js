onEvent("Pl1", "click", function( ) {
	setScreen("Player1");
});
onEvent("Home", "click", function( ) {
	setScreen("StartScreen");
});
onEvent("Home4", "click", function( ) {
	setScreen("StartScreen");
});
onEvent("esteregg", "click", function( ) {
	setScreen("screen1");
});
onEvent("char1", "change", function( ) {
  setText("Product", (getText("char1") + getText(",")) + ((getText("char2")+ getText(",")) + getText("char3")));
});
onEvent("char2", "change", function( ) {
  setText("Product", (getText("char1") + getText(",")) + ((getText("char2")+ getText(",")) + getText("char3")));
});
onEvent("char3", "change", function( ) {
  setText("Product", (getText("char1") + getText(",")) + ((getText("char2")+ getText(",")) + getText("char3")));
});
