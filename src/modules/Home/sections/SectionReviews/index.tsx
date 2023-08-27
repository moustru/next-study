import { Carousel, type Embla } from '@mantine/carousel';
import React, { useEffect, useState } from 'react';

import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { ReviewBlock } from '@/shared/components/ReviewBlock';

type Review = {
	id: number;
	reviewText: string;
	reviewAuthor: string;
	avatar: any;
	authorCompany: string;
};

type SectionReviewsProps = {
	heading: string;
	reviews: Review[];
};

export const SectionReviews: React.FC<SectionReviewsProps> = ({
	heading,
	reviews,
}) => {
	const [embla, setEmbla] = useState<Embla | null>(null);
	const [canNext, setCanNext] = useState(false);
	const [canPrev, setCanPrev] = useState(false);

	const updateNavigationState = () => {
		setCanNext(embla?.canScrollNext() ?? false);
		setCanPrev(embla?.canScrollPrev() ?? false);
	};

	const prevSlide = () => {
		embla?.scrollPrev();
		updateNavigationState();
	};

	const nextSlide = () => {
		embla?.scrollNext();
		updateNavigationState();
	};

	useEffect(() => {
		updateNavigationState();
	}, [embla]);

	return (
		<SectionTemplate
			title={heading}
			carouselControls
			canNext={canNext}
			canPrev={canPrev}
			carouselEvents={{
				scrollPrev: prevSlide,
				scrollNext: nextSlide,
			}}
		>
			<Carousel withControls={false} getEmblaApi={setEmbla} slideGap={16}>
				{reviews.map((review) => (
					<Carousel.Slide key={review.id}>
						<ReviewBlock {...review} />
					</Carousel.Slide>
				))}
			</Carousel>
		</SectionTemplate>
	);
};
