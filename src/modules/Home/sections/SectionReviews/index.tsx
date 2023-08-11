import { Carousel, type Embla } from '@mantine/carousel';
import { useState } from 'react';

import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { ReviewBlock } from '@/shared/components/ReviewBlock';

import { reviews } from './mocks';

export const SectionReviews = () => {
	const [embla, setEmbla] = useState<Embla | null>(null);

	const prevSlide = () => {
		embla?.scrollPrev();
	};

	const nextSlide = () => {
		embla?.scrollNext();
	};

	return (
		<SectionTemplate
			title="Отзывы"
			carouselControls
			carouselEvents={{
				scrollPrev: prevSlide,
				scrollNext: nextSlide,
			}}
		>
			<Carousel withControls={false} getEmblaApi={setEmbla} slideGap={16}>
				{reviews.map((review, i) => (
					<Carousel.Slide key={review.user + i}>
						<ReviewBlock {...review} />
					</Carousel.Slide>
				))}
			</Carousel>
		</SectionTemplate>
	);
};
