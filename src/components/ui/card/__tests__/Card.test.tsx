import { shallow } from 'enzyme';
import * as React from 'react';
import { Card, CardAttributes, CardProps } from '../Card';
import { Spacing, Indent } from '../../layout';
import { cardWrapperExpandedStyle, cardWrapperStyle } from '../CardStyle';
import { CardContent } from '../CardContent';
import { CardHeaderButton } from '../CardHeaderButton';
import { CardHeader } from '../CardHeader';
import { CardHeaderNotice } from '../CardHeaderNotice';

describe('Card', () => {
  const config = {
    paddingBase: 20,
    indentProp: 'margin',
    spacingProp: 'padding',
  };
  const defaultProps: CardProps = {
    attributes: {} as CardAttributes,
    isExpanded: false,
    onClick: () => false,
  };
  let props: any = {};

  describe('is expanded', () => {
    it('regular', () => {
      props = {
        ...Object.assign({}, defaultProps),
        isExpanded: true,
      };
      const wrapper = shallow(<Card {...props} />);

      expect(wrapper.prop('className')).toContain(cardWrapperStyle);
      expect(wrapper.prop('className')).toContain(cardWrapperExpandedStyle);
    });
    it('trick', () => {
      props = {
        ...Object.assign({}, defaultProps),
      };
      const wrapper = shallow(<Card {...props} />);
      expect(wrapper.prop('className')).toContain(cardWrapperStyle);
      expect(wrapper.prop('className')).not.toContain(cardWrapperExpandedStyle);
    });
    it('check button', () => {
      props = {
        ...Object.assign({}, defaultProps),
        isExpanded: true,
        attributes: {
          hasButton: true,
          btnLabelExpanded: 'Close',
        },
      };
      const wrapper = shallow(<Card {...props} />);

      expect(
        wrapper
          .find(CardHeader)
          .dive()
          .find(CardHeaderButton).length,
      ).toEqual(1);
      expect(
        wrapper
          .find(CardHeader)
          .dive()
          .find(CardHeaderButton)
          .prop('label'),
      ).toBe('Close');
    });
    it('!has button', () => {
      props = {
        ...Object.assign({}, defaultProps),
        isExpanded: true,
        attributes: {
          hasButton: false,
        },
      };
      const wrapper = shallow(<Card {...props} />);

      expect(
        wrapper
          .find(CardHeader)
          .dive()
          .find(CardHeaderButton).length,
      ).toEqual(0);
    });
  });
  describe('more button', () => {
    it('1 - has button', () => {
      props = {
        ...Object.assign({}, defaultProps),
        isExpanded: true,
        attributes: {
          hasButton: true,
        },
      };
      const wrapper = shallow(<Card {...props} />);

      expect(
        wrapper
          .find(CardHeader)
          .dive()
          .find(CardHeaderButton).length,
      ).toEqual(1);
    });
    it('0 - !has button', () => {
      props = {
        ...Object.assign({}, defaultProps),
        isExpanded: true,
        attributes: {
          hasButton: false,
        },
      };
      const wrapper = shallow(<Card {...props} />);

      expect(
        wrapper
          .find(CardHeader)
          .dive()
          .find(CardHeaderButton).length,
      ).toEqual(0);
    });
  });
  describe('padding', () => {
    it('no padding', () => {
      props = {
        ...Object.assign({}, defaultProps),
        attributes: {
          paddingVertical: 0,
          paddingHorizontal: 0,
        },
      };
      const wrapper = shallow(<Card {...props} />);

      expect(
        wrapper
          .find(CardContent)
          .dive()
          .find('.CardContentWrapper')
          .find(Spacing)
          .prop('num'),
      ).toEqual(0);
      expect(
        wrapper
          .find(CardContent)
          .dive()
          .find('.CardContentWrapper')
          .find(Indent)
          .prop('num'),
      ).toEqual(0);

      let style: any = shallow(<Card {...props} />)
        .find(CardContent)
        .dive()
        .find('.CardContentWrapper')
        .find(Spacing)
        .dive()
        .html();
      expect(style).toContain(
        `<div style="${config.spacingProp}-bottom:${config.paddingBase * 0}px;${
          config.spacingProp
        }-top:${config.paddingBase * 0}px">`,
      );
      style = shallow(<Card {...props} />)
        .find(CardContent)
        .dive()
        .find('.CardContentWrapper')
        .find(Indent)
        .dive()
        .html();
      expect(style).toContain(
        `<div style="${config.indentProp}-left:${config.paddingBase * 0}px;${
          config.indentProp
        }-right:${config.paddingBase * 0}px">`,
      );
    });
    it('no padding horizontal', () => {
      props = {
        ...Object.assign({}, defaultProps),
        attributes: {
          paddingHorizontal: 0,
        },
      };
      const wrapper = shallow(<Card {...props} />);

      expect(
        wrapper
          .find(CardContent)
          .dive()
          .find('.CardContentWrapper')
          .find(Spacing)
          .prop('num'),
      ).toEqual(2);
      expect(
        wrapper
          .find(CardContent)
          .dive()
          .find('.CardContentWrapper')
          .find(Indent)
          .prop('num'),
      ).toEqual(0);

      let style: any = shallow(<Card {...props} />)
        .find(CardContent)
        .dive()
        .find('.CardContentWrapper')
        .find(Spacing)
        .dive()
        .html();
      expect(style).toContain(
        `<div style="${config.spacingProp}-bottom:${config.paddingBase * 1}px;${
          config.spacingProp
        }-top:${config.paddingBase * 1}px">`,
      );
      style = shallow(<Card {...props} />)
        .find(CardContent)
        .dive()
        .find('.CardContentWrapper')
        .find(Indent)
        .dive()
        .html();
      expect(style).toContain(
        `<div style="${config.indentProp}-left:${config.paddingBase * 0}px;${
          config.indentProp
        }-right:${config.paddingBase * 0}px">`,
      );
    });
    it('no padding vertical', () => {
      props = {
        ...Object.assign({}, defaultProps),
        attributes: {
          paddingVertical: 0,
        },
      };
      const wrapper = shallow(<Card {...props} />);

      expect(
        wrapper
          .find(CardContent)
          .dive()
          .find('.CardContentWrapper')
          .find(Spacing)
          .prop('num'),
      ).toEqual(0);
      expect(
        wrapper
          .find(CardContent)
          .dive()
          .find('.CardContentWrapper')
          .find(Indent)
          .prop('num'),
      ).toEqual(2);

      let style: any = shallow(<Card {...props} />)
        .find(CardContent)
        .dive()
        .find('.CardContentWrapper')
        .find(Spacing)
        .dive()
        .html();
      expect(style).toContain(
        `<div style="${config.spacingProp}-bottom:${config.paddingBase * 0}px;${
          config.spacingProp
        }-top:${config.paddingBase * 0}px">`,
      );
      style = shallow(<Card {...props} />)
        .find(CardContent)
        .dive()
        .find('.CardContentWrapper')
        .find(Indent)
        .dive()
        .html();
      expect(style).toContain(
        `<div style="${config.indentProp}-left:${config.paddingBase * 1}px;${
          config.indentProp
        }-right:${config.paddingBase * 1}px">`,
      );
    });
    it('standard padding', () => {
      props = {
        ...Object.assign({}, defaultProps),
      };
      const wrapper = shallow(<Card {...props} />);

      expect(
        wrapper
          .find(CardContent)
          .dive()
          .find('.CardContentWrapper')
          .find(Spacing)
          .prop('num'),
      ).toEqual(2);
      expect(
        wrapper
          .find(CardContent)
          .dive()
          .find('.CardContentWrapper')
          .find(Indent)
          .prop('num'),
      ).toEqual(2);

      let style: any = shallow(<Card {...props} />)
        .find(CardContent)
        .dive()
        .find('.CardContentWrapper')
        .find(Spacing)
        .dive()
        .html();
      expect(style).toContain(
        `<div style="${config.spacingProp}-bottom:${config.paddingBase * 1}px;${
          config.spacingProp
        }-top:${config.paddingBase * 1}px">`,
      );
      style = shallow(<Card {...props} />)
        .find(CardContent)
        .dive()
        .find('.CardContentWrapper')
        .find(Indent)
        .dive()
        .html();
      expect(style).toContain(
        `<div style="${config.indentProp}-left:${config.paddingBase * 1}px;${
          config.indentProp
        }-right:${config.paddingBase * 1}px">`,
      );
    });
  });
  describe('notice', () => {
    it('1 - has notice', () => {
      props = {
        ...Object.assign({}, defaultProps),
        isExpanded: true,
        title: 'Test',
        attributes: {
          notice: {
            color: 'blue',
            icon: 'fire',
            text: 'Text',
          },
        },
      };
      const wrapper = shallow(<Card {...props} />);

      expect(
        wrapper
          .find(CardHeader)
          .dive()
          .find(CardHeaderNotice).length,
      ).toEqual(1);
    });
    it('0 - !has notice', () => {
      props = {
        ...Object.assign({}, defaultProps),
        isExpanded: true,
        attributes: {},
      };
      const wrapper = shallow(<Card {...props} />);

      expect(
        wrapper
          .find(CardHeader)
          .dive()
          .find(CardHeaderNotice).length,
      ).toEqual(0);
    });
  });
});
