import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import 'jest-styled-components'

import Display from 'components/Display'


configure({ adapter: new Adapter() })

describe('<Display />', () => {
  describe('snapshot test', () => {
    it('should match the snapshot', () => {
      const tree = mount(<Display />)

      expect(toJson(tree)).toMatchSnapshot()
    })
  })
})

