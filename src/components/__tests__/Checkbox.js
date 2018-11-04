import React from 'react'
import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import 'jest-styled-components'

import Checkbox from 'components/Checkbox'


configure({ adapter: new Adapter() })

describe('<Checkbox />', () => {
  describe('snapshot test', () => {
    describe('checked', () => {
      it('should match the snapshot', () => {
        const tree = mount(
          <Checkbox 
            checked 
            label="Custom" 
            onChange={() => {}}
          />
        )

        expect(toJson(tree)).toMatchSnapshot()
      })
    })

    describe('unchecked', () => {
      it('should match the snapshot', () => {
        const tree = mount(
          <Checkbox 
            checked={false}
            label="Custom" 
            onChange={() => {}}
          />
        )

        expect(toJson(tree)).toMatchSnapshot()
      })
    })

    describe('no label', () => {
      it('should match the snapshot', () => {
        const tree = mount(
          <Checkbox 
            checked={false}
            onChange={() => {}}
          />
        )

        expect(toJson(tree)).toMatchSnapshot()
      })
    })
  })
})
