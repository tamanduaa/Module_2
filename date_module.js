//setdate
// set a variable for the date using built in js date function
// setDate is a method that allows the value of the date variable to be changed by user input
// user enters a new date which is saved to variable

var foo = (function iife() {

    function setDate() {
       var myDate = new Date();
       var userInputDate;
       if (typeof userInputDate === 'undefined') {
       		return myDate;
       }
       	else {
       		myDate = userInputDate;

       		return myDate;
       	};
       }
    

    function getDate() {
        myDate.getDate({ format: "milliseconds" });
        myDate.getDate({ format: "formatted" });
    }
    
      function getDayName() {
        console.log(myDate.getDayName()); // "Monday"
    }

      function getMonthName() {
        console.log(myDate.getMonthName()); // "April"
    }

      function isFuture() {
        console.log(myDate.isFuture()); // false
    }

      function isToday() {
        console.log(myDate.isToday()); // true
    }


    return {
        bar: bar,
        baz: baz
    };
})();

foo.bar(); // 'baz'