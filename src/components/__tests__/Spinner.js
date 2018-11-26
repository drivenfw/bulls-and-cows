import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import 'jest-styled-components'

import Spinner from 'components/Spinner'


configure({ adapter: new Adapter() })

describe('<Spinner />', () => {
  describe('snapshot test', () => {
    describe('themed', () => {
      it('should match the snapshot', () => {
        const tree = mount(<Spinner />)

        expect(toJson(tree)).toMatchSnapshot()
      })
    })
  })
})

