import React from 'react'
import { configure, mount, shallow } from 'enzyme'
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

  describe('scroll', () => {
    describe('componentDidMount', () => {
      it('calls applyInitialScroll', () => {
        const wrapper = mount(<Display />)
        const instance = wrapper.instance()

        instance.applyInitialScroll = jest.fn()
        instance.componentDidMount()

        expect(instance.applyInitialScroll).toHaveBeenCalled()
      }) 
    })

    describe('componentDidUpdate', () => {
      it('calls applyInitialScroll', () => {
        const wrapper = mount(<Display />)
        
        jest.spyOn(wrapper.instance(), 'applyInitialScroll')
        wrapper.instance().forceUpdate()

        expect(wrapper.instance().applyInitialScroll).toHaveBeenCalled()
      })
    })
  })
})

