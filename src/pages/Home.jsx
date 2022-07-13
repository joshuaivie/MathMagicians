import React from 'react';
import PageTitle from '../components/Layout/PageTitle';
import PageContent from '../components/Layout/PageContent';

function Home() {
  return (
    <div className="home">
      <PageTitle>Welcome to our page!</PageTitle>
      <PageContent>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet
          libero a tristique sodales. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Integer molestie a
          quam quis dapibus. Curabitur gravida massa quam, in dignissim odio
          suscipit in. Proin non convallis nunc. Duis commodo at purus at semper.
          Maecenas ex metus, egestas a faucibus nec, lobortis quis tortor. Proin
          eget feugiat ex, vel lacinia turpis. Nunc ligula velit, dictum id rutrum
          vel, vestibulum ac ex.
        </div>
      </PageContent>
    </div>
  );
}

export default Home;
