import './index.css'

const MatchCard = ({matchDetails}) => {
  const {
    competing_team_logo: logo,
    competing_team: name,
    result,
    match_status: status,
  } = matchDetails

  return (
    <li className="match-card">
      <img
        src={logo}
        alt={`competing team ${name}`}
        className="match-card-logo"
      />
      <p>{name}</p>
      <p>{result}</p>
      <p className={`match-status ${status.toLowerCase()}`}>{status}</p>
    </li>
  )
}

export default MatchCard
