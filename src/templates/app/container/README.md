# Container components
Container components are defined by the following rules:

1. Are concerned with how things work.
2. May contain both presentational and container components** inside but usually don’t have any DOM markup of their own except for some wrapping divs, and never have any styles.
3. Provide the data and behavior to presentational or other container components.
4. Call Flux actions and provide these as callbacks to dumb components.
5. Are often stateful, as they tend to serve as data sources.
6. Are usually generated using higher order components such as connect()

*Courtesy of Dan Abramov (@dan_abramov) in his Medium article here: https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.vx4hxv313*

Other then this, each container component should exist in a folder, with the
index.js file exporting the React component associated with the folder. The reducers,
actions and schemas to define the data for the component should also live alongside
the component. 
