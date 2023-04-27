import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Redirect() {
  const navigate = useNavigate();
  const location = useLocation();
  const accessToken = localStorage.getItem('access_token');

  useEffect(() => {
    if (accessToken !== null) {
      if (location.pathname === '/signin' || location.pathname === '/signup') {
        navigate('/todo');
      }
    }
    if (accessToken === null && location.pathname === '/todo') navigate('/signin');
    // if (location.pathname === '/') navigate('/signup');
  }, [location, navigate, accessToken]);
  return null;
}

export default Redirect;
