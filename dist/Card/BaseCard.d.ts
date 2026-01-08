import React from 'react';
import type { ComponentWithAsProp, BsPropsWithAs } from '../utils/types/bootstrap';
declare const colorVariants: readonly ["primary", "secondary", "success", "danger", "warning", "info", "dark", "light"];
declare const textVariants: readonly ["white", "muted"];
type ColorVariant = typeof colorVariants[number];
type TextVariant = typeof textVariants[number];
interface Props extends BsPropsWithAs {
    prefix?: string;
    bgColor?: ColorVariant;
    textColor?: ColorVariant | TextVariant;
    borderColor?: ColorVariant;
    hasBody?: boolean;
    className?: string;
    children: React.ReactNode;
}
type BaseCardType = ComponentWithAsProp<'div', Props>;
declare const BaseCard: BaseCardType;
export default BaseCard;
