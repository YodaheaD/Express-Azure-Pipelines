# Express API with Azure Pipelines
- By: Yoda Daniel

## Details:

- Building and deploying an Express API in Azure Pipelines.


## Get Started 

1) clone repo and install dep.
```
git clone https://github.com/YodaheaD/Azure-Pipeline.git

npm install
```

2) Build TS 

```
npm run build
```

3) Move on to Azure Setup


### Upload code to Azure Repo

- Connect your Azure Repo to the local codebase.

![Images3](/images/Azure-Build-App.png)

### Create a Web App Service in Azure and set up Connection between Pipeline and App Service
- Create a Web App service.
  
- Then in Devops, go to Project Settings > Piple:Service Connection > New Service Connection > Use Azure Resource Manager
  
- Once filled out and validated, get the connection name used and make the "azureSubscription" in the YML file that value.
  
### Create a new pipeline

![Images3](/images/DeployToApp.png)


### Visiting the app via web browser

![Images1](/images/Proof-BasePage.png)


 
