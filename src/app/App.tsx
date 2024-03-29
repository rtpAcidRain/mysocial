import { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/ClassNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';

import './styles/index.scss';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>

    </div>
  );
}

export default App;
