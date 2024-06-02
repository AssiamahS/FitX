import { useContext, createContext, useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'

import { AUTHENTICATE } from '../graphql/queries'

const Context = createContext()

export function StoreProvider(props) {
  const { data, loading } = useQuery(AUTHENTICATE)

  const initialState = {
    loading: true,
    user: null
  }

  const [state, setState] = useState(initialState)

  // This useEffect will trigger once when the page first loades and then again when the useQuery above comes back
  useEffect(() => {
    setState({
      ...state,
      // We set this loading property to the loading value from the query from the authenticate resolver
      loading,
      user: data?.authenticate
    })
  }, [data])

  return (
    <Context.Provider value={{ state, setState }}>
      {/* We hide the entire app output until the user query comes back */}
      {loading ? (
        <div className="loading-overlay">
          <h1>Loading...</h1>
        </div>
      ) : props.children}
    </Context.Provider>
  )
}

export const useStore = () => useContext(Context)