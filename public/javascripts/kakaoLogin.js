window.Kakao.init("09f6d93696e5e92f399bf183073a0529");
function loginWithKakao() {
    Kakao.Auth.login({
      success: function(authObj) {
        document.getElementById('token-result').innerText = 'login success. token: ' + Kakao.Auth.getAccessToken()
        console.log(JSON.stringify(authObj))
      },
      fail: function(err) {
        console.log(JSON.stringify(err))
      },
    })
  }
  function getCookie(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  
	function kakaoLogout() {
    	if (!Kakao.Auth.getAccessToken()) {
		    console.log('Not logged in.');
		    return;
	    }
	    Kakao.Auth.logout(function(response) {
        console.log("test")
    		alert(response +' logout');
		    window.location.href='/'
	    });
};

  displayToken();//토큰체크
  function displayToken() {
    const token = getCookie('authorize-access-token')
    if(token) {
      Kakao.Auth.setAccessToken(token)
      Kakao.Auth.getStatusInfo(({ status }) => {
        if(status === 'connected') {
          document.getElementById('token-result').innerText = 'login success. token: ' + Kakao.Auth.getAccessToken()
        } else {
          Kakao.Auth.setAccessToken(null)
        }
      })
    }
  }


function test(){
    alert("test");
}