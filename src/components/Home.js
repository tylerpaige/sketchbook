import { h } from 'preact';
import { route } from 'preact-router';
import { Link } from 'preact-router/match';
import routes from './routes';

export function Home () {
  const listItems = Object.keys(routes).map(routeKey => {
    const url = `/sketch/${routeKey}`;
    return (
      <li><a href={ url }>{ routeKey }</a></li>
    )
  });

  return (
    <section>
      <nav>
        { listItems }
      </nav>
    </section>
  )
};

export default Home;