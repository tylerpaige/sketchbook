import { h } from 'preact';
import { route } from 'preact-router';

function go(id) {
  console.log(id);
  if (id !== '') {
    route(`/sketch/${encodeURIComponent(id)}`);
  }
}

export function Home () {
  return (
    <section>
      <h1>Hello world</h1>
      <input type="text"
        placeholder="Enter a sketch ID"
        onChange={e => go(e.target.value)}
      />
    </section>
  )
};

export default Home;