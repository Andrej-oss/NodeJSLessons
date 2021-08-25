const exp = "Hello Node";

function createUser(name, age){
    return `Hello from ${name} with ${age} years old`
}
exports.f = createUser;

module.exports = {
    exp,
    create: createUser,
};
console.log("_____________________________________");
console.log(__dirname);
console.log(__filename);
console.log('_______________________________________');
