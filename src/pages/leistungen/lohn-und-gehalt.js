import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import BackgroundImage from "../../images/Fotolia_96495839_M-960x640.jpg"

const LohnGehaltPage = ({ location }) => (
  <Layout location={location}>
    <Seo title="Outsourcing von Lohn- und Gehaltsabrechnungen in Calw" />
    <section className="image-block">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-7">
            <div className="text-block">
              <div className="detail-line" />
              <div>
                <h5>Leistungen</h5>
                <h4>Lohn und Gehalt</h4>
                <p>Das Outsourcing der Lohn- und Gehaltsabrechnung befreit Sie von zeitintensiven Arbeiten, die – aufgrund des immer komplexer werdenden Lohnsteuer- und Sozialversicherungsrechts – mit einem hohen Haftungsrisiko verbunden sind. </p>
                <p><strong>Wir entlasten Sie bei den folgenden Aufgaben:</strong></p>
                <ul>
                  <li>Zusammenstellung der Lohnabrechnungsdaten, Datenverarbeitung und Berechnung</li>
                  <li>Berechnung lfd. Lohn- und Gehaltsabrechnung</li>
                  <li>Lohnsteuer</li>
                  <li>Solidaritätszuschlag</li>
                  <li>Rentenversicherungsbeiträge</li>
                  <li>Krankenversicherungsbeiträge</li>
                  <li>Arbeitslosenversicherungsbeiträge</li>
                  <li>Pflegeversicherungsbeiträge</li>
                  <li>Berechnung von Abschlagszahlungen</li>
                  <li>Pauschalierte Lohnsteuer</li>
                  <li>Erstellung der Lohnsteueranmeldung</li>
                </ul>
                <p><strong>Verdienstnachweise</strong>:</p>
                <p>Auf Wunsch senden wir Verdienstnachweise per Post oder E-Mail direkt zu Ihren Beschäftigten.</p>
                <p><strong>Beitragsnachweise:</strong></p>
                <p>Wir übermitteln Ihre Beitragsnachweise elektronisch an die zuständigen Krankenkassen.</p>
                <p><strong>Lohnsteueranmeldung:</strong></p>
                <p>Diese werden monatlich, vierteljährlich oder jährlich von uns an das Finanzamt übermittelt. Wir wickeln ebenfalls Ihren Zahlungsverkehr und die notwendige Korrespondenz für Sie ab.</p>
                <p><em>Die Hilfeleistung in Steuersachen umfasst nur das Buchen der lfd. Geschäftsvorfälle und die lfd. Lohnabrechnung.</em></p>
                <p>Unsere Leistungen beschränken sich auf die Zulässigkeit im Rahmen des § 6 Nr. 4 Steuerberatungsgesetz, ohne Rechts- und Steuerberatung.</p>
                <p>Diese Leistungen bieten wir über unsere Partner an.</p>
                <p>Konzentrieren Sie sich auf Ihr Kerngeschäft<br />wir verschaffen Ihnen Freiräume und Kapazitäten.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="image-holder col-md-6 col-sm-4 pull-right">
        <div className="background-image-holder fadeIn" style={{background: `rgba(0, 0, 0, 0) url(${BackgroundImage}) repeat scroll 50% 50%`}}>
          <img className="background-image" src={BackgroundImage} style={{display: 'none'}} width="960" height="1284" alt="Lohn und Gehalt" />
        </div>
      </div>
    </section>
  </Layout>
)

export default LohnGehaltPage