import { css } from 'lit';

export const prosemirrorFlatListStyles = css`
	.prosemirror-flat-list {
		& {
			padding: 0;
			margin-top: 0;
			margin-bottom: 0;
			margin-left: 32px;
			margin-bottom: 0;
			position: relative;
			display: list-item;
			list-style: none;
		}

		&.ProseMirror-selectednode {
			outline: none;

			&:after {
				content: '';
				position: absolute;
				left: -32px;
				right: -2px;
				top: -2px;
				bottom: -2px;
				border: 2px solid #8cf;
				pointer-events: none;
			}
		}

		&[data-list-kind='task'] {
			& > .list-content {
				width: 300px;
			}
			& > .list-marker {
				position: absolute;
				right: 100%;
				text-align: center;
				width: 1.5em;
				width: 1lh;

				&,
				& * {
					cursor: pointer;
				}
			}
		}
	}
`;
