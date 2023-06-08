import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";




const meta ={
  title: 'UI/MyLabel',
  component: MyLabel,
  tags: ['autodocs'],
  argTypes:{
    size: {
      control:'select'
    },
    color:{
      control: 'select'
    },
    fontColor: { 
      control: 'color' 
    },
  }
} satisfies Meta<typeof MyLabel>

export default meta;
type Story = StoryObj<typeof meta>;


export const AllCaps:Story = {
  args:{
    label: "Hola normal",
    size: "normal",
    allCaps: true
  }
}

export const Secondary:Story = {
  args:{
    label: "Hola secondary",
    size: "h2",
    color: 'secondary'
  }
}

export const Tertiary:Story = {
  args:{
    label: "Hola tertiary",
    size: "h2",
    color: 'tertiary'
  }
}

export const CustomTextColor:Story = {
  args:{
    label: "Hola normal",
    size: "normal",
    allCaps: true,
    fontColor: ''
  }
}