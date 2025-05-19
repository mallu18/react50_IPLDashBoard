import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

const TeamMatches = () => {
  const {id} = useParams()
  const [teamData, setTeamData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
        const data = await response.json()

        const formattedData = {
          teamBannerUrl: data.team_banner_url,
          latestMatchDetails: data.latest_match_details,
          recentMatches: data.recent_matches,
        }

        setTeamData(formattedData)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching team data:', error)
      }
    }

    fetchTeamData()
  }, [id])

  return (
    <div className="team-matches-container">
      {isLoading && (
        <div data-testid="loader">
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        </div>
      )}

      {!isLoading && teamData && (
        <>
          <img
            src={teamData.teamBannerUrl}
            alt="team banner"
            className="team-banner"
          />
          <LatestMatch matchDetails={teamData.latestMatchDetails} />
          <ul className="recent-matches-list">
            {teamData.recentMatches.map(match => (
              <MatchCard
                key={match.id || match.competing_team}
                matchDetails={match}
              />
            ))}
          </ul>
        </>
      )}

      {!isLoading && !teamData && <p>No team data available</p>}
    </div>
  )
}

export default TeamMatches
