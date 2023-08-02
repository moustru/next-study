import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { reviews } from './mocks/SectionReviews.mocks';
import { ReviewBlock } from '@/shared/components/ReviewBlock';

export const SectionReviews = () => {
	return (
		<SectionTemplate title="Отзывы">
			{reviews.map((review, i) => (
				<ReviewBlock {...review} key={review.user + i} />
			))}
		</SectionTemplate>
	);
};
