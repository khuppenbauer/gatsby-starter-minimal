import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const DatenschutzPage = ({ location }) => (
  <Layout location={location}>
    <Seo title="PlusInForm Datenschutz" />
    <section className="col-3-text">
      <div className="container">
        <div className="row plusinform-machine-column">
          <div className="col-md-12">
            <div className="text-block">
              <div className="detail-line" />
              <div>
                <h3>Datenschutzerklärung</h3>
              </div>
            </div>
              <div>
                <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
                <p>Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.</p>
                <p>Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>
                <p><strong>Kontaktformular</strong></p>
                <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
              </div>
              <div>
                <p>Quelle: <a target="_blank" rel="noreferrer" href="https://www.e-recht24.de">https://www.e-recht24.de</a></p>
              </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default DatenschutzPage