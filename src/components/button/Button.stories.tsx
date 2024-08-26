import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./index";

const meta: Meta<typeof Button> = {
  component: Button,
  render: ({ ...args }) => <Button {...args}>Button</Button>,
  argTypes: {
    size: {
      options: ["default", "sm", "lg", "icon"],
      control: {
        type: "select",
        labels: {
          default: "default",
          sm: "sm",
          lg: "lg",
          icon: "icon",
        },
      },
    },
    variant: {
      options: ["primary", "destructive", "outline", "secondary", "ghost", "link"],
      control: {
        type: "select",
        labels: {
          primary: "primary",
          destructive: "destructive",
          outline: "outline",
          secondary: "secondary",
          ghost: "ghost",
          link: "link",
        },
      },
    },
  },
  args: {
    variant: "primary",
    size: "default",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Normal: Story = {
  argTypes: {
    size: {
      options: ["default", "sm", "lg", "icon"],
      control: {
        type: "select",
        labels: {
          default: "default",
          sm: "sm",
          lg: "lg",
          icon: "icon",
        },
      },
    },
    variant: {
      options: ["primary", "destructive", "outline", "secondary", "ghost", "link"],
      control: {
        type: "select",
        labels: {
          primary: "primary",
          destructive: "destructive",
          outline: "outline",
          secondary: "secondary",
          ghost: "ghost",
          link: "link",
        },
      },
    },
  },
  args: {
    variant: "primary",
    size: "default",
  },
};
