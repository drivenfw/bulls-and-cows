import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'

import Countdown from 'components/Countdown'


configure({ adapter: new Adapter() })

describe('<Countdown />', () => {
  describe('snapshot test', () => {
    it('should match the snapshot', () => {
      const tree = shallow(<Countdown value={3} />)

      expect(toJson(tree)).toMatchSnapshot()
    })
  })
})

