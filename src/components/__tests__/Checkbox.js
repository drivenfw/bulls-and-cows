import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'

import Checkbox from 'components/Checkbox'


configure({ adapter: new Adapter() })

describe('<Checkbox />', () => {
  describe('snapshot test', () => {
    it('should match the snapshot', () => {
      const tree = shallow(
        <Checkbox 
          checked 
          label="Custom" 
          onChange={() => {}}
        />
      )

      expect(toJson(tree)).toMatchSnapshot()
    })
  })
})
