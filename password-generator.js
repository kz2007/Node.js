const generator = require('generate-password');

function generate_pass()
{
    return generator.generate({length: 10,numbers: true});
}

console.log(generate_pass());