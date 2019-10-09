import React, { useState } from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (priceLength) => {
        // price === 1 for '$' || 2 for '$$' || 3 for '$$$'

        return results.filter((result) => {
            var lng = (result.price ? result.price.length : 0);
            return lng === priceLength;
        });
    };

    return (
        // you can use <></> tags instead of <View></View>
        <View style={{flex: 1}}>
            <SearchBar
                term={term}                                           // Can like below
                onTermChange={(newTerm) => { setTerm(newTerm); }}     // onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}                  // onTermSubmit={searchApi}
            />

            {errorMessage ? <Text>{errorMessage}</Text> : null}

            <ScrollView>
                <ResultsList title="Cost Effective" results={filterResultsByPrice(1)} />
                <ResultsList title="Bit Pricier" results={filterResultsByPrice(2)} />
                <ResultsList title="Big Spender" results={filterResultsByPrice(3)} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;