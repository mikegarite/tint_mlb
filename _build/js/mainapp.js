!function(){function t(t,e){return{loadData:loadData}}angular.module("boilerplate").factory("getDataFromAPI",t),t.$inject=["$http","LocalStorage"]}(),function(){function t(t,e,a,n,i){var o=this,l={},r={};o.noscroll=!1,l.info=[],r.info=[],o.league="NL",o.division="West",o.tint_base_api="https://api.tintup.com/v1/feed/mikegarite?source=t",o.tint_api_key="&api_token=c0106c2815de4810da1d5133d51aca7ef9535b3e",o.baseball_api_base="https://api.fantasydata.net/mlb/v2/JSON/Standings/2016?",o.baseball_api_key="e7be84c8339a4467b7834d93d3d7c622",o.tint_twitter_api_path=o.tint_base_api+"twitter"+o.tint_api_key,o.tint_google_api_path=o.tint_base_api+"google"+o.tint_api_key,angular.element(i).bind("scroll",function(){var t="innerHeight"in window?window.innerHeight:document.documentElement.offsetHeight,e=document.body,a=document.documentElement,n=Math.max(e.scrollHeight,e.offsetHeight,a.clientHeight,a.scrollHeight,a.offsetHeight);windowBottom=t+window.pageYOffset,windowBottom>=n-100&&(o.noscroll||(o.getTintData(o.feed.next_page,"twitter"),o.noscroll=!0))}),o.getTintData=function(t,e){$.ajax({url:t,dataType:"jsonp"}).done(function(t){var a=t.data;if("twitter"==e){l.next_page=t.next_page;for(var i=0;i<a.length;i++){var p=JSON.parse(a[i].author),c=[p,a[i].comments,a[i].original_image,a[i].created,a[i].url];l.info.push(c)}n.$apply(function(){o.feed=l}),o.noscroll=!1}if("google"==e){r.next_page=t.next_page;for(var i=0;i<a.length;i++){var p=JSON.parse(a[i].author),c=[p,a[i].title,a[i].image,a[i].created];r.info.push(c)}n.$apply(function(){o.google=r})}}).fail(function(){alert("error")})},o.getBaseballData=function(){$.ajax({url:o.baseball_api_base,beforeSend:function(t){t.setRequestHeader("Ocp-Apim-Subscription-Key",o.baseball_api_key)},type:"GET",data:"{body}"}).done(function(t){n.$apply(function(){o.standings=t})}).fail(function(){alert("error")})},o.getTintData(o.tint_twitter_api_path,"twitter"),o.getTintData(o.tint_google_api_path,"google"),o.getBaseballData()}angular.module("boilerplate").controller("MainController",t),t.$inject=["LocalStorage","QueryService","$rootScope","$scope","$window"]}();