import { useContext, createContext, useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'

import { AUTHENTICATE } from '../graphql/queries'

const Context = createContext()

export function StoreProvider(props) {
  const { data } = useQuery(AUTHENTICATE)

  const initialState = {
    loading: true,
    user: null
  }

  const [state, setState] = useState(initialState)

  useEffect(() => {
    setState({
      ...state,
      loading: false,
      user: data?.authenticate
    })
  }, [data])

  return (
    <Context.Provider value={{ state, setState }}>
      {props.children}
    </Context.Provider>
  )
}

export const useStore = () => useContext(Context)