import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const SortBy = (props) => {
  const { totalReviews, setSortState } = props;
  return (
    <div className="sortBy-header">
      {totalReviews}
      {' '}
      reviews
      &nbsp;
      <DropdownButton className="dropdown-sortby-button" title="Sort by" variant="outline-dark" size="sm">
        <Dropdown.Item onClick={() => { setSortState('relevant'); }}>Most Relevant</Dropdown.Item>
        <Dropdown.Item onClick={() => { setSortState('newest'); }}>Most Recent</Dropdown.Item>
        <Dropdown.Item onClick={() => { setSortState('helpful'); }}>Most Helpful</Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default SortBy;
