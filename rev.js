
var sentence = "ДаВайте ЖИТЬ ДрУЖно";
var inversed = sentence.split('').map(function(c) {
    return c.toLowerCase() == c ? c.toUpperCase() : c.toLowerCase();
}).join('');
console.log(inversed);