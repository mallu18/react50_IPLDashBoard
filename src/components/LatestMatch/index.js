import './index.css'

const LatestMatch = ({matchDetails}) => {
  const {
    competing_team_logo: logo,
    competing_team: name,
    date,
    venue,
    result,
    umpires, // Extract umpires here
    first_innings,
    second_innings,
    man_of_the_match,
  } = matchDetails || {}

  return (
    <div className="latest-match-container">
      <h2>Latest Match</h2>
      <div className="latest-match-details">
        <img
          src={logo}
          alt={`latest match ${name}`}
          className="latest-match-logo"
        />
        <div className="latest-match-info">
          <p>{name}</p>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
          <p>{umpires}</p> {/* Render umpires here */}
          <p>First Innings: {first_innings}</p>
          <p>Second Innings: {second_innings}</p>
          <p>Man of the Match: {man_of_the_match}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
