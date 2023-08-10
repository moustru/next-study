import { Flex } from '@chakra-ui/react';

import { SectionTemplate } from '@/modules/Common/sections/SectionTemplate';
import { CustomAvatar } from '@/shared/components/CustomAvatar';

import { team } from './mocks';

export const SectionTeam = () => {
	return (
		<SectionTemplate title="Команда">
			<Flex gap={16}>
				{team.map((teamMember, i) => (
					<CustomAvatar {...teamMember} key={teamMember.name + i} />
				))}
			</Flex>
		</SectionTemplate>
	);
};
