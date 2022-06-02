import { FC, ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner, SpinnerSize } from '@fluentui/react';

import { useAppSelector } from 'store';
import FloatingBox from '../FloatingBox';

type ProtectedRouteProps = {
  children?: ReactNode;
};

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children = '' }) => {
  const location = useLocation();

  const isUserLoggedIn = useAppSelector(state => state.app.user.loggedIn);
  const isLoadingRequest = useAppSelector(state => state.app.loadingRequest);

  if (isLoadingRequest)
    return (
      <FloatingBox>
        <Spinner size={SpinnerSize.large} label="Loading..." />
      </FloatingBox>
    );

  if (!isUserLoggedIn) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
