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
// import {
//   PopupChildrenFunction,
//   UncontrolledPopup,
//   UncontrolledPopupProps,
// } from '../UncontrolledPopup';
//
// describe('UncontrolledPopup', () => {
//   const props: UncontrolledPopupProps = {
//     children: <div>children</div>,
//     placement: 'bottom-end',
//     Popper,
//     referenceChildren: <div>reference</div>,
//   };
//
//   it('is rendered', () => {
//     const wrapper = shallow(<UncontrolledPopup {...props} />);
//     expect(wrapper.length).toBe(1);
//   });
//
//   it('toggles open', () => {
//     const wrapper = shallow(<UncontrolledPopup {...props} />);
//     const onOpenFunc: () => void = wrapper.dive().prop('onOpen');
//     const onClickOutsideFunc: () => void = wrapper
//       .dive()
//       .prop('onClickOutside');
//     onOpenFunc();
//     expect(wrapper.state()).toEqual({ open: true });
//     expect(wrapper.dive().prop('open')).toEqual(true);
//     onClickOutsideFunc();
//     expect(wrapper.state()).toEqual({ open: false });
//     expect(wrapper.dive().prop('open')).toEqual(false);
//   });
//
//   it('passes props', () => {
//     const wrapper = shallow(<UncontrolledPopup {...props} />);
//     expect(wrapper.prop('placement')).toBe(props.placement);
//     expect(wrapper.prop('referenceChildren')).toBe(props.referenceChildren);
//     expect(wrapper.prop('Popper')).toBe(props.Popper);
//   });
//
//   it('passes optional props', () => {
//     const backgroundColor = 'backgroundColor';
//     const targetMinHeight = 3;
//     const targetMinWidth = 1;
//     const shadow = false;
//     const modifiers = {
//       inner: { enabled: true },
//     };
//     const wrapper = shallow(
//       <UncontrolledPopup
//         {...props}
//         backgroundColor={backgroundColor}
//         modifiers={modifiers}
//         shadow={shadow}
//         targetMinHeight={targetMinHeight}
//         targetMinWidth={targetMinWidth}
//       />,
//     );
//     expect(wrapper.prop('backgroundColor')).toBe(backgroundColor);
//     expect(wrapper.prop('modifiers')).toBe(modifiers);
//     expect(wrapper.prop('shadow')).toBe(shadow);
//     expect(wrapper.prop('targetMinHeight')).toBe(targetMinHeight);
//     expect(wrapper.prop('targetMinWidth')).toBe(targetMinWidth);
//   });
//
//   describe('when children is a func', () => {
//     it('adds prop onClose', () => {
//       const children: PopupChildrenFunction = ({ onClose }) => (
//         <div onClick={onClose}>children</div>
//       );
//       const wrapper = shallow(
//         <UncontrolledPopup {...props}>{children}</UncontrolledPopup>,
//       );
//       const onOpenFunc: () => void = wrapper.dive().prop('onOpen');
//       onOpenFunc();
//       expect(wrapper.state()).toEqual({ open: true });
//       wrapper
//         .dive()
//         .children()
//         .simulate('click');
//       expect(wrapper.state()).toEqual({ open: false });
//     });
//   });
//
//   describe('when children is not a func', () => {
//     it('passes children', () => {
//       const children = 'children';
//       const wrapper = shallow(
//         <UncontrolledPopup {...props}>{children}</UncontrolledPopup>,
//       );
//       expect(wrapper.prop('children')).toBe(children);
//     });
//   });
// });
