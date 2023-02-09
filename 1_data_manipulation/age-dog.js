const ageDog = (dog, num) => {
    const dogCopy = JSON.parse( JSON.stringify(dog) );

    dogCopy.age += num;

    return dogCopy;
};

module.exports = ageDog;
