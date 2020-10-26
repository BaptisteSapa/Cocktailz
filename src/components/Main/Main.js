import React, {useState, useEffect} from "react";
import Card from "../Card/Card"
import './main.scss';
import axios from 'axios';

const Main = () => {

    const [drink, setDrink] = useState("");
    const [drinkInit, setDrinkInit] = useState(false);

    useEffect(() => {

        const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

        const getDrinks = () => {
            return axios.get(`${url}`);
        };

        const fetchDrinks = () => {
            return new Promise((resolve, reject) => {
                return Promise.all([
                    getDrinks(),
                ])
                    .then(responses => {
                        let drinks = responses[0].data.drinks[0];
                        setDrink(drinks);
                        resolve(drinks);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        };

        if(!drinkInit){
            fetchDrinks();
            setDrinkInit(true);
        }
    }, [drinkInit]);

    return(
        <div>
            { drink && <Card drink={drink}></Card>}
        </div>
    )
};

export default Main;