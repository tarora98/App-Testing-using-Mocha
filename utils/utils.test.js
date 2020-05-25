const expect = require('expect');
const utils = require('./utils');
it('should add two number', () => {
    var res = utils.add(33, 11);
    expect(res).toBe(44).toBeA('String');
    // if(res!=44){
    //     throw new Error(`Expected 44, but got ${res}.`)
    // }
});
it('should add square a number', () => {
    var res = utils.square(2);
    if (res != 4) {
        throw new Error(`Expected 44, but got ${res}.`)
    }
});