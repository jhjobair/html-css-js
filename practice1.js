function init() {
    document.getElementById('showAntique').addEventListener('click', showAntiqueCars);
    document.getElementById('showNonAntique').addEventListener('click', showNonAntiqueCars)
}

function showAntiqueCars() {
    document.getElementById('antiqueCars').className = "visible";
    document.getElementById('nonAntiqueCars').className = "hidden";
}

function showNonAntiqueCars() {
    document.getElementById('antiqueCars').className = "hidden";
    document.getElementById('nonAntiqueCars').className = "visible";
}

var car4 = {
    year: 2000,
    make: 'Ford',
    model: 'Fusion',
    getInfo: function () {
        return 'Vehicle: ' + this.year + ' ' + this.make + ' ' + this.model;
    }
};

var car2 = {
    year: 2010,
    make: 'BMW',
    model: 'Z4',
    getInfo: function () {
        return 'Vehicle: ' + this.year + ' ' + this.make + ' ' + this.model;
    }
};
var car3 = {
    year: 2010,
    make: 'BMW',
    model: 'Z4',
    getInfo: function () {
        return 'Vehicle: ' + this.year + ' ' + this.make + ' ' + this.model;
    }
};


function getVehicle(theYear, theMake, theModel) {
    year = theYear;
    make = theMake;
    model = theModel;
    getInfo = function () {
        return 'Vehicle: ' + year + ' ' + make + ' ' + model;
    };
}

var car1 = getVehicle(2000, 'Ford', 'Fusion');
 var car7 = getVehicle(2010, 'BMW', 'Z4');

 
 var car6 = {
    year: 2000,
    make: 'Ford',
    model: 'Fusion',
    repairs: ['repair1', 'repair2', 'repair3'],
    getInfo: function () {
    return 'Vehicle: ' + this.year + ' ' + this.make + ' ' + this.model;
    }
   };

   function Vehicle(theYear, theMake, theModel) {
    var year = theYear;
    var make = theMake;
    var model = theModel;
    this.getInfo = function () {
    return 'Vehicle: ' + year + ' ' + make + ' ' + model;
    };
   }

   var bus1 = new Vehicle(2000, 'Ford', 'Fusion');
   var bus2 =  Vehicle(2010, 'BMW', 'Z4');
        console.log(bus1)
        console.log(bus2)



        function home(theYear, theMake, theModel) {
            this.year = theYear;
            this.make = theMake;
            this.model = theModel;
           }
           home.prototype.getInfo = function () {
            return 'Vehicle: ' + this.year + ' ' + this.make + ' ' + this.model;
           }

           var bus3 = new home(2010, 'BMW', 'Z4');
           console.log(bus3)

           

           function Vehicle2(theYear, theMake, theModel) {
            var year = theYear;
            var make = theMake;
            var model = theModel;
            this.getYear = function () { return year; };
            this.getMake = function () { return make; };
            this.getModel = function () { return model; };
           }
           Vehicle2.prototype.getInfo = function () {
            return 'Vehicle: ' + this.getYear() +
            ' ' + this.getMake() +
            ' ' + this.getModel();
           }
           var output1 = new Vehicle2(2000, 'Ford', 'Fusion');
           var output2 = new Vehicle2(2010, 'BMW', 'Z4');
           console.log(output1)
           console.log(output2)