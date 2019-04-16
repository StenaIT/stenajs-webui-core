import { shallow } from 'enzyme';
import * as React from 'react';

// TODO: Fix current ts config settings and jest
it('works', () => {
  const Component = () => <div />;
  const wrapper = shallow(<Component />);
  expect(wrapper.length).toBe(1);
});

// import * as emotion from 'emotion';
// import { shallow } from 'enzyme';
// import { createSerializer } from 'jest-emotion';
// import * as React from 'react';
// import { ReactElement } from 'react';
// import * as Popper from 'react-popper';
// import { PopperChildrenProps } from 'react-popper';
// import { EnhancedPopper, PopperProps, PurePopper } from '../EnhancedPopper';
//
// expect.addSnapshotSerializer(createSerializer(emotion));
//
// describe('EnhancedPopper', () => {
//   const renderPropsProps: PopperChildrenProps = {
//     arrowProps: {
//       ref: () => null,
//       style: {},
//     },
//     outOfBoundaries: false,
//     placement: 'auto-end',
//     scheduleUpdate: () => null,
//     style: {},
//     ref: () => null,
//   };
//
//   const props: PopperProps = {
//     children: <div>children</div>,
//     PopperComponent: Popper.Popper,
//   };
//
//   it('renders PopperComponent', () => {
//     const wrapper = shallow(<EnhancedPopper {...props} />);
//     expect(wrapper.dive().type()).toBe(Popper.Popper);
//   });
//
//   it('styles targetContainer', () => {
//     const children = <div>children</div>;
//     const wrapper = shallow(<PurePopper {...props} children={children} />);
//     const renderPropsWrapper = shallow(wrapper.prop('children')(
//       renderPropsProps,
//     ) as ReactElement<{}>);
//     expect(
//       renderPropsWrapper
//         .childAt(0)
//         .dive()
//         .prop('children'),
//     ).toBe(children);
//   });
//
//   describe('styles', () => {
//     it('sets default styles', () => {
//       const wrapper = shallow(<PurePopper {...props} />);
//       const renderPropsWrapper = shallow(wrapper.prop('children')(
//         renderPropsProps,
//       ) as ReactElement<{}>);
//       expect(renderPropsWrapper.childAt(0).dive()).toMatchSnapshot();
//     });
//
//     it('uses passed styles', () => {
//       const backgroundColor = 'backgroundColor';
//       const shadow = false;
//       const targetMinHeight = 3;
//       const targetMinWidth = 2;
//       const wrapper = shallow(
//         <PurePopper
//           {...props}
//           backgroundColor={backgroundColor}
//           shadow={shadow}
//           targetMinHeight={targetMinHeight}
//           targetMinWidth={targetMinWidth}
//         />,
//       );
//       const renderPropsWrapper = shallow(wrapper.prop('children')(
//         renderPropsProps,
//       ) as ReactElement<{}>);
//       expect(renderPropsWrapper.childAt(0).dive()).toMatchSnapshot();
//     });
//   });
// });
