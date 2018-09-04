var person = {
    name: "Taufiq Gh",
    birth: 1993,
    isEgotistical: true,
    ship: {
        name: "Tgh Ent",
        number: "Gh-2393",
        commissioned: 2345
    },
    getInfo: function() {
        return this.name + " commands the " + this.ship.name;
    }
    // Object Introspection
};

// OBJECT INTROSPECTION
var counter = 1;
for(let prop in person) {
    console.log(counter + '- ' + person[prop]);

    if(typeof person[prop] === "object") {
        let inCount = 1;
        let innerObj = person[prop];
        for(let i in innerObj){
            console.log('\t' + inCount + '- ' + innerObj[i]);
            inCount++;
        }
    }
    counter++;
}
