//verbindung zum server localhost port 9000
var socket = io.connect('http://localhost:9000');

function clixxx(id, param){
	socket.emit(id, param);
}

//Server sendet EVENT 0
socket.on('0',function(anonym){
	showMovementPhaseAnimation(anonym);
});

//Server sendet EVENT 1
socket.on('1',function(anonym){
	$("#LvlUpMarker").css("visibility", "hidden");
  	$("#lvl").css("visibility", "visible");
});




//Server sendet EVENT 11
socket.on('11',function(anonym){
	$("#dmin").html(anonym.pDmin);
});

//Server sendet EVENT 12
socket.on('12',function(anonym){
	pressed(anonym);
});

//Server sendet EVENT 13
socket.on('13',function(anonym){
	released(anonym);
});

//Server sendet EVENT 14
socket.on('14',function(anonym){
	$("#amin").html(anonym.pAmin);
});

//Server sendet EVENT 15
socket.on('15',function(anonym){
	pressed(anonym);
});

//Server sendet EVENT 16
socket.on('16',function(anonym){
	released(anonym);
});

//Server sendet EVENT 17
socket.on('17',function(anonym){
	$("#abmin").html(anonym.pAbmin);
});

//Server sendet EVENT 18
socket.on('18',function(anonym){
	pressed(anonym);
});

//Server sendet EVENT 19
socket.on('19',function(anonym){
	released(anonym);
});

//Server sendet EVENT 20
socket.on('20',function(anonym){
	$("#esmin").html(anonym.pEsmin);
	$("#amin").html(anonym.pAmin);
});

//Server sendet EVENT 21
socket.on('21',function(anonym){
	pressed(anonym);
});

//Server sendet EVENT 22
socket.on('22',function(anonym){
	released(anonym);
});

//Server sendet EVENT 23 - angepasst
socket.on('23',function(anonym){
	setFieldParas1(anonym.reihenAnzahl);
});

//Server sendet EVENT 24 - angepasst
socket.on('24',function(anonym){
	setFieldParas3(anonym.reihenLaenge);
});

//Server sendet EVENT 25 - angepasst
socket.on('25',function(anonym){
	setFieldParas2(anonym.monsterAnzahl);
});

//EVENT 26 - ActionEvent/NoEmit

//Server sendet EVENT 27
socket.on('27',function(anonym){
	window.location.reload();
	document.getElementById('reihenAnzahl').value='';
	document.getElementById('monsterAnzahl').value='';
	document.getElementById('reihenLänge').value=''; 
});

  // DELETED EVENT 28

//Server sendet EVENT 29
socket.on('29',function(anonym){
	showMonsterChooser();
});

//Server sendet EVENT 30
socket.on('30',function(anonym){
	hideMonsterChooser();
});

//Server sendet EVENT 31
socket.on('31',function(anonym){
	load_stats();
});

//Server sendet EVENT 32
socket.on('32',function(anonym){
	lvl();
});

//Server sendet EVENT 33
socket.on('33',function(anonym){
	EXPGain(anonym.exp);
});

//Server sendet EVENT 34
socket.on('34',function(anonym){
	blockAction();
});

//EVENT 35 - ActionEvent/NoEmit

//EVENT 36 - ActionEvent/NoEmit

//EVENT 37 - ActionEvent/NoEmit

//EVENT 38 - DELETED

//EVENT 39 - ActionEvent/NoEmit

//Server sendet EVENT 40
socket.on('40',function(anonym){
	addTiles(anonym);
	showTiles(anonym);
});

//Server sendet EVENT 41
socket.on('41',function(anonym){
	addTemplates(anonym);
});

//Server sendet EVENT 42 - ALERTS
socket.on('42',function(anonym){
	alert(anonym);
});

//Server sendet EVENT 43
socket.on('43',function(anonym){
	movePlayer(anonym);
});

//Server sendet EVENT 44
socket.on('44',function(anonym){
	clickSound();
});

//Server sendet EVENT 45
socket.on('45',function(anonym){
	showTiles(anonym.pAmountTiles, anonym.pNumberArrayTiles);
});

//Server sendet EVENT 46
socket.on('46',function(anonym){
	StabSound();
    document.getElementById(anonym.elementNumber).src = "Bilddaten/Spielfeld/MonsterImg.png";
});

//Server sendet EVENT 47
socket.on('47',function(anonym){
	showGameStartAnimation();

});

//Server sendet EVENT 48
socket.on('48',function(anonym){
	$("#characterSheet").css("visibility", "visible");
});

//Server sendet EVENT 49
socket.on('49',function(anonym){
	swordSound(); 
});

//Server sendet EVENT 50
socket.on('50',function(anonym){
	changeTemplate(anonym);
});

//Server sendet EVENT 51
socket.on('51',function(anonym){
	changePlayer(anonym);
});

//Server sendet EVENT 52
socket.on('52',function(anonym){
	updateCharSheet(anonym);
});

//EVENT 53 - ActionEvent/NoEmit

//Server sendet EVENT 54
socket.on('54',function(anonym){
	bewegeRahmen(anonym);
});

//Server sendet EVENT 55
socket.on('55',function(anonym){
	$(anonym.pInput).html = anonym.pAttackC;
});

//Server sendet EVENT 56
socket.on('56',function(anonym){
	$("#dmin").html(anonym.pDmin); 
    $("#amin").html(anonym.pAmin);
});

//Server sendet EVENT 57
socket.on('57',function(anonym){
	$("#l_min_c").html(anonym.pLminC);
    setTimeout(function(){$(".c").toggleClass("ca");},1000);
    $(".c").toggleClass("ca");
        //auditives Feedback
    gotHitSound();
});

//Server sendet EVENT 58
socket.on('58',function(anonym){
	$("#l_min_m").html(anonym.pLminM);
    setTimeout(function(){$(".m").toggleClass("ma");},1000);
    $(".m").toggleClass("ma");

      //auditives+visuelles Feedback
    batGotHitSound();
    showFightAnimation("HIT");
});

//Server sendet EVENT 59
socket.on('59',function(anonym){
	$("#phaseFrame").css("left", anonym.pX+"px");
});

//Server sendet EVENT 60
socket.on('60',function(anonym){
	dieSound();
	$(".rightFight").animate({width:'toggle'}, 2500, "easeOutExpo");
    $(".leftFight").animate({width:'toggle'}, 2500, "easeOutExpo");
    setTimeout(function(){$("#fight").css("visibility", "hidden"); $("#phaseFrame").css("visibility", "hidden");}, 2500);
    showFightAnimation("!! LOST !!");
});

//Server sendet EVENT 61
socket.on('61',function(anonym){
	showReincarnationAnimation();
});

//Server sendet EVENT 62
socket.on('62',function(anonym){
	setTimeout(function(){showFightAnimation(anonym.pInput)}, anonym.pTime);
});

//Server sendet EVENT 63
socket.on('63',function(anonym){
	$(".rightFight").animate({width:'toggle'}, 2500, "easeOutExpo");
    $(".leftFight").animate({width:'toggle'}, 2500, "easeOutExpo");
    setTimeout(function(){$("#fight").css("visibility", "hidden"); $("#phaseFrame").css("visibility", "hidden");}, 2500);
});

//Server sendet EVENT 64
socket.on('64',function(anonym){
	showEXPGain(anonym.pCurrentEXP, 100);
});

//Server sendet EVENT 65
socket.on('65',function(anonym){
	setTimeout(function() {   

        //Neues Level im CharSheet sichtbarmachen
    $("#levelCounter").html(""+anonym.pPlayerLvl);
        //Animation erneut mit überschüssigen EXP ausführen
    showEXPGain(0, anonym.pOverrunEXP);

  }, (100-anonym.pCurrentEXP)*15);
});

//Server sendet EVENT 66
socket.on('66',function(anonym){
	showEXPGain(anonym.pCurrentEXP, anonym.pNewEXP);
});

//Server sendet EVENT 67
socket.on('67',function(anonym){
	showFieldWinAnimation(anonym);
});

//Server sendet EVENT 68
socket.on('68',function(anonym){
	showEasyKonfig();
});

//Server sendet EVENT 69
socket.on('69',function(anonym){
	showModerateKonfig();
});

//Server sendet EVENT 70
socket.on('70',function(anonym){
	showStrongKonfig();
});

//Server sendet EVENT 71
socket.on('71',function(anonym){
	showInsaneKonfig();
});


//Server sendet EVENT 72
socket.on('72',function(anonym){
	$("#blocker").css("visibility", "hidden");
});

//Server sendet EVENT 77
socket.on('77',function(anonym){
	$("#lvl").css("visibility", "hidden");
});

//Server sendet EVENT 73
socket.on('73',function(anonym){
	$("#blocker").css("visibility", "visible");
});

//Server sendet EVENT 74
socket.on('74',function(anonym){
	$(anonym.pId).html(anonym.pInput);
});

//Server sendet EVENT 75
socket.on('75',function(anonym){
	blockSound();
});

//Server sendet EVENT 76
socket.on('76',function(anonym){
	swordDrawSound();
});


//Server sendet EVENT 1000
socket.on('1000',function(anonym){
	startFightRoutine(0, 0);
});

//Server sendet EVENT 2000
socket.on('2000',function(anonym){
	startFight(anonym);
});

//Server sendet EVENT 5000
socket.on('5000',function(anonym){	
	checkRegistration(anonym);
});

//Server sendet EVENT 5001
socket.on('5001',function(anonym){	
	registration(anonym);
});

//Server sendet EVENT 5000
socket.on('5002',function(anonym){	
	if(anonym.check==true){
		alert("Login successfully!");
		visibilitySwitcher('#loged_in','#login');
	}
	else{
		alert("Login failed!");
	}
});











////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////// ALL FUNCTIONS ARE FOR RENDERING ONLY ///////////////////////////////////////////////////////
/////////////////////////////////////////////////////// OTHER FUNCTIONS ARE SPECIFIC TO NODE ///////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// GLOBALE DATENFELDER

////////////////////////////////
// Eingabefelder Registration //
////////////////////////////////

var checkMail;
var checkPW;
var checkUser;

//////////////////////
// Benötigte Bilder //
//////////////////////

//Spieler CharBilder
var charIMGs = new Array();

charIMGs[1] = new Image(); charIMGs[1].src = "Bilddaten/CharSheet/Spieler1.jpg";
charIMGs[2] = new Image(); charIMGs[2].src = "Bilddaten/CharSheet/Spieler2.jpg";
charIMGs[3] = new Image(); charIMGs[3].src = "Bilddaten/CharSheet/Spieler3.jpg";
charIMGs[4] = new Image(); charIMGs[4].src = "Bilddaten/CharSheet/Spieler4.jpg";

//Spieler Bilder
var players = new Array();

players[1] = new Image(); players[1].src = "Bilddaten/Spielfeld/player1.png";
players[2] = new Image(); players[2].src = "Bilddaten/Spielfeld/player2.png";
players[3] = new Image(); players[3].src = "Bilddaten/Spielfeld/player3.png";
players[4] = new Image(); players[4].src = "Bilddaten/Spielfeld/player4.png";


//TemplateIMG Array
var AllTemplatesIMG = new Array();

// // Monster Bilder
// var monster = new Array();

// monster[0] = new Image(); monster[0].src = "Monster7.png";
// monster[1] = new Image(); monster[1].src = "Monster7.png";
// monster[2] = new Image(); monster[2].src = "Monster7.png";
// monster[3] = new Image(); monster[3].src = "Monster7.png";


//Ebenen Bilder
var terrains = new Array();

terrains[0] = new Image(); terrains[0].src = "Bilddaten/Spielfeld/Weg.png";
terrains[1] = new Image(); terrains[1].src = "Bilddaten/Spielfeld/Gras.png";
terrains[2] = new Image(); terrains[2].src = "Bilddaten/Spielfeld/Wald.png";
terrains[3] = new Image(); terrains[3].src = "Bilddaten/Spielfeld/Sand.png";
terrains[4] = new Image(); terrains[4].src = "Bilddaten/Spielfeld/Sumpf.png";
terrains[5] = new Image(); terrains[5].src = "Bilddaten/Spielfeld/Berg.png";

//Ebenen Bilder, wenn ausgewählt
var terrainsAktuell = new Array();

terrainsAktuell[0] = new Image(); terrainsAktuell[0].src = "Bilddaten/Spielfeld/WegAktuell.png";
terrainsAktuell[1] = new Image(); terrainsAktuell[1].src = "Bilddaten/Spielfeld/GrasAktuell.png";
terrainsAktuell[2] = new Image(); terrainsAktuell[2].src = "Bilddaten/Spielfeld/WaldAktuell.png";
terrainsAktuell[3] = new Image(); terrainsAktuell[3].src = "Bilddaten/Spielfeld/SandAktuell.png";
terrainsAktuell[4] = new Image(); terrainsAktuell[4].src = "Bilddaten/Spielfeld/SumpfAktuell.png";
terrainsAktuell[5] = new Image(); terrainsAktuell[5].src = "Bilddaten/Spielfeld/BergAktuell.png";

//Bilder von Zahlen stellvertretend für die Bewegungsschwierigkeit der Ebenen
var terrainsDifficulties = new Array();

terrainsDifficulties[0] = new Image(); terrainsDifficulties[0].src = "Bilddaten/Spielfeld/Eins.png";
terrainsDifficulties[1] = new Image(); terrainsDifficulties[1].src = "Bilddaten/Spielfeld/Zwei.png";
terrainsDifficulties[2] = new Image(); terrainsDifficulties[2].src = "Bilddaten/Spielfeld/Drei.png";
terrainsDifficulties[3] = new Image(); terrainsDifficulties[3].src = "Bilddaten/Spielfeld/Vier.png";
terrainsDifficulties[4] = new Image(); terrainsDifficulties[4].src = "Bilddaten/Spielfeld/Fuenf.png";
terrainsDifficulties[5] = new Image(); terrainsDifficulties[5].src = "Bilddaten/Spielfeld/Sechs.png";

// //Monster Icon
// var MonsterSRC = new Image(); MonsterSRC.src = "Monster1.png";
var TempSRC = new Image(); TempSRC.src = "Bilddaten/Spielfeld/temp.png";


///////////////////////////////////
// Methods for Initializing Game //
///////////////////////////////////

function setFieldParas1(newReihenAnzahl) {

  //Falls die Angabe 16 Reihen übersteigt
  if(newReihenAnzahl > 16) {
    document.getElementById ("warning1").innerHTML = "o_O Du spinnst doch. Ich setz das mal auf 16.";
    document.getElementById ("warning1").style.color = "red";
    document.getElementById ("reihenAnzahl").value = "16";
    // amountFieldColumns = 16; - NODE(35)
    clixxx(35, {amountFieldColumns: 16});
  }

  else {

      //Falls die Angabe nicht durch 2 teilbar ist
      if(newReihenAnzahl % 2 == 0) {

        document.getElementById ("warning1").innerHTML = "Ne ungerade Zahl is schöner. Ich pass das mal an.";
        document.getElementById ("warning1").style.color = "red";
        document.getElementById ("reihenAnzahl").value = newReihenAnzahl-1;
        //Die ", 10" im parseInt stehen für das Zahlensystem. Könnte sonst Probleme geben, wenn JS das Oktalsystem nimmt statt das Dezimalsystem
        // amountFieldColumns = parseInt(newReihenAnzahl-1, 10); - NODE(35)
        help = parseInt(newReihenAnzahl-1, 10);
        if (help < 1){
          help = 1;
        }
        clixxx(35, {amountFieldColumns: help});

      }

      else{
        document.getElementById ("warning1").innerHTML = newReihenAnzahl+" Reihen. Viel Spaß";
        document.getElementById ("warning1").style.color = "green";
        // amountFieldColumns = parseInt(newReihenAnzahl, 10); - NODE(35)
        help2 = parseInt(newReihenAnzahl, 10);
        clixxx(35, {amountFieldColumns: help});
      }
    }
  }

  function setFieldParas3(newReihenLänge) {

    if(newReihenLänge > 24) {

      document.getElementById ("warning3").innerHTML = "Nope...";
      document.getElementById ("warning3").style.color = "red";
      document.getElementById ("reihenLänge").value = "24";
    // columnLength = 24; - NODE(36)
    clixxx(36, {columnLength: 24});
  }

  else {

    document.getElementById ("warning3").innerHTML = "Reihenlänge von "+newReihenLänge;
    document.getElementById ("warning3").style.color = "green";
    // columnLength = parseInt(newReihenLänge,10); - NODE(36)
    help = parseInt(newReihenLänge,10);
    clixxx(36, {columnLength: help});
  }

}

function setFieldParas2(newMonsterAnzahl) {
  if(newMonsterAnzahl > 100) {

    document.getElementById ("warning2").innerHTML = "Lebensmüde? 100 reichen auch...";
    document.getElementById ("warning2").style.color = "red";
    document.getElementById ("monsterAnzahl").value = "100";
    // amountMonsters = 100; - NODE(37)
    clixxx(37, {amountMonsters: 100});
  }

  else {

    document.getElementById ("warning2").innerHTML = newMonsterAnzahl+" Monster. Viel Glück";
    document.getElementById ("warning2").style.color = "green";
    // amountMonsters = parseInt(newMonsterAnzahl,10); - NODE(37)
    help = parseInt(newMonsterAnzahl,10);
    clixxx(37, {amountMonsters: help});
  }

}

function showMovementPhaseAnimation(param) {
  var timeShowMovePhaseAnim = 0;

  for(i=0; i <= 5; i++) {

    timeShowMovePhaseAnim += 100;

    setTimeout(function(j) {

      return function() {

        var movementMarker = document.createElement("div");
        movementMarker.innerHTML = "Player "+param.pCurrentPlayerNumber+" - YOUR TURN!";
          //notwendig, damit alles VOR dem Spielfeld angezeigt wird.
          movementMarker.style.zIndex = "2";
          movementMarker.className = "phaseMarker";
          movementMarker.id = "phaseMarker";
          document.getElementById("field").appendChild(movementMarker);

          setTimeout(function() {

            document.getElementById("endTurnButton").style.visibility = "visible";

          }, 3000);

          setTimeout(function() {document.getElementById("field").removeChild(document.getElementById("phaseMarker"))}, 3000);

        }


      } (i), timeShowMovePhaseAnim);

  }

  timeShowMovePhaseAnim = 0;
  // setTimeout(function() { showMovementRange(); }, 3600); - NODE(39)
  setTimeout(function() { clixxx(39); }, 3600);

} 

function startFightRoutine(index, clickedTile) {
  showMonsterChooser();
}

function movePlayer(param) {
  moveSound();
  document.getElementById("movementPoints").innerHTML = param.pCurrentMovementPoints; //TESTZWECKE
  //Die Bewegungspunkte-Anzeige aktualisieren
  $("#move").html(""+param.pCurrentMovementPoints);
}



//Funktion, die schrittweise die Kacheln sichtbar macht
//SOLL KACHELN "NUR" HINZUFÜGEN

function addTiles(param) {
  //xCounter und yCounter bezeichnen die absoluten Positionen der Elemente
  var xCounter = 0;
  var yCounter = 0;
  //Das Element, zu dem die Kacheln hinzugefügt werden
  var field = document.getElementById("field");

  // Schleife, die schrittweise alle Kacheln erzeugt

  var evenColumn = true;
  var currentTileSum = param.c-1;

  for(i=0; i <=param.d; i++) {

    //Fügt das Geländebild hinzu, dass im Array an entsprechender Stelle steht
    tileIMG = terrains[param.a[i]].cloneNode(true);
    tileIMG.id = i;
    tileIMG.className = "tiles";
    tileIMG.style.position="absolute";
    // Setzt die Position der jeweiligen Kachel. "+px" ist nötig, damit der Befehl syntaktisch richtig ausgeführt wird
    tileIMG.style.left = xCounter+"px";
    tileIMG.style.top = yCounter+"px";
    // fügt die Kachel dem Feld hinzu
    field.appendChild(tileIMG); 
    // Macht die Kacheln zunächst unsichtbar, damit sie später per Random-Funktion sichtbar gemacht werden können
    tileIMG.style.visibility = "hidden";

    if(evenColumn == true) {

        //Falls Laufindex modulo 19 ungleich 0 --> Man befindet sich noch in der ersten Zeile
        //Falls Laufindex modulo 19 gleich 0 --> Ende der Zeile erreicht
        //19 ist an dieser Stelle vllt verwirrend, aber effektiv sind es 20 Kacheln, da die erste bei 0 anfängt
        if(i == 0 || i%currentTileSum != 0) {

          xCounter = xCounter+40;

        }

        //else-Teil initialisiert Zeilenwechsel
        else {

          //um 20 einrücken und 34 nach unten verschieben
          xCounter = 20;
          yCounter = yCounter+34;

          //Wechsel zwischen geraden (20 Kacheln) und ungeraden (19 Kacheln) Zeilen
          evenColumn = false;
          //Erste 19er - Reihe gefüllt, currentTileSum um die zugefügt Anzahl erhöhen
          currentTileSum = currentTileSum+(param.c-1);

        }


      }


      else {

        if(i%currentTileSum != 0) {

          xCounter = xCounter+40;

        }

        //else-Teil initialisiert Zeilenwechsel
        else {

          //wieder ausrücken und 34 nach unten verschieben
          xCounter = 0;
          yCounter = yCounter+34;

          //Wechsel zwischen geraden (20 Kacheln) und ungeraden (19 Kacheln) Zeilen
          evenColumn = true;
          currentTileSum = currentTileSum+param.c;

        }

      }

    }
  }

//Funktion, die schrittweise die Kacheln sichtbar macht
var timeShowTiles = 7
function showTiles(param) {
  for (var i = 0; i <= param.d; i++) {

    timeShowTiles += 7;

    setTimeout(function(j) {

      return function() {

        document.getElementById(param.b[j]).style.visibility = "visible";
        if(j%20 == 0) {moveSound();}

      }

    }(i), timeShowTiles);
  }
  timeShowTiles = 0;
}

function addTemplates(param) {
  var xCounter = 0;
  var yCounter = 0;
  var field = document.getElementById("field");

  var evenColumn = true;
  var currentTileSum = param.a-1;

  for(i=0; i<=param.b; i++) {

    templateIMG = new Image(); templateIMG.src = "Bilddaten/Spielfeld/temp.png";
    templateIMG.id = param.b+1+i;
    templateIMG.className = "templateIMGs";
    templateIMG.style.position="absolute";
    templateIMG.style.left = xCounter+"px";
    templateIMG.style.top = yCounter+"px";
    field.appendChild(templateIMG); 

    
    templateIMG.onclick = function(){clixxx(53, this.id);};
    templateIMG.onmouseover = function(){clixxx(54, this.id);};

    AllTemplatesIMG[i] = templateIMG;

    if(evenColumn == true) {

        //Falls Laufindex modulo 19 ungleich 0 --> Man befindet sich noch in einer ungeraden Zeile
        //Falls Laufindex modulo 19 gleich 0 --> Ende der Zeile erreicht
        if(i == 0 || i%currentTileSum != 0) {

          xCounter = xCounter+40;

        }

        //else-Teil initialisiert Zeilenwechsel
        else {

          //um 20 einrücken und 34 nach unten verschieben
          xCounter = 20;
          yCounter = yCounter+34;

          //Wechsel zwischen geraden (20 Kacheln) und ungeraden (19 Kacheln) Zeilen
          evenColumn = false;
          //Erste 19er - Reihe gefüllt, currentTileSum um die zugefügt Anzahl erhöhen
          currentTileSum = currentTileSum+(param.a-1);

        }
      }

      else {

        if(i%currentTileSum != 0) {

          xCounter = xCounter+40;

        }

        //else-Teil initialisiert Zeilenwechsel
        else {

          //wieder ausrücken und 34 nach unten verschieben
          xCounter = 0;
          yCounter = yCounter+34;

          //Wechsel zwischen geraden (20 Kacheln) und ungeraden (19 Kacheln) Zeilen
          evenColumn = true;
          currentTileSum = currentTileSum+param.a;

        }

      }
    }

  }

  function changeTemplate(param){
  // alert('CHANGE TEMPLATE(): position: ' + param.position + ', srz: ' + param.srz + ', difficultyValue: ' + param.difficultyValue + ', playersValue: ' + param.playersValue);
  //io.sockets.emit('50', {position: tile.getID(), srz: "Bilddaten/Spielfeld/temp.png", difficultyValue: null, playersValue: null});
  
  //platzhalter temp
  if(param.difficultyValue == null && param.playersValue == null){
    AllTemplatesIMG[param.position].src = param.srz;
  }
  //Standard herstellen
  else if (param.srz == null && param.playersValue == null){
    AllTemplatesIMG[param.position].src = terrainsDifficulties[param.difficultyValue].src;
  } 
  //Spielercoin setzen
  else if(param.srz == null && param.difficultyValue == null){
    AllTemplatesIMG[param.position].src = players[param.playersValue].src;
  }
  else{
    alert('Problem: DefaultCase - changeTemplate()');
  }
}

function showGameStartAnimation () {    
  var timeShowGameStartAnim = 100;

  monsterGrowlSound();
  var gameStartMarkerBackground = document.createElement("div");
  gameStartMarkerBackground.className = "gameStartMarkerBackground"
  gameStartMarkerBackground.id = "gameStartMarkerBackground";
  document.getElementById("field").appendChild(gameStartMarkerBackground);


  for(i=0; i <= 2; i++) {

    timeShowGameStartAnim += 200;

    setTimeout(function(j) {

      return function() {

        var gameStartMarker = document.createElement("div");
        gameStartMarker.innerHTML = "GAME START";
        gameStartMarker.style.index = "2";
        gameStartMarker.className = "gameStartMarker";
        gameStartMarker.id = "gameStartMarker";
        document.getElementById("gameStartMarkerBackground").appendChild(gameStartMarker);
      }

    } (i), timeShowGameStartAnim);

  }

  timeShowGameStartAnim= 0;
  setTimeout(function() {document.getElementById("field").removeChild(document.getElementById("gameStartMarkerBackground"))}, 5000);
}

//Anzeigeelemente laden
function changePlayer(param){
  //Spielerbild wechseln
  document.images.charImg.src = "Bilddaten/Characters/"+param.pCurrentPlayerImgNumber+".jpg";
  document.images.charImg2.src = "Bilddaten/Characters/"+param.pCurrentPlayerImgNumber+".jpg";
  //Spielername wechseln
  document.getElementById('playerName').innerHTML = param.currentPlayerName;
  document.getElementById('playerName2').innerHTML = param.currentPlayerName;
}


function updateCharSheet(param) {
  //STATS
  $("#sword").html(param.cPPlayerSword); $("#swordMax").html(param.cPPlayerSwordDmg);
  $("#bow").html(param.cPPlayerBow); $("#bowMax").html(param.cPPlayerBowDmg);
  $("#magic").html(param.cPPlayerMagic); $("#magicMax").html(param.cPPlayerMagicDmg);
  $("#life").html(param.cPPlayerLife); $("#lifeMax").html(param.cPPlayerLifeMax);
  
  //RUNES
  $("#heal").html(param.cPPlayerHealPoints); $("#healMax").html(param.cPPlayerHealPointsMax);
  $("#pers").html(param.cPPlayerBoost); $("#persMax").html(param.cPPlayerBoostMax);
  $("#track").html(param.cPPlayerTrackingPoints); $("#trackMax").html(param.cPPlayerTrackingPointsMax);
  $("#xstrike").html(param.cPPlayerXStrikePoints); $("#xstrikeMax").html(param.cPPlayerXStrikePointsMax);
  $("#move").html(param.cPPlayerMovementPoints); $("#moveMax").html(param.cPPlayerMovementPointsMax);
  
  //LVL + EXP
  $("#levelCounter").html(param.cPPlayerLvl);
  $("#LvlUpBarFill").css("width", param.cPPlayerEXP+"%");

}


function showMonsterChooser () {    


  $(document).ready(function(){

    $("#monsterChooser").animate({top: '-20px'}, 1000);
    chainSound();

  });
}

function hideMonsterChooser () {

  $(document).ready(function(){

    $("#monsterChooser").animate({top: '-325px'}, 1000);
    chainSound();

  });
}

function showFightAnimation (Text) {

  var roundMarker = document.createElement("div");
  roundMarker.innerHTML = Text;
  //notwendig, damit alles VOR dem Kampfbildschirm angezeigt wird.
  roundMarker.style.zIndex = "7";
  roundMarker.className = "roundMarker";
  roundMarker.id = "roundMarker";
  document.getElementById("fight").appendChild(roundMarker);

  setTimeout(function() {document.getElementById("fight").removeChild(document.getElementById("roundMarker"))}, 3000);

}

var timeShowReincarnate = 0;
function showReincarnationAnimation () {

  monsterGrowlSound();
  var grimReaper = document.createElement("div");
  grimReaper.className = "grimReaper"
  grimReaper.id = "grimReaper";
  document.getElementById("field").appendChild(grimReaper);


  for(i=0; i <= 2; i++) {

    timeShowReincarnate += 200;

    setTimeout(function(j) {

      return function() {

        var grimReaperText = document.createElement("div");
        grimReaperText.innerHTML = "SECOND CHANCE";
        grimReaperText.className = "grimReaperText";
        grimReaperText.id = "grimReaperText";
        document.getElementById("field").appendChild(grimReaperText);
      }

    } (i), timeShowReincarnate);

  }

  timeShowReincarnate = 0;
  setTimeout(function() {document.getElementById("field").removeChild(document.getElementById("grimReaper"))}, 5000);
  setTimeout(function() {document.getElementById("field").removeChild(document.getElementById("grimReaperText"))}, 5000);
}

function bewegeRahmen(param){
  //letzten Rahmen wieder zurücksetzen
  if(document.getElementById(param.lastBorder).src = terrainsAktuell[param.lastDifficulty].src){
    document.getElementById(param.lastBorder).src = terrains[param.lastDifficulty].src;
  }  
  //setzt Rahmen
  document.getElementById(param.pIndex2).src = terrainsAktuell[param.lastIndexDifficulty].src;
}

function startFight(param) {
  hideMonsterChooser();
  setTimeout(function() {

    metalClashSound();
    writeStats(param); 
    $("#fight").css("visibility", "visible");

    $(".leftFight").hide();
    $(".rightFight").hide();
    $(".rightFight").animate({width:'toggle'}, 2500, "easeOutBounce");
    $(".leftFight").animate({width:'toggle'}, 2500, "easeOutBounce");
    setTimeout(function() {$("#phaseFrame").css("visibility", "visible");}, 2500);

  }, 1000);
}


function writeStats(param){ 

  //Werte eintragen
  $("#me_attack_c").html(param.pMeAttackC);
  $("#me_dmg_c").html(param.pMeDmgC);

  $("#r_attack_c").html(param.pRAttackC);
  $("#r_dmg_c").html(param.pRDmgC);

  $("#ma_attack_c").html(param.pMaAttackC);
  $("#ma_dmg_c").html(param.pMaDmgC);

  $("#l_min_c").html(param.pLMinC);
  $("#l_max_c").html(param.pLMaxC);

  $("#me_attack_m").html(param.pMeAttackM);
  $("#me_dmg_m").html(param.pMeDmgM);

  $("#r_attack_m").html(param.pRAttackM);
  $("#r_dmg_m").html(param.pRDmgM);

  $("#ma_attack_m").html(param.pMaAttackM);
  $("#ma_dmg_m").html(param.pMaDmgM);

  $("#l_min_m").html(param.pLMinM);
  $("#l_max_m").html(param.pLMaxM);

  $("#dmin").html(param.pDim);
  $("#dmax").html(param.pDmax);
  $("#amin").html(param.pAmin);
  $("#amax").html(param.pAmax);
  $("#abmin").html(param.pAbmin);
  $("#abmax").html(param.pAbmax);
  $("#esmin").html(param.pEsmin);
  $("#esmax").html(param.pEsmax);

  $("#phaseFrame").css("left", 480+"px");
}

function pressed(param){
  var id = "#img_" + param.ele_name;
  var src = "Bilddaten/Kampf/"+param.ele_name + "_pressed.png"; 
  $(id).attr("src", src);
}

function released(param){
  var id = "#img_" + param.ele_name;
  var src = "Bilddaten/Kampf/"+param.ele_name + ".png";
  $(id).attr("src", src);
}

var timeShowEXPGain = 0;
function showEXPGain (currentEXP, newEXP) {

  for(i=currentEXP; i <= newEXP; i++) {

    timeShowEXPGain += 15;

    setTimeout(function(j) {

      return function() {

        $("#LvlUpBarFill").css("width", j+"%");

        //Falls LvlUp erreicht
        if(j == 100) {

          lvlUpSound();
          $("#LvlUpMarker").css("visibility", "visible");

        }


      }

    } (i), timeShowEXPGain);
  }


  timeShowEXPGain = 0;
}

var timeShowFieldWinAnim = 0;
function showFieldWinAnimation (param) {

  choralSound();
  var frame1 = document.createElement("div");
  frame1.className = "winFrame1";
  frame1.id = "winFrame1";
  var x = param.pXPosition;
  var y = param.pYPosition;
  document.getElementById("field").appendChild(frame1);
  document.getElementById("winFrame1").style.top=y+"px";
  document.getElementById("winFrame1").style.left=x+"px";

  var frame2 = document.createElement("div");
  frame2.className = "winFrame2";
  frame2.id = "winFrame2";
  document.getElementById("field").appendChild(frame2);
  document.getElementById("winFrame2").style.top=y+"px";
  document.getElementById("winFrame2").style.left=x+"px";

  for(i=0; i <= 10; i++) {

    timeShowFieldWinAnim += 100;

    setTimeout(function(j) {

      return function() {

        if(j%2 != 0) {

          $("#winFrame1").css("visibility", "visible");
          $("#winFrame2").css("visibility", "hidden");

        }

        else {

          $("#winFrame2").css("visibility", "visible");
          $("#winFrame1").css("visibility", "hidden");

        }
      }

    } (i), timeShowFieldWinAnim);

  }

  $("#winFrame2").css("visibility", "hidden");
  $("#winFrame2").css("visibility", "hidden");

  timeShowFieldWinAnim = 0;
  setTimeout(function() {document.getElementById("field").removeChild(document.getElementById("winFrame1"))}, 2000);
  setTimeout(function() {document.getElementById("field").removeChild(document.getElementById("winFrame2"))}, 2000);
}

////////////
// SOUNDS //
////////////


function moveSound() {

  var audio = document.createElement("audio");
  audio.src = "Sounds/Crack.ogg";

  audio.CurrentTime=0;
  audio.play(); 

}

function wooshSound() {

  var audio = document.createElement("audio");
  audio.src = "Sounds/whooosh.ogg";

  audio.CurrentTime=0;
  audio.play(); 

}

function StabSound() {

  var audio = document.createElement("audio");
  audio.src = "Sounds/SwordStab.ogg";

  audio.CurrentTime=0;
  audio.play(); 

}

function swooshSound() {

  var audio = document.createElement("audio");
  audio.src = "Sounds/Swoosh.ogg";

  audio.CurrentTime=0;
  audio.play(); 

}

function swordSound() {

  var audio = document.createElement("audio");
  audio.src = "Sounds/SwordStrike.ogg";

  audio.CurrentTime=0;
  audio.play(); 

}

function chainSound() {

  var audio = document.createElement("audio");
  audio.src = "Sounds/ChainSound.ogg";

  audio.CurrentTime=0;
  audio.play(); 

}

function clickSound() {

  var audio = document.createElement("audio");
  audio.src = "Sounds/ButtonClick1.ogg";

  audio.CurrentTime=0;
  audio.play(); 
}

function dieSound() {

  var audio = document.createElement("audio");
  audio.src = "Sounds/PlayerDies.ogg";

  audio.CurrentTime=0;
  audio.play(); 
}

function winSound() {

  var audio = document.createElement("audio");
  audio.src = "Sounds/EpicWin.ogg";

  audio.CurrentTime=0;
  audio.play(); 
}

function swordDrawSound() {

  var audio = document.createElement("audio");
  audio.src = "Sounds/SwordDrawShort.ogg";

  audio.CurrentTime=0;
  audio.play(); 
}

function blockSound() {

  var audio = document.createElement("audio");
  audio.src = "Sounds/Block2.ogg";

  audio.CurrentTime=0;
  audio.play(); 
}

function batGotHitSound() {

  var audio = document.createElement("audio");
  audio.src = "Sounds/BatIsHit.ogg";

  audio.CurrentTime=0;
  audio.play(); 
}

function gotHitSound() {

  var audio = document.createElement("audio");
  audio.src = "Sounds/PlayerGotHit.ogg";

  audio.CurrentTime=0;
  audio.play(); 
}

function metalClashSound() {

  var audio = document.createElement("audio");
  audio.src = "Sounds/MetalClash6.ogg";

  audio.CurrentTime=0;
  audio.play(); 
}

function choralSound() {

  var audio = document.createElement("audio");
  audio.src = "Sounds/Choral1.ogg";

  audio.CurrentTime=0;
  audio.play(); 
}

function lvlUpSound() {

  var audio = document.createElement("audio");
  audio.src = "Sounds/LvlUp3.ogg";

  audio.CurrentTime=0;
  audio.play(); 
}


function monsterGrowlSound() {

  var audio = preloadSound("Sounds/MonsterGrowl.ogg");
  audio.CurrentTime=0;
  audio.play(); 

}


function preloadSound(src) {
  var sound = document.createElement("audio");
  sound.autoPlay = false;
  sound.src = src;
  document.body.appendChild(sound);
  return sound;
}


function monsterGrowlSound() {

  var audio = document.createElement("audio");
  audio.src = "Sounds/MonsterGrowl.ogg";

  audio.CurrentTime=0;
  audio.play(); 

}



$(document).ready(function(){

  var allButtonsMonsterDifficulty = $(".buttons_Monster_Difficulty");

  /*allButtonsMonsterDifficulty.mouseenter(function() {

    switch(this.id) {

      case "easyButton":

      $(this).css({"backgroundPosition": "-240px 0px"});
      break;

      case "moderateButton":

      $(this).css({"backgroundPosition": "-240px -50px"});
      break;

      case "strongButton":

      $(this).css({"backgroundPosition": "-240px -100px"});
      break;

      case "insaneButton":

      $(this).css({"backgroundPosition": "-240px -150px"});
      break;

      default: alert("blubb");

    }

  });

  allButtonsMonsterDifficulty.mouseleave(function() {

    switch(this.id) {

      case "easyButton":

      $(this).css({"backgroundPosition": "0px 0px"});
      break;

      case "moderateButton":

      $(this).css({"backgroundPosition": "0px -50px"});
      break;

      case "strongButton":

      $(this).css({"backgroundPosition": "0px -100px"});
      break;

      case "insaneButton":

      $(this).css({"backgroundPosition": "0px -150px"});
      break;

      default: alert("blubb");

    }

  });*/

  allButtonsMonsterDifficulty.click(function() {

      clixxx('2000');

    });
});


function showEasyKonfig() {

  $(document).ready(function(){

    $("#easyButton").css({"backgroundPosition": "-240px 0px"});
    $("#moderateButton").css({"backgroundPosition": "0px -50px"});
    $("#strongeButton").css({"backgroundPosition": "0px -100px"});
    $("#insaneButton").css({"backgroundPosition": "0px -150px"});

    var allButtonsMonsterDifficulty = $(".buttons_Monster_Difficulty");

    allButtonsMonsterDifficulty.mouseenter(function() {

      switch(this.id) {

        case "easyButton":

        $(this).css({"backgroundPosition": "-480px 0px"});
        break;

        default: 

      }

    });

    allButtonsMonsterDifficulty.mouseleave(function() {

      switch(this.id) {

        case "easyButton":

        $(this).css({"backgroundPosition": "-240px 0px"});
        break;

        default: 

      }

    });
  });
}

function showModerateKonfig() {

  $(document).ready(function(){

    $("#easyButton").css({"backgroundPosition": "-240px 0px"});
    $("#moderateButton").css({"backgroundPosition": "-240px -50px"});
    $("#strongeButton").css({"backgroundPosition": "0px -100px"});
    $("#insaneButton").css({"backgroundPosition": "0px -150px"});

    var allButtonsMonsterDifficulty = $(".buttons_Monster_Difficulty");

    allButtonsMonsterDifficulty.mouseenter(function() {

      switch(this.id) {

        case "easyButton":

        $(this).css({"backgroundPosition": "-480px 0px"});
        break;

        case "moderateButton":

        $(this).css({"backgroundPosition": "-480px -50px"});
        break;

        default: 

      }

    });

    allButtonsMonsterDifficulty.mouseleave(function() {

      switch(this.id) {

        case "easyButton":

        $(this).css({"backgroundPosition": "-240px 0px"});
        break;

        case "moderateButton":

        $(this).css({"backgroundPosition": "-240px -50px"});
        break;

        default: 

      }

    });
 });
}

function showStrongKonfig() {

  $(document).ready(function(){

    $("#easyButton").css({"backgroundPosition": "-240px 0px"});
    $("#moderateButton").css({"backgroundPosition": "-240px -50px"});
    $("#strongButton").css({"backgroundPosition": "-240px -100px"});
    $("#insaneButton").css({"backgroundPosition": "0px -150px"});

    var allButtonsMonsterDifficulty = $(".buttons_Monster_Difficulty");

    allButtonsMonsterDifficulty.mouseenter(function() {

      switch(this.id) {

        case "easyButton":

        $(this).css({"backgroundPosition": "-480px 0px"});
        break;

        case "moderateButton":

        $(this).css({"backgroundPosition": "-480px -50px"});
        break;

        case "strongButton":

        $(this).css({"backgroundPosition": "-480px -100px"});
        break;

        default: 

      }

    });

    allButtonsMonsterDifficulty.mouseleave(function() {

      switch(this.id) {

        case "easyButton":

        $(this).css({"backgroundPosition": "-240px 0px"});
        break;

        case "moderateButton":

        $(this).css({"backgroundPosition": "-240px -50px"});
        break;

        case "strongButton":

        $(this).css({"backgroundPosition": "-240px -100px"});
        break;

        default: 

      }

    });
  });
}

function showInsaneKonfig() {

  $(document).ready(function(){

    $("#easyButton").css({"backgroundPosition": "-240px 0px"});
    $("#moderateButton").css({"backgroundPosition": "-240px -50px"});
    $("#strongButton").css({"backgroundPosition": "-240px -100px"});
    $("#insaneButton").css({"backgroundPosition": "-240px -150px"});

    var allButtonsMonsterDifficulty = $(".buttons_Monster_Difficulty");

    allButtonsMonsterDifficulty.mouseenter(function() {

      switch(this.id) {

        case "easyButton":

        $(this).css({"backgroundPosition": "-480px 0px"});
        break;

        case "moderateButton":

        $(this).css({"backgroundPosition": "-480px -50px"});
        break;

        case "strongButton":

        $(this).css({"backgroundPosition": "-480px -100px"});
        break;

        case "insaneButton":

        $(this).css({"backgroundPosition": "-480px -150px"});
        break;

        default: 

      }

    });

    allButtonsMonsterDifficulty.mouseleave(function() {

      switch(this.id) {

        case "easyButton":

        $(this).css({"backgroundPosition": "-240px 0px"});
        break;

        case "moderateButton":

        $(this).css({"backgroundPosition": "-240px -50px"});
        break;

        case "strongButton":

        $(this).css({"backgroundPosition": "-240px -100px"});
        break;

        case "insaneButton":

        $(this).css({"backgroundPosition": "-240px -150px"});
        break;

        default: 

      }

    });
  });
}

function visibilitySwitcher(element1,element2) {

  $(document).ready(function(){
    $(element1).css({'visibility': 'visible'}); 
    $(element2).css({'visibility': 'hidden'});
  });

}

function register_clicked(){
  var username = $("#reg_username").val();
  var email = $("#reg_email").val();
  var password = $("#reg_password").val();
  var confirm_password = $("#confirm_reg_password").val();

  checkMail = checkEmail(email);
  checkPW = checkPassword(password,confirm_password);

  if(username == "")
  {
    alert("Insert Username please!");
  }
  else if(email=="")
  {
    alert("Insert E-Mail Adress please!");
  }
  else if(password=="" || confirm_password=="")
  {
    alert("Insert Passwords please!");
  }
  else if(checkMail == false)
  {
    alert("Invalid E-Mail Adress!");
  }
  else if(checkPW == false)
  {
    alert("Passwords doesn't match!");
  }
  else
  {
    clixxx(5000,{u: username, e: email, p1: password, p2: confirm_password}); // Datenbank abfrage ob Username schon Existiert
  }

}

function checkEmail(email) {

  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!filter.test(email)) 
  {
    return false;
  }
  else
  {
    return true;
  }

}

function checkPassword(password1,password2) {

  if(password1 == password2)
  {
    return true;
  }
  else if (password1 != password2)
  { 
    return false;
  }

}

function checkRegistration(dbcheck) {

  if(dbcheck.userExist==false)
  {
    var username = $("#reg_username").val();
    var email = $("#reg_email").val();
    var password = $("#reg_password").val();
    var confirm_password = $("#confirm_reg_password").val();
    clixxx('5001', {u: username, e: email, p1: password, p2: confirm_password});
  }
  else if(dbcheck.userExist==true)
  {
    alert("Username already exist!");
  }
  
}

function registration(dbcheck){
  if(dbcheck.check==true)
  { 
    alert("Registration successfully!"); 
    visibilitySwitcher("#login","#register");
  }
  else
    { alert("Error! " + dbcheck.errorMsg); }
}

function login_clicked(){
  var username = $("#username").val();
  var password = $("#password").val();

  if(username==""){
    alert("Insert Username please!");
  }
  else if(password==""){
    alert("Insert Password please!");
  }
  else{
    clixxx('5002', {u : username, p : password});
  }
}


























































$(document).ready(function(){
  $("#panel").hide();
  $("#char_button").click(function(){
    $("#panel").animate({width:'toggle'}, 1000);
    if ($("#char_button").css("right") == "0px"){
      $("#char_button").animate({right: '94.79%'}, 950);
    }
    else{
      $("#char_button").animate({right: '0%'}, 950);
    }   
  });
});