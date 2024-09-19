import * as React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Feature from '../components/feature';
import UpcomingEvents from '../components/upcomingEvents';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <Hero pageTitle="Home"/>
      <Feature pageTitle="Home" />
      <UpcomingEvents pageTitle="Home" />
    </Layout>
  )
};

export const Head = () => <title>Pack 248 - Home</title>;
export default IndexPage;