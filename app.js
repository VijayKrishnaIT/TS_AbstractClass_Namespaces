//how to create package with the help of namespace
var vijayIT;
(function (vijayIT) {
    vijayIT.sub = "ReactJS";
    let vIT;
    (function (vIT) {
        function getWish() {
            return `welcome to ${vijayIT.sub}`;
        }
        vIT.getWish = getWish;
    })(vIT = vijayIT.vIT || (vijayIT.vIT = {}));
})(vijayIT || (vijayIT = {}));
;
/// <reference path="file1.ts" />
console.log(vijayIT.sub, vijayIT.vIT.getWish());
