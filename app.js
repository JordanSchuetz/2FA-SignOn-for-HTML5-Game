window.addEventListener('load', function () {
  var loadingSpinner = document.getElementById('loading');
  loadingSpinner.style.display = 'none';
  var loginBtn = document.getElementById('qsLoginBtn');
  var playBtn = document.getElementById('playBtn');
  playBtn.style.display = 'none';
  var username;
  var userProfile;

  var webAuth = new auth0.WebAuth({
    domain: AUTH0_DOMAIN,
    clientID: AUTH0_CLIENT_ID,
    redirectUri: AUTH0_CALLBACK_URL,
    audience: 'https://' + AUTH0_DOMAIN + '/userinfo',
    responseType: 'token id_token',
    scope: 'openid profile',
    leeway: 60
  });

  loginBtn.addEventListener('click', function (e) {
    e.preventDefault();
    webAuth.authorize();
  });

  playBtn.addEventListener('click', function(){window.location = window.location.href.substring(0,location.href.lastIndexOf('/')+1)+'vote.html';});

  function setSession(authResult) {
    // Set the time that the access token will expire at
    console.log("set session!!");
    var expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  function logout() {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  function isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  function getProfile() {
    if (!userProfile) {
      var accessToken = localStorage.getItem('access_token');

      if (!accessToken) {
        console.log('Access token must exist to fetch profile');
      }

      console.log("requesting profile!!");
      webAuth.client.userInfo(accessToken, function(err, profile) {
        if (profile) {
          userProfile = profile;
          setDisplayName();
        }
      });
    } else {
      setDisplayName();
    }
  }

  function setDisplayName() {
    username = userProfile.name;
    console.log(userProfile.name);
    console.log(username);
    localStorage.setItem('username', username);
  }

  function handleAuthentication() {

    webAuth.parseHash(function (err, authResult) {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        setSession(authResult);
      } else if (err) {
        console.log(err);
        alert(
          'Error: ' + err.error + '. Check the console for further details.'
        );
      }
     displayButtons();
    });
  }

  function displayButtons() {
    getProfile();
    if (isAuthenticated()) {
      loginBtn.style.display = 'none';
      playBtn.style.display = 'inline-block';
    } else {
      loginBtn.style.display = 'inline-block';
      playBtn.style.display = 'none';
    }
  }

  handleAuthentication();
});
