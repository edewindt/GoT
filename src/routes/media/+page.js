import { request, gql } from 'graphql-request';

const query = gql`
	{
		medias {
			image
			gif
			character {
				firstname
			}
		}
	}
`;
export const load = async () => {
	const data = await request(import.meta.env.VITE_API, query);
	return {
		data
	};
};
