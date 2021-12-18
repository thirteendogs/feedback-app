import { FaTimes, FaEdit } from 'react-icons/fa'
import Card from "./shared/Card"
import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({item}) {
   const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

   return (
      <Card>
         <div className="num-display">{item.rating}</div>
         <button className="close">
            <FaTimes onClick={() =>deleteFeedback(item.id)} color='purple' />
         </button>
         <button className="edit">
            <FaEdit onClick={() =>editFeedback(item)} color='purple' />
         </button>
         <div className="text-display">{item.text}</div>
      </Card>
   )
}

 Card.propTypes = {
    item: PropTypes.object,
   }

export default FeedbackItem
// onClick={() =>editFeedback(item.id)} 