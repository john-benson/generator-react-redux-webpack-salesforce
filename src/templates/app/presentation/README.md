# Presentation components
Presentation components are defined by the following rules:

1. Are concerned with how things look.
2. May contain both presentational and container components** inside, and usually have some DOM markup and styles of their own.
3. Often allow containment via this.props.children.
4. Have no dependencies on the rest of the app, such as Flux actions or stores.
5. Don’t specify how the data is loaded or mutated.
6. Receive data and callbacks exclusively via props.
7. Rarely have their own state (when they do, it’s UI state rather than data).
8. Are written as functional components unless they need state, lifecycle hooks, or performance optimizations.

*Courtesy of Dan Abramov (@dan_abramov) in his Medium article here: https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.vx4hxv313*

Other then this, each presentation component should exist in a folder, with the
index.js file exporting the React component associated with the folder. If you
are wondering if you should be writing a presentation, or a container component,
write it as a presentation component. You'll notice very quickly if you need to
make it a container component.
