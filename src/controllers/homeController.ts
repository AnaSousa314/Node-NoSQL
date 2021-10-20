import { Request, Response } from 'express';

import { Product } from '../models/Product';
import User from '../models/User';

export const home = async (req: Request, res: Response)=>{

    // let usuarios = await User.find({});

    // let usuarios = await User.findOne({
    //     email: 'ana@email.com'
    // });

    // let usuarios = await User.findById('61706dc2d332d979fb1535de');

    // let usuarios = await User.find({
    //     email: 'joao@email.com',
    //     age: 50
    // });
    
    // let usuarios = await User.find({
    //     "name.firstName": "Paula"
    // });

    // let usuarios = await User.find({
    //     interests: "tecnologia"
    // });

    /* 
        $gt = Greater Than = Maior
        $gte = Greater or Equal = Maior ou Igual
        $lt = Lower Than = Abaixo de
        $lte = Lower or Equal = Menor ou Igual
    */
    let usuarios = await User.find({
        age: { $gt:20 }
    });

    console.log('USUARIOS',usuarios);

    


    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Bonieky',
        lastName: 'Lacerda',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: []
    });
};