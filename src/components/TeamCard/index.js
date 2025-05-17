import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = ({team}) => (
  <li className="team-card">
    <Link to={`/team-matches/${team.id}`} className="team-link">
      <img src={team.teamImageUrl} alt={team.name} className="team-logo" />
      <p className="team-name">{team.name}</p>
    </Link>
  </li>
)

export default TeamCard
