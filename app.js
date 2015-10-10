// CAPTAIN SLOG
// vim: set expandtab tabstop=4 shiftwidth=4 autoindent smartindent:
// File         : app.js 
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
//                Soooo, as usual, roll my own.


//--------------------------------------
var app = angular.module('meanNews', []);           // this is named in the html declaration

app.controller('mainControl', [                     // just the one controller for now
    '$scope',
    function($scope) {                              // scope is the particular area of memory            
        $scope.header = "MEAN News BLOG!";          // Angular uses for the bi-directional
        $scope.news = [                             // binding of variables in this new model.
        {title: 'News Item 1', votes: 5},           // it works rather well for a change.
        {title: 'News Item 2', votes: 5},
        {title: 'News Item 3', votes: 2},           // news is our stack of news items
        {title: 'News Item 4', votes: 1}
        ];
        
        //---------------------------
        $scope.addNews = function() {

            // add a method to input new bloggies
    
            if (!$scope.title || $scope.title === '') {
                return;                                         // don't need empty news items
            }

            $scope.news.push({  title: $scope.title, 
                                link: $scope.link,
                                votes: 0});                     // create new news, no votes
            $scope.title = '';                                  // and empty that var for next time
            $scope.link  = '';                                  // ditto
        };

        //--------------------------------------
        $scope.incrementLikes = function(news) {

            // add a LIKE button, fancy up the graphics later
            
            news.votes += 1;
        };
}]);

