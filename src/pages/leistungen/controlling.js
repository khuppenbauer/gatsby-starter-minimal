import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import BackgroundImage from "../../images/Fotolia_68870104_M-960x640.jpg"

const ControllingPage = ({ location }) => (
  <Layout location={location}>
    <Seo title="Controlling Kosten- und Leistungsrechnung im Nordschwarzwald" />
    <section className="image-block">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-7">
            <div className="text-block">
              <div className="detail-line" />
              <div>
                <h5>Leistungen</h5>
                <h4>Kostenrechnung | Controlling</h4>
                <p>Ein betriebliches Kostenrechnungs- und Kennzahlensystem ist für die Geschäftsleitung unabdingar, um bei Fehlentwicklungen frühzeitig reagieren und objektive Maßnahmen für die Zukunft ableiten zu können.</p>
                <p>Wir verfügen über 25 Jahre Erfahrung in Controlling, Kosten-/Leistungsrechnung und Kalkulation und stehen Ihnen sowohl für die Implementierung eines Controllingsystems in Ihrem Unternehmen als auch für regelmäßige Ergebnisreportings zur Verfügung.</p>
                <p>Als externer Dienstleister beraten und unterstützen wir Sie gerne durch Information und Handlungsvorschläge und übernehmen bedarfsgerecht die laufenden Aufgaben eines internen Controllers.</p>
                <p>Erweitern Sie Ihren Erfolg -<br />wir liefern die Kennzahlen dazu.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="image-holder col-md-6 col-sm-4 pull-right">
        <div className="background-image-holder fadeIn" style={{background: `rgba(0, 0, 0, 0) url(${BackgroundImage}) repeat scroll 50% 50%`}}>
          <img className="background-image" src={BackgroundImage} style={{display: 'none'}} width="960" height="640" alt="Controlling" />
        </div>
      </div>
    </section>
  </Layout>
)

export default ControllingPage