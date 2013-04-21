var app = (function() {

  var authClient;

  function init() {
    document.addEventListener('deviceready', function() {
      // FirebaseAuthClient demo instantiation
      var firebaseRef = new Firebase('https://demos.firebaseio.com');
      authClient = new FirebaseAuthClient(firebaseRef, function(error, user) {
        if (error) {
          // an error occurred while attempting login
          var message = 'An error occurred.';
          navigator.notification.alert(message, function(){}, 'Failure!', 'Close');

        } else if (user) {
          // user authenticated with Firebase
          var message = 'User ID: ' + user.id + ', Provider: ' + user.provider;
          navigator.notification.alert(message, function(){}, 'Success!', 'Close');
         
          // Log out so we can log in again with a different provider.
          authClient.logout();

        } else {
          // user is logged out
        }
      });
    }, false);
  }

  function login(provider) {
    if (authClient) {
      authClient.login(provider);  
    }
  }

  return {
    init: init,
    login: login
  };
})();
