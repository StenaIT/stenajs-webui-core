# How to contribute

## Process

### 1) Create feature branch

I.e. `feature/dropdown`

### 2) Create your component in the appropriate directory

I.e. a dropdown component would go into `src/components/ui/form/NiceDrowndown.ts`

All components are implemented in Typescript.

#### Themes

If the component uses a theme, add its type definition in the same folder: `NiceDropdownTheme.ts`
Also add a default theme for the component in the same file.
Add them to `src/themes/Theme.ts` and `src/themes/DefaultTheme.ts`.

#### Props

If there are props used to style the component (spacing, colors, font sizes, etc), make sure that they are optional and that the component falls back to the theme if they are ommited.

### 3) Add JSDocs to your component

Add a comment above each prop in the interface for the props.

### 4) Add stories

Make a separate JS file for your component.

### 5) Add unit tests

Make sure that all conditional parts of the component are tested.

```
<Clickable onClick={disabled ? undefined : onToggle}>
```

Make sure that there are tests for disabled=true and disabled=false.

### 6) Verifying in browser

The component should work and look as expected in:
Chrome, Firefox, Edge, Safari.

### 7) Create a pull request in Github

## Enhancers

### Enhancers for external libs

If you are creating an enhancer for an external lib, make sure to document which version of the library which it has been tested with.
