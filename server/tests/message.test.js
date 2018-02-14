var expect = require('expect');
var {generateMessage} = require('./../utils/message');

describe('generateMessage', () => {
    it('should generate correct message obj', () => {
        var from = 'TestUser';
        var text = 'This is a test message';
        var generatedMessage = generateMessage(from, text);        
        
            expect(generatedMessage.from).toBe(from);
            expect(generatedMessage.text).toBe(text);
       
    });
});