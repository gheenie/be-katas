const treatDoggos = (dogs) => {
    const newDogs = JSON.parse( JSON.stringify(dogs) );
    
    newDogs[0].hasRabies = false;

    return newDogs;
};

module.exports = treatDoggos;
