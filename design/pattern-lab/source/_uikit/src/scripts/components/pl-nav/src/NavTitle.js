import { h } from 'preact';

export const NavTitle = (props) => {
  return (
    <a
      {...props}
    >
      <span className={`pl-c-nav__link-text`}>{props.children}</span>
    </a>
  );
};
