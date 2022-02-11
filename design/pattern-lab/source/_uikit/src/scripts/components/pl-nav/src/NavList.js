import { h } from 'preact';
import { NavToggle } from './NavToggle';
import { NavLink } from './NavLink';
import { NavItem } from './NavItem';
import { NavButton } from './NavButton';
import { getRandom } from '../../../utils';

export const NavList = (props) => {
  const { children, category, categoryName, elem } = props;
  const reorderedChildren = [];

  const random = getRandom(10000000, 99999999);

  const nonViewAllItems = elem.noViewAll
    ? children.filter((item) => !item.isDocPattern)
    : children.filter(
        (item) => !item.isDocPattern && !item.patternName.includes(' Docs')
      );
  const viewAllItems = elem.noViewAll
    ? []
    : children.filter((item) => item.isDocPattern);

  reorderedChildren.push(...viewAllItems, ...nonViewAllItems);

  return (
    <NavItem>
      {viewAllItems.length > 0 ? (
        viewAllItems.map((patternSubgroupItem) => (
          <NavLink
            category={category}
            categoryName={categoryName}
            item={patternSubgroupItem}
            elem={elem}
          />
        ))
      ) : (
        <NavButton
          aria-controls={`${category}-${random}`}
          onClick={elem.toggleNavPanel}
        >
          {categoryName}
        </NavButton>
      )}
            
    </NavItem>
  );
};
