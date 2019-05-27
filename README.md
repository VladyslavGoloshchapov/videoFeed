# videoFeed
Some notes about implementation:

1. this is quite a simple project, so I could avoid using such libraries and tools like:
- typescript
- redux
- redux-logger
- prettier
- fetchMiddleware - my own tool which is more useful than redux-thunk for AJAX

Also I split views in redux containers and components as I would in larger scale app, even though
I could avoid it and make things simpler for this particular case.

But those are necessary parts in my opinion for a good quality apps, so I used them, since this
task is about to show how I develop in real life.

2. I did not write JSDOC because I use typescript which makes params and return type self-explanatory
3. I also used redux to power one way data flow which I like a lot. This increased number of files and lines of code (and maybe is an overkill for a small app), but still I love it too much.
4. I didn't use PropTypes only because I didn't have enough time
5. didn`t write unit tests, because of lack of time
6. I did not suply node_modules folders, so please run "npm install" in server folder and client (only if you wish to run app in dev mode).

Options on how to use the app:
1) run "node app.js" in videoServer directory - open http://localhost:8082 - you will see the app in a production build mode (optimized build)
2) run "node app.js" in videoServer directory. run "npm run start" in videofeed directory. Open http://localhost:3000 - you will see the app in dev mode
