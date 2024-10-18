import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@hamampass/ui/primitives/button.tsx";
import { fn } from "@storybook/test";

const meta: Meta<typeof Button> = {
  title: "Primitives/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "secondary",
        "destructive",
        "ghost",
        "link",
        "outline",
        "filter",
        "load",
        "clear",
        "review",
        "none",
      ],
    },
    size: {
      control: { type: "select" },
      options: ["default", "icon", "sm", "lg"],
    },
    onClick: { action: "clicked" },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "Button",
    size: "sm",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Button",
    size: "default",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Button",
    size: "default",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Button",
    size: "default",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Button",
    size: "default",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Button",
    size: "default",
  },
};

export const Icon: Story = {
  args: {
    variant: "default",
    size: "icon",
    children: "🔍", // Can use an icon here
  },
};

export const Small: Story = {
  args: {
    variant: "default",
    size: "sm",
    children: "Small Button",
  },
};

export const Large: Story = {
  args: {
    variant: "default",
    size: "lg",
    children: "Large Button",
  },
};
