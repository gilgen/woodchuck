Woodchuck
=========

A chrome extension purpose built to bring information from Precision Nutrition
into Gmail.

## squawker.js
The main process listening on the host page that pings back to the extension
when events happen. This gets inected directly into Gmail and is what sends
messages to the listener. It needs to be injected directly because the
gmail JS library that's used needs access to Gmail's JS which is not 
available unless it's directly injected.

## woodchuck.js
Bootstraps the extension.

### woodchuck/authentication.js
Authentication related functionality.

### woodchuck/injector.js
Injects required javascript into the host page (Gmail).

### woodchuck/viewport.js
The extension's front end which takes care of injecting into the host page's
DOM and keeping things in sync.

### woodchuck/listener.js
Methods to listen for events from the squawker and dispatches them appropriately

