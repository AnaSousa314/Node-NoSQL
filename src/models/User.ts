import {Schema,model,connection} from 'mongoose';

type UserType = {
  email: string,
  age: number,
  interests: [string],
  name:{
    firstName: string,
    lastName: string
  }
}

const schema = new Schema<UserType>({
  email: {type: String, required: true},
  age: {type:Number,required:true},
  interests: [String],
  name:{
    firstName: {type:String,required:true},
    lastName: String
  }
});

const modelName: string = 'User';

// export deafult model<UserType>(modelName,schema); desse jeito sempre será criado o model

// dessa forma só cria se não existir
export default(connection && connection.models[modelName]) 
? connection.models[modelName] 
: model<UserType>(modelName,schema);