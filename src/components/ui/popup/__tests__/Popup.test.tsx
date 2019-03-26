import { shallow } from 'enzyme';
import * as React from 'react';

// TODO: Fix current ts config settings and jest
it('works', () => {
  const Component = () => <div />;
  const wrapper = shallow(<Component />);
  expect(wrapper.length).toBe(1);
});
// import { shallow } from 'enzyme';
// import * as React from 'react';
// import * as Popper from 'react-popper';
// import { ReferenceChildrenProps } from 'react-popper';
// import { EnhancedPopper } from '../EnhancedPopper';
// import { Popup, PopupProps } from '../Popup';
//
// describe('Popup', () => {
//   const props: PopupProps = {
//     children: <div>children</div>,
//     open: false,
//     onOpen: jest.fn(),
//     Popper,
//     referenceChildren: <div>reference</div>,
//   };
//
//   it('renders reference', () => {
//     const referenceChildren = <div>reference children</div>;
//     const onOpen = jest.fn();
//     const wrapper = shallow(
//       <Popup
//         {...props}
//         onOpen={onOpen}
//         referenceChildren={referenceChildren}
//       />,
//     );
//     const ref: ReferenceChildrenProps = {
//       ref: () => null,
//     };
//     const renderPropsWrapper = shallow(wrapper
//       .find(Popper.Reference)
//       .prop('children')({
//       ref: ref.ref,
//     }) as ReactElement<{}>);
//
//     expect(renderPropsWrapper.find('span').prop('children')).toBe(
//       referenceChildren,
//     );
//     renderPropsWrapper.find('span').simulate('click');
//     expect(onOpen).toHaveBeenCalled();
//   });
//
//   describe('when open', () => {
//     it('renders Popper', () => {
//       const backgroundColor = 'backgroundColor';
//       const children = 'children';
//       const onClickOutside = jest.fn();
//       const placement = 'bottom-end';
//       const shadow = true;
//       const targetMinHeight = 2;
//       const targetMinWidth = 3;
//       const modifiers = {
//         inner: { enabled: true },
//       };
//       const wrapper = shallow(
//         <Popup
//           {...props}
//           backgroundColor={backgroundColor}
//           children={children}
//           onClickOutside={onClickOutside}
//           open={true}
//           modifiers={modifiers}
//           placement={placement}
//           shadow={shadow}
//           targetMinHeight={targetMinHeight}
//           targetMinWidth={targetMinWidth}
//         />,
//       );
//       const popperWrapper = wrapper.find(EnhancedPopper);
//       expect(popperWrapper.length).toBe(1);
//       expect(popperWrapper.prop('backgroundColor')).toBe(backgroundColor);
//       expect(popperWrapper.prop('children')).toBe(children);
//       expect(popperWrapper.prop('onClickOutside')).toBe(onClickOutside);
//       expect(popperWrapper.prop('modifiers')).toBe(modifiers);
//       expect(popperWrapper.prop('placement')).toBe(placement);
//       expect(popperWrapper.prop('shadow')).toBe(shadow);
//       expect(popperWrapper.prop('targetMinHeight')).toBe(targetMinHeight);
//       expect(popperWrapper.prop('targetMinWidth')).toBe(targetMinWidth);
//     });
//   });
//
//   describe('when not open', () => {
//     it('does not render Popper', () => {
//       const wrapper = shallow(<Popup {...props} />);
//       expect(wrapper.find(EnhancedPopper).length).toBe(0);
//     });
//   });
// });
