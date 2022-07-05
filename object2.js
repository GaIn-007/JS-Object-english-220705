var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};
var pieces = 0;
for (var i in fruit) {
    pieces += fruit[i];
}