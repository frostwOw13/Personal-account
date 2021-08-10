import React from 'react';

interface ProfileProps {
  username: string
}

const Profile: React.FC<ProfileProps> = ({ username }) => (
  <div>
    <h1>You are in profile</h1>
  </div>
);

export default Profile;
