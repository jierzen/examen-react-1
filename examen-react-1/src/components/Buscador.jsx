import React, { useState } from 'react';
import { FormControl, InputGroup, Alert, Container, Row } from 'react-bootstrap';

const Buscador = ({ data, onSelectPokemon }) => {
  const [search, setSearch] = useState('');
  const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    setShowError(false);
  
    const pokemonFound = data.find(pokemon => pokemon.name.toLowerCase() === value.toLowerCase().trim());
    if (pokemonFound) {
      onSelectPokemon(pokemonFound.name);
    } else {
        setShowError(value.trim() !== '');
    }
  };

  return (
    <Container className="d-flex justify-content-center">
      <InputGroup className="mb-3 col-md-3">
        <FormControl
          placeholder="Busca a tu Pokémon por su nombre"
          onChange={handleChange}
          value={search}
          isInvalid={showError}
        />
        <FormControl.Feedback type="invalid">
          {showError && "El Pokémon no existe"}
        </FormControl.Feedback>
      </InputGroup>
    </Container>
  );
};

export default Buscador;