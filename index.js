const groupA = ["Samuel", "Segun", "Daniel", "Toby", "John", "Malik", "Deji", "Wale", "Femi", "Jamal"];
const groupB = ["Niyola", "Diana", "Daniella", "Jane", "Cynthia", "Pamela", "Cassandra", "Feyi", "Esther", "Oyinda"];
const places = ["The Place", "Royale", "Eko hotel", "The Renaissance", "Arts Gallery", "Game center", "Sheraton", "Airport Hotel", "Harvey Garden", "Beverly Park"];
const randomIndex1 = Math.floor(Math.random() * groupA.length);
const randomIndex2 = Math.floor(Math.random() * groupB.length);
const randomIndex3 = Math.floor(Math.random() * places.length);
// let unique = groupA.filter(e => e != groupA)
console.log('Group A = ' + groupA[randomIndex1] + ' and Group B = ' + groupB[randomIndex2] + ' will be going on a dinner date at Place = ' + places[randomIndex3] + '.');
