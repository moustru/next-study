import React from 'react';

import { MaskPath } from './MaskPath';
import css from './index.module.css';

export const MenuToggle = ({ toggle }: any) => (
	<button className={css.button} onClick={toggle}>
		<svg width="28" height="23" viewBox="0 0 23 23">
			<MaskPath
				variants={{
					closed: { d: 'M 2 2.5 L 20 2.5' },
					open: { d: 'M 3 16.5 L 17 2.5' },
				}}
			/>
			<MaskPath
				d="M 2 9.423 L 20 9.423"
				variants={{
					closed: { opacity: 1 },
					open: { opacity: 0 },
				}}
				transition={{ duration: 0.1 }}
			/>
			<MaskPath
				variants={{
					closed: { d: 'M 2 16.346 L 20 16.346' },
					open: { d: 'M 3 2.5 L 17 16.346' },
				}}
			/>
		</svg>
	</button>
);
