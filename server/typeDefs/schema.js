const gql = String.raw;

const typeDefs = gql`
    type User {
        _id:ID
        username:String
        email:String
        password:String
        age:String
        weight:String
        goal:String
        frequency:Int
        workouts:[ID]
    }

    type Auth {
        token: ID!
        user: User
      }

    type Query {
        getOneUser(_id:ID):User
        getAllUsers:[User]
        
    }

    type Mutation{
        createUser(username:String!,email:String!,password:String!,age:Int, weight:Int,goal:String,frequency:Int) : Auth
        removeOneUser(_id:ID):User
        updateOneUser(_id:ID,username:String,email:String,password:String!,weight:Int,goal:String,frequency:Int):User
        
    }

    type Workout {
        exercise: String
        weight:Int
        reps:Int
        DayOfWeek:String
        user: ID
    }

    type Query {
        getOneWorkout:Workout
        getAllWorkouts:[Workout]
        getOneUser(_id:ID):User
        getAllUsers:[User]
        authenticate: User
    }

    type Mutation{
        login(email:String,password:String!) : Auth
        registerUser(username:String!,email:String!,password:String!,age:Int, weight:Int,goal:String,frequency:Int) : User
        createWorkout(exercise:String!,weight:Int!,reps:Int!,DayOfWeek:String,user_id:ID! ) : Workout
    }
`;

module.exports = typeDefs