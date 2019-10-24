import React from "react"

const Team = props => {
    const {team, mascot, rpi, mwp, owp, oowp, cls, winTeams, schedule} = props.data 

    const {i} = props

    return (
        <div className="team-container">
            <h2>Seed: {i} -- {team} {mascot}</h2>
            <h3>rpi: {rpi}</h3>
            <h4>Record: {winTeams.length} - {schedule.length - winTeams.length}</h4>
        </div>
    )
}

export default Team