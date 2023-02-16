import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import BackgroundImage from "../../images/Fotolia_89419017_M-960x641.jpg"

const ConsultingPage = ({ location }) => (
  <Layout location={location}>
    <Seo title="Unternehmensberatung und Prozeßoptimierung aus Calw" />
    <section className="image-block">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-7">
            <div className="text-block">
              <div className="detail-line" />
              <div>
                <h5>Leistungen</h5>
                <h4>Unternehmensnavigation | Consulting</h4>
                <p>Unternehmerische Entscheidungen werden stetig komplexer. Der Erfolg eines Unternehmens basiert auf der Summe vieler Faktoren, die immer wieder überdacht und flexibel angepasst werden müssen.</p>
                <p>Damit Sie sich als Navigator auf Ihr Kerngeschäft konzentrieren können, bieten wir Ihnen die notwendigen Steuerungsinstrumente, die weit über das Erstellen von Kennzahlen hinaus gehen.</p>
                <p>Wir erarbeiten Ziele und Geschäftsstrategien, optimieren Abläufe und Prozesse und bieten Ihnen ein umfassendes, speziell auf Ihre Belange zugeschnittenes Beratungskonzept, um Ihr Unternehmen fit für die Zukunft zu machen.</p>
                <p>Sie navigieren –<br />wir halten Ihnen den Rücken frei.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="image-holder col-md-6 col-sm-4 pull-right">
        <div className="background-image-holder fadeIn" style={{background: `rgba(0, 0, 0, 0) url(${BackgroundImage}) repeat scroll 50% 50%`}}>
          <img className="background-image" src={BackgroundImage} style={{display: 'none'}} width="960" height="641" alt="Consulting" />
        </div>
      </div>
    </section>
  </Layout>
)

export default ConsultingPage