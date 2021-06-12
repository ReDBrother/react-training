import { fireEvent, render, screen, within } from '@testing-library/react';
import Buttons from './first/practice/Buttons';
test('Renders 1 buttons [Buttons]', () => {
  const count = 1;
  render(<Buttons count={count} />);

  const buttons = screen.getAllByRole("button");
  expect(buttons.length).toBe(count);
})

test('Renders 3 buttons [Buttons]', () => {
  const count = 3;
  render(<Buttons count={count} />);

  const buttons = screen.getAllByRole("button");
  expect(buttons.length).toBe(count);

  const [buttonOne, buttonTwo, buttonThree] = buttons;

  expect(buttonOne.className).toMatch(/btn-primary/);
  expect(buttonTwo.className).toMatch(/btn-primary/);
  expect(buttonThree.className).toMatch(/btn-primary/);
  expect(within(buttonOne).getByText('0'))
    .toBeInTheDocument();
  expect(within(buttonTwo).getByText('0'))
    .toBeInTheDocument();
  expect(within(buttonThree).getByText('0'))
    .toBeInTheDocument();

  fireEvent.click(buttonOne);

  expect(buttonOne.className).toMatch(/btn-success/);
  expect(within(buttonOne).getByText('1'))
    .toBeInTheDocument();

  fireEvent.click(buttonOne);
  fireEvent.click(buttonOne);

  expect(buttonOne.className).toMatch(/btn-success/);
  expect(buttonTwo.className).toMatch(/btn-primary/);
  expect(buttonThree.className).toMatch(/btn-primary/);
  expect(within(buttonOne).getByText('3'))
    .toBeInTheDocument();
  expect(within(buttonTwo).getByText('0'))
    .toBeInTheDocument();
  expect(within(buttonThree).getByText('0'))
    .toBeInTheDocument();


  fireEvent.click(buttonThree);
  fireEvent.click(buttonThree);
  fireEvent.click(buttonTwo);

  expect(buttonOne.className).toMatch(/btn-primary/);
  expect(buttonTwo.className).toMatch(/btn-success/);
  expect(buttonThree.className).toMatch(/btn-primary/);
  expect(within(buttonOne).getByText('3'))
    .toBeInTheDocument();
  expect(within(buttonTwo).getByText('1'))
    .toBeInTheDocument();
  expect(within(buttonThree).getByText('2'))
    .toBeInTheDocument();
});
