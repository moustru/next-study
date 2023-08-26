import { Stack, Button, Flex } from '@chakra-ui/react';
import Link from 'next/link';

import { usePaginatedCasesData } from '@/modules/Cases/api';
import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { CaseBlock } from '@/shared/components/CaseBlock';

import ArrowSVG from 'public/icons/arrow_right.svg';

export const SectionCases = ({ heading, ...others }: any) => {
	const { data } = usePaginatedCasesData('&pagination[pageSize]=2');

	const cases = data.data.map((obj: any) => ({
		...obj.attributes.cardOptions,
		id: obj.id,
	}));

	return (
		<SectionTemplate title={heading} {...others}>
			<Stack
				gap={{ lg: '100px', md: '64px', xs: '32px' }}
				mb={{ lg: '60px', md: '32px', xs: '16px' }}
			>
				{cases.map((caseItem: any) => (
					<CaseBlock {...caseItem} key={caseItem.id} />
				))}
			</Stack>
			<Flex justifyContent="flex-end">
				<Button
					float="right"
					rightIcon={<ArrowSVG fill="#26282B" width="24px" />}
					variant="ghost"
					size={{ md: 'md', xs: 'sm' }}
					color="grey.600"
				>
					<Link style={{ fontSize: '24px' }} href="/cases">
						Ко всем кейсам
					</Link>
				</Button>
			</Flex>
		</SectionTemplate>
	);
};
