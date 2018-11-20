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

  describe('get value', () => {
    const wrapper = shallow(<Input options={['a', 'b', 'c']} />)

    it('returns current value', () => {
      expect(wrapper.instance().value).toBe('a')
    })

    it('returns current value', () => {
      wrapper.setState({ index: 1 })
      expect(wrapper.instance().value).toBe('b')
    })

    it('returns current value', () => {
      wrapper.setState({ index: 2 })
      expect(wrapper.instance().value).toBe('c')
    })
  })

  describe('set value', () => {
    const wrapper = shallow(<Input options={['a', 'b', 'c']} />)
   
    it('sets current value', () => {
      wrapper.instance().value = 'b'
      expect(wrapper.instance().value).toBe('b')
    }) 

    it('sets current value', () => {
      wrapper.instance().value = 'c'
      expect(wrapper.instance().value).toBe('c')
    }) 

    it('does not set value that is not among options', () => {
      wrapper.instance().value = 'd'
      expect(wrapper.instance().value).toBe('c')
    })
  })

  describe('buttons', () => {
    const wrapper = mount(<Input options={['a', 'b', 'c']} />)

    it('contains two div elements with onClick attribute', () => {
      expect(wrapper.find('div[onClick]').length).toBe(2)
    })

    it('click on the up button scrolls input up', () => {
      const upButton = wrapper.find('div[onClick]').first()

      upButton.simulate('click')
      expect(wrapper.instance().value).toBe('b')
    })

    it('click on the down button scrolls input down', () => {
      const upButton = wrapper.find('div[onClick]').last()

      upButton.simulate('click')
      expect(wrapper.instance().value).toBe('a')

      upButton.simulate('click')
      expect(wrapper.instance().value).toBe('c')
    })
  })
})

