import React, { useState } from 'react';

const MovieSearch = ({ setMovies }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    if (!searchTerm.trim()) return; // Avoid fetching if the search term is empty

    try {
      const response = await fetch(
