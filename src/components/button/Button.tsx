import React from 'react';
import { Icon } from '../icon/Icon';
import styled, { css } from 'styled-components';

interface IButtonProps {
	primary?: boolean;
	children: React.ReactNode;
	width?: string;
	height?: string;
	viewBox?: string;
	iconId?: string;
	color?: string;
	fontWeight?: string;
	type?: 'submit' | 'button' | 'reset' | undefined;
}

export const Button = ({
	children,
	primary,
	width,
	height,
	viewBox,
	iconId,
	color,
	fontWeight,
	type = 'submit',
}: IButtonProps) => {
	return (
		<StyledButton type={type} fontWeight={fontWeight} color={color} primary={primary}>
			{children}
			{iconId && <Icon width={width} height={height} viewBox={viewBox} iconId={iconId} />}
		</StyledButton>
	);
};

type StyledButtonProps = {
	primary?: boolean;
	fontSize?: string;
	color?: string;
	fontWeight?: string;
	type?: string;
};

export const StyledButton = styled.button<StyledButtonProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	font-size: 14px;
	font-weight: 600;
	padding: 10px 30px;
	color: ${props => props.color || props.theme.colors.tertiary};
	background-image: linear-gradient(
		to right,
		${props => props.theme.colors.secondary},
		${props => props.theme.colors.accent}
	);
	background-size: 200%;
	border: none;
	cursor: pointer;
	transition: 0.5s all;

	&:active {
		transform: scale(0.95);
	}
	&:hover {
		/* background-image: linear-gradient(
			to right,
			${props => props.theme.colors.accent},
			${props => props.theme.colors.secondary}
		); */
		background-position: right;
	}

	// primary button
	${props =>
		props.primary &&
		css<StyledButtonProps>`
			color: ${props => props.color || props.theme.colors.tertiary};
			font-size: ${props => props.fontSize || '16px'};
			font-weight: ${props => props.fontWeight || '500'};
			padding: 16px 32px;
			border-radius: 5px;
			text-transform: uppercase;
		`}
`;
