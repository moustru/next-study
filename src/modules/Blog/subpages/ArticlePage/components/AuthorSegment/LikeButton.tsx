import { Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const LikeButton = ({ likesState, onClick, articleId }: any) => {
	const [hasBeenLikedId, setId] = useState<string | null>(null);

	const isLiked = hasBeenLikedId ? hasBeenLikedId.includes(articleId) : false;

	const handleClickLike = () => {
		setId(localStorage.getItem('likes'));
		onClick();
	};
	useEffect(() => {
		if (localStorage) {
			setId(localStorage.getItem('likes'));
		}
	}, [hasBeenLikedId, isLiked]);

	return (
		<Flex
			alignItems="center"
			gap={4}
			onClick={handleClickLike}
			cursor="pointer"
			role="button"
		>
			<motion.svg
				viewBox="0 0 16 14"
				initial={{ fill: isLiked ? 'red' : 'grey' }}
				animate={{ fill: isLiked ? 'red' : 'grey' }}
				width="30px"
			>
				<path d="M0.736284 7.03929C0.810577 7.17067 2.60209 10.2582 7.83096 13.948C7.87954 13.9836 7.93954 14 7.99955 14C8.05956 14 8.11955 13.9836 8.16814 13.948C13.397 10.2582 15.1885 7.17067 15.2714 7.02285C15.7 6.13053 15.9429 5.26557 15.9914 4.45263C15.9971 4.37051 16 4.28838 16 4.20901C16 2.03567 14.1799 0.141526 11.9141 0.0074054C9.76822 -0.118512 8.50816 1.45812 7.99955 2.28475C7.49094 1.45812 6.23088 -0.121251 4.08504 0.0074054C1.73349 0.146989 -0.135185 2.18075 0.00767991 4.45263C0.0562484 5.26557 0.299108 6.13053 0.736284 7.03929Z" />
			</motion.svg>

			<Text color="grey.400" variant={{ md: 'lg', xs: 'sm' }}>
				{likesState}
			</Text>
		</Flex>
	);
};
