import 'normalize.css';
import '../styles/globals.scss';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
};

export default App;
