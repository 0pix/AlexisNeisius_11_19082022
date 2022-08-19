import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './roots/home/Home'
import About from './roots/about/About'
import './App.css'
import { useState, useEffect } from 'react'
import Header from './components/Header'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('./data/data.json')
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
  }, [])

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home data={data} />
        </Route>
        <Route path="/apropos">
          <About />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
