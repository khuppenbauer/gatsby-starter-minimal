import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import BackgroundImage from "../../images/Fotolia_68153506_M-960x640.jpg"

const BueroOrganisationPage = ({ location }) => (
  <Layout location={location}>
    <Seo title="Büroservice, Organisation, Zeitmanagement im Raum Stuttgart" />
    <section className="image-block">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-7 col-md-offset-7 col-sm-offset-5">
            <div className="text-block">
              <div className="detail-line"></div>
              <div>
                <h5>Leistungen</h5>
                <h4>Büro-Organisation</h4>
                <p>Bei der Fülle der täglichen Aufgaben ist es wichtig, den Überblick zu behalten. Ein gut organisiertes Büro- und Zeitmanagement hilft Ihnen dabei, mit der täglichen Papierflut fertig zu werden.</p>
                <p>Wir haben das Wissen und das Handwerkszeug, um Ihnen bei der Optimierung Ihrer Arbeitsabläufe zur Seite zu stehen. Unsere Beratung umfasst nicht nur die täglichen Arbeitsroutinen sondern auch die Organisation von Archiv- und Ablagesystemen.</p>
                <p>Manchmal genügen kleine strukurelle Veränderungen, um eine Organisation effizienter zu gestalten, manchmal sollte überlegt werden, zeitaufwändige Tätigkeiten außer Haus erledigen zu lassen.</p>
                <p>Sprechen Sie uns einfach an -<br />gemeinsam finden wir eine Lösung.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="image-holder col-md-6 col-sm-4 pull-left">
        <div className="background-image-holder fadeIn" style={{background: `rgba(0, 0, 0, 0) url(${BackgroundImage}) repeat scroll 50% 50%`}}>
          <img className="background-image" src={BackgroundImage} style={{display: 'none'}} width="960" height="640" alt="Büroorganisation" />
        </div>
      </div>
    </section>
  </Layout>
)

export default BueroOrganisationPage
