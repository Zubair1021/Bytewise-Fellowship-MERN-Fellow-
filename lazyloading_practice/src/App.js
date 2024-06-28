import { Routes, Route, useNavigate } from "react-router-dom"
import Home from "./Components/Home"
import Layout from "./Components/Layout"
import { ErrorBoundary } from "react-error-boundary"
import ErrorFallback from "./Components/ErrorFallback"
import SkeletonAdmin from './Components/Skeletons/SkeletonAdmin'
import { lazy, Suspense } from "react"

const Admin = lazy(() => import('./Components/Admin'))

function App() {
  const navigate = useNavigate()

  return (
    <Routes>

      <Route path="/" element={<Layout />}>

        <Route index element={<Home />} />

        <Route path="admin" element={
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => navigate('/')}
          >
            <Suspense fallback={<SkeletonAdmin />}>
              <Admin />
            </Suspense>
          </ErrorBoundary>}
        />

      </Route>

    </Routes>
  )
}

export default App