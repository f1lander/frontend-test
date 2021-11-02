import React, { useState, useEffect } from "react";
import axios from "axios";

import { Header, FilterBar } from "../Components/Molecules";

import { gql, useQuery } from "@apollo/client";
import { CardsSection } from "../Components/Organisms/CardsSection/CardsSection";
import { Button } from "../Components/Atoms";

const QUERY_BUSINESS = gql`
  query GetBusiness($offset: Int!) {
    search(location: "Las Vegas", limit: 10, offset: $offset) {
      total
      business {
        name
        id
        alias
        rating
        url
        photos
        hours {
          is_open_now
        }
        price
        categories {
          alias
          title
        }
      }
    }
  }
`;
interface IFilters {
  isOpenNow: boolean;
  price: Array<string> | undefined;
  categories: Array<string> | undefined;
}
export const RestaurantsSection: React.FC<any> = (props: any): JSX.Element => {
  const [categories, setCategories] = useState();
  const [offset, setOffset] = useState(0);
  const [business, setBusiness] = useState<any>([]);
  const [priceOptions, setPriceOptions] = useState([
    { label: "All", value: "All" },
    { label: "$", value: "$" },
    { label: "$$", value: "$$" },
    { label: "$$$", value: "$$$" },
    { label: "$$$$", value: "$$$$" },
  ]);
  const [categoriesOptions, setCategoriesOptions] = useState([
    { label: "All", value: "All" },
  ]);
  const [filters, setFilters] = useState<IFilters>({
    isOpenNow: false,
    price: undefined,
    categories: undefined,
  });
  const { loading, error, data, fetchMore } = useQuery(QUERY_BUSINESS, {
    variables: { offset },
    nextFetchPolicy: "cache-first",
  });

  useEffect(() => {
    const getCategories = async () => {
      const { data: result } = await axios.get("/v3/categories");
      setCategories(result);
    };
    getCategories();
  }, []);

  useEffect(() => {
    fetchMore({ variables: { offset } });
  }, [offset]);

  const handleOnClearAll = () => {
    setFilters({
      isOpenNow: false,
      price: undefined,
      categories: undefined,
    });
  };

  const handleOnLoadMore = () => {
    setBusiness([...business, ...data.search.business]);
    setOffset(offset + 10);
  };

  const handleOnFilter = (filter: any) => {    
    setFilters({ ...filters, ...filter });
  };

  if (error) {
    return <p>Error :(</p>;
  }
  return (
    <>
      <Header
        heading="Restaurants"
        subHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <FilterBar
        priceOptions={priceOptions}
        categoriesOptions={categoriesOptions}
        onFilter={handleOnFilter}
        onClearAll={handleOnClearAll}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <CardsSection
          title="All Restaurants"
          cards={[...business, ...data?.search?.business]
            .map((item: any) => ({
              ...item,
              imageSrc: item.photos[0],
              category: item?.categories[0]?.title,
              isOpen: item?.hours[0]?.is_open_now,
            }))
            .filter((item) => (filters.isOpenNow ? item.isOpen : item))
            .filter((item) => (filters.price ? filters.price.includes(item.price) : item))
          }
        >
          <Button variant="large" onClick={() => handleOnLoadMore()}>
            Load More
          </Button>
        </CardsSection>
      )}
    </>
  );
};
