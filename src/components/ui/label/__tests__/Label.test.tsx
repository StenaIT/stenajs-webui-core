import { shallow } from 'enzyme';
import * as React from 'react';
import { Space } from '../../layout';
import { Label, LabelProps } from '../Label';

describe('Label', () => {
  const props: LabelProps = {
    children: <div>child</div>,
    label: 'label',
  };

  it('renders label', () => {
    const labelDiv = 'labelDiv';
    const labelText = 'label';
    const label = <div className={labelDiv}>{labelText}</div>;
    const wrapper = shallow(<Label {...props} label={label} />);
    expect(
      wrapper
        .childAt(0)
        .childAt(0)
        .html(),
    ).toEqual(`<div class="${labelDiv}">${labelText}</div>`);
  });

  it('can be passed num for space', () => {
    const num = 3;
    const wrapper = shallow(<Label {...props} num={num} />);
    const spaceWrapper = wrapper.find(Space);
    expect(spaceWrapper.prop('num')).toBe(num);
  });

  it('renders children', () => {
    const children = 'children';
    const wrapper = shallow(<Label {...props}>{children}</Label>);
    const spaceWrapper = wrapper.childAt(2);
    expect(spaceWrapper.text()).toBe(children);
  });

  describe('when position is top left', () => {
    it('is rendered correct', () => {
      const wrapper = shallow(<Label {...props} position={'top-left'} />);
      expect(wrapper.prop('style')).toEqual({
        display: 'inline-flex',
        flexDirection: 'column',
      });
      expect(wrapper.childAt(0).prop('style')).toEqual({
        alignSelf: 'flex-start',
      });
    });
  });

  describe('when position is top right', () => {
    it('is rendered correct', () => {
      const wrapper = shallow(<Label {...props} position={'top-right'} />);
      expect(wrapper.prop('style')).toEqual({
        display: 'inline-flex',
        flexDirection: 'column',
      });
      expect(wrapper.childAt(0).prop('style')).toEqual({
        alignSelf: 'flex-end',
      });
    });
  });

  describe('when position is left top', () => {
    it('is rendered correct', () => {
      const wrapper = shallow(<Label {...props} position={'left-top'} />);
      expect(wrapper.prop('style')).toEqual({
        display: 'inline-flex',
        flexDirection: 'row',
      });
      expect(wrapper.childAt(0).prop('style')).toEqual({
        alignSelf: 'flex-start',
      });
    });
  });

  describe('when position is left bottom', () => {
    it('is rendered correct', () => {
      const wrapper = shallow(<Label {...props} position={'left-bottom'} />);
      expect(wrapper.prop('style')).toEqual({
        display: 'inline-flex',
        flexDirection: 'row',
      });
      expect(wrapper.childAt(0).prop('style')).toEqual({
        alignSelf: 'flex-end',
      });
    });
  });
});
