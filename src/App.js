import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import './App.css'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import HousingSheet from './pages/housingSheet/HousingSheet'
import Error404 from './pages/error404/Error404'
import Footer from './components/Footer'
function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('../data.json')
      .then(function (res) {
        return res.json()
      })
      .then(function (data) {
        // store Data in State Data Variable
        setData(data)
      })
      .catch(function (err) {
        console.log(err, ' error')
      })
  }, [setData])

  if (data.length > 0) {
    console.log(data[0].host.name)
  }

  // data done after refresh with this

  // no data after refresh with this

  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home data={data} />
          </Route>
          <Route exact path="/housingsheet/:idUrl">
            <HousingSheet data={data} />
          </Route>
          <Route exact path="/apropos">
            <About data={data} />
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </div>
      <Footer></Footer>
    </Router>
  )
}

export default App
