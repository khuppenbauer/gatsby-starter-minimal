import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import TkImage from "../images/TK_MG_9424-3456x2307-600x400.jpg"
import CkImage from "../images/CK_MG_9381-3456x2307-600x400.jpg"
import TnImage from "../images/TN_MG_9436-3456x2307-600x400.jpg"
import JrImage from "../images/JR_MG_9470-3456x2307-600x400.jpg"

const TeamPage = ({ location }) => (
  <Layout location={location}>
    <Seo title="Das PlusInForm Team - immer für Sie im Einsatz" />
    <section className="team-2">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="text-block">
              <div className="detail-line" />
              <h5>Team</h5>
              <h4>immer für Sie da</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6 team-member" style={{height: '536px'}}>
            <img src={TkImage} alt="Theodor Konrad" />
            <h3>Theodor Konrad</h3>
            <span>Inhaber</span>
            <p>Bilanzbuchhalter, Handelsfachwirt, Controller Rechnungswesen, Controlling<br />freie Mitarbeit Steuerberater</p>
          </div>
          <div className="col-md-6 col-sm-6 team-member" style={{height: '536px'}}>
            <img src={CkImage} alt="Claudia Konrad-Weckauff" />
            <h3>Claudia Konrad-Weckauff</h3>
            <span>Erzieherin und IHK-Fachkraft für Lohn- und Gehaltsabrechnung</span>
            <p>Lohn- und Gehaltsabrechnungen</p>
          </div>
          <div className="col-md-6 col-sm-6 team-member" style={{height: '536px'}}>
            <img src={TnImage} alt="Tanja Nufer" />
            <h3>Tanja Nufer</h3>
            <span>Fachgehilfin in steuer- und wirtschaftsberatenden Berufen</span>
            <p>Buchhaltung und Rechnungswesen<br />freie Mitarbeit Steuerberater</p>
          </div>
          <div className="col-md-6 col-sm-6 team-member" style={{height: '536px'}}>
            <img src={JrImage} alt="Jutta Rother" />
            <h3>Jutta Rother</h3>
            <span>Industriekauffrau / Buchhalterin</span>
            <p>Buchhaltung und Rechnungswesen</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default TeamPage