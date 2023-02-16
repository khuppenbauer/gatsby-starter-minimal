import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import BackgroundImage from "../../images/Fotolia_86456282_M-960x1284.jpg"

const RechnungswesenPage = ({ location }) => (
  <Layout location={location}>
    <Seo title="Rechnungswesen, Verbuchung der laufenden Geschäftsvorfälle" />
    <section className="image-block">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-7 col-md-offset-7 col-sm-offset-5">
            <div className="text-block">
              <div className="detail-line" />
              <div>
                <h5>Leistungen</h5>
                <h4>Rechnungswesen</h4>
                <p>Das Outsourcing des Rechnungswesens an einen externen Dienstleister bietet Ihnen zahlreiche Vorteile, die weit über reine Kostenoptimierung hinausgehen. Unser Leistungsspektrum umfasst:</p>
                <p><strong>Rechnungswesen </strong></p>
                <ul>
                  <li>Aufbereitung der Unterlagen</li>
                  <li>Sortieren und ordnen von Buchungsunterlagen</li>
                  <li>Prüfung der Buchungsunterlagen auf Vollständigkeit</li>
                  <li>Kontierung von Belegen</li>
                  <li>Aufarbeitung von Rückständen</li>
                  <li>Kaufmännische Organisation</li>
                </ul>
                <p><strong>Verbuchung der laufenden Geschäftsvorfälle </strong></p>
                <ul>
                  <li>Das Buchen der lfd. Geschäftsvorfälle der Finanzbuchhaltung*</li>
                  <li>Verbuchung von Banken-, Kassen- und Barbelegen</li>
                  <li>Verbuchung von Eingangs- und Ausgangsrechnungen</li>
                  <li>Verbuchung der Bruttolohnliste </li>
                  <li>Aufarbeitung von Rückständen</li>
                  <li>Anlagenbuchführung </li>
                </ul>
                <p><strong>Offene Postenverwaltung</strong></p>
                <ul>
                  <li>Übersicht der aktuellen Verbindlichkeiten / Kreditoren</li>
                  <li>Übersicht der aktuellen Forderungen / Debitoren </li>
                  <li>Kaufm. Mahnwesen und Zahlungsverkehr </li>
                </ul>
                <p><strong>Berichte und Auswertungen </strong></p>
                <ul>
                  <li>Übersichtliche betriebwirtschaftliche Auswertung (BWA) </li>
                  <li>Erstellung der Summen- und Saldenliste</li>
                  <li>Fälligkeitsübersichte</li>
                  <li>Streng vertrauliche Behandlung Ihrer Daten </li>
                </ul>
                <p><em>Die Hilfeleistung in Steuersachen umfasst nur das Buchen der lfd. Geschäftsvorfälle und die lfd. Lohnabrechnung.</em><br />Unsere Leistungen beschränken sich auf die Zulässigkeit im Rahmen des § 6 Nr. 4 Steuerberatungsgesetz, ohne Rechts- und Steuerberatung. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="image-holder col-md-6 col-sm-4 pull-left">
        <div className="background-image-holder fadeIn" style={{background: `rgba(0, 0, 0, 0) url(${BackgroundImage}) repeat scroll 50% 50%`}}>
          <img className="background-image" src={BackgroundImage} style={{display: 'none'}} width="960" height="1284" alt="Rechnungswesen" />
        </div>
      </div>
    </section>
  </Layout>
)

export default RechnungswesenPage