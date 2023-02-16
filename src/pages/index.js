import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import BackgroundImage from "../images/Fotolia_48761950_M-2388x796-1920x640.jpg"

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Seo title="PlusInForm - Partner für betriebswirtschaftliche Beratung" />
    <section className="page-header short">
      <div className="background-image-holder fadeIn" style={{background: `rgba(0, 0, 0, 0) url(${BackgroundImage}) repeat scroll 50% 50%`}}>
          <img className="background-image" src={BackgroundImage} style={{display: 'none'}} width="1920" height="640" alt="willkommen" />
        </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="detail-line" />
            <h4>Herzlich Willkommen</h4>
          </div>
        </div>
      </div>
    </section>
    <section className="image-block">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-7">
            <div className="text-block">
              <div className="detail-line" />
              <div>
                <h5>Ihr kompetenter Partner für betriebswirtschaftliche Beratung</h5>
                <p>Beratung ist Vertrauenssache – geprägt durch ein respektvolles und aufrichtiges Miteinander, eine offene Kommunikation und Verständnis für die Situation des Geschäftspartners.</p>
                <p>Die Sicherheit, Ihre Fragen und Belange in professionellen und kompetenten Händen zu wissen, schafft die Grundlage des Vertrauens.</p>
                <p>Mit diesem Verständnis arbeiten wir und schaffen somit einen Rahmen, in dem sich unsere Mandanten – Privatpersonen und Selbstständige ebenso wie Unternehmen – als Partner verstanden und gut aufgehoben fühlen.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
