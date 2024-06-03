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
        workouts:[Workout]
    }

    type Workout {
        exercise: String
        weight:Int
        reps:Int
        DayOfWeek:String
        user: ID
    }
    
    type Response {
        message: String
    }

    type Query {
        getOneWorkout:Workout
        getAllWorkouts:[Workout]
        getOneUser:User
        getAllUsers:[User]
        authenticate: User
    }

    type Mutation{
        loginUser(email:String,password:String!) : User
        registerUser(username:String!,email:String!,password:String!,age:Int, weight:Int,goal:String,frequency:Int) : User
        createWorkout(exercise:String!,weight:Int!,reps:Int!,DayOfWeek:String ) : Workout
        logoutUser: Response
    }

    # These are duplicates of the Queries and Mutations below
    # You can only have one Query type and one Mutation type or it will cause issues
    # type Query {
    #     getOneUser(_id:ID):User
    #     getAllUsers:[User]
        
    # }

    # type Mutation{
    #     createUser(username:String!,email:String!,password:String!,age:Int, weight:Int,goal:String,frequency:Int) : Auth
    #     removeOneUser(_id:ID):User
    #     updateOneUser(_id:ID,username:String,email:String,password:String!,weight:Int,goal:String,frequency:Int):User
        
    # }

`;

module.exports = typeDefs