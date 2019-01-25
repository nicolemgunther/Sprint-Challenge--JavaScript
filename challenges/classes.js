/* == Step 1: Base Constructor ==
    Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/

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

  /* == Step 4: Create a new object that uses CuboidMaker ==
    Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
    Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
  */

const cuboidObj = new CuboidMakerClass({
    length: 4,
    width: 5,
    height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and
// surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out
// your volume and surface area.