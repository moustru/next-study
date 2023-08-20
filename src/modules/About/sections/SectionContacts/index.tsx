import { Flex, Stack, Text } from '@chakra-ui/react';
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
					<Text variant="xl" maxW={{ lg: 350, xs: 'none' }}>
						{address}
					</Text>

					<Flex gap={{ lg: 14, xs: 4 }} direction={{ lg: 'row', xs: 'column' }}>
						<Link href={`tel:+${phone}`}>
							<Text variant="xl">{formattedPhone}</Text>
						</Link>
						<Link href={`mailto:${email}`}>
							<Text variant="xl">{email}</Text>
						</Link>
					</Flex>
				</Flex>
			</Stack>
		</SectionTemplate>
	);
};
