import { Route, Routes } from 'react-router-dom'
import { SiteLayout } from './layouts/SiteLayout'
import { HomePage } from './pages/HomePage'
import { ProductPage } from './pages/ProductPage'
import { CookiesPage } from './pages/CookiesPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { SecurityPage } from './pages/SecurityPage'
import { TermsPage } from './pages/TermsPage'

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <SiteLayout>
            <HomePage />
          </SiteLayout>
        }
      />
      <Route
        path="/product"
        element={
          <SiteLayout>
            <ProductPage />
          </SiteLayout>
        }
      />
      <Route
        path="/terms"
        element={
          <SiteLayout>
            <TermsPage />
          </SiteLayout>
        }
      />
      <Route
        path="/privacy"
        element={
          <SiteLayout>
            <PrivacyPage />
          </SiteLayout>
        }
      />
      <Route
        path="/cookies"
        element={
          <SiteLayout>
            <CookiesPage />
          </SiteLayout>
        }
      />
      <Route
        path="/security"
        element={
          <SiteLayout>
            <SecurityPage />
          </SiteLayout>
        }
      />
    </Routes>
  )
}
