import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import htmlParser from 'html-react-parser';
import Link from 'next/link';

import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';

type SectionContactsModel = {
	address: string;
	email: string;
	phone: number;
};

const formatPhone = (phone: number) => {
	const phoneStr = String(phone);

	return `+${phoneStr[0]} (${phoneStr.slice(1, 4)}) ${phoneStr.slice(
		4,
		7
	)}-${phoneStr.slice(7, 9)}-${phoneStr.slice(9, 11)}`;
};

export const SectionContacts = ({
	address,
	email,
	phone,
}: SectionContactsModel) => {
	const formattedPhone = formatPhone(phone);

	return (
		<SectionTemplate title="Контакты" mb={{ lg: '100px', xs: '40px' }}>
			<Stack>
				<Flex
					justifyContent="space-between"
					direction={{ lg: 'row', xs: 'column' }}
					gap={{ lg: 0, xs: 4 }}
				>
					<Box>
						<Text variant="xl" fontWeight="bold" mb={6}>
							Адрес
						</Text>

						<Text variant="lg" maxW={{ lg: 350, xs: 'none' }}>
							{htmlParser(address)}
						</Text>
					</Box>

					<Flex gap={{ lg: 24, xs: 4 }} direction={{ lg: 'row', xs: 'column' }}>
						<Box>
							<Text variant="xl" fontWeight="bold" mb={6}>
								Телефон
							</Text>
							<Link href={`tel:+${phone}`}>
								<Text variant="xl">{formattedPhone}</Text>
							</Link>
						</Box>
						<Box>
							<Text variant="xl" fontWeight="bold" mb={6}>
								Сайт
							</Text>
							<Link href={`mailto:${email}`}>
								<Text variant="xl">{email}</Text>
							</Link>
						</Box>
					</Flex>
				</Flex>
			</Stack>
		</SectionTemplate>
	);
};
