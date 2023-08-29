import { Stack, Button, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';

import { usePaginatedCasesData } from '@/modules/Cases/api';
import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import CaseBlock from '@/shared/components/CaseBlock';

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
					<CaseBlock.Big {...caseItem} key={caseItem.id} />
				))}
			</Stack>
			<Flex justifyContent="flex-end">
				<Button
					float="right"
					rightIcon={<ArrowSVG fill="#26282B" width="32px" />}
					variant="ghost"
					size={{ md: 'lg', xs: 'sm' }}
					color="grey.600"
					sx={{ '.chakra-button__icon': { margin: 0 } }}
				>
					<Link href="/cases">
						<Text variant="lg">Ко всем кейсам</Text>
					</Link>
				</Button>
			</Flex>
		</SectionTemplate>
	);
};
