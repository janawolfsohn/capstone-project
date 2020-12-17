import React from 'react'
import TeamPage from '../teams/TeamPage'
import PageDecorator from './PageDecorator'

export default {
  title: 'teams/TeamPage',
  component: TeamPage,
  decorators: [PageDecorator],
}

const Template = (args) => <TeamPage {...args} />

export const teamPage = Template.bind({})
teamPage.args = {
  teams: [
    [
      {
        _id: '5f2bcc8234d1847701fe3417',
        name: 'Eleonora Lipus',
        course: '5f2bca7434d1847701fe340f',
      },
      {
        _id: '5f2bcc8234d1847701fe341b',
        name: 'Stefan Pohle',
        course: '5f2bca7434d1847701fe340f',
      },
      {
        _id: '5f2bcc8234d1847701fe3416',
        name: 'Melis Rink',
        course: '5f2bca7434d1847701fe340f',
      },
      {
        _id: '5f2bcc8234d1847701fe3410',
        name: 'Ashley Häber',
        course: '5f2bca7434d1847701fe340f',
      },
    ],
    [
      {
        _id: '5f2bcc8234d1847701fe341a',
        name: 'Jasmin Dietz',
        course: '5f2bca7434d1847701fe340f',
      },
      {
        _id: '5f2bcc8234d1847701fe341e',
        name: 'Enie Schwatlo',
        course: '5f2bca7434d1847701fe340f',
      },
      {
        _id: '5f2bcc8234d1847701fe3419',
        name: 'Jarno Gummelt',
        course: '5f2bca7434d1847701fe340f',
      },
      {
        _id: '5f2bcc8234d1847701fe3415',
        name: 'Leandra Kubera',
        course: '5f2bca7434d1847701fe340f',
      },
    ],
    [
      {
        _id: '5f2bcc8234d1847701fe341f',
        name: 'Lilia Mulrain',
        course: '5f2bca7434d1847701fe340f',
      },
      {
        _id: '5f2bcc8234d1847701fe3414',
        name: 'Emirhan Schönherr',
        course: '5f2bca7434d1847701fe340f',
      },
      {
        _id: '5f2bcc8234d1847701fe341c',
        name: 'Marit Bogenrieder',
        course: '5f2bca7434d1847701fe340f',
      },
      {
        _id: '5f2bcc8234d1847701fe3413',
        name: 'Darleen Daub',
        course: '5f2bca7434d1847701fe340f',
      },
    ],
  ],
}
