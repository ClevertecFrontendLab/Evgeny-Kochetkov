import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const {font, colors: {white, dark}} = theme;

export const GlobalStyle = createGlobalStyle`
	body {
		display: flex;
		height: 100%;
		justify-content: center;
		scroll-behavior: smooth;
		text-rendering: optimizeSpeed;
		font-family: ${font};
		font-size: 14px;
		line-height: 18px;
		font-weight: 400;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		background-color: ${white};
		color: ${dark};
		letter-spacing: 0.1px;
	}

	*,
	*:before,
	*:after {
		box-sizing: border-box;
	}

	ul,
	ol {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	body,
	h1,
	h2,
	h3,
	h4,
	p,
	ul[class],
	ol[class],
	li,
	figure,
	figcaption,
	blockquote,
	dl,
	dd {
		margin: 0;
	}

	a {
		cursor: pointer;
		text-decoration: none;
		color: inherit;
	}

	a:not([class]) {
		text-decoration-skip-ink: auto;
	}

	img {
		max-width: 100%;
		display: block;
	}

	article>*+* {
		margin-top: 1em;
	}

	input,
	button,
	textarea,
	select {
		border: none;
		outline: none;
		padding: 0;
		font: inherit;
	}

	button {
		cursor: pointer;
		background: none;
	}
`;