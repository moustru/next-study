import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { ReviewBlock } from '@/shared/components/ReviewBlock';

import { reviews } from './mocks/SectionReviews.mocks';

export const SectionReviews = () => {
	return (
		<SectionTemplate title="Отзывы">
			{reviews.map((review, i) => (
				<ReviewBlock {...review} key={review.user + i} />
			))}
		</SectionTemplate>
	);
};
