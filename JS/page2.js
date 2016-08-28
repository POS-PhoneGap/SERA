var app = angular.module("app",[]);
app.controller('ctrl',function($scope,$http,$window) {
    $scope.sendMessage = function() {
        console.log("spems");
        $http.post('server/sendMail.php',{"message":$scope.message}).success(function(res){
        if(res=="1"){
        	
            $window.location.href="confirmation.html";
            }
        }).error(function(){
            alert("error while sending the mail please retry again ...");
        });
    }
});
