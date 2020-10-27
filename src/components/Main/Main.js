import React, {useState, useEffect, useCallback} from "react";
import Card from "../Card/Card"
import './main.scss';
import axios from 'axios';
import ActionButton from "../ActionButton/ActionButton";

const Main = () => {

    const [drink, setDrink] = useState("");
    const [drinkInit, setDrinkInit] = useState(false);

    const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    const getDrinks = () => {
        return axios.get(`${url}`);
    };
    const fetchDrinks = useCallback(() => {
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
    }, []);

    const setStateDrinkInitHandler = (value) => {
        setDrinkInit(value)
    }

    useEffect(() => {

        if(!drinkInit){
            fetchDrinks();
            setDrinkInit(true);
        }
    }, [drinkInit, fetchDrinks]);

    useEffect(() => {
        const savedDrinks = localStorage.getItem('savedDrinks');

        JSON.parse(savedDrinks).forEach((value) => {
            if (drink.idDrink === value.idDrink){
                fetchDrinks();
            }
        })
    }, [drink, fetchDrinks]);

    return(
        <div>
            { drink && <Card drink={drink}></Card>}
            <ActionButton type="delete" drink={drink} setState={setStateDrinkInitHandler} />
            <ActionButton type="save" drink={drink} setState={setStateDrinkInitHandler} />
        </div>
    )
};

export default Main;