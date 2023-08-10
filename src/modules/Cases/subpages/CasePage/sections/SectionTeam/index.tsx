import { Stack } from '@chakra-ui/react';

import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { MemberReviewBlock } from '@/shared/components/MemberReviewBlock';

import { teamReviews } from './mocks';

export const SectionTeam = () => {
	return (
		<SectionTemplate title="Команда проекта">
			<Stack gap={{ lg: 10, xs: 5 }}>
				{teamReviews.map((teamReview, i) => (
					<MemberReviewBlock {...teamReview} key={teamReview.name + i} />
				))}
			</Stack>
		</SectionTemplate>
	);
};
