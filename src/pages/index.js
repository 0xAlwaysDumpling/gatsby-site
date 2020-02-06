import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from "../components/landing";
import { library, config  } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCircleNotch, faGlobe, faEnvelope } from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false;
library.add(fab, faCircleNotch, faGlobe, faEnvelope);

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <Landing/>
  </Layout>
)

export default IndexPage
