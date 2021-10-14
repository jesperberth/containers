# Azure Container

az group create --name pacman --location northeurope

az container create --resource-group pacman --name pacmancontainer --image jesperberth/pacman:latest --dns-name-label pacman --ports 80

az container show --resource-group pacman --name pacmancontainer --query "{FQDN:ipAddress.fqdn,ProvisioningState:provisioningState}" --out table

In browser

c:

cd pacman

mspac