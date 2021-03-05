import {Graph} from './graph';
import {GkiResults} from './gkiResults'
import {Explination} from './explination'
import {DisplayDate} from './date'

export const Profile = (props) => {
    //console.log(props.location.state)

    return (
        <div>
            <DisplayDate />
            <GkiResults />
            <Graph />
            <Explination />
        </div>
    )
}