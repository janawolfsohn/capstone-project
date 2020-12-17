import React from 'react'
import styled from 'styled-components'
import {
  BuddyIcon,
  TeamIcon,
  JournalIcon,
  DashboardIcon,
  PlusIcon,
  StarIcon,
  RectangleIcon,
} from '../common/icons'
import { ReactComponent as BackgroundShape } from '../assets/background_shape.svg'

export default {
  title: 'Design',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}

export const Colors = () => {
  return (
    <>
      <Row>
        <ColorExample name="orange-main" hex="#FF5A36" />
        <ColorExample name="orange-75" hex="#FF9C86" />
        <ColorExample name="orange-50" hex="#FFBDAF" />
        <ColorExample name="orange-25" hex="#FFDED7" />
      </Row>
      <Row>
        <ColorExample name="blue-main" hex="#193251" />
        <ColorExample name="blue-75" hex="#7589A2" />
        <ColorExample name="blue-50" hex="#E0E4E" />
        <ColorExample name="blue-25" hex="#F8F8F8" />
      </Row>
    </>
  )
}

function ColorExample({ name, hex }) {
  return (
    <CenterColumn>
      <ColorBox name={name} />
      <p>{name}</p>
      <p>{hex}</p>
    </CenterColumn>
  )
}

export const Icons = () => {
  return (
    <Row>
      <IconExample name="BuddyIcon" Icon={BuddyIcon} />
      <IconExample name="TeamIcon" Icon={TeamIcon} />
      <IconExample name="JournalIcon" Icon={JournalIcon} />
      <IconExample name="DashboardIcon" Icon={DashboardIcon} />
      <IconExample name="PlusIcon" Icon={PlusIcon} />
      <IconExample name="StarIcon" Icon={StarIcon} />
      <IconExample name="RectangleIcon" Icon={RectangleIcon} />
    </Row>
  )
}

function IconExample({ name, Icon }) {
  return (
    <StyledIconExample>
      <Icon />
      <p>{name}</p>
    </StyledIconExample>
  )
}

export const Shapes = () => {
  return (
    <Row>
      <ShapeExample name="background_shape.svg" Shape={BackgroundShape} />
    </Row>
  )
}

function ShapeExample({ name, Shape }) {
  return (
    <CenterColumn>
      <Shape />
      <p>{name}</p>
    </CenterColumn>
  )
}

const CenterColumn = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin: 0;
  }
`

const Row = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin: 20px;
`

const StyledIconExample = styled(CenterColumn)`
  svg {
    width: 50px;
    height: 50px;
  }
`

const ColorBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => 'var(--' + props.name + ')'};
`
