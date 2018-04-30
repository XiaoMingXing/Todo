import 'react-native'
import React from 'react'
import Todo from '../index'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

it('renders correctly', () => {
    const tree = renderer.create(
        <Todo/>
    )
    expect(tree).toBeDefined()
})
