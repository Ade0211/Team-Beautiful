import React from "react";
import GitHubLogin from "react-github-login";

const GithubMsLogin = () => {
  const onSuccess = (response) => console.log(response.code);
  const onFailure = (response) => console.error(response);
  return (
    <GitHubLogin
      clientId="ac56fad434a3a3c1561e"
      onSuccess={onSuccess}
      onFailure={onFailure}
      buttonText="LOGIN WITH GITHUB"
      className="git-login"
      valid={true}
      redirectUri="b03108271b2c150d5874"
    />
  );
};

export default GithubMsLogin;
