// Write a program that assembles a car by giving requirements out of existing components. The client will place an order in the form of an object describing the car. You need to determine which parts to use to fulfill the client’s order. You have the following parts in storage:

// An engine has power (given in horsepower) and volume (given in cubic centimeters). Both of these values are numbers. When selecting an engine, pick the smallest possible that still meets the requirements.

// Small engine: { power: 90, volume: 1800 }

// Normal engine: { power: 120, volume: 2400 }

// Monster engine: { power: 200, volume: 3500 }

// A carriage has a type and color. Both of these values are strings. You have two types of carriages in storage and can paint them any color.

// Hatchback: { type: 'hatchback', color: <as required> }

// Coupe: { type: 'coupe', color: <as required> }

// The wheels will be represented by an array of 4 numbers, each number represents the diameter of the wheel in inches. The size can only be an odd number. Round down any requirements you receive to the nearest odd number.
function result(arg){
    let res = {};
    res.model = arg.model;
    let enginesObj = {
        'Small engine': { power: 90, volume: 1800 },
        'Normal engine': { power: 120, volume: 2400 },
        'Monster engine': { power: 200, volume: 3500 },
    }

    let carriageObj = {
        hatchback: { type: 'hatchback', color: arg.color },
        coupe: { type: 'coupe', color: arg.color }
    }

    if (arg.power <= 90) {
        res.engine = enginesObj['Small engine'];
    } else if (arg.power <= 120) {
        res.engine = enginesObj['Normal engine'];
    } else {
        res.engine = enginesObj['Monster engine'];
    }

    let wantCarriage = arg.carriage;
    res.carriage = carriageObj[wantCarriage];
    res.wheels = wheelsize(arg.wheelsize);

    function wheelsize(wheel) {
        if (wheel % 2 === 0) {
            wheel--;
        }
        let result = [];
        result.length = 4;
        return result.fill(wheel,0,4);
    }
    return res
}
let input = {
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
};

let expected = {
    model: 'VW Golf II',
    engine: {
        power: 90,
        volume: 1800
    },
    carriage: {
        type: 'hatchback',
        color: 'blue'
    },
    wheels: [13, 13, 13, 13]
};
let output = result(input);
console.table(output)