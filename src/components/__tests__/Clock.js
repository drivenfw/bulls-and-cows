import React from 'react'
import { configure,  mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import 'jest-styled-components'

import Clock from 'components/Clock'


configure({ adapter: new Adapter() })

describe('<Clock />', () => {
  describe('snapshot test', () => {
    it('should match the snapshot', () => {
      const tree = mount(<Clock />)

      expect(toJson(tree)).toMatchSnapshot()
    })
  })
})

