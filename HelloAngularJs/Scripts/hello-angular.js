var indexController = function ($scope, $http)
{
    var resultPromise = $http.get("/Home/GetTweets");
    resultPromise.success(function (data)
    {
        $scope.tweets = data;
    });

    $scope.newTweets = {
        0: "No new Tweets",
        other: "{} new Tweets"
    }
}