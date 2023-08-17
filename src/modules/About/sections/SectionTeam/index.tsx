import { Carousel, Embla } from '@mantine/carousel';
import { useState } from 'react';

import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { CustomAvatar } from '@/shared/components/CustomAvatar';

import { team } from './mocks';

export const SectionTeam = () => {
	const [embla, setEmbla] = useState<Embla | null>(null);

	const prevSlide = () => {
		embla?.scrollPrev();
	};

	const nextSlide = () => {
		embla?.scrollNext();
	};

	return (
		<SectionTemplate
			title="Команда"
			carouselControls
			carouselEvents={{ scrollPrev: prevSlide, scrollNext: nextSlide }}
		>
			<Carousel
				withControls={false}
				getEmblaApi={setEmbla}
				slideSize="25%"
				align="start"
				slidesToScroll={1}
				breakpoints={[
					{ maxWidth: 1024, slideSize: '33.333333%' },
					{ maxWidth: 768, slideSize: '50%' },
					{ maxWidth: 480, slideSize: '100%' },
					// { maxWidth: 'sm', slideSize: '100%' },
				]}
			>
				{team.map((teamMember, i) => (
					<Carousel.Slide key={teamMember.name + i}>
						<CustomAvatar {...teamMember} minW={{ md: 'none', xs: '100%' }} />
					</Carousel.Slide>
				))}
			</Carousel>

			{/* <Flex gap={16}>
				{team.map((teamMember, i) => (
					<CustomAvatar {...teamMember} key={teamMember.name + i} />
				))}
			</Flex> */}
		</SectionTemplate>
	);
};
