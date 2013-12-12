Woodchuck
=========

A chrome extension purpose built to bring information from Precision Nutrition
into Gmail.

## injector.js
Injects required javascript into the host page (Gmail).

## squawker.js
The main process listening on the host page that pings back to the extension
when events happen. Some events we might want to listen to are:

  - Message switched
  - New email created
  - Address added to the to/cc/bcc fields

## viewport.js
The extension's front end which takes care of injecting into the host page's
DOM and keeping things in sync.

## listener.js
The file which listens for events from the squawker and dispatches them to
the viewport

# Unanswered Questions
Are we going to have to have two way communication? Right now it's one way
from the squawker to the listener (Gmail -> Extension).
