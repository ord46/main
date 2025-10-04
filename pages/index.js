import React from 'react'
import Head from 'next/head'

import { getStaticPage, queries } from '@data'

import PrivateEquityLanding from '@components/private-equity-landing'

const Home = ({ data }) => {
  const metaTitle =
    data?.page?.seo?.metaTitle || 'Helios Partners | Private Equity Reinvented'
  const metaDesc =
    data?.page?.seo?.metaDesc ||
    'Helios Partners is a next-generation private equity firm pairing conviction capital with operator-led value creation.'

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:type" content="website" />
      </Head>

      <PrivateEquityLanding />
    </>
  )
}

export async function getStaticProps({ preview, previewData }) {
  const pageData = await getStaticPage(
    `
    *[_type == "page" && _id == ${queries.homeID}] | order(_updatedAt desc)[0]{
      hasTransparentHeader,
      modules[]{
        ${queries.modules}
      },
      seo
    }
  `,
    {
      active: preview,
      token: previewData?.token,
    }
  )

  return {
    props: {
      data: pageData,
    },
  }
}

export default Home
