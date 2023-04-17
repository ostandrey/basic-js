const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const teamFirstLetter = [];

  if(!Array.isArray(members)) {
    return false;
  }

  members.map( member => {
    if(typeof member !== 'string') {
      return false
    }

    teamFirstLetter.push(member.trim()[0].toUpperCase());
  });

  return teamFirstLetter.sort().join('');
}

createDreamTeam([' Olivia', 1111, 'Lily', 'Oscar', true, null])

module.exports = {
  createDreamTeam
};
