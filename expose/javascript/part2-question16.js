//hello
let statistics = {
    redcars: 21,
    bluecars: 45,
    greencars: 12,
    racecars: 5,
    blackcars: 40,
    rarecars: 2
};

for(let car in statistics){
    const value = statistics[car];
    if (prop.startsWith('r') || (value % 2) === 1) {
        console.log(value);
    }
}
