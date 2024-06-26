import React, { useEffect, useRef, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '0', // Hides the map
  height: '0' // Hides the map
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const libraries = ['places'];

function AutoComplete({ onPlaceSelected }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_API_GOOGLE_MAP,
    libraries
  });

  const [addressError, setAddressError] = useState(false);
  const autocompleteRef = useRef(null);

  useEffect(() => {
    if (isLoaded && autocompleteRef.current) {
      const autocomplete = new window.google.maps.places.Autocomplete(
        autocompleteRef.current,
        {
          types: ['geocode'],
          componentRestrictions: { country: 'IL' },
          fields: ['address_components', 'formatted_address']
        }
      );

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        const addressComponents = place.address_components;
        let city = "", street = "", building = "";

        addressComponents.forEach(component => {
          const types = component.types;
          if (types.includes("locality")) {
            city = component.long_name;
          } else if (types.includes("route")) {
            street = component.long_name;
          } else if (types.includes("street_number")) {
            building = component.long_name;
          }
        });

        onPlaceSelected({ city, street, building });
        setAddressError(false); // Reset error when field successfully filled
      });
    }
  }, [isLoaded, onPlaceSelected]);

  const handleBlur = () => {
    const addressValue = autocompleteRef.current.value.trim();
    if (!addressValue) {
      setAddressError(true); // Set error if field is empty on blur
    }
  };

  return isLoaded ? (
    <div className="mb-2 relative">
      <input
        ref={autocompleteRef}
        type="text"
        placeholder="*Address"
        className={`bg-white p-2.5 border-b border-black w-full ${addressError ? 'border-red-500' : 'border-gray-300'}`}
        onBlur={handleBlur}
        required
      />
      {addressError && (
        <div className="absolute right-0 top-0 mt-3 mr-2 text-red-500 text-sm font-medium">
          Address is required
        </div>
      )}
      <div className="border-b border-black"></div> {/* Line beneath Address field */}
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <></>
      </GoogleMap>
    </div>
  ) : null;
}

export default React.memo(AutoComplete);
