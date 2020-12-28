import { Button } from '../../src'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    title: { control: 'text' },
    //   primary: { control: 'boolean' },
    //   backgroundColor: { control: 'color' },
    //   size: {
    //     control: { type: 'select', options: ['small', 'medium', 'large'] },
    //   },
    //   onClick: { action: 'onClick' },
  },
}

const Template = ({ onClick, ...args }) => ({
  Component: Button,
  props: args,
  // on: {
  //   click: onClick,
  // },
})

export const Primary = Template.bind({})
Primary.args = {
  title: 'Mihai',
  red: false,
}

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
