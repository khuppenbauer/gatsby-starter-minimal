import * as React from "react"
import { Link } from "gatsby"

const Footer = () => (
  <footer className="footer-5">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div>
            <p>
              PlusInForm<br />
              Theodor Konrad<br />
              Hirsauer Wiesenweg 23<br />
              75365 Calw<br />
              Telefon: 07051 934003<br />
              E-Mail: <a href="mailto:info@plusinform.de">info@plusinform.de</a><br /><br />
              Mitglied im Bundesverband selbstständiger Buchhalter und Bilanzbuchhalter
            </p>
          </div>
        </div>
        <div className="text-right bottom-aligned-text col-md-6">
          <ul>
            <li>
              <Link to="/meta/kontakt/">Kontakt</Link>
            </li>
            <li>
              <Link to="/meta/impressum/">Impressum</Link>
            </li>
            <li>
              <Link to="/meta/datenschutz/">Datenschutz</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
