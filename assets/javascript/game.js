$(document).ready(function () {
    var wins = 0;
    var losses = 0;
    var computerRandom = Math.floor(Math.random() * 102) + 19;
    var crystalOne = Math.floor(Math.random() * 12) + 1;
    var crystalTwo = Math.floor(Math.random() * 12) + 1;
    var crystalThree = Math.floor(Math.random() * 12) + 1;
    var crystalFour = Math.floor(Math.random() * 12) + 1;
    var userTotal = 0;

    function reinitalize() {
        computerRandom = Math.floor(Math.random() * 102) + 19;
        crystalOne = Math.floor(Math.random() * 12) + 1;
        crystalTwo = Math.floor(Math.random() * 12) + 1;
        crystalThree = Math.floor(Math.random() * 12) + 1;
        crystalFour = Math.floor(Math.random() * 12) + 1;
        userTotal = 0;
        $("#computer-random").text(computerRandom);
        $("#player-score").text(userTotal);
    };

    function playGame() {
        $("#computer-random").text(computerRandom);
        $("#player-score").text(userTotal);
        $("#winResult").text("Wins: " + wins);
        $("#lossResult").text("Losses: " + losses);

        $("#crystalOne-button").on("click", function () {
            userTotal += crystalOne;
            $("#player-score").text(userTotal);
            if (userTotal > computerRandom) {
                losses += 1;
                $("#lossResult").text("Losses: " + losses);
                $("#noticeResult").text("You lost!!");
                reinitalize();
            };
            if (userTotal === computerRandom) {
                wins += 1;
                $("#winResult").text("Wins: " + wins);
                $("#noticeResult").text("You won!!");
                reinitalize();
            };
        });
        $("#crystalTwo-button").on("click", function () {
            userTotal += crystalTwo;
            $("#player-score").text(userTotal);
            if (userTotal > computerRandom) {
                losses += 1;
                $("#lossResult").text("Losses: " + losses);
                $("#noticeResult").text("You lost!!");
                reinitalize();
            };
            if (userTotal === computerRandom) {
                wins += 1;
                $("#winResult").text("Wins: " + wins);
                $("#noticeResult").text("You won!!");
                reinitalize();
            };
        });
        $("#crystalThree-button").on("click", function () {
            userTotal += crystalThree;
            $("#player-score").text(userTotal);
            if (userTotal > computerRandom) {
                losses += 1;
                $("#lossResult").text("Losses: " + losses);
                $("#noticeResult").text("You lost!!");
                reinitalize();
            };
            if (userTotal === computerRandom) {
                wins += 1;
                $("#winResult").text("Wins: " + wins);
                $("#noticeResult").text("You won!!");
                reinitalize();
            };
        });
        $("#crystalFour-button").on("click", function () {
            userTotal += crystalFour;
            $("#player-score").text(userTotal);
            if (userTotal > computerRandom) {
                losses += 1;
                $("#lossResult").text("Losses: " + losses);
                $("#noticeResult").text("You lost!!");
                reinitalize();
            };
            if (userTotal === computerRandom) {
                wins += 1;
                $("#winResult").text("Wins: " + wins);
                $("#noticeResult").text("You won!!");
                reinitalize();
            };
        });
    };
    playGame();
});