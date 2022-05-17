import React from 'react'
import useStyles from './courseDetailsStyle'

const CourseDetails = ({course}) => {

  const classes = useStyles()

  return (
    <h1>
      {course.name}
    </h1>
  )
}
export default CourseDetails;
