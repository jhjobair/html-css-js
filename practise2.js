var MyNamespace = {
    myVariable: 42,
    
    myFunction: function() {
        console.log('This is a function inside MyNamespace.');
    }
};

MyNamespace.myFunction(); 
console.log(MyNamespace.myVariable); 



var myApp = {};
myApp.vehicleCount = 5;
myApp.vehicles = new Array();
myApp.Car = function () { }
myApp.Truck = function () { }
myApp.repair = {
 description: 'changed spark plugs',
 cost: 100
};

console.log(myApp.repair.description)