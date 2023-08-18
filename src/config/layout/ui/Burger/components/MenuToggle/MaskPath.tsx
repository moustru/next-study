import { MotionProps, motion } from 'framer-motion';

interface PathProps extends MotionProps {
	d?: string;
}

export const MaskPath = (props: PathProps) => (
	<motion.path
		fill="transparent"
		strokeWidth="3"
		stroke="#717171"
		strokeLinecap="round"
		width="28"
		height="1"
		rx="0.5"
		{...props}
	/>
);
