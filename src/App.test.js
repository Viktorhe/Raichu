import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ItemList from './components/item'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('render create element div', () =>{
  const container = document.createElement('div')
  ReactDOM.render(<ItemList items={[]} />,container )
  expect(container).toBeDefined()
})

test('renders "no items" when the item list is empty', () => {
  const container = document.createElement('div')
  ReactDOM.render(<ItemList items={[]} />,container )
  expect(container.textContent).toMatch('no items')
})