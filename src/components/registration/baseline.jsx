import './baseline.css'
import {Link} from 'react-router-dom'

export const Baseline = (props) => {
  return (
    <div class="box">
    <h2>
    A baseline is your foundation for success
    </h2>
    <p>
    Taking multiple readings of both your <b>blood glucose</b> and <b>ketone levels</b> will help you understand how certain activities and mind sets impact your ability to remain in metabolic ketosis.
    </p>
    <p>
    We suggest taking multiple readings of both your blood glucose and ketone levels for at least 7 days.
    </p>
    <div>
    <br/>
    <p>
    Consider taking readings after activities such as:
    </p>
    <ul>
      <li>Waking up</li>
      <li>Fasting</li>
      <li>Eating a Meal</li>
      <li>Aerobic Activity</li>
      <li>Meditating</li>
      <li>Stressful Events</li>
      <li>Before sleeping</li>
    </ul>
    <br/>
    <p>Tracking all of these events aren’t required, but the more readings you take, the more insight you’ll gain in your ketosis</p>
    <Link to={{pathname:'/signup'}}><button className='blue'>Next</button></Link>
    </div>
    </div>

  )
}