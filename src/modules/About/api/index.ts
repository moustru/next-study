import { useQuery, type QueryClient } from '@tanstack/react-query';

import { httpStrapi } from '@/config/api';

export const getAboutData = async (): Promise<any> =>
	await httpStrapi.get('/abouts?populate[zoneOfContents][populate]=*').json();

export const getTeam = async (): Promise<any> =>
	await httpStrapi.get('/about-team-member-avatars?populate=*').json();

const aboutConfig = {
	queryKey: ['about'],
	queryFn: () => getAboutData(),
};

const teamConfig = {
	queryKey: ['team'],
	queryFn: () => getTeam(),
};

export const prefetchAboutData = async (queryClient: QueryClient) =>
	await queryClient.prefetchQuery(aboutConfig);

export const prefetchTeamData = async (queryClient: QueryClient) =>
	await queryClient.prefetchQuery(teamConfig);

export const useAboutData = () => useQuery(aboutConfig);

export const useTeamData = () => useQuery(teamConfig);
