angular.controller("GuardRegistration", ['$scope', '$rootScope', '$location','$http',
function ($scope, $rootScope, $location, $http) {

  $scope.master = {};
  $scope.guardreg = {};
  $scope.showSuccessAlert = false;
        $scope.update = function(user) {

            // $scope.showSuccessAlert = true;
            // $scope.successTextAlert = "Registration Succesful.Click ";
            $scope.master = $scope.user;
            $scope.user['userType'] = "guard";


              $scope.guardreg['Email'] = user.Email;
              $scope.guardreg['Password'] = user.Password;
              $scope.guardreg['firstName'] = user.firstName;
              $scope.guardreg['lastName'] = user.lastName;
              $scope.guardreg['userType'] = user.userType;
              $scope.guardreg['age'] = user.age;
              $scope.guardreg['imgUrl'] = null;
              $scope.guardreg['guardUserCode'] = user.guardUserCode;
              $scope.guardreg['PhoneNumber'] = user.PhoneNumber;

              $rootScope.first = user.firstName;
              var guardUser = $scope.guardreg;
               console.log("hey"+JSON.stringify(guardUser ));
           //Api call
            // $http.post('/api/authenticate', user)
            //    .success(function (response) {
            //      $scope.showSuccessAlert = true;
            //      $scope.successTextAlert = "Registration Succesful.Click ";
            //        callback(response);
            //    });

               //API call
               $http({
                     method: 'POST',
                     url: 'https://partyguardservices20161110094537.azurewebsites.net/api/Account/Register',
                     data: guardUser,
                     headers: {
                       'Content-Type': 'application/json'
                     }}).then(function(result) {
                     // console.log(result.data.UserType);

                         //var response = { success: type === userType};


                         console.log("success"+result.data);
                        var guarddata = result.data;

                         $http({method: 'GET',
                                url: 'http://localhost:8080/domailGuard',
                                params: guardUser,
                                headers: {
                                'Content-Type': 'application/json'
                                }
                            });

                            $scope.showSuccessAlert = true;
                            $scope.successTextAlert = "Registration Succesful.Click ";
                         //console.log(response.access_token);
                                    // store username and token in local storage to keep user logged in between page refreshes
                     //    $localStorage.currentUser = { username: username, token: token };

                                    // add jwt token to auth header for all requests made by the $http service
                       //  $http.defaults.headers.common.Authorization = 'Bearer ' +token;
                      // callback("success");
                     }, function(error) {
                       $scope.showSuccessAlert = true;
                       $scope.successTextAlert = "Registration failed. The username has been taken already!. Click ";
                     console.log(error);
                     });

                     //end


        };

        $scope.reset = function() {

          $scope.user = null;
        };

        $scope.switchBool = function (value) {
            $scope[value] = !$scope[value];
        };

        // $scope.reset = function() {
        //   $scope.user = angular.copy($scope.master);
        // };
        //
        // $scope.reset();


  }]);