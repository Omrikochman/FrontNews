import React, { useEffect } from 'react';
import { useAuth, useLoginWithRedirect, ContextHolder } from '@frontegg/react';
import './App.css';

function App() {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  console.log(user);
  console.log(isAuthenticated)

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };


  // Add handling for social login success (after redirection)
  useEffect(() => {
    if (window.location.href.includes('account/social/success')) {
      // Here you can handle the success of the social login redirect
      // Typically Frontegg automatically processes this, but you can also
      // show an alert or log something to confirm the callback is processed.
      console.log("Redirected after social login success.");
    }
  }, []);

  return (
    <div className="App">
      {isAuthenticated ? (
        <div>
          <div>
            <img src={user?.profilePictureUrl || undefined} alt={user?.name} />
          </div>
          <div>
            <span>Logged in as: {user?.name}</span>
          </div>
          <div>
            <button onClick={() => alert(user?.accessToken)}>
              What is my access token?
            </button>
          </div>
          <div>
            <button onClick={logout}>Click to logout</button>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={loginWithRedirect}>Click me to login</button>
        </div>
      )}
    </div>
  );
}

export default App;
