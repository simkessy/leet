// what is prototypical inheritance
//      how is it different from other languages

// bubbling - when to use it

// accessibility tag

// what are promises and callbacks, are they the same

//What's expected output
var Foo = function( a ) { 
    this.a = a;
      
    this.bar() {   
      return this.a; 
    }
    this.baz = function() {   
      return this.a; 
    };
  };
   
  Foo.prototype.biz = function() {    
      return this.a; 
  };
   
  var f = new Foo( 7 );
  f.bar(); // 7
  f.baz(); // 7
  f.biz(); // undefined