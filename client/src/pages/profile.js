// src/pages/profile.js

import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    <div>
    {/* jsx content for the user profiles goes here -- please do not edit wrapping code it will break user authentication  */}
    </div>
  );
};

export default Profile;