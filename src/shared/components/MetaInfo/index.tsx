type MetaInfoProps = {
	title: string;
};

export const MetaInfo = ({ title }: MetaInfoProps) => {
	return (
		<>
			<title>{title}</title>
			<meta name="viewport" content="width=device-width,initial-scale=1" />
		</>
	);
};
