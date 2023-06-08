import { MyLabel } from "../../components/MyLabel";
var meta = {
    title: 'UI/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select'
        },
        color: {
            control: 'select'
        },
        fontColor: {
            control: 'color'
        },
    }
};
export default meta;
export var AllCaps = {
    args: {
        label: "Hola normal",
        size: "normal",
        allCaps: true
    }
};
export var Secondary = {
    args: {
        label: "Hola secondary",
        size: "h2",
        color: 'secondary'
    }
};
export var Tertiary = {
    args: {
        label: "Hola tertiary",
        size: "h2",
        color: 'tertiary'
    }
};
export var CustomTextColor = {
    args: {
        label: "Hola normal",
        size: "normal",
        allCaps: true,
        fontColor: ''
    }
};
