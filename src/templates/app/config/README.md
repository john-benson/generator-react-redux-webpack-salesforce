# Config

This folder is concerned with setting up components that are used through the
applications. There is no real standard for writing these except each component
to be configured should live in a single folder, with an index.js file exporting
a configuration function.


Important folders:

## root-reducer

Responsible for the building the combined reducer for the application.
All reducer should be referenced and combined in here.

## configure-store

Responsible for configuring the store with the rootReducer. Can be called
multiple times but only one instance is used by the application (generated
in the src/index file)
