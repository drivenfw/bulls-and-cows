import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import 'jest-styled-components'

import Countdown from 'components/Countdown'


configure({ adapter: new Adapter() })

describe('<Countdown />', () => {
  describe('snapshot test', () => {
    it('should match the snapshot', () => {
      const tree = mount(<Countdown value={3} />)

      expect(toJson(tree)).toMatchSnapshot()
    })
  })
})

