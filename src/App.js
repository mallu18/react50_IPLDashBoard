// import './App.css'
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// // import {Component} from 'react'
// import Home from './components/Home'
// import TeamMatches from './components/TeamMatches'
// import NotFound from './components/NotFound'

// const App = () => (
//   <Router>
//     <Switch>
//       <Route path="/" element={<Home />} />
//       <Route path="/team-matches/:id" element={<TeamMatches />} />
//       <Route path="*" element={<NotFound />} />
//     </Switch>
//   </Router>
// )
// export default App

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team-matches/:id" element={<TeamMatches />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
