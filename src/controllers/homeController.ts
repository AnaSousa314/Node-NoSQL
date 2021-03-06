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
    // let usuarios = await User.find({
    //     age: { $gt:20 }
    // });


    //aula 13 ordenando resultados
    // se colocar 1 será ascendente
    // se colocar -1 será descendente
    // a segunda condição no sort serve para quando existem valores iguais, ele cai na segunda condição de ordenação. A segunda condição não é obrigatória
    // let usuarios = await User.find({
    //     age: { $gt:18 }
    // }).sort({ "name.firstName": 1, age: -1 });


    //aula 14 limitar e pular resultados
    // let usuarios = await User.find({
    //     age: { $gt:18 }
    // }).limit(2);

    // skip serve para pular dados
    // let usuarios = await User.find({
    //     age: { $gt:18 }
    // }).skip(2).limit(2);

    // console.log('USUARIOS',usuarios);

    //aula15 inserindo dados no Mongo
    // o __v que aparece na criação do dado, serve para indicar quantas vezes aquele dado já foi alterado

    //primeiro metodo
    // let newUser = await User.create({
    //     name: {firstName:'Monalisa',lastName:'Fernandes'},
    //     email: 'mona@email.com',
    //     age: 200,
    //     interests: ['arte','tinta']
    // });

    //segunda forma
    // a vantagem da segunda forma é que podemos alterar os dados antes de enviá-los ao Mongo, exemplo: recebemos a data de nascimento então calculamos a idade para só então salva-la no age do banco
    //primeiro cria a instancia do dado dentro do Node
    // let newUser = new User();
    //     newUser.name = {firstName:'André',lastName:'Soares'};
    //     newUser.email = 'andre@email.com'
    //     newUser.age = 40
    //     newUser.interests = ['skate','programação']
    // //depois se salva o dado no Mongo
    // let resultado = await newUser.save()

    // console.log('NOVO USUARIO: ',resultado);
    
    //aula17 atualizando dados

    // 1ª atualizando varios ao mesmo tempo
    // await User.updateMany(
    //     { age:{ $lte:18 }},//condicao de busca
    //     { age:18 }//alteracao aplicada
    // );
    
    // 2ª atualizando apenas um
    // await User.updateOne(
    //     { email: 'joao@email.com'},//condicao de busca
    //     { age:46 }//alteracao aplicada
    // );

    // 3ª atualizando apenas um só que com save
    // let pablo = await User.findOne({email:'pablo@email.com'});

    // pablo.name.lastName = 'Andrade';
    // pablo.age = 50;
    // await pablo.save();

    // 4ª Não é muito usada pois é o mesmo que updateOne
    // /* let user =  */await User.findOneAndUpdate(
    //     {email: 'jacinta@email.com'},
    //     {$set:{age: 60}},
    //     {new: true,
    //     rawResult: true
    //     },
        
    //     (err,doc) =>{
    //         if(err){
    //             console.log('Algo deu errado nessa atualização!');
    //         }
    //         console.log(doc)
    //     }
    // );

    
    //aula18 deletando dados

    // 1ª com delete
    // await User.findOneAndDelete(
    //     {email: 'monalisa@email.com'}
    // );

    // 2ª com remove
    let pablo = await User.findOne({email:'pablo@email.com'})
    await pablo.remove();

    let usuarios = await User.find({});

    res.render('pages/home',{usuarios});
};