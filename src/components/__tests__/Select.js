import React from 'react'
import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import 'jest-styled-components'

import Select from 'components/Select'


configure({ adapter: new Adapter() })

describe('<Select />', () => {
  describe('snapshot test', () => {
    it('should match the snapshot', () => {
      const tree = mount(<Select onChange={() => {}} />)

      expect(toJson(tree)).toMatchSnapshot()
    })
  })

  describe('buttons', () => {
    const wrapper = mount(<Select onChange={() => {}} />)

    it('contains two div elements with onClick attribute', () => {
      expect(wrapper.find('div[onClick]').length).toBe(2)
    })
  })
})

