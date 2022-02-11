import { h } from 'preact';
import { PatternState } from './PatternState';

export const NavLink = (props) => {
  return (
    <a
      href={`patterns/${props.item.patternPath}`}
      onClick={(e) => props.elem.handleClick(e, props.item.patternPartial)}
      data-patternpartial={props.item.patternPartial}
    >
      {props.item.isDocPattern && props.category
        ? `${props.categoryName}`
        : props.item.patternName}
      {props.item.patternState && (
        <PatternState variant={props.item.patternState} />
      )}
    </a>
  );
};
