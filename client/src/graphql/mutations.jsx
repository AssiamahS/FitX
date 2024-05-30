import { gql } from '@apollo/client';

export const REGISTER_USER = gql `
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $age: Int
    $weight: Float
    $goal: String
    $frequency: Int
  ) {
    register(
      username: $username
      email: $email
      password: $password
      age: $age
      weight: $weight
      goal: $goal
      frequency: $frequency
    ) {
      token
      user {
        _id
        email
        username
      }
    }
  }`
;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        username
      }
    }
  }`
;

export const ADD_WORKOUT = gql`
  mutation addWorkout($exercise: String!, $weight: Float!, $reps: Int!) {
    addWorkout(exercise: $exercise, weight: $weight, reps: $reps) {
      _id
      exercise
      weight
      reps
      date
    }
  }`
;
