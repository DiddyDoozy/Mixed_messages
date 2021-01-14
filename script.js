const verbs = ['run', 'walk', 'drive', 'dance', 'scream', 'joust', 'flip', 'lift'];

const nouns = ['that cat','this moose','this hoe','Lando','my girlfriend','my johnson'];

const adjectives = ['hard','soft','weird','strange','cute','pretty','fat','dumb','thicc'];
// "noun wants to "verb" "adjective" on "noun""

const makeRandomSentence = () => {
    let randVerb = Math.floor(Math.random()*verbs.length);
    let randNoun2 = Math.floor(Math.random()*nouns.length);
    let randNoun = Math.floor(Math.random()*nouns.length);
    let randAdj = Math.floor(Math.random()*adjectives.length);
    return `${nouns[randNoun]} wants to ${verbs[randVerb]} ${adjectives[randAdj]} on ${nouns[randNoun2]}.`
};
console.log(makeRandomSentence());