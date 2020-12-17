import React from 'react'
import StudentList from '../common/StudentList'
import teams from '../fixtures/teams.json'

const [team1] = teams

export default { title: 'common/StudentList', component: StudentList }

const Template = (args) => <StudentList {...args} />

export const studentList = Template.bind({})
studentList.args = {
  students: team1,
  showPlus: true,
}
