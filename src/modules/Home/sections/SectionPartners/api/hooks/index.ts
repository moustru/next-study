import { useQuery } from '@tanstack/react-query';

import { getPartners } from '../controllers';

export const usePartnersData = () =>
	useQuery({
		queryKey: ['helps'],
		queryFn: getPartners,
	});
