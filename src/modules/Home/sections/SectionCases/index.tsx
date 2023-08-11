import { Stack, Button } from '@chakra-ui/react';
import Link from 'next/link';

import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { CaseBlock } from '@/shared/components/CaseBlock';

import { caseItems } from './mocks';

import ArrowSVG from 'public/icons/arrow_right.svg';

export const SectionCases = ({ ...others }) => {
	return (
		<SectionTemplate title="Кейсы" {...others}>
			<>
				<Stack
					gap={{ lg: '100px', md: '64px', xs: '32px' }}
					mb={{ lg: '60px', md: '32px', xs: '16px' }}
				>
					{caseItems.map((caseItem, i) => (
						<CaseBlock {...caseItem} key={caseItem.title + i} />
					))}
				</Stack>
				<Button
					float="right"
					rightIcon={<ArrowSVG fill="#26282B" width="24px" />}
					variant="ghost"
					size={{ md: 'md', xs: 'sm' }}
				>
					<Link href="/cases">Ко всем кейсам</Link>
				</Button>
			</>
		</SectionTemplate>
	);
};
