import React from 'react'

export interface UiState {
  toggledNav: boolean
  toggleNav: () => void
}

const UiStateContext = React.createContext<UiState>({
  toggledNav: false,
  toggleNav: () => {},
})

export function UiStateContextProvider({ children }: { children: any }) {
  const [toggledNav, setToggledNav] = React.useState(false)

  return (
    <UiStateContext.Provider
      value={{
        toggledNav: toggledNav,
        toggleNav: () => setToggledNav(!toggledNav),
      }}
    >
      {children}
    </UiStateContext.Provider>
  )
}

export function useUiState() {
  return React.useContext(UiStateContext)
}
