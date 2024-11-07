const componentTest = (comName, fn) => {
  const dentryArr = [
    'Address',
    'Calendar',
    'CalendarCard',
    'Cascader',
    'Checkbox',
    'DatePicker',
    'Form',
    'Input',
    'InputNumber',
  ]
  const getPath = (component) =>
    `${dentryArr.includes(component) ? 'dentry' : 'dentry1'}/pages/${component.toLowerCase()}/index`

  it(`${comName} successfully passes`, () => {
    cy.visit(getPath(comName))
    cy.get('.applets-demo-header').contains(comName)
    cy.wait(400)
    fn()
  })
}
describe('layout components test', () => {
  componentTest('Address', () => {})
  componentTest('Calendar', () => {})
  componentTest('CalendarCard', () => {})
  componentTest('Cascader', () => {})
  componentTest('Checkbox', () => {})
  componentTest('DatePicker', () => {})
  componentTest('Form', () => {})
  componentTest('Input', () => {})
  componentTest('InputNumber', () => {})
  componentTest('Menu', () => {})
  componentTest('NumberKeyboard', () => {})
  componentTest('Picker', () => {})
  componentTest('Radio', () => {})
  componentTest('Range', () => {})
  componentTest('Rate', () => {})
  componentTest('SearchBar', () => {})
  componentTest('ShortPassword', () => {})
  componentTest('Signature', () => {})
  componentTest('Switch', () => {})
  componentTest('TextArea', () => {})
  componentTest('Uploader', () => {})
})
