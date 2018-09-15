var utility=require('/home/bridgeit/tejaswi/javascript/Utility/oopUtility.js')
function distribute(){
    var arr = [];
        for (var j = 0; j < 4; j++) {
            if (j == 0) {
                a = 'c';
            }
            if (j == 1) {
                a = 'd';
            }
            if (j == 2) {
                a = 'h';
            }
            if (j == 3) {
                a = 's';
            }
            var card;
            for (var k =0; k < 13; k++) {
                if (k == 9 || k == 10 || k == 11 || k == 12) {
                    if (k == 12) {
                        card = "A"
                    }
                    if (k == 9) {
                        card = "J"
                    }
                    if (k == 10) {
                        card = "Q"
                    }
                    if (k == 11) {
                        card = "K"
                    }
                    arr.push(a+card);
                }
                else {
                    var c=k+2;
                    arr.push(a+c);
                }

            }

        }
        console.log(arr)
    utility.deckOfCards(arr);
}
distribute();