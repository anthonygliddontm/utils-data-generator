const chai = require('chai');
const expect = chai.expect;
const functions = require('../src/common-functions');

describe('generateNumber', () => {
    it('should return a 6 digit random number',() => {
        expect(functions.generateNumber(6).length).to.eql(6);
    }),
    it('should return empty if 0 is passed',()=>{
        expect(functions.generateNumber(0).length).to.eql(0);
    }),
    it('should return 0 if a letter is passed',()=>{
        expect(functions.generateNumber('h').length).to.eql(0);
    })
});