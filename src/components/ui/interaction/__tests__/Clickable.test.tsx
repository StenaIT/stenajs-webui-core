import { shallow } from 'enzyme';
import * as React from 'react';
import { ClickableComponent, ClickableInnerProps } from '../Clickable';

describe('Clickable', () => {
  const props: ClickableInnerProps = {
    onMouseDown: jest.fn(),
    onMouseUp: jest.fn(),
    onMouseOut: jest.fn(),
    mouseIsDown: true,
  };

  describe('opacityOnHover', () => {
    describe('when opacityOnHover is true', () => {
      it('adds className clickable', () => {
        const wrapper = shallow(
          <ClickableComponent {...props} opacityOnHover />,
        );
        expect(wrapper.find('HoverStyledDiv').prop('opacityOnHover')).toBe(
          true,
        );
      });
    });

    describe('when opacityOnHover is false', () => {
      it('does not set className', () => {
        const wrapper = shallow(<ClickableComponent {...props} />);
        expect(wrapper.find('HoverStyledDiv').prop('opacityOnHover')).toBe(
          undefined,
        );
      });
    });
  });

  describe('opacity', () => {
    describe('when mouse is not down', () => {
      it('does not have opacity', () => {
        const wrapper = shallow(
          <ClickableComponent {...props} mouseIsDown={false} />,
        );
        expect(wrapper.find('HoverStyledDiv').prop('style')!.opacity).toBe(
          undefined,
        );
      });
    });
    describe('when mouseIsDown', () => {
      describe('and disableOpacityOnClick is false', () => {
        it('sets opacity to 0.5', () => {
          const wrapper = shallow(
            <ClickableComponent {...props} mouseIsDown={true} />,
          );
          expect(wrapper.find('HoverStyledDiv').prop('style')!.opacity).toBe(
            0.5,
          );
        });
      });
      describe('and disableOpacityOnClick is true', () => {
        it('sets opacity to undefined', () => {
          const wrapper = shallow(
            <ClickableComponent
              {...props}
              mouseIsDown={true}
              disableOpacityOnClick
            />,
          );
          expect(wrapper.find('HoverStyledDiv').prop('style')!.opacity).toBe(
            undefined,
          );
        });
      });
    });
  });
  describe('cursor', () => {
    describe('when onClick is set', () => {
      it('sets cursor to pointer', () => {
        const wrapper = shallow(
          <ClickableComponent {...props} onClick={jest.fn()} />,
        );
        expect(wrapper.find('HoverStyledDiv').prop('style')!.cursor).toBe(
          'pointer',
        );
      });
    });

    describe('when onDblClick is set', () => {
      it('sets cursor to pointer', () => {
        const wrapper = shallow(
          <ClickableComponent {...props} onDblClick={jest.fn()} />,
        );
        expect(wrapper.find('HoverStyledDiv').prop('style')!.cursor).toBe(
          'pointer',
        );
      });
    });

    describe('when disablePointer is set', () => {
      it('sets cursor to undefined regardless of callbacks', () => {
        const wrapper = shallow(
          <ClickableComponent
            {...props}
            onClick={jest.fn()}
            onDblClick={jest.fn()}
            disablePointer
          />,
        );
        expect(wrapper.find('HoverStyledDiv').prop('style')!.cursor).toBe(
          undefined,
        );
      });
    });
  });

  describe('mouse events', () => {
    describe('when onClick is set', () => {
      it('calls onMouseDown', () => {
        const onMouseDown = jest.fn();
        const wrapper = shallow(
          <ClickableComponent
            {...props}
            onClick={jest.fn()}
            onMouseDown={onMouseDown}
          />,
        );
        wrapper.find('HoverStyledDiv').simulate('mouseDown');
        expect(onMouseDown).toHaveBeenCalled();
      });

      it('calls onMouseUp', () => {
        const onMouseUp = jest.fn();
        const wrapper = shallow(
          <ClickableComponent
            {...props}
            onClick={jest.fn()}
            onMouseUp={onMouseUp}
          />,
        );
        wrapper.find('HoverStyledDiv').simulate('mouseUp');
        expect(onMouseUp).toHaveBeenCalled();
      });

      it('calls onMouseOut', () => {
        const onMouseOut = jest.fn();
        const wrapper = shallow(
          <ClickableComponent
            {...props}
            onClick={jest.fn()}
            onMouseOut={onMouseOut}
          />,
        );
        wrapper.find('HoverStyledDiv').simulate('mouseOut');
        expect(onMouseOut).toHaveBeenCalled();
      });
    });

    describe('when onClick is not set', () => {
      describe('when onDblClick is set', () => {
        it('calls onMouseDown', () => {
          const onMouseDown = jest.fn();
          const wrapper = shallow(
            <ClickableComponent
              {...props}
              onDblClick={jest.fn()}
              onMouseDown={onMouseDown}
            />,
          );
          wrapper.find('HoverStyledDiv').simulate('mouseDown');
          expect(onMouseDown).toHaveBeenCalled();
        });

        it('calls onMouseUp', () => {
          const onMouseUp = jest.fn();
          const wrapper = shallow(
            <ClickableComponent
              {...props}
              onDblClick={jest.fn()}
              onMouseUp={onMouseUp}
            />,
          );
          wrapper.find('HoverStyledDiv').simulate('mouseUp');
          expect(onMouseUp).toHaveBeenCalled();
        });

        it('calls onMouseOut', () => {
          const onMouseOut = jest.fn();
          const wrapper = shallow(
            <ClickableComponent
              {...props}
              onDblClick={jest.fn()}
              onMouseOut={onMouseOut}
            />,
          );
          wrapper.find('HoverStyledDiv').simulate('mouseOut');
          expect(onMouseOut).toHaveBeenCalled();
        });
      });

      describe('when onDblClick is not set', () => {
        it('does not call onMouseDown', () => {
          const onMouseDown = jest.fn();
          const wrapper = shallow(
            <ClickableComponent {...props} onMouseDown={onMouseDown} />,
          );
          wrapper.find('HoverStyledDiv').simulate('mouseDown');
          expect(onMouseDown).not.toHaveBeenCalled();
        });

        it('does not call onMouseUp', () => {
          const onMouseUp = jest.fn();
          const wrapper = shallow(
            <ClickableComponent {...props} onMouseUp={onMouseUp} />,
          );
          wrapper.find('HoverStyledDiv').simulate('mouseUp');
          expect(onMouseUp).not.toHaveBeenCalled();
        });

        it('does not call onMouseOut', () => {
          const onMouseOut = jest.fn();
          const wrapper = shallow(
            <ClickableComponent {...props} onMouseOut={onMouseOut} />,
          );
          wrapper.find('HoverStyledDiv').simulate('mouseOut');
          expect(onMouseOut).not.toHaveBeenCalled();
        });
      });
    });
  });
});
