import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Form from "../../components/form"

import BackgroundImage from "../../images/GesTeam_MG_9490-2048x690-1920x647.jpg"

const KontaktPage = ({ location }) => (
  <Layout location={location}>
    <Seo title="PlusInForm Kontakt" />
    <section className="page-header short">
      <div className="background-image-holder fadeIn" style={{background: `rgba(0, 0, 0, 0) url(${BackgroundImage}) repeat scroll 50% 50%`}}>
        <img className="background-image" src={BackgroundImage} style={{display: 'none'}} width="1920" height="647" alt="Kontakt" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="detail-line" />
            <h4>Wir sind für Sie da</h4>
          </div>
        </div>
      </div>
    </section>
    <section className="col-3-text">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="text-block">
              <div className="detail-line"></div>
              <div>
                  <h3>Kontakt</h3>
              </div>
            </div>
            <Form />
          </div>
          <div className="col-md-4">
            <div>
              <h5>Bürozeiten</h5>
              <p>Mo bis Do 09:00 bis 12:00 Uhr<br />Di und Do 16:00 bis 18:00 Uhr</p>
              <p>Um Sie ungestört und umfassend beraten zu können, finden Beratungsgespräche nur nach telefonischer Terminabsprache statt.</p>
              <p>Termintelefon: 07051 934003</p>
              <p>Sollten wir Ihren Anruf während der Bürozeiten einmal nicht persönlich entgegen nehmen können, hinterlassen Sie uns bitte eine Nachricht und nennen Sie uns Ihren Namen und Ihre Telefonnummer. Wir rufen Sie gerne schnellstmöglich zurück.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default KontaktPage