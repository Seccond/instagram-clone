import { Route, Routes } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout.jsx'
import FeedPage from '../../pages/FeedPage.jsx'
import LoginPage from '../../pages/LoginPage.jsx'
import SignupPage from '../../pages/SignupPage.jsx'
import ExplorePage from '../../pages/ExplorePage.jsx'
import ReelsPage from '../../pages/ReelsPage.jsx'
import NotificationsPage from '../../pages/NotificationsPage.jsx'
import InboxPage from '../../pages/direct/InboxPage.jsx'
import AccountLayout from '../../pages/account/AccountLayout.jsx'
import ProfilePage from '../../pages/account/ProfilePage.jsx'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<FeedPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/reels" element={<ReelsPage />} />
        <Route path="/direct/inbox" element={<InboxPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/account" element={<AccountLayout />}>
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  )
}

export default AppRoutes
