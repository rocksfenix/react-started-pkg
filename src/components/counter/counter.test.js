import React from 'react'
import renderer from 'react-test-renderer'
import Counter from './'

describe('<Counter />', () => {
  test('Display button', () => {
    const component = renderer.create(
      <Counter />
    )
    const jsonComponent = component.toJSON()
    expect(jsonComponent.children[0]).toBe('Clicks ')
    expect(jsonComponent.children[1]).toBe('0')
    expect(jsonComponent.props.initialCount).toBeUndefined()
  })

  test('Display button with initialCount', () => {
    const component = renderer.create(
      <Counter initialCount={50} />
    )
    const jsonComponent = component.toJSON()
    const testInstance = component.root;
    expect(jsonComponent.children[0]).toBe('Clicks ')
    expect(jsonComponent.children[1]).toBe('50')
    expect(testInstance.props.initialCount).toBe(50)
  })
})