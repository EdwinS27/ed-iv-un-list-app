import React, { useContext } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const CreatePostButton = withRouter(({ history }) => {
  const auth = useContext(AuthContext);
  if(!auth.isAuthenticated) {
    return (
        <li className="nav-item">

        </li>
    );
  }
  else{
    return (
        <li className="nav-item">
            <Link className="nav-link dropdown-toggle text-white" to="/create-listing">create a post</Link>
        </li>
    );
  }
});

export default CreatePostButton;
