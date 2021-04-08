### <h3 class="doc-head">Automated Method:</h3>
Thanks to @zarthan there is now a new way to enable Auto Server Updates without adding me as a collaborator on Heroku.

I appologize that this does not have any photos for the steps.

1. Under GitHub goto [https://github.com/tonesto7/echo-speaks-server](https://github.com/tonesto7/echo-speaks-server)
2. Sign into your Github account.
3. Click on Fork in towards the top right of the page.
4. This will create a copy under your github.com account.
5. Follow the setup and configuration of the Pull app from here: [https://github.com/wei/pull](https://github.com/wei/pull).
6. Once the pull app is configured head over to [https://dashboard.heroku.com](https://dashboard.heroku.com).
7. Click on your **```echo-speaks-xxxxxxxxx```** instance(s)
8. Click on Deploy under Deployment method click GitHub and make sure you sign in to Github.
9. Under repo-name text box enter **```echo-speaks-server```** and press Search.
10. You should see your fork of the echo-speaks-server listed in the results, so click **```Connect```** button to the right of it.
11. The screen should reload once or twice and then you can see Automatic and Manual deploys.
12. Under Automatic deploy section make sure **```master```** branch is selected and **```Wait for CI to pass before deploy```** is checked.
13. Click on **```Enable Automatic Deploys```** and if you are already running the latest server you are done.  If not move on to Step 13.
14. To upgrade your current server scroll down to the Manual deploy section and make sure **```master```** branch is selected and press **```Deploy Branch```** and watch the little window below read out the progress of deployment.
15. Now your done.

### <h3 class="doc-head">Manual Method:</h3>
In order to update your existing server it will actually need to be deleted from Heroku and reployed.
This process is very simple just follow the removal process to get started.

[Server Redeploy](/echo-speaks-docs/support/server_removal)
