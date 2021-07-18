//const sum = require('./Main');
const {sum ,sortMapValues , mapIsSorted} = require('./Main');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('map is sorted', () => {
    var map1 = new Map();
    map1.set('gui', [3,6,2,1]);
    map1.set('maria', [5,3,2,1]);
    map1.set('velho', [1,2,5,4,2]);
    sortMapValues(map1);
    expect(mapIsSorted(map1)).toBe(true);
});