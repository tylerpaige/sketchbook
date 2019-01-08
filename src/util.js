import cx from 'classnames';

export function classListToName(style, rules){
  return cx(rules).split(' ').map( className => style[className] ).join(' ');
};