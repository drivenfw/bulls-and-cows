import React from 'react'
import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import 'jest-styled-components'

import Select, { Option } from 'components/Select'


configure({ adapter: new Adapter() })

describe('<Select />', () => {
  describe('snapshot test', () => {
    it('should match the snapshot', () => {
      const tree = mount(<Select onChange={() => {}} />)

      expect(toJson(tree)).toMatchSnapshot()
    })
  })

  describe('buttons', () => {
    const onChangeHandler = jest.fn()
    const wrapper = mount(
      <Select onChange={onChangeHandler}>
        <Option value={1}>A</Option>
        <Option value={2}>B</Option>
        <Option value={3}>C</Option>
      </Select>
    )

    it('contains two div elements with onClick attribute', () => {
      expect(wrapper.find('div[onClick]').length).toBe(2)
    })

    it('click on the left button scrolls select left', () => {
      const leftButton = wrapper.find('div[onClick]').first()

      leftButton.simulate('click')
      expect(onChangeHandler).toHaveBeenCalledWith(3)
    })
  })
})

