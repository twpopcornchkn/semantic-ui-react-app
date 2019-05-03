import React from 'react';
import { Rating } from 'semantic-ui-react'


const userRating = (props) => (
    <table className="ui celled padded table" style={{width:"200px"}}>
        <thead>
            <tr><th className="single line">Evidence Rating</th>
                <th>Effect</th>
                <th>Efficacy</th>
                <th>Consensus</th>
                <th>Comments</th>
            </tr></thead>
        <tbody>
            <tr>
                <td>
                    <h2 className="ui center aligned header">A</h2>
                </td>
                <td className="single line">
                    Power Output
                </td>
                <td>
                    <Rating icon='star' defaultRating={3} maxRating={4} />
                </td>
                <td className="right aligned">
                    80% <br />
                    <a href="#">18 studies</a>
                </td>
                <td>Creatine supplementation</td>
            </tr>
            <tr>
                <td>
                    <h2 className="ui center aligned header">B</h2>
                </td>
                <td className="single line">
                    Weight
                </td>
                <td>
                    <Rating icon='star' defaultRating={2} maxRating={4} />
                </td>
                <td className="right aligned">
                    100% <br />
                    <a href="#">65 studies</a>
                </td>
                <td>Creatine is the reference compound</td>
            </tr>
        </tbody>
        <tfoot>
            <tr><th colSpan="5">
                <div className="ui right floated pagination menu">
                    <a className="icon item">
                        <i className="left chevron icon"></i>
                    </a>
                    <a className="item">1</a>
                    <a className="item">2</a>
                    <a className="item">3</a>
                    <a className="item">4</a>
                    <a className="icon item">
                        <i className="right chevron icon"></i>
                    </a>
                </div>
            </th>
            </tr></tfoot>
    </table>

);

export default userRating;