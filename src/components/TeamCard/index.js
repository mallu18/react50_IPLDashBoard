import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = ({team}) => {
  const {id, name, teamImageUrl} = team

  return (
    <li className="team-card">
      {/* Use the correct dynamic route */}
      <Link to={`/team-matches/${id}`} className="team-card-link">
        <img src={teamImageUrl} alt={name} className="team-card-image" />
        <p className="team-card-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
