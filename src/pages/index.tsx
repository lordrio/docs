import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Hero from "@site/src/components/Hero";
import Illustration from "@site/src/components/Illustration";
import Head from "@docusaurus/Head";

import styles from "./index.module.scss";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <Head>
        <title>{`${siteConfig.title} | Build web3 apps`}</title>
        <link href="https://juno.build" rel="canonical" />
        <meta content="Build web3 apps faster than ever. No backend code required. 100% on-chain with minimal carbon impact." name="description" />
        <meta content="Juno" property="og:title" />
        <meta content="Build web3 apps faster than ever" property="og:description" />
        <meta content="website" property="og:type" />
        <meta content="https://juno.build" property="og:url" />
        <meta content="https://juno.build/images/social-image.jpg" property="og:image" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="Juno" name="twitter:title" />
        <meta content="Build web3 apps faster than ever" name="twitter:description" />
        <meta content="https://juno.build/images/social-image.jpg" name="twitter:image" />
        <meta content="@JunoBuild" name="twitter:creator" />
      </Head>
      <main className={`${styles.main}`}>
        <section className={`container ${styles.section}`}>
          <Hero />

          <Illustration />
        </section>
      </main>
    </Layout>
  );
}
