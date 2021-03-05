import {Graph} from './graph';
import {GkiResults} from './gkiResults'
import {Explination} from './explination'

export const Profile = (props) => {
    //console.log(props.location.state)

    return (
        <div>
            <h1>Welcome User</h1>
            {/* <GkiResults /> */}
            <Graph />
            <Explination />
        </div>
    )
}