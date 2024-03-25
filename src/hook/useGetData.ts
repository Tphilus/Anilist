import { useQuery, gql } from "@apollo/client";

const GET_DATA = gql`
  query {
    Page {
      media {
        siteUrl
        title {
          english
          native
        }
        description
      }
    }
  }
`;

export default function useGetData() {
  const { error, data, loading } = useQuery(GET_DATA);

  return { error, data, loading }
}

