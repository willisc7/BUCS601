/* 
X - A private numeric attribute called diameter or D. This value is used in your 
other functions and attributes. This value will be indicated only by the constructor.

X - A public constant numeric attribute called JOVIAN_MASS_PARAMETER. This value is 
95480269.791

X - A private constant numeric attribute, called GRAVITATIONAL_CONSTANT. This value 
is set by evaluating this expresssion:D*(6.674e * 10-11) * 191.561 (D = diameter)

X - A private numeric attribute called moonCount. This value has to be passed in to 
the constructor

X - A public string attribute called name. This value must be setup only by the 
constructor.

X - A private boolean-valued attribute called supportsLife. This value must be passed 
into the constructor

X - A public function, called getSolarMass. It returns a numeric value representing 
the solar mass of a planet. The solar mass is calculated by using the 
(D*.19856)*10e30 (D = diameter)

X - A constructor that initializes all the attributes of this class with some default 
values - of your choice. As directed in these instructions.

X - A function called getKnownSatellites(). It returns the number of moons surrounding a 
planet. This value must be setup by the constructor.

- A function that returns the planet's distance from Earth. Use this function to get 
that value: ((D2*15.3857)/Math.PI)*GRAVITATIONAL_CONSTANT) (D = diameter) 
*/

const JOVIAN_MASS_PARAMETER = 95480269.791;
let name = null;

class Planet {

    constructor(moonCount, supportsLife) {
        this._diameter = null;
        this._moonCount = moonCount;
        this._name = name
        this._supportsLife = supportsLife;
        this.GRAVITATIONAL_CONSTANT = null;
    }

    // setters
    setDiameter(diameter) { 
        this._diameter = diameter;
    }

    // getters
    getDiameter() { return this._diameter; }
    getName() { return this._name; }
    getGRAVITATIONAL_CONSTANT() {
        this.GRAVITATIONAL_CONSTANT = (this._diameter * ((6.674 * Math.pow(10, -11))) * 191.561);
        return this.GRAVITATIONAL_CONSTANT;
    }
    getKnownSatellites() { return this._moonCount; }
    getSupportsLife() { return this._supportsLife; }
    getSolarMass() {
        return ((this._diameter * .19856) * (10 * Math.pow(10, 30)));
    }
    getDistanceFromEarth(){
        //(D2*15.3857)/Math.PI)*GRAVITATIONAL_CONSTANT)
        return ((((2 * this._diameter) * 15.3857) / Math.PI) * this.GRAVITATIONAL_CONSTANT);
    }
}

// test
name = "Earth";
let planet = new Planet(1, true);
planet.setDiameter(12742000)
console.log(planet.getDiameter())
console.log(JOVIAN_MASS_PARAMETER)
console.log(planet.getGRAVITATIONAL_CONSTANT())
console.log(planet.getKnownSatellites())
console.log(planet.getName())
console.log(planet.getSupportsLife())
console.log(planet.getSolarMass())
console.log(planet.getDistanceFromEarth())