import { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: ({ label, size, allCaps, color, fontColor }: import("../../components/MyLabel").Props) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    argTypes: {
        size: {
            control: string;
        };
        color: {
            control: string;
        };
        fontColor: {
            control: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const AllCaps: Story;
export declare const Secondary: Story;
export declare const Tertiary: Story;
export declare const CustomTextColor: Story;
