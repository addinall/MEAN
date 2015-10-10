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
var app = angular.module('meanNews', ['ui.router']);    // this is named in the html declaration,
                                                        // encapsulates our entire system


//----------
app.config([

    // we are using ui-router so we need to configure it.
    // we will use the angular method config to set up
    // a home state.

    '$stateProvider',
    'urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {                            // these next few variables will
                url: '/home',                           // obvioisly change to reflect the
                templateUrl: '/home.html',              // home state of the target machine
                controller: 'mainControl'               // environment
        });

        $url(RouterProvider.otherwise('home');          // if we don't get a valid url, go HOME
}]);



//--------------------------------
app.factory('items', [function() {

    // I wrote the main controllers first and was then to find out
    // that the use of "factories" or "services" are considered best
    // practice in this type of architecture.  Dunno.  To me it seems to
    // add unwarrented complexity to what was a rather elegant and
    // simple to use tool.  However, being new to this I shall explore it.
    // If it is just another RoR, SCALA, Haskell wank I'll chuck it away.
    
    var newsItems = {                               // what is going on here? we are creating a
        items: []                                   // new Javascript object newsItems, that
    };                                              // has an array property, items.  This just lifts
    return newsItems;                               // the scope of this array OUT of our main controller
                                                    // OK.  I know what is going on. 'factories' and
                                                    // 'services' are a couple of trendy ways of describing
                                                    // a chunk-o-GLOBAL memory containing an object
                                                    // encapsulating methods and properties that might
                                                    // be of interest elsewhere.
}])                                                 // Sorta OODish.  Functional guys will have a fit!



//-----------------------------
app.controller('mainControl', [                     // just the one controller for now
    '$scope',                                       // add a second controller 'factory'
    'items',                                        // inject the object into this controller
    function($scope, items) {                       // scope is the particular area of memory            
        $scope.header = "MEAN News BLOG!";          // Angular uses for the bi-directional
        $scope.news = items.items;                  // bind scope to the object injected from factory
                                                    // binding of variables in this new model.
                                                    // it works rather well for a change.
                                                    // news is our stack of news items
    
        
        //---------------------------
        $scope.addNews = function() {

            // add a method to input new bloggies
            // these functions should almost certainly
            // be in the items factory.
            // I'll change it later after I get
            // routing sorted out.
    
            if (!$scope.title || $scope.title === '') {
                return;                              // don't need empty news items
            }

            $scope.news.push({  title: $scope.title, 
                                link: $scope.link,
                                votes: 0});          // create new news, no votes
            $scope.title = '';                       // and empty that var for next time
            $scope.link  = '';                       // ditto
        };

        //--------------------------------------
        $scope.incrementLikes = function(news) {

            // add a LIKE button, fancy up the graphics later
            
            news.votes += 1;
        };
}]);

