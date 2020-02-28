import loadable from './core';
import account from './account';
import common from './common';

export default [...loadable(account), ...loadable(common)];
