import React from 'react'
import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import 'jest-styled-components'

import Input from 'components/Input'


configure({ adapter: new Adapter() })

describe('<Input />', () => {
  describe('snapshot test', () => {
    it('should match the snapshot', () => {
      const tree = mount(<Input options={[0, 1, 2]} />)

      expect(toJson(tree)).toMatchSnapshot()
    })
  })
})

