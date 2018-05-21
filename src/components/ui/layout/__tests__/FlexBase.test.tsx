import { shallow } from 'enzyme';
import * as React from 'react';
import { FlexBase, FlexBaseProps } from '../FlexBase';

describe('FlexBase', () => {
  const props: FlexBaseProps = {
    flexDirection: 'row',
  };

  it('must not change', () => {
    const wrapper = shallow(
      <FlexBase
        {...props}
        justifyContent={'center'}
        alignItems={'flex-end'}
        alignSelf={'flex-start'}
        flexGrow={1}
        width={'30px'}
        minWidth={'45px'}
        height={'60px'}
        minHeight={'50px'}
        backgroundColor={'#fff'}
        paddingVertical={'10px'}
        paddingHorizontal={'15px'}
        border={'1px solid black'}
        hidden
        tabIndex={0}
        style={{ color: '#000' }}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  describe('hidden', () => {
    describe('when hidden is provided', () => {
      it("sets display to 'none'", () => {
        const wrapper = shallow(<FlexBase hidden {...props} />);
        expect(wrapper.find('div').prop('style')!.display).toBe('none');
      });
    });
    describe('when hidden is not provided', () => {
      it("sets display to 'flex'", () => {
        const wrapper = shallow(<FlexBase {...props} />);
        expect(wrapper.find('div').prop('style')!.display).toBe('flex');
      });
    });
  });

  describe('minWidth', () => {
    describe('when minWidth is provided', () => {
      it('sets minWidth to minWidth', () => {
        const minWidth = '30px';
        const wrapper = shallow(<FlexBase minWidth={minWidth} {...props} />);
        expect(wrapper.find('div').prop('style')!.minWidth).toBe(minWidth);
      });
    });
    describe('when minWidth is not provided', () => {
      it('sets minWidth to width', () => {
        const width = '30px';
        const wrapper = shallow(<FlexBase width={width} {...props} />);
        expect(wrapper.find('div').prop('style')!.minWidth).toBe(width);
      });
    });
  });
});
