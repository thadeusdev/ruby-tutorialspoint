#!/usr/bin/ruby -w

print <<EOF 
    this is the first way of creating 
    here document i.e multiple line string.
EOF

print <<"EOF";             #same as above
    This is the second way of creating 
    here document i.e multiple line string.
EOF

print <<`EOC`               #execute commands
    echo hi there 
    echo lo there
EOC

print <<"foo", <<"bar"      #you can stack them
    I said foo.
foo
    I said bar.
bar