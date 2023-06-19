# Constants begin with an uppercase letter. Constants defined within a class or module can be accessed from within that class or module, and those defined outside a class or module can be accessed globally.

#!/usr/bin/ruby

class Example
    VAR1 = 100
    VAR2 = 200
    def show
       puts "Value of first Constant is #{VAR1}"
       puts "Value of second Constant is #{VAR2}"
    end
 end
 
 # Create Objects
 object = Example.new()
 object.show