const verbs = ['run', 'walk', 'drive', 'dance', 'scream', 'joust', 'flip', 'lift','scissor'];
const identifiers = ['this', 'that','my','your','the'];

const nouns = ['cat','moose','hoe','Lando','girlfriend','johnson'];

const adjectives = ['hard','soft','weird','strange','cute','nasty','pretty','fat','dumb','thicc'];
// "noun wants to "verb" "adjective" on "noun""

let randSentence = '';

function makeRand(arr){
    return Math.floor(Math.random()*arr.length);
};


const makeRandomSentence = () => {
    let randId = makeRand(identifiers);
    let randId2 = makeRand(identifiers);
    let randVerb = makeRand(verbs);
    let randNoun2 = makeRand(nouns);
    let randNoun = makeRand(nouns);
    let randAdj = makeRand(adjectives);
    let randAdj2 = makeRand(adjectives);
    randSentence = `${identifiers[randId]} ${adjectives[randAdj]} ${nouns[randNoun]} wants to ${verbs[randVerb]} ${adjectives[randAdj2]} on ${identifiers[randId2]} ${nouns[randNoun2]}.`;
    let newSen = randSentence.charAt(0).toUpperCase() + randSentence.slice(1);
    return newSen;
};
console.log(makeRandomSentence());