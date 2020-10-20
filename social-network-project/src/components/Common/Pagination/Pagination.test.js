import React from 'react';
import { create } from 'react-test-renderer';
import Pagination from './Pagination';

describe('paginator component tests', () => {
  it('pages count is 11 but should be showed only 10', () => {
    const component = create(<Pagination totalItemsCount={11} pageSize={1} portionSize={10} />);
    const root = component.root;
    const spans = root.findAllByType('span');
    expect(spans).toHaveLength(10);
  });

  it('if pages count is more then 10 button NEXT should be present', () => {
    const component = create(<Pagination totalItemsCount={11} pageSize={1} portionSize={10} />);
    const root = component.root;
    const button = root.findAllByType('button');
    expect(button).toHaveLength(1);
  });
});
