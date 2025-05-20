import './index.css'

const LatestMatch = ({matchDetails}) => {
  const {
    competing_team: competingTeam,
    date,
    venue,
    result,
    competing_team_logo: competingTeamLogo,
    first_innings: firstInnings,
    second_innings: secondInnings,
    man_of_the_match: manOfTheMatch,
    umpires,
  } = matchDetails

  return (
    <div className="latest-match-container">
      <div className="latest-match-top">
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="team-logo"
        />

        <div className="latest-match-details">
          <p className="competing-team">{competingTeam}</p>
          <p className="match-date">{date}</p>
          <p className="match-venue">{venue}</p>
          <p className="match-result">{result}</p>
        </div>
      </div>
      <hr />
      <div className="latest-match-info">
        <p className="label">First Innings</p>
        <p className="info">{firstInnings}</p>
        <p className="label">Second Innings</p>
        <p className="info">{secondInnings}</p>
        <p className="label">Man of the Match</p>
        <p className="info">{manOfTheMatch}</p>
        <p className="label">Umpires</p>
        <p className="info">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
