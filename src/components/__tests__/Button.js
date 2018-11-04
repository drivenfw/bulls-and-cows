import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import 'jest-styled-components'

import Button from 'components/Button'


configure({ adapter: new Adapter() })

describe('<Button />', () => {
  describe('snapshot test', () => {
    describe('themed', () => {
      it('should match the snapshot', () => {
        const tree = renderWithTheme(<Button />)

        expect(toJson(tree)).toMatchSnapshot()
      })
    })

    describe('scaled', () => {
      it('should match the snapshot', () => {
        const tree = shallow(<Button scale={2} />)

        expect(toJson(tree)).toMatchSnapshot()
      })
    })
  })
})

