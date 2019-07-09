import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import App from '../layouts/App'
import styles from '../pages/imprint.module.css'

const Imprint = () => {
  
    return (
      <App>
       
        <Jumbotron title="Imprint" />
        <section className={styles.about} >
        
   <div  >
      <article >
         

          <div className={styles.aboutInfo}>
          <h5>Angaben gemäß § 5 TMG</h5>
          <p> Pipes GmbH</p>
         <p>Schwedter Straße 13,</p>
         <p>10119 Berlin</p>
          </div>
          
          
        
       <div className={styles.aboutInfo}>
       <h5>Dimitri Tarasowski</h5> 
        <p>Tel. +49 030 55572327</p>
        <p>E-Mail: dimitri@tarasowski.de</p>
       </div>


          </article>

          <article className={styles.aboutInfo}>
          <h5>Haftung</h5>
<p>
  Wir übernehmen keine Haftung bei Verlinkung auf unsere Seiten
sowie für Inhalte externer Links.
Für diese Inhalte sind ausschließlich deren Betreiber zuständig.
Bei Kenntnisnahme rechtswidriger Verlinkung ergreifen wir sofort
entsprechende Maßnahmen. Eine Haftung vor Kenntnis einer
Rechtsverletzung ist ausgeschlossen.
</p>

<h5>Inhalte</h5>
<p>
  Trotz aller Sorgfalt bei der Erstellung unserer Internetseiten können
wir keine Gewähr für Richtigkeit und Vollständigkeit übernehmen.
Die Nutzung der Webseiten erfolgt auf eigenen Gefahr.
Es kommt kein Vertragsverhältnis zwischen Seitenanbieter und
Nutzer zustande. Dies geschieht ausschließlich in Absprache mit
Wiederverkäufer bzw. Gewerbetreibende.
</p>


<h5>Datenschutz</h5>
<p>Bei Kunden- Lieferanten- Informationen beachten wir die Regeln des Datenschutzes.
Persönliche Daten verstehen wir als freiwillig zugesandt und behandeln diese vertraulich
ausschließlich für die Auftragsabwicklung.
Vorgänge und Daten werden elektronisch gespeichert.
Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. (“Google”).  
Google Analytics verwendet sog. “Cookies”, Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglicht.  
Die durch den Cookie erzeugten Informationen über Ihre Benutzung diese Website (einschließlich Ihrer IP-Adresse) wird an einen Server von Google in den USA übertragen und dort gespeichert. Google wird diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten für die Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google verarbeiten.  
Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten der Google in Verbindung bringen. Sie können die Installation der Cookies durch eine entsprechende Einstellung Ihrer Browser Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website voll umfänglich nutzen können.  
Durch die Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.</p>

          </article>

        </div>
        </section>
       
      </App>
    );
  
}

export default Imprint;