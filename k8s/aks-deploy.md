# Deploy Azure Kubernetes Service

az group create --name AKSTest --location northeurope

az ad sp create-for-rbac --skip-assignment --name AKSClusterServicePrincipal

az aks create --resource-group AKSTest --name AKSCluster \
--service-principal <appid> \
--client-secret <password> \
--kubernetes-version 1.20.9 \
--node-count 3 \
--enable-addons monitoring,http_application_routing \
--generate-ssh-keys \
--vm-set-type VirtualMachineScaleSets \
--load-balancer-sku standard \
--enable-cluster-autoscaler \
--min-count 1 \
--max-count 5

az aks get-credentials --resource-group AKSTest --name AKSCluster
