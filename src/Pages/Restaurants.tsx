import React, { useState, useEffect, useMemo } from "react";

import { Header, FilterBar } from "../Components/Molecules";

import { gql, useQuery } from "@apollo/client";
import { CardsSection } from "../Components/Organisms/CardsSection/CardsSection";
import { Button } from "../Components/Atoms";
import { ALL_OPTION, RESTAURANTS} from '../constants'
import { IFilters, ICategory } from "./Restaurants.types";

const QUERY_BUSINESS = gql`
  query GetBusiness($offset: Int!, $categories: String) {
    categories(country: "US", locale: "en_US") {
      total
      category {
        title
        alias
        parent_categories {
          title
        }
      }
    }
    search(location: "Las Vegas", limit: 10, offset: $offset, categories: $categories) {
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

export const RestaurantsSection: React.FC<any> = (props: any): JSX.Element => {

  const [offset, setOffset] = useState(0);
  const [business, setBusiness] = useState<any>([]);
  const [priceOptions, setPriceOptions] = useState([
    { label: "All", value: "All" },
    { label: "$", value: "$" },
    { label: "$$", value: "$$" },
    { label: "$$$", value: "$$$" },
    { label: "$$$$", value: "$$$$" },
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

  const categoriesOptions = useMemo(() => {
    return !data?.categories ? [ALL_OPTION] : [ALL_OPTION, ...data.categories.category
      .filter((category:ICategory) => category.parent_categories.length && category.parent_categories[0].title === RESTAURANTS)
      .map((category:ICategory) => ({ label: category.title, value: category.alias }))]
  }, [data]);

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
            .filter((item) =>
              filters.price ? filters.price.includes(item.price) : item
            )}
        >
          <Button variant="large" onClick={() => handleOnLoadMore()}>
            Load More
          </Button>
        </CardsSection>
      )}
    </>
  );
};
