import { Carousel, Embla } from '@mantine/carousel';
import { useState } from 'react';

import { useModal } from '@/config/providers/Modal.provider';
import { ModalBecomeMember } from '@/modules/Common/modals/ModalBecomeMember';
import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { CustomAvatar } from '@/shared/components/CustomAvatar';

import type { TagModel } from '@/shared/types/Tag';

type SectionTeamModel = {
	team: {
		avatar: any;
		name: string;
		tags: TagModel[];
	}[];
};

export const SectionTeam = (props: SectionTeamModel) => {
	const [embla, setEmbla] = useState<Embla | null>(null);
	const { openModal } = useModal();

	const prevSlide = () => {
		embla?.scrollPrev();
	};

	const nextSlide = () => {
		embla?.scrollNext();
	};

	const openTeamModal = () => {
		openModal(<ModalBecomeMember />);
	};

	return (
		<SectionTemplate
			title="Команда"
			carouselControls
			withButton
			handleButtonClick={openTeamModal}
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
				]}
			>
				{props.team.map((teamMember, i) => (
					<Carousel.Slide key={teamMember.name + i}>
						<CustomAvatar {...teamMember} minW={{ md: 'none', xs: '100%' }} />
					</Carousel.Slide>
				))}
			</Carousel>
		</SectionTemplate>
	);
};
