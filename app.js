// CAPTAIN SLOG
// vim: set expandtab tabstop=4 shiftwidth=4 autoindent smartindent:
// File         : index.html
// System       : mean-app
// Date         : Oct 2nd 2015
// Author       : Mark Addinall
// Synopsis     : A little play with using a MEAN application stack
//                that will hopefully give me the basis for my new
//                RESTful stack under development.  I was going to
//                use angular with a set of PHP REST APIs, I still
//                might, but this needs a try out as well.
//                I like the idea of using Javascript all through the
//                stack for the front, mid and back end, and always
//                using JSON as the data package WITHOUT pesky add-on
//                libaries.  I tried the mean.io stack but like
//                most things written by "bubbly, young and dynamic"
//                coders it was BIG, FAT, UGLY and CRAP.
//                Soooo, as usual, roll my own in a 100th of the time it
//                takes just to install and look after that new-age
//                bollocks.



var app = angular.module('meanNews', []);           // this is named in the html declaration

app.controller('mainControl', [                     // just the one controller for now
    '$scope',
    function($scope) {                              // and only one function to test the MEAN stack
        $scope.test = "Hello little MEAN app!";
}]);

