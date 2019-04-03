
import renderer from 'react-test-renderer'

const snapshotTest = (testCase, element) => {
  it(testCase, () => {
    const wrapper = renderer.create(element).toJSON()
    expect(wrapper).toMatchSnapshot()
  })
}

export default snapshotTest