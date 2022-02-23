import  React from 'react';
import { Searchbar } from 'react-native-paper';
import { SearchBar } from 'react-native-screens';

const ResearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);

  return (
    <SearchBar
      placeholder="Search"
    />
  );
};

export default ResearchBar;