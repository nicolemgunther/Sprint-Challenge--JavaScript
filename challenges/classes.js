/* == Step 1: Base Constructor ==
    Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/

// I had to name it CuboidMakerClass because Chrome did not want me to repeat CuboidMaker from the prototype.js file
class CuboidMakerClass{
    constructor(cuboid){
        this.length = cuboid.length;
        this.width = cuboid.width;
        this.height = cuboid.height;
    }

    volume (){
        return this.length*this.width*this.height;
    }

    surfaceArea (){
        return 2*(this.length*this.width + this.length*this.height + this.width*this.height);
    }
}

// I had to name it cuboidObj because Chrome did not want me to repeat cuboid from the prototype.js file
const cuboidObj = new CuboidMakerClass({
    length: 4,
    width: 5,
    height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidObj.volume()); // 100
console.log(cuboidObj.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and
// surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out
// your volume and surface area.