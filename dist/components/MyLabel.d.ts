import './mylabel.css';
export interface Props {
    /**
     * Mensaje que se muestra en el label
     */
    label?: string;
    /**
     * Tamaño con el que se muestra el label
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    allCaps?: boolean;
    color?: 'primary' | 'secondary' | 'tertiary';
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor }: Props) => import("react/jsx-runtime").JSX.Element;
