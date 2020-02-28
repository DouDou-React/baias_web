import Loadable from 'react-loadable';
import Loading from '@/components/Loading';

const LOADING_DELAY = 2000;

export default routersConf => {
  return routersConf.map(i => {
    i.component = Loadable({
      delay: LOADING_DELAY,
      loader: i.loader,
      loading: Loading
    });
    return i;
  });
};
