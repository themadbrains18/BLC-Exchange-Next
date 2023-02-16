import Banner from '@/components/feedback/banner'
import Gifts from '@/components/feedback/gifts'
import SubmitFeedback from '@/components/feedback/submitFeedback'
import Work from '@/components/feedback/work'
import React from 'react'

const Feedback = () => {
  return (
    <>
      <Banner />
      <SubmitFeedback />
      <Gifts />
      <Work />
    </>
  )
}

export default Feedback
