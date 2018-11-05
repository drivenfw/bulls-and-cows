import React from 'react'
import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import 'jest-styled-components'

import Carousel, { Value } from 'components/Carousel'


configure({ adapter: new Adapter() })

describe('<Carousel />', () => {
  describe('snapshot test', () => {
    it('should match the snapshot', () => {
      const tree = mount(
        <Carousel direction="up">
          <Value>One</Value>
        </Carousel>
      )

      expect(toJson(tree)).toMatchSnapshot()
    })
  })

  describe('props', () => {
    it('sets CSSTransition\'s classNames prop to \'scroll-up\'', () => {
      const wrapper = shallow(
        <Carousel direction="up">
          <Value>One</Value>
        </Carousel>
      )

      expect(wrapper.find('CSSTransition').props().classNames).toBe('scroll-up')
    })

    it('sets CSSTransition\'s classNames prop to \'scroll-down\'', () => {
      const wrapper = shallow(
        <Carousel direction="down">
          <Value>One</Value>
        </Carousel>
      )

      expect(wrapper.find('CSSTransition').props().classNames).toBe('scroll-down')
    })

    it('sets CSSTransition\'s classNames prop to \'scroll-left\'', () => {
      const wrapper = shallow(
        <Carousel direction="left">
          <Value>One</Value>
        </Carousel>
      )

      expect(wrapper.find('CSSTransition').props().classNames).toBe('scroll-left')
    })

    it('sets CSSTransition\'s classNames prop to \'scroll-right\'', () => {
      const wrapper = shallow(
        <Carousel direction="right">
          <Value>One</Value>
        </Carousel>
      )

      expect(wrapper.find('CSSTransition').props().classNames).toBe('scroll-right')
    })

    it('passes className prop to root child component', () => {
      const wrapper = shallow(
        <Carousel
          className="custom-carousel"
          direction="right"
        >
          <Value>One</Value>
        </Carousel>
      )

      expect(wrapper.find({ className: 'custom-carousel' }).length).toBe(1)
    })
  })
})

