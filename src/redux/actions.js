const url = "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"

// Action type for fetching makes
export const FETCH_MAKES = 'FETCH_MAKES';

// Action creator for fetching makes
export const fetchMakes = () => {
    return (dispatch) => {
        // Make a fetch request to the specified URL
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                // Dispatch an action with type 'FETCH_MAKES' and value 'data.Results'
                dispatch({
                    type: FETCH_MAKES,
                    value: data.Results,
                });
            })
            .catch((error) => {
                console.error('Error fetching makes:', error);
            });
    };
};

export const addCar = (car) => {
    return {
        type: 'ADD_CAR',
        value: car
    }
}

export const removeCar = (index) => {
    return {
        type: 'REMOVE_CAR',
        value: index
    }
}