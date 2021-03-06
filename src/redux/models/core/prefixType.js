import { NAMESPACE_SEP } from './constants';

export default function prefixType(type, model) {
  const prefixedType = `${type}`;
  const typeWithoutAffix = prefixedType.replace(/\/@@[^/]+?$/, '');
  if (
    (model.reducers && model.reducers[typeWithoutAffix]) ||
    (model.effects && model.effects[typeWithoutAffix])
  ) {
    return prefixedType;
  }
  return type;
}
