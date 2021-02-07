import React from 'react';

const Leaderboard = ({ type }) => {
    const [leaderboard, setLeaderboard] = React.useState([]);

    React.useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER}/${type}`)
        .then(res => res.json()).then(({leaders}) => {
          if (leaders && leaders.length) {
            setLeaderboard(leaders);
          } else {
            setLeaderboard([])
          }
        })
    }, [type]);

    return (
        <>
            <h1>{type.slice(0, -1).toUpperCase()} LEADERBOARD</h1>
        <div className="leaderboard">{leaderboard.map((leader, index) => {
            return (
                <ul key={index + leader.display_name}>
                    <img src={leader.image} alt={leader.display_name} />
                    <li>Name: {leader.display_name}</li>
                    <li>Jamstones: {leader.jamstones}</li>
                    <li>Janstones: {leader.janstones}</li>
                    <li>Jemstones: {leader.jemstones}</li>
                    <li>Jomstones: {leader.jomstones}</li>
                    <li>Jumstones: {leader.jumstones}</li>
                    <li>Total stones: {leader.stones}</li>
                </ul>
            );
        })}</div>
        </>
    )
}

export { Leaderboard }