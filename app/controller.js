/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 * 
 */
;
(function() {

    angular
        .module('boilerplate')
        .controller('MainController', MainController);

    MainController.$inject = ['LocalStorage', 'QueryService', '$rootScope', '$scope', '$window'];


    function MainController(LocalStorage, QueryService, $rootScope, $scope, $window) {
        //setting objs
        var me = this, tint_twitter = {}, tint_google = {};
        //sets infinite scroll eligibility so doesnt constanlty load data when scroll bar hits the bottom of the page.
        me.noscroll = false;
        tint_twitter.info = [];
        tint_google.info = [];
        //preset data
        me.league = 'NL';
        me.division = 'West';
        me.tint_base_api = 'https://api.tintup.com/v1/feed/mikegarite?source=t';
        me.tint_api_key = '&api_token=c0106c2815de4810da1d5133d51aca7ef9535b3e';
        me.baseball_api_base = 'https://api.fantasydata.net/mlb/v2/JSON/Standings/2016?';
        me.baseball_api_key = 'e7be84c8339a4467b7834d93d3d7c622';
        me.tint_twitter_api_path = me.tint_base_api + 'twitter' + me.tint_api_key;
        me.tint_google_api_path = me.tint_base_api + 'google' + me.tint_api_key;
        //infinite scrolls
        angular.element($window).bind("scroll", function() {
            var windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
            var body = document.body,
                html = document.documentElement;
            var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
            windowBottom = windowHeight + window.pageYOffset;
            if (windowBottom >= docHeight - 100) {
                if (!me.noscroll) {
                    me.getTintData(me.feed.next_page, 'twitter');
                    me.noscroll = true;
                }
            }
        });
        //grabs both twitter and google data when passed. a =  API CALL b = API TYPE
        me.getTintData = function(a, b){
               $.ajax({
                    url: a,
                    dataType: "jsonp",
                })
                .done(function(data) {
                    //gets returned data from API call
                    var tint_data = data.data;
                    if(b == 'twitter'){
                      tint_twitter.next_page = data.next_page;
                      for (var i = 0; i < tint_data.length; i++) {
                        var a = JSON.parse(tint_data[i].author);
                        var new_array = [a, tint_data[i].comments, tint_data[i].original_image, tint_data[i].created, tint_data[i].url];
                        //creating my own object because main data returns as a string and needed to parse through it
                        tint_twitter.info.push(new_array);
                      };
                        $scope.$apply(function() {
                          me.feed = tint_twitter;
                        });
                        me.noscroll = false;
                    }
                    if(b == "google"){
                      tint_google.next_page = data.next_page;
                      for (var i = 0; i < tint_data.length; i++) {
                          var a = JSON.parse(tint_data[i].author);
                          var new_array = [a, tint_data[i].title, tint_data[i].image, tint_data[i].created];
                         //creating my own object because main data returns as a string and needed to parse through it
                          tint_google.info.push(new_array);
                      };
                      $scope.$apply(function() {
                          me.google = tint_google;
                      });
                    }
                })
                .fail(function() {
                    alert("error with the twitters");
                });

        }
      //grabs baseball data
      me.getBaseballData = function(){
          $.ajax({ url: me.baseball_api_base,
                    beforeSend: function(xhrObj) {
                        xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", me.baseball_api_key);
                    },
                    type: "GET",
                    data: "{body}",
                })
                .done(function(data) {
                    $scope.$apply(function() {
                        me.standings = data;
                    });
                })
                .fail(function() {
                    alert("error with the baseballs");
                });
        }
        //on doc load these three calls are made. 
        me.getTintData(me.tint_twitter_api_path, 'twitter');
        me.getTintData(me.tint_google_api_path, 'google');
        me.getBaseballData();
    }
})();
