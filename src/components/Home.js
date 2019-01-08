import { h } from 'preact';
import { route } from 'preact-router';
import { Link } from 'preact-router/match';
import routes from './routes';
import 'reset-css';
import styles from '../styles/main.scss';

export function Home () {
  const listItems = Object.keys(routes).map(routeKey => {
    const url = `/sketch/${routeKey}`;
    return (
      <li><a href={ url }>{ routeKey }</a></li>
    )
  });

  return (
    <nav>
      { listItems }
    </nav>
  )
};

export default Home;