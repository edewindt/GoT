import { request, gql } from 'graphql-request';

const query = gql`
	{
		quotes {
			id
			season
			episode
			author {
				fullname
			}
		}
	}
`;
export const load = async () => {
	const data = await request(import.meta.env.VITE_API, query);
	console.log(data);
	return {
		data
	};
};
