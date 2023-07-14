import { Link } from 'react-router-dom';

export const Welcome = () => (
  <div className="Welcome">
    <h2>Welcome to Keycloak-POC</h2>
    <div className='button__wrapper'>
    <Link className="button" to="/secured">
      Login
    </Link>
    </div>
  </div>
);
