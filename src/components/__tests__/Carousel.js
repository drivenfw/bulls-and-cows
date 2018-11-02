import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'

import Carousel, { Value } from 'components/Carousel'


configure({ adapter: new Adapter() })

describe('<Carousel /> snapshot test', () => {
  it('should match the snapshot', () => {
    const tree = shallow(
      <Carousel direction="up">
        <Value>One</Value>
      </Carousel>
    )

    expect(toJson(tree)).toMatchSnapshot()
  })
})

