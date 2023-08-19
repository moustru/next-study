import { Stack } from '@chakra-ui/react';

import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { MemberReviewBlock } from '@/shared/components/MemberReviewBlock';

// import { teamReviews } from './mocks';

type TeamSingleModel = {
	id: number;
	avatar: string;
	position: string;
	review: string;
};

type SectionTeamModel = {
	heading: string;
	team: {
		team: TeamSingleModel[];
	};
};

export const SectionTeam = ({ heading, team }: SectionTeamModel) => {
	return (
		<SectionTemplate title={heading}>
			<Stack gap={{ lg: 10, xs: 5 }}>
				{team.team.map((teamReview) => (
					<MemberReviewBlock {...teamReview} key={teamReview.id} />
				))}
			</Stack>
		</SectionTemplate>
	);
};
