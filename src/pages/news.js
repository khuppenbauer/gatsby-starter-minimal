import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NewsPage = ({ location }) => {
  const [news1, setNews1] = React.useState(null);
  const [news2, setNews2] = React.useState(null);

  React.useEffect(() => {
    fetch('https://api.vsh-dl.de/v1/steuernews/1?_format=json')
      .then(response => response.json())
      .then(data => setNews1(data))

    fetch('https://api.vsh-dl.de/v1/steuernews/2?_format=json')
      .then(response => response.json())
      .then(data => setNews2(data))
  }, [])

  return (
    <Layout location={location}>
      <Seo title="Aktuelles aus Steuern und Recht" />
      <section className="col-3-text">
        <div className="container">
          <div className="row plusinform-machine-column">
            <div className="col-md-12">
              <div className="text-block">
                <div className="detail-line" />
                <div>
                    <h3>Aktuelles aus Steuern und Recht</h3>
                </div>
              </div>
              <div className="contained-news">
                <div className="text-list">
                  {news1 && news2 && news1.map((newsItem, index) => {
                    const { term_node_tid: id, created, body, title } = newsItem
                    const { term_node_tid: id2, created: created2, body: body2, title: title2 } = news2[index]
                    return (
                      <React.Fragment key={`${id}${index}`}>
                        <div className="item news" key={title}>
                          <h5>{created} <span className="small">{id}</span></h5>
                          <h4>{title}</h4>
                          <div dangerouslySetInnerHTML={{__html: body}} />
                        </div>
                        <div className="item news" key={title2}>
                          <h5>{created2} <span className="small">{id2}</span></h5>
                          <h4>{title2}</h4>
                          <div dangerouslySetInnerHTML={{__html: body2}} />
                        </div>
                      </React.Fragment>
                    )
                  })}
                </div>
              </div>
              <div>
                <p>Quelle: <a target="_blank" rel="noreferrer" href="http://www.vsh-dl.de">V.S.H. Dienstleistungen</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>    
    </Layout>
  )
}

export default NewsPage