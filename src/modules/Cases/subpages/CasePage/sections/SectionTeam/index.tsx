import { Stack } from '@chakra-ui/react';

import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { MemberReviewBlock } from '@/shared/components/MemberReviewBlock';

// import { teamReviews } from './mocks';

type TeamSingleModel = {
	id: number;
	avatar: any;
	nameAndPosition: string;
	reviewText: string;
};

type SectionTeamModel = {
	heading: string;
	reviews: TeamSingleModel[];
};

export const SectionTeam = ({ heading, reviews }: SectionTeamModel) => {
	return (
		<SectionTemplate title={heading}>
			<Stack gap={{ lg: 10, xs: 5 }}>
				{reviews.map((teamReview) => (
					<MemberReviewBlock {...teamReview} key={teamReview.id} />
				))}
			</Stack>
		</SectionTemplate>
	);
};
