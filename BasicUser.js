angular.controller("BasicUserController", ['$scope', '$rootScope', '$location',
function ($scope, $rootScope, $location) {

    // reset login status

                // $location.path('/AddAck');
                 $rootScope.isUserLoggedIn = false;
                 $scope.master = {};

                       $scope.update = function(basicuserdetails) {
                         $scope.master = angular.copy(basicuserdetails);
                       };

  if($rootScope.newdata == null)    {


var basicuserdetails =
 { Fullname:"Spanny",
 Fraternityname:"Aplha Phi",
 Email:"Spanny@gmail.com",
 Phonenumber:"8765432908" };
 $scope.basicuserdetails = basicuserdetails;

 $rootScope.newdata = $scope.basicuserdetails;
}
else {
  $scope.basicuserdetails =  $rootScope.newdata;
}
}
]);