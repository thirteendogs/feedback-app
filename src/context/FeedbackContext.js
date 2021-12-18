import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) =>{
   const [feedback, setFeedback] = useState([
      {
         id: 1,
         text: 'This feedback 1',
         rating: 10
      },
      {
         id: 2,
         text: 'This feedback 2',
         rating: 10
      },
      {
         id: 3,
         text: 'This feedback 3',
         rating: 8
      }
   ])
   const [feedbackEdit, setFeedbackEdit] = useState({
      item: {},
      edit: false
   })

   // Update feedback item
   const updateFeedback = (id, updItem) => {
      setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updItem } : item))
   }
   // Delete feedback
   const deleteFeedback = (id) => {
      if(window.confirm('Are you sure you want to delete?')) {
         setFeedback(feedback.filter((item) => item.id !== id))
         }
   }
   // Set item to be updated
   const editFeedback = (item) => {
      setFeedbackEdit({
         item,
         edit: true
      })
   }
   // Add feedback
   const addFeedback = (newFeedback) => {
      newFeedback.id = uuidv4()
      setFeedback([newFeedback, ...feedback]);
   }

   return <FeedbackContext.Provider value= {{
      feedback,
      feedbackEdit,
      updateFeedback,
      deleteFeedback,
      addFeedback,
      editFeedback,
   }}>
      { children }
   </FeedbackContext.Provider>
}

export default FeedbackContext