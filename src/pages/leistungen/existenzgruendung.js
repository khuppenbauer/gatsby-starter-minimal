import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import BackgroundImage from "../../images/Fotolia_74775096_M-959x656.jpg"

const ExistenzgruendungPage = ({ location }) => (
  <Layout location={location}>
    <Seo title="Beratung für Existenzgründer in der Region Stuttgart" />
    <section className="image-block">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-7 col-md-offset-7 col-sm-offset-5">
            <div className="text-block">
              <div className="detail-line" />
              <div>
                <h5>Leistungen</h5>
                <h4>Existenzgründungsberatung | Coaching </h4>
                <p>Erfolgreiche Gründer nutzen das Wissen von kompetenten Beratern.</p>
                <p>Eine frühzeitige Beratung vor der Gründung kann Ihnen viel Ärger ersparen, deshalb stellt der Gesetzgeber Fördergelder für Beratungsleistungen bereit. Wir erstellen für Sie einen Businessplan, beraten bei der Wahl der Rechtsform und unterstützen Sie in allen steuerlichen Fragen.</p>
                <p>PlusInForm ist beim Bundesamt für Wirtschaft und Ausfuhrkontrolle als Existenzgründungsberater anerkannt. Diese Anerkennung ist Voraussetzung für die Förderung mit stattlichen Zuschüssen. Ebenso sind wir dazu befugt, die erforderliche Stellungnahme der fachkundlichen Stelle zur Tragfähigkeit bei der Agentur für Arbeit abzugeben.</p>
                <p>Starten Sie los -<br />wir kümmern uns um den Rest.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="image-holder col-md-6 col-sm-4 pull-left">
        <div className="background-image-holder fadeIn" style={{background: `rgba(0, 0, 0, 0) url(${BackgroundImage}) repeat scroll 50% 50%`}}>
          <img className="background-image" src={BackgroundImage} style={{display: 'none'}} width="959" height="656" alt="Existenzgründung" />
        </div>
      </div>
    </section>
  </Layout>
)

export default ExistenzgruendungPage