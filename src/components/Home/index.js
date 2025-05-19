import {useEffect, useState} from 'react'
// import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

const Home = () => {
  const [teams, setTeams] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await fetch('https://apis.ccbp.in/ipl')
      const data = await response.json()
      const formattedData = data.teams.map(team => ({
        id: team.id,
        name: team.name,
        teamImageUrl: team.team_image_url,
      }))
      setTeams(formattedData)
      setIsLoading(false)
    }
    fetchTeams()
  }, [])

  return (
    <div className="home-container">
      <div className="header">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          alt="ipl logo"
          className="ipl-logo"
        />
        <h1 className="header-title">IPL Dashboard</h1>
      </div>
      {isLoading ? (
        <div data-testid="loader">
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        </div>
      ) : (
        <ul className="teams-list">
          {teams.map(team => (
            <TeamCard key={team.id} team={team} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default Home
