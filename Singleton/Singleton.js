/**
 * Create an example of a JavaScript Singleton.
 * After the first object is created, it will return additional 
 * references to itself
 */

let obj = (function () {
    let objInstance; //private variable
    function create() { //private function to create methods and properties
        let _isRunning =false
        let start =()=>{
            _isRunning = true
        }
        let stop =()=>{
            _isRunning=false
        }
        let currentState =()=>{
           return _isRunning
        }
        return{//this return now represents the object inside objInstance
            start :start,
            stop: stop,
            currentState:currentState
        }

    }
    return {
        getInstance:function(){
            // check if the object instance exist
            if(!objInstance){
                objInstance=create()
            }
            return objInstance;
        }
    };
})();

let obj1 = obj.getInstance();
let obj2 = obj.getInstance();
console.log(obj1.currentState())
console.log(obj2.currentState())
obj1.start()
console.log(obj1.currentState())
console.log(obj2.currentState())