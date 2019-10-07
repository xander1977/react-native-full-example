import React, { useState, useEffect } from 'react';
import {Text, StyleSheet, View} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from "../hooks/useResults";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    return (<View>
        <SearchBar 
            term={term}                                           // Can like below
            onTermChange={(newTerm) => { setTerm(newTerm); }}     // onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}                  // onTermSubmit={searchApi}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        {results.length>0 ? <Text>We have found {results.length} results.</Text> : null}
    </View>);
};

const styles = StyleSheet.create({});

export default SearchScreen;