import { Carousel, type Embla } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef, useState } from 'react';

import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { ReviewBlock } from '@/shared/components/ReviewBlock';

// import { reviews } from './mocks';

type SectionReviewsModel = {
	heading: string;
	reviews: {
		id: number;
		reviewText: string;
		reviewAuthor: string;
		avatar: any;
		authorCompany: string;
	}[];
};

export const SectionReviews = ({ heading, reviews }: SectionReviewsModel) => {
	const [embla, setEmbla] = useState<Embla | null>(null);
	const autoplay = useRef(Autoplay({ delay: 2000 }));

	const prevSlide = () => {
		embla?.scrollPrev();
	};

	const nextSlide = () => {
		embla?.scrollNext();
	};

	return (
		<SectionTemplate
			title={heading}
			carouselControls
			carouselEvents={{
				scrollPrev: prevSlide,
				scrollNext: nextSlide,
			}}
		>
			<Carousel
				withControls={false}
				getEmblaApi={setEmbla}
				slideGap={16}
				plugins={[autoplay.current]}
			>
				{reviews.map((review) => (
					<Carousel.Slide key={review.id}>
						<ReviewBlock {...review} />
					</Carousel.Slide>
				))}
			</Carousel>
		</SectionTemplate>
	);
};
