var jerry = {
    name: "Jerry Seinfeld",
    hp: 100,
    baseAttack: 4,
    attack: 4
}

var george = {
    name: "George Costanza",
    hp: 120,
    baseAttack: 5,
    attack: 5
}

var elaine = {
    name: "Elaine Benes",
    hp: 80,
    baseAttack: 2,
    attack: 2
}

var kramer = {
    name: "Cosmo Kramer",
    hp: 140,
    baseAttack: 7,
    attack: 7
}

var characterchosen = false;
var enemychosen = false;
var selectedcharacter = [];
var selectedenemy = [];

function playercharacter(characterchosen) {
    selectedcharacter.name = characterchosen.name;
    selectedcharacter.health = characterchosen.health;
    selectedcharacter.baseAttack = characterchosen.baseAttack;
    selectedcharacter.attack = characterchosen.attack;
}

function pickenemy(enemychosen) {
    selectedenemy.name = enemychosen.name;
    selectedenemy.health = enemychosen.health;
    selectedenemy.baseAttack = enemychosen.baseAttack;
    selectedenemy.attack = enemychosen.baseAttack;
}

function movePcsToEnemyavailable() {
    $(".playable-characters").removeClass("playable-characters").addClass("enemy-available");
    $("#enemy-available").append($(".enemy-available"));

}




$(document).ready(function () {


    $("#jerry").on("click", function () {
        if (characterchosen === false) {
            playercharacter(jerry);
            characterchosen = true;

            $("#jerry").removeClass("playable-characters").addClass("player-character");
            $("#player-character").append(this);

            movePcsToEnemyavailable();
        } else if ((characterchosen === true) && (enemychosen === false)) {
            if ($("#jerry").hasClass("enemy-available")) {
                pickenemy(jerry);
                enemychosen = true;

                $("#jerry").removeClass("enemy-available").addClass("defender");
                $("#nonplayer-character").append(this);

            }
        }


    });

    $("#george").on("click", function () {
        if (characterchosen === false) {
            playercharacter(george);
            characterchosen = true;

            $("#george").removeClass("playable-characters").addClass("player-character");
            $("#player-character").append(this);

            movePcsToEnemyavailable();
        } else if ((characterchosen === true) && (enemychosen === false)) {
            if ($("#george").hasClass("enemy-available")) {
                pickenemy(george);
                enemychosen = true;

                $("#george").removeClass("enemy-available").addClass("defender");
                $("#nonplayer-character").append(this);

            }
        }


    });

    
 

    
    $("#elaine").on("click", function () {
        if (characterchosen === false) {
            playercharacter(elaine);
            characterchosen = true;

            $("#elaine").removeClass("playable-characters").addClass("player-character");
            $("#player-character").append(this);

            movePcsToEnemyavailable();
        } else if ((characterchosen === true) && (enemychosen === false)) {
            if ($("#elaine").hasClass("enemy-available")) {
                pickenemy(elaine);
                enemychosen = true;

                $("#elaine").removeClass("enemy-available").addClass("defender");
                $("#nonplayer-character").append(this);

            }
        }


    });

       $("#kramer").on("click", function () {
        if (characterchosen === false) {
            playercharacter(kramer);
            characterchosen = true;

            $("#kramer").removeClass("playable-characters").addClass("player-character");
            $("#player-character").append(this);

            movePcsToEnemyavailable();
        } else if ((characterchosen === true) && (enemychosen === false)) {
            if ($("#kramer").hasClass("enemy-available")) {
                pickenemy(kramer);
                enemychosen = true;

                $("#kramer").removeClass("enemy-available").addClass("defender")
                $("#nonplayer-character").append(this);

            }
        }
        if ((characterchosen === true) && (enemychosen === true)) {
        $("#enemy-available").innerhtml("Enemies remaining");
    }
    });

    
})
