import React from 'react';
import allstone from "../images/allStones.webp";
import allstonefb from "../images/allStones.png";
import colestone from "../images/colestone.webp";
import colestonefb from "../images/colestone.png";
import gerstone from "../images/gerstone.webp";
import gerstonefb from "../images/gerstone.png";
import harrystone from "../images/harrystone.webp";
import harrystonefb from "../images/harrystone.png";
import jamstone from "../images/jamstone.webp";
import jamstonefb from "../images/jamstone.png";
import janstone from "../images/janstone.webp";
import janstonefb from "../images/janstone.png";
import jemstone from "../images/jemstone.webp";
import jemstonefb from "../images/jemstone.png";
import jomstone from "../images/jomstone.webp";
import jomstonefb from "../images/jomstone.png";
import jumstone from "../images/jumstone.webp";
import jumstonefb from "../images/jumstone.png";

const Image = ({ src, fallback, type = "image/webp", alt, title }) => {
    return (
        <picture>
            <source srcSet={src} type={type} />
            <img srcSet={fallback} alt={alt} title={title} />
        </picture>
    );
};

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
 
    return leaderboard.length > 0 ? (
        <div className="leaderboard">
            
        <table>
            <caption>{type.slice(0, -1).toUpperCase()} LEADERBOARD</caption>
                <thead><tr>
                    <td></td>
                    <th scope="col">Colestones</th>
                    <th scope="col">Gerstones</th>
                    <th scope="col">Harrystones</th>
                    <th scope="col">Jamstones</th>
                    <th scope="col">Janstones</th>
                    <th scope="col">Jemstones</th>
                    <th scope="col">Jomstones</th>
                    <th scope="col">Jumstones</th>
                    <th scope="col">Total Stones</th>
                </tr>
                </thead>
                <tbody>
                {leaderboard.map((leader, index) => {
                    return (
                        <tr key={index}>
                            <th scope="row" className="displayName">
                                <img
                                    src={leader.image}
                                    alt={leader.display_name}
                                    title={leader.display_name}
                                />
                                <br />
                                {leader.display_name}
                            </th>
                            <td>
                                <Image
                                    src={colestone}
                                    fallback={colestonefb}
                                    alt="Colestone"
                                    title="Colestones"
                                />
                                <br />
                                {leader.colestones}
                            </td>
                            <td>
                                <Image
                                    src={gerstone}
                                    fallback={gerstonefb}
                                    alt="Gerstone"
                                    title="Gerstones"
                                />
                                <br />
                                {leader.gerstones}
                            </td>
                            <td>
                                <Image
                                    src={harrystone}
                                    fallback={harrystonefb}
                                    alt="Harrystone"
                                    title="Harrystones"
                                />
                                <br />
                                {leader.harrystones}
                            </td>
                            <td>
                                <Image
                                    src={jamstone}
                                    fallback={jamstonefb}
                                    alt="Jamstone"
                                    title="Jamstones"
                                />
                                <br />
                                {leader.jamstones}
                            </td>
                            <td>
                                <Image
                                    src={janstone}
                                    fallback={janstonefb}
                                    alt="Janstone"
                                    title="Janstones"
                                />
                                <br />
                                {leader.janstones}
                            </td>
                            <td>
                                <Image
                                    src={jemstone}
                                    fallback={jemstonefb}
                                    alt="Jemstone"
                                    title="Jemstones"
                                />
                                <br />
                                {leader.jemstones}
                            </td>
                            <td>
                                <Image
                                    src={jomstone}
                                    fallback={jomstonefb}
                                    alt="Jomstone"
                                    title="Jomstones"
                                />
                                <br />
                                {leader.jomstones}
                            </td>
                            <td>
                                <Image
                                    src={jumstone}
                                    fallback={jumstonefb}
                                    alt="Jumstone"
                                    title="Jumstones"
                                />
                                <br />
                                {leader.jumstones}
                            </td>
                            <td>
                                <Image
                                    src={allstone}
                                    fallback={allstonefb}
                                    alt="All Stones"
                                    title="Total stones"
                                />
                                <br />
                                {leader.stones}
                            </td>
                        </tr>
                    );})}
                </tbody>
        </table>
        </div>
    ) : <></>
}

export { Leaderboard }