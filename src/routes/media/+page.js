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
	const data = await request('http://localhost:8000/', query);
	return {
		data
	};
};
