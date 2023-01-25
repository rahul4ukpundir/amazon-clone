
import React from "react";
import { faker } from "@faker-js/faker";

export const products = [...Array(20)].map(() => (
    {
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.food(300, 260, true),
        inStock: faker.datatype.number({
            'min': 0,
            'max': 7
        }),
    
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.datatype.number({
            'min': 1,
            'max': 5
        })
    
    })
)

