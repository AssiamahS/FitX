

import { gql } from '@apollo/client';

export const GET_WORKOUTS = gql`
  query getWorkouts {
    workouts {
      _id
      exercise
      weight
      reps
      date
    }
  }`
;

export const GET_USERS = gql`
query GetAllUsers {
  getAllUsers {
    username
    email
    password
    age
    weight
    goal
    frequency
    _id
  }
}`
;

export const GET_USER = gql`
  query getUser($id: ID!) {
    user(_id: $id) {
      _id
      username
      email
      age
      weight
      goal
      frequency
    }
  }`
;

export const AUTHENTICATE = gql`
  query Query {
    authenticate {
      username
    }
  }
`