This repo demonstrates how you can deploy multiple apps (with local dependencies) on Heroku using yarn workspaces (i.e. Node monorepo on Heroku).

To see it in action:
1. Create Heroku apps for main and main-two
1. Add the [Heroku multi-procfile](https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-multi-procfile) and Node.JS buildpacks to each app
1. In Heroku (or using the Heroku CLI), add config vars specifying the location, relative to the project root, of the Procfiles
    - `PROCFILE=main/Procfile`
    - `PROCFILE=main-two/Procfile`
1. Add your git remotes
    - `git remote add heroku <git URL>`
    - `git remote add heroku2 <git URL>`
1. Push to deploy
    - `git push heroku master`
    - `git push heroku2 master`
1. Make sure your dynos are running in Heroku (Resources tab)
1. Check out the logs
    - `heroku --app <Heroku app name> logs --tail`
