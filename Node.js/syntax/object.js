let roles = {
    'programmer': 'egoing',
    'designer': 'k8805',
    'manager': 'hoya',

}
console.log(roles.designer);
console.log(roles['designer']);

for(let name in roles) {
    console.log('object => ', name, 'value => ', roles[name]);
}