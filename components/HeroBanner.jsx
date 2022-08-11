import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">small text</p>
        <h3>mid</h3>
        <h1>large</h1>
        <img src="" alt="headphones" className="hero-banner-image" />

        <div>
          <Link href="/product/id">
            <button type="button">button</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>desc</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner;