import type { Meta, StoryObj } from "@storybook/react";

import { Pages } from "./Pages";

const meta: Meta<typeof Pages> = {
  title: "Example/Pages",
  component: Pages,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Pages>;

export const Home: Story = {};
